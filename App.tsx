
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import SearchForm from './components/SearchForm';
import BusCard from './components/BusCard';
import { BUS_DATA } from './constants';
import { SearchParams, Bus } from './types';
import { getTravelTips } from './geminiService';
// Added missing Clock and User icons to imports to resolve errors on lines 245 and 252
import { MapPin, Info, Sparkles, Filter, ChevronDown, RefreshCcw, Clock, User } from 'lucide-react';

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Bus[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentParams, setCurrentParams] = useState<SearchParams | null>(null);
  const [travelTips, setTravelTips] = useState<{ weather: string; packing: string; food: string } | null>(null);

  const handleSearch = async (params: SearchParams) => {
    setIsSearching(true);
    setHasSearched(true);
    setCurrentParams(params);
    
    // Simulate API delay
    await new Promise(r => setTimeout(r, 1200));
    setSearchResults(BUS_DATA);
    setIsSearching(false);

    // Get AI Tips
    const tips = await getTravelTips(params.from, params.to);
    setTravelTips(tips);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-rb-red h-48 md:h-80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-12 md:pt-24 relative z-10 text-center">
          <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            India's No. 1 Online Bus Ticket Booking Site
          </h1>
          <p className="text-white/80 text-sm md:text-lg">
            Compare and book bus tickets from over 2500+ bus operators
          </p>
        </div>
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </div>

      <SearchForm onSearch={handleSearch} />

      <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-12">
        {!hasSearched ? (
          <section>
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">Popular Routes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { from: 'Delhi', to: 'Manali', price: 950 },
                { from: 'Bangalore', to: 'Chennai', price: 600 },
                { from: 'Mumbai', to: 'Goa', price: 1200 },
                { from: 'Pune', to: 'Nagpur', price: 800 },
                { from: 'Hyderabad', to: 'Vijayawada', price: 450 },
                { from: 'Ahmedabad', to: 'Mumbai', price: 750 },
              ].map((route, i) => (
                <div 
                  key={i} 
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  onClick={() => handleSearch({ from: route.from, to: route.to, date: new Date().toISOString().split('T')[0] })}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase">Route</p>
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-red-500 transition-colors">
                        {route.from} to {route.to}
                      </h4>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-400 uppercase">From</p>
                      <p className="text-xl font-bold text-red-500">₹{route.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Why book with redBus?</h3>
                <p className="text-blue-700">Get the best prices, secure payments, and 24/7 customer support for all your bus journeys across India.</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm">
                      <RefreshCcw size={20} />
                    </div>
                    <span className="text-sm font-bold text-blue-900">Easy Refunds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm">
                      <Filter size={20} />
                    </div>
                    <span className="text-sm font-bold text-blue-900">Filter by Operator</span>
                  </div>
                </div>
              </div>
              <img src="https://picsum.photos/seed/travel/400/200" alt="Travel" className="rounded-xl shadow-lg w-full md:w-1/3" />
            </div>
          </section>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="w-full md:w-64 shrink-0">
              <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-20">
                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <Filter size={18} className="text-gray-400" />
                    FILTERS
                  </h3>
                  <button className="text-xs text-blue-500 font-bold">RESET</button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Departure Time</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {['Before 6am', '6am - 12pm', '12pm - 6pm', 'After 6pm'].map(t => (
                        <button key={t} className="text-[10px] py-2 border rounded font-semibold text-gray-600 hover:bg-gray-50">{t}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Bus Types</h4>
                    <div className="space-y-2">
                      {['AC', 'Non AC', 'Sleeper', 'Seater'].map(t => (
                        <label key={t} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                          <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
                          <span>{t}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">Arrival Time</h4>
                    <div className="grid grid-cols-2 gap-2">
                       {['Before 6am', '6am - 12pm', '12pm - 6pm', 'After 6pm'].map(t => (
                        <button key={t} className="text-[10px] py-2 border rounded font-semibold text-gray-600 hover:bg-gray-50">{t}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Results Section */}
            <div className="flex-1">
              {isSearching ? (
                <div className="flex flex-col items-center justify-center py-24">
                  <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-xl font-bold text-gray-800">Finding the best buses for you...</p>
                  <p className="text-gray-500 mt-2">Connecting to 2000+ operators</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg border shadow-sm">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {currentParams?.from} to {currentParams?.to}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {searchResults.length} Buses found • {new Date(currentParams?.date || '').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', weekday: 'short' })}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold cursor-pointer border px-4 py-2 rounded hover:bg-gray-50">
                      Sort by: <span className="text-red-500">Relevance</span> <ChevronDown size={16} />
                    </div>
                  </div>

                  {/* AI Travel Tips */}
                  {travelTips && (
                    <div className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-4 text-red-600">
                        <Sparkles size={20} />
                        <h3 className="font-bold text-lg">AI Travel Buddy Suggestions</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/60 p-4 rounded-lg border border-red-100/50">
                          <p className="text-xs font-bold text-red-400 uppercase mb-1">Weather</p>
                          <p className="text-sm text-gray-700 leading-relaxed">{travelTips.weather}</p>
                        </div>
                        <div className="bg-white/60 p-4 rounded-lg border border-red-100/50">
                          <p className="text-xs font-bold text-red-400 uppercase mb-1">Packing Tip</p>
                          <p className="text-sm text-gray-700 leading-relaxed">{travelTips.packing}</p>
                        </div>
                        <div className="bg-white/60 p-4 rounded-lg border border-red-100/50">
                          <p className="text-xs font-bold text-red-400 uppercase mb-1">Local Treat</p>
                          <p className="text-sm text-gray-700 leading-relaxed">{travelTips.food}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {searchResults.map(bus => (
                    <BusCard key={bus.id} bus={bus} />
                  ))}
                  
                  {searchResults.length === 0 && (
                    <div className="bg-white rounded-lg border p-12 text-center">
                      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin size={40} className="text-gray-300" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">No Buses Found</h3>
                      <p className="text-gray-500 mt-2">We couldn't find any buses for this route on the selected date.</p>
                      <button 
                        onClick={() => setHasSearched(false)}
                        className="mt-6 text-red-500 font-bold hover:underline"
                      >
                        Try searching for another date or route
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Trust Badges */}
      {!isSearching && (
        <section className="bg-white py-16 border-y mt-20">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-800">100% Secure Payments</h4>
              <p className="text-sm text-gray-500">Your transactions are safe with us</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-800">24/7 Support</h4>
              <p className="text-sm text-gray-500">We're here to help anytime</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-4">
                <User className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-800">25M+ Customers</h4>
              <p className="text-sm text-gray-500">Trusted by travelers globally</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-4">
                <RefreshCcw className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-800">Easy Cancellations</h4>
              <p className="text-sm text-gray-500">Fast and hassle-free refunds</p>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default App;

// Helper icons missing from lucide-react in current scope if any
const ShieldCheck = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
