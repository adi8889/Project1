'use client';
import { useState } from 'react';
import { User, X } from 'lucide-react';
import ProfileCard from './ProfileCard';

export default function MobileProfileCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-20 left-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <User size={24} />}
      </button>

      {/* Profile Card */}
      <div
        className={`absolute top-16 left-0 w-80 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <div className="bg-black/50 backdrop-blur-lg rounded-xl p-4 shadow-xl">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
} 