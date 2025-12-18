
export interface Bus {
  id: string;
  operatorName: string;
  busType: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  rating: number;
  totalSeats: number;
  availableSeats: number;
  amenities: string[];
  boardingPoints: string[];
  droppingPoints: string[];
}

export interface SearchParams {
  from: string;
  to: string;
  date: string;
}

export interface BookingState {
  selectedBus: Bus | null;
  selectedSeats: string[];
  passengerDetails: {
    name: string;
    age: string;
    gender: 'Male' | 'Female' | 'Other';
  }[];
}
