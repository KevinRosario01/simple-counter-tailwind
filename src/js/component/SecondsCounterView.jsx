import React from "react";
import { FaClock } from 'react-icons/fa';

export function SecondsCounterView({ seconds }) {
  const digits = String(seconds).padStart(6, '0').split('');

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-black p-4 rounded-md flex space-x-2">
        <div className="bg-gray-900 text-white shadow-inner rounded-md w-16 h-24 flex items-center justify-center text-4xl font-bold">
          <FaClock />
        </div>
        {digits.map((digit, index) => (
          <div key={index} className="bg-gray-900 text-white shadow-inner rounded-md w-16 h-24 flex items-center justify-center text-4xl font-bold">
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
}
