"use client";

import { Home, Folder, PenTool, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: Folder, label: 'Projects' },
    { id: 'skills', icon: PenTool, label: 'Skills' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-1/2 -translate-y-1/2 right-10 z-50">
      <div className="bg-base-200 rounded-full p-4 flex flex-col gap-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeItem === item.id
                  ? 'bg-primary text-white'
                  : 'hover:bg-base-300'
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}