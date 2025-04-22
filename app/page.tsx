'use client';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import TechStack from './components/TechStack';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <ProfileCard />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center pl-[calc(372px+2.5rem)]">
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <h1 className="text-7xl font-bold leading-tight">
                Turning caffeine and code into {' '}
                <span className="gradient-text">creative solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-6">
              I am a Computer Science student passionate about web development and cloud technologies. I enjoy building scalable and user-friendly applications. Always eager to explore and learn the latest in tech.
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <a
                  href="#contact"
                  className="btn btn-primary bg-violet-600 text-white px-8 py-3 rounded-full hover:bg-violet-700 transition-all duration-300 flex items-center gap-2"
                >
                  Let's Talk <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 pl-[calc(372px+2.5rem)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-violet-600">+2</h3>
              <p className="text-muted-foreground mt-2">YEARS OF EXPERIENCE</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-violet-600">+10</h3>
              <p className="text-muted-foreground mt-2">PROJECTS COMPLETED</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-violet-600">+5</h3>
              <p className="text-muted-foreground mt-2">WORLDWIDE CLIENTS</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 pl-[calc(372px+2.5rem)]">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hacker News Project */}
            <a 
              href="https://github.com/adi8889/hackernews-server" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-[#1e1e1e] hover:bg-[#252525] transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    Hacker-news 
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-violet-400 font-medium">Backend server</p>
                </div>
                <p className="text-gray-400 mb-6">
                  The Hacker News Backend is a TypeScript API using Hono, Prisma, and Supabase for storage. It supports JWT auth, role-based access, and pagination. The project is Dockerized with CI/CD via GitHub Actions and Azure.
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">PostgreSQL</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">Prisma</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">TypeScript</span>
                </div>
              </div>
            </a>

            {/* Portfolio Website Project */}
            <a 
              href="https://github.com/adi8889/Project1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-[#1e1e1e] hover:bg-[#252525] transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    Portfolio website 
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-violet-400 font-medium">Frontend development</p>
                </div>
                <p className="text-gray-400 mb-6">
                  A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring a sleek dark theme and smooth animations. Showcases projects and skills with an elegant UI design and seamless user experience.
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">React</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">Nextjs</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">Typescript</span>
                </div>
              </div>
            </a>

            {/* AWS Project */}
            <a 
              // href="https://github.com/adi8889/aws-transcribe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-[#1e1e1e] hover:bg-[#252525] transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    Amazon S3 and Transcribe Integration 
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-violet-400 font-medium">Transcription and storage</p>
                </div>
                <p className="text-gray-400 mb-6">
                  Set up an S3 bucket via AWS Console with proper permissions and upload audio files. Then use Amazon Transcribe to convert them into text with high accuracy and scalability.
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">AWS</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">S3</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">EC2</span>
                </div>
              </div>
            </a>

            {/* IoT Project */}
            <a 
              // href="https://github.com/adi8889/animal-monitoring" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-[#1e1e1e] hover:bg-[#252525] transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    Animal Monitoring and Tracking System 
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-violet-400 font-medium">IOT</p>
                </div>
                <p className="text-gray-400 mb-6">
                  An Animal Monitoring and Healthcare Management System using IoT helps track vital parameters like temperature, heart rate, and movement in real-time. This enables early detection of health issues.
                </p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">Arduino</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">ESP32</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400">Ubidots</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 pl-[calc(372px+2.5rem)]">
          <h2 className="text-4xl font-bold mb-12 text-center">What I Can Do</h2>
          <TechStack />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 pl-[calc(372px+2.5rem)]">
          <h2 className="text-4xl font-bold mb-12 text-center">Let's Collaborate</h2>
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 text-center">
            Bring your ideas to life with creative design and development! Let's team up to build user-friendly projects that are fun to use and help you reach your goals.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/adi8889"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-h-73164a249"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="btn btn-circle bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-center py-6 pl-[calc(372px+2.5rem)]">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Aditya Harivalad. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
