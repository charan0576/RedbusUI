
import React, { useState } from 'react';
import { Bus } from '../types';

interface SeatSelectorProps {
  bus: Bus;
}

const SeatSelector: React.FC<SeatSelectorProps> = ({ bus }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  const toggleSeat = (id: string) => {
    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter(s => s !== id));
    } else if (selectedSeats.length < 6) {
      setSelectedSeats([...selectedSeats, id]);
    } else {
      alert("Maximum 6 seats allowed per booking");
    }
  };

  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const columns = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h4 className="font-bold text-gray-700 mb-4 border-b pb-2 uppercase text-xs">Select Seats</h4>
        
        <div className="bg-white border-2 border-gray-300 rounded-xl p-6 relative max-w-sm mx-auto">
          {/* Driver seat simulation */}
          <div className="absolute top-4 right-4 w-8 h-8 border-2 border-gray-200 rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          </div>

          <div className="space-y-4 pt-12">
            {rows.map(row => (
              <div key={row} className="flex gap-4 items-center justify-center">
                {columns.map(col => {
                  const id = `${row}${col}`;
                  const isBooked = Math.random() > 0.7; // Simulate booked seats
                  const isSelected = selectedSeats.includes(id);
                  
                  // Add an aisle
                  if (col === 3) return <div key={`aisle-${row}`} className="w-8"></div>;

                  return (
                    <button
                      key={id}
                      disabled={isBooked}
                      onClick={() => toggleSeat(id)}
                      className={`
                        w-8 h-10 border-2 rounded transition-all flex flex-col items-center justify-center
                        ${isBooked ? 'bg-gray-100 border-gray-200 cursor-not-allowed' : 
                          isSelected ? 'bg-green-500 border-green-600' : 'bg-white border-gray-300 hover:border-gray-500'}
                      `}
                    >
                      <div className={`w-4 h-1 rounded-t-sm mb-0.5 ${isSelected ? 'bg-white/50' : isBooked ? 'bg-gray-300' : 'bg-gray-200'}`}></div>
                      <span className={`text-[8px] font-bold ${isSelected ? 'text-white' : isBooked ? 'text-gray-300' : 'text-gray-400'}`}>{id}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center text-[10px] font-bold uppercase text-gray-500 border-t pt-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-white border border-gray-300 rounded-sm"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-100 border border-gray-200 rounded-sm"></div>
              <span>Booked</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 border border-green-600 rounded-sm"></div>
              <span>Selected</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-72 flex flex-col bg-white border rounded-lg p-5">
        <h4 className="font-bold text-gray-800 mb-4 border-b pb-2">Booking Summary</h4>
        {selectedSeats.length > 0 ? (
          <div className="space-y-4 flex-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Seats:</span>
              <span className="font-bold">{selectedSeats.join(', ')}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Fare:</span>
              <span className="font-bold">INR {selectedSeats.length * bus.price}</span>
            </div>
            <button className="w-full bg-red-500 text-white font-bold py-3 rounded hover:bg-red-600 transition-colors mt-auto uppercase text-sm tracking-wide">
              Proceed to Book
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
            <p className="text-gray-400 text-sm">Please select at least one seat to continue</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatSelector;
