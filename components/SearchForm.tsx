
import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRightLeft } from 'lucide-react';
import { CITIES } from '../constants';
import { SearchParams } from '../types';

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [from, setFrom] = useState('Delhi');
  const [to, setTo] = useState('Chandigarh');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ from, to, date });
  };

  return (
    <div className="relative -mt-16 md:-mt-24 z-10 w-full max-w-5xl mx-auto px-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-stretch md:items-center gap-0 overflow-hidden border"
      >
        <div className="flex-1 relative flex items-center border-b md:border-b-0 md:border-r py-3 px-4">
          <MapPin className="text-gray-400 mr-3 shrink-0" size={20} />
          <div className="flex-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase">From</label>
            <select 
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full text-lg font-semibold bg-transparent border-none focus:ring-0 cursor-pointer p-0"
            >
              {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <button 
            type="button"
            onClick={handleSwap}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-sm z-20 hover:bg-gray-50 md:flex hidden"
          >
            <ArrowRightLeft size={16} className="text-red-500" />
          </button>
        </div>

        <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r py-3 px-4">
          <MapPin className="text-gray-400 mr-3 shrink-0" size={20} />
          <div className="flex-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase">To</label>
            <select 
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full text-lg font-semibold bg-transparent border-none focus:ring-0 cursor-pointer p-0"
            >
              {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r py-3 px-4">
          <Calendar className="text-gray-400 mr-3 shrink-0" size={20} />
          <div className="flex-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase">Date</label>
            <input 
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-lg font-semibold bg-transparent border-none focus:ring-0 cursor-pointer p-0"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-8 py-5 transition-colors md:ml-4 rounded-xl mt-4 md:mt-0"
        >
          SEARCH BUSES
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
