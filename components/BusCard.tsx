
import React, { useState } from 'react';
import { Star, Clock, Info, ShieldCheck } from 'lucide-react';
import { Bus } from '../types';
import SeatSelector from './SeatSelector';

interface BusCardProps {
  bus: Bus;
}

const BusCard: React.FC<BusCardProps> = ({ bus }) => {
  const [showSeats, setShowSeats] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden mb-4">
      <div className="p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800">{bus.operatorName}</h3>
            <p className="text-sm text-gray-500">{bus.busType}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold">
                <Star size={12} fill="white" />
                <span>{bus.rating}</span>
              </div>
              <span className="text-xs text-gray-400 underline cursor-pointer">1.2k Ratings</span>
            </div>
          </div>

          <div className="flex-[2] flex items-center justify-between text-center border-l border-r border-gray-100 px-8">
            <div>
              <p className="text-xl font-bold text-gray-800">{bus.departureTime}</p>
              <p className="text-xs text-gray-400 uppercase font-semibold">Dep</p>
            </div>
            <div className="flex flex-col items-center flex-1 mx-4">
              <span className="text-xs text-gray-400 mb-1">{bus.duration}</span>
              <div className="w-full h-px bg-gray-200 relative">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-gray-300 bg-white"></div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-gray-300 bg-gray-400"></div>
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">{bus.arrivalTime}</p>
              <p className="text-xs text-gray-400 uppercase font-semibold">Arr</p>
            </div>
          </div>

          <div className="flex-1 text-right">
            <p className="text-xs text-gray-400 mb-1">Starts from</p>
            <p className="text-2xl font-bold text-gray-800">INR {bus.price}</p>
            <p className="text-xs text-orange-500 font-bold mt-1">{bus.availableSeats} Seats left</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <ShieldCheck size={14} className="text-green-500" />
              <span>Safe Travel Guarante</span>
            </div>
            {bus.amenities.slice(0, 3).map(a => (
              <span key={a} className="text-xs text-gray-400 flex items-center gap-1">
                <Info size={12} /> {a}
              </span>
            ))}
          </div>
          <button 
            onClick={() => setShowSeats(!showSeats)}
            className={`px-6 py-2 rounded font-bold text-sm transition-colors ${showSeats ? 'bg-gray-100 text-gray-800' : 'bg-red-500 text-white hover:bg-red-600'}`}
          >
            {showSeats ? 'HIDE SEATS' : 'VIEW SEATS'}
          </button>
        </div>
      </div>

      {showSeats && (
        <div className="bg-gray-50 border-t p-6">
          <SeatSelector bus={bus} />
        </div>
      )}
    </div>
  );
};

export default BusCard;
