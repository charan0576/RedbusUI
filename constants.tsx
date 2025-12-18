
import { Bus } from './types';

export const BUS_DATA: Bus[] = [
  {
    id: '1',
    operatorName: 'Zingbus Plus',
    busType: 'A/C Sleeper (2+1)',
    departureTime: '21:00',
    arrivalTime: '06:30',
    duration: '09h 30m',
    price: 1250,
    rating: 4.8,
    totalSeats: 36,
    availableSeats: 12,
    amenities: ['Water Bottle', 'Blankets', 'Charging Point', 'WiFi'],
    boardingPoints: ['Kashmere Gate', 'RK Ashram Metro', 'Majnu ka Tila'],
    droppingPoints: ['Chandigarh Sector 43', 'Zirakpur', 'Tribune Chowk']
  },
  {
    id: '2',
    operatorName: 'Laxmi Holidays',
    busType: 'Volvo 9600 A/C Multi-Axle Semi-Sleeper (2+2)',
    departureTime: '22:30',
    arrivalTime: '07:45',
    duration: '09h 15m',
    price: 1899,
    rating: 4.5,
    totalSeats: 48,
    availableSeats: 8,
    amenities: ['CCTV', 'Pillow', 'Reading Light', 'Emergency Contact'],
    boardingPoints: ['Dhaula Kuan', 'Mahipalpur', 'IFFCO Chowk'],
    droppingPoints: ['Shimla ISBT', 'Victory Tunnel']
  },
  {
    id: '3',
    operatorName: 'RSY Travels',
    busType: 'Non A/C Seater / Sleeper (2+1)',
    departureTime: '19:45',
    arrivalTime: '04:00',
    duration: '08h 15m',
    price: 850,
    rating: 3.9,
    totalSeats: 30,
    availableSeats: 5,
    amenities: ['Water Bottle', 'Charging Point'],
    boardingPoints: ['Sarai Kale Khan', 'Akshardham'],
    droppingPoints: ['Jaipur Sindhi Camp', '200 Ft Bypass']
  },
  {
    id: '4',
    operatorName: 'Redline Express',
    busType: 'A/C Seater (2+2)',
    departureTime: '08:00',
    arrivalTime: '14:30',
    duration: '06h 30m',
    price: 600,
    rating: 4.2,
    totalSeats: 40,
    availableSeats: 20,
    amenities: ['Newspaper', 'Charging Point'],
    boardingPoints: ['Anand Vihar', 'Ghazipur'],
    droppingPoints: ['Agra ISBT', 'Water Tank']
  }
];

export const CITIES = [
  'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata', 'Jaipur', 'Lucknow', 'Chandigarh', 'Shimla', 'Manali', 'Agra'
];
