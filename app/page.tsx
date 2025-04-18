'use client';
import Navbar from './components/Navbar';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
// import ContactForm from '@/components/ContactForm';
// import footer from './components/Footer';
export default function Home() {
  return (
  <main className="min-h-screen bg-background">


      <Navbar />
     
      <div className="container mx-auto px-4 py-8 flex gap-8">
        
        {/* Left Column - Scrollable Content */}

        <div className="w-2/3 space-y-16">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold">
              Turning caffeine and code into creative{' '}
                <span className="gradient-text">solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
              I am a Computer Science student passionate about web development and cloud technologies.  
I enjoy building scalable and user-friendly applications.  
Always eager to explore and learn the latest in tech.
              
              </p>
              <div className="flex gap-4">
                
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Featured Projects</h2>
            <div className="grid grid-cols-2 gap-6">
            
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold">Hacker-news</h3>
              <p className="text-muted-foreground">The Hacker News Backend is a TypeScript-powered API built with Hono and Prisma, using Supabase (PostgreSQL) for data storage. It supports JWT-based authentication, role-based access control, and paginated content delivery. The project is fully Dockerized and includes an automated CI/CD pipeline with GitHub Actions and Azure for seamless deployment.</p>
              <a href="https://github.com/adi8889/hackernews-server" className="text-primary">View on GitHub →</a>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold">Amazon S3 and transcribe Integration</h3>
              <p className="text-muted-foreground">Set up an Amazon S3 bucket via the AWS Console with proper permissions and storage settings, then upload your audio files. Use Amazon Transcribe to start a transcription job that processes these files and converts speech to text with high accuracy and scalability.</p>
              
            </div>
          </div>
          
          </section>
        

          {/* Skills Section */}
          <section id="skills" className="min-h-screen">
  <h2 className="text-4xl font-bold mb-8 gradient-text">What I Used </h2>

  <div className="flex flex-col md:flex-row gap-12">
    
    {/* Tools Section - Left */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl font-semibold mb-4">Tools</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>VS Code</li>
        <li>Git & GitHub</li>
        <li>Postman</li>
        <li>Docker</li>
        <li>AWS Console</li>
        <li>Figma</li>
      </ul>
    </div>
    {/* Skills Section - Right */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>HTML, CSS, JavaScript, TypeScript</li>
        <li>React.js, Next.js</li>
        <li>Tailwind CSS, DaisyUI</li>
        <li>Node.js, Express.js</li>
        <li>MongoDB, MySQL</li>
        <li>Cloud Computing (AWS, Azure)</li>
      </ul>
    </div>
    
  </div>
          </section>
          


          {/* Contact Section */}
          {/* Contact Section */}
          <section id="contact" className="min-h-screen">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Get in Touch</h2>
            {/* Add your contact form here */}
            <p className="text-lg text-muted-foreground mb-4">
    Feel free to reach out if you have a project in mind, want to collaborate, or just say hello!
  </p>
            <a
  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 underline"
>
  Mail
</a>
          </section>

        </div>

        {/* Right Column - Sticky Card */}
       

        <div className="w-1/3">
       

      
          <div className="sticky top-8">
            <div className="glass-card p-8 rounded-2xl animate-float">
              <div className="avatar">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                 
                  <img
  src="/aditya_avatar.jpg"
  alt="Aditya"
  className="object-cover w-full h-full"
/>
                </div>
              </div>
              {/* buttons */}
              <h2 className="text-2xl font-bold mt-4 text-center">ADITYA HARIVALAD</h2>
<p className="text-muted-foreground text-center">Full Stack Developer</p>
<p className="text-muted-foreground text-center">SIT, Tumkur</p>

<div className="flex gap-4 justify-center mt-6">
  <a
    href="https://github.com/adi8889"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-circle bg-violet-600 text-white hover:bg-white/20 transition-all duration-300"
  >
    <Github size={20} />
  </a>
  
  <a
    href="https://www.linkedin.com/in/aditya-h-73164a249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Replace with your actual LinkedIn link
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-circle bg-violet-600 text-white hover:bg-white/20 transition-all duration-300"
  >
    <Linkedin size={20} />
  </a>
  
  <a
    href="https://mail.google.com/mail/u/0/#inbox" // Replace with your actual email
    className="btn btn-circle bg-violet-600 text-white hover:bg-white/20 transition-all duration-300"
  >
    <Mail size={20} />
  </a>
</div>


              
              <a
  href="/adityares.pdf"
  download
  className="btn btn-primary bg-violet-600 text-white mt-6 w-full hover:bg-primary/80 transition-all duration-300"
>
  Download CV
</a>


              
            </div>
          </div>
        </div>
      </div>


<footer className="bg-background text-center py-6">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Aditya Harivalad. All rights reserved.
        </p>
      </footer>



    </main>
  );}