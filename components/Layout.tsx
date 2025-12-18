
import React from 'react';
import { Bus, User, PhoneCall, HelpCircle, Menu } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1 cursor-pointer">
              <Bus className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold tracking-tighter text-gray-800">red<span className="text-red-500">Bus</span></span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-semibold text-gray-600 hover:text-red-500">Bus Tickets</a>
              <a href="#" className="text-sm font-semibold text-gray-600 hover:text-red-500">Cab Rentals</a>
              <a href="#" className="text-sm font-semibold text-gray-600 hover:text-red-500">Train Tickets</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                <HelpCircle size={18} />
                <span>Help</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                <User size={18} />
                <span>Login / Signup</span>
              </div>
            </div>
            <Menu className="md:hidden text-gray-600 cursor-pointer" />
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-100 py-12 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <Bus className="w-6 h-6 text-red-500" />
              <span className="text-xl font-bold tracking-tighter text-gray-800">red<span className="text-red-500">Bus</span></span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">About redBus</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="hover:text-red-500 cursor-pointer">About Us</li>
              <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
              <li className="hover:text-red-500 cursor-pointer">Mobile Apps</li>
              <li className="hover:text-red-500 cursor-pointer">Offers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Info</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="hover:text-red-500 cursor-pointer">T&C</li>
              <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-red-500 cursor-pointer">FAQ</li>
              <li className="hover:text-red-500 cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <PhoneCall size={16} className="text-red-500" />
              <span>Customer Care: 1800 123 4567</span>
            </div>
            <p className="text-sm text-gray-500">Available 24/7</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 Redbus India Pvt Ltd. All rights reserved</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
