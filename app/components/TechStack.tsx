'use client';
import { 
  FaPython, 
  FaGithub, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaReact 
} from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiTypescript, 
  SiPrisma, 
  SiHono, 
  SiPostman, 
  SiNextdotjs, 
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiVercel
} from 'react-icons/si';

const technologies = [
  {
    name: 'Python',
    Icon: FaPython,
    color: '#3776AB'
  },
  {
    name: 'C++',
    Icon: SiCplusplus,
    color: '#00599C'
  },
  {
    name: 'GitHub',
    Icon: FaGithub,
    color: '#ffffff'
  },
  {
    name: 'Node.js',
    Icon: FaNodeJs,
    color: '#339933'
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    color: '#3178C6'
  },
  {
    name: 'Prisma',
    Icon: SiPrisma,
    color: '#2D3748'
  },
  {
    name: 'Hono',
    Icon: SiHono,
    color: '#ffffff'
  },
  {
    name: 'Postman',
    Icon: SiPostman,
    color: '#FF6C37'
  },
  {
    name: 'Docker',
    Icon: FaDocker,
    color: '#2496ED'
  },
  {
    name: 'AWS',
    Icon: FaAws,
    color: '#FF9900'
  },
  {
    name: 'React',
    Icon: FaReact,
    color: '#61DAFB'
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs,
    color: '#ffffff'
  },
  {
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
    color: '#06B6D4'
  },
  {
    name: 'Supabase',
    Icon: SiSupabase,
    color: '#3FCF8E'
  },
  {
    name: 'PostgreSQL',
    Icon: SiPostgresql,
    color: '#4169E1'
  },
  {
    name: 'Vercel',
    Icon: SiVercel,
    color: '#ffffff'
  }
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="glass-card p-4 md:p-6 rounded-xl flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-300"
        >
          <tech.Icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: tech.color }} />
          <span className="text-sm md:text-base font-medium text-center">{tech.name}</span>
        </div>
      ))}
    </div>
  );
} 