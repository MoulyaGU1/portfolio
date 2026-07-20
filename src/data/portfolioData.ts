export interface Skill {
  name: string;
  level: number; // percentage 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface TimelineItem {
  id: number;
  type: 'internship' | 'hackathon' | 'training' | 'certification';
  title: string;
  organization: string;
  duration: string;
  description: string;
  skillsLearned?: string[];
  link?: string;
}

export interface EducationItem {
  id: number;
  degree: string;
  field: string;
  institution: string;
  duration: string;
  grade: string;
  coursework: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl: string;
  image: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  category: 'hackathon' | 'contest' | 'milestone' | 'contribution';
  date: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  text: string;
  avatar: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'work' | 'events' | 'fun';
}

export const portfolioData = {
  personalInfo: {
    name: 'Moulya G U',
    title: 'Computer Science Engineering Student | Software Developer | Full-Stack Developer',
    introduction: 'Computer Science & Engineering student with hands-on experience building AI-powered and web-based applications using Python, Flask, and JavaScript. Proficient in full-stack development, machine learning basics, and REST APIs.',
    resumeUrl: '/resume.pdf',
    socials: {
      github: 'https://github.com/MoulyaGU1',
      linkedin: 'https://linkedin.com/in/moulya-g-u-59595a270',
      email: 'mailto:moulyagu@gmail.com',
      phone: '+91-9353417159',
      location: 'Shivamogga, 577201'
    },
    stats: {
      projects: 4,
      certifications: 4,
      internships: 1,
      hackathons: 3,
    }
  },
  
  about: {
    bio: 'I am a Computer Science & Engineering student passionate about full-stack development and machine learning. I have built multiple applications incorporating Google Gemini AI, Flask-based microservices, and modern frontend engines. Driven by problem-solving and structured systems development, I am seeking a software development internship or entry-level role to apply my skills in collaborative engineering environments.',
    photo: '/images/profile.jpg',
  },

  skills: [
    {
      category: 'Languages',
      icon: 'Code',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'SQL', level: 85 },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      icon: 'Layout',
      skills: [
        { name: 'Flask', level: 90 },
        { name: 'Flask-SQLAlchemy', level: 88 },
        { name: 'Flask-Migrate', level: 82 },
        { name: 'Flask-CORS', level: 85 },
        { name: 'Jinja2', level: 80 },
        { name: 'Gunicorn', level: 75 },
      ]
    },
    {
      category: 'AI / ML',
      icon: 'Brain',
      skills: [
        { name: 'Google Gemini API', level: 88 },
        { name: 'google-generativeai', level: 85 },
        { name: 'gTTS', level: 80 },
      ]
    },
    {
      category: 'Databases & Tools',
      icon: 'Server',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQLite', level: 80 },
        { name: 'Normalization', level: 88 },
        { name: 'CRUD', level: 92 },
        { name: 'Render / Vercel', level: 85 },
        { name: 'Git / GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Docker (basics)', level: 65 },
        { name: 'Linux CLI', level: 75 },
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: 1,
      title: 'Dronacharya Hub — AI-Powered Learning Platform',
      description: 'Developed an AI-powered tutoring platform using Google Generative AI for personalized content generation and gTTS-based voice responses. Deployed on Render with a Supabase (PostgreSQL) backend and SQLAlchemy ORM, enabling scalable multi-user session management.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop',
      tags: ['Python', 'Flask', 'SQLAlchemy', 'Supabase', 'Google GenAI', 'gTTS'],
      githubUrl: 'https://github.com/MoulyaGU1',
      liveUrl: 'https://drrona-3.onrender.com',
      featured: true
    },
    {
      id: 2,
      title: 'Multimodal AI Tutor',
      description: 'Built an AI-powered learning assistant integrating text, voice, and visual inputs, with quiz modules and automated content generation.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
      tags: ['Python', 'Flask', 'NLP', 'Machine Learning'],
      githubUrl: 'https://github.com/MoulyaGU1',
      liveUrl: 'https://tutor-2-nxlo.onrender.com',
      featured: true
    },
    {
      id: 3,
      title: 'Offline Attention Monitoring System',
      description: 'Built a real-time attention-tracking system with session tracking, idle detection, and a modular Flask backend for productivity analytics.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
      tags: ['Python', 'Flask', 'Data Visualization'],
      githubUrl: 'https://github.com/MoulyaGU1/offline-attention-monitoring',
      liveUrl: undefined,
      featured: true
    },
    {
      id: 4,
      title: 'Chat Application',
      description: 'Built a real-time chat application with Flask-based message handling and dynamic backend logic for live user communication.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      tags: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/MoulyaGU1',
      liveUrl: 'https://chat-2-ms2g.onrender.com',
      featured: false
    }
  ] as Project[],

  timeline: [
    {
      id: 1,
      type: 'internship',
      title: 'Career Accelerator Program Intern',
      organization: 'WizzyBox Private Limited',
      duration: 'Commencing July 2026',
      description: 'Selected through a competitive process for WizzyBox Career Accelerator Program (WCAP), an industry-led incubation internship in partnership with NammaQA. Assigned to Python Full-Stack with Generative AI track (covering Django, React.js, SQL/MongoDB, GenAI). Engaged in live project exposure and one-on-one mentorship.',
      skillsLearned: ['Python', 'Django', 'React.js', 'Generative AI', 'SQL', 'MongoDB'],
      link: '/offer_letter.pdf'
    }
  ] as TimelineItem[],

  education: [
    {
      id: 1,
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Computer Science & Engineering',
      institution: 'Kalpataru Institute of Technology, Tiptur — Visvesvaraya Technological University (VTU)',
      duration: '2023 – 2027',
      grade: 'CGPA: 8.35',
      coursework: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks', 'Software Engineering']
    }
  ] as EducationItem[],

  certificates: [
    {
      id: 1,
      title: 'Python Programming',
      issuer: 'Cisco',
      date: '2024',
      verifyUrl: 'https://netacad.com',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Computer Networking & Cybersecurity Fundamentals',
      issuer: 'Cisco',
      date: '2024',
      verifyUrl: 'https://netacad.com',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Dec 2025',
      verifyUrl: 'https://netacad.com',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Selenium Automation Testing Tools',
      issuer: 'Tech Fortune',
      date: 'Nov 2025',
      verifyUrl: 'https://techfortune.co.in',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop'
    }
  ] as Certificate[],

  achievements: [
    {
      id: 1,
      title: 'Certificate of Appreciation - Code Breaker Challenge 1.0',
      description: 'Recognized for excellent problem-solving speed and algorithmic optimization.',
      category: 'contest',
      date: '2025'
    },
    {
      id: 2,
      title: 'Certificate of Appreciation - Hackverse 2025',
      description: 'Participated and showcased innovative solutions in AI-powered learning modules.',
      category: 'hackathon',
      date: '2025'
    },
    {
      id: 3,
      title: 'Certificate of Appreciation - Code Vault 2025',
      description: 'Honored for outstanding contributions to developer tracks and algorithmic challenges.',
      category: 'contest',
      date: '2025'
    }
  ] as Achievement[],

  gallery: [
    {
      id: 1,
      title: 'Dronacharya Hub UI',
      description: 'AI platform interface containing voice support modules.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
      category: 'work'
    },
    {
      id: 2,
      title: 'Code Vault 2025 Submission',
      description: 'Developing Flask-based session management pipelines.',
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop',
      category: 'work'
    }
  ] as GalleryItem[],

  testimonials: [
    {
      id: 1,
      name: 'Elena Rostova',
      role: 'WCAP Supervisor',
      organization: 'WizzyBox Private Limited',
      text: 'Moulya demonstrated strong foundational knowledge in Python, Flask, and building AI microservices. She has a bright career ahead in full-stack development.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop'
    }
  ] as Testimonial[]
};
