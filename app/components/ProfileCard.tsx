"use client";

import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="fixed left-10 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-[#1e1e1e] p-8 rounded-2xl w-[372px] h-[541.2px] border border-gray-700">
        <div className="flex flex-col items-center h-full justify-center">
          {/* Profile Image */}
          <div className="w-[260px] h-[260px] overflow-hidden mb-6 rounded-2xl">
            <Image
              src="/port.jpg"
              alt="Aditya Harivalad"
              width={260}
              height={220}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name and Designation */}
          <h2 className="text-2xl font-bold text-center mb-2">Aditya Harivalad</h2>
          <p className="text-muted-foreground text-center mb-8">Full Stack Developer</p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/adi8889"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-h-73164a249"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="btn btn-circle bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300"
              title="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 