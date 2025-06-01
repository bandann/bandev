import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { About } from "@/components/About";
import { s } from "node_modules/framer-motion/dist/types.d-CtuPurYT";
import { sub } from "date-fns";
import exp from "constants";
import { Contact } from "lucide-react";
import { Projects } from "@/components/Projects";

const resources = {
  en: {
    translation: {
      hero: {
        begining: "Hello, I'm",
        title: "Welcome to my portfolio",
        subtitle: "Front-End Developer | Magento and web design",
        presentation:"👋 Hi! I'm Bani Inaga, a Front-End Developer with expertise in e-commerce and web design, a passionate Front-End Developer with a proven track record of building exceptional e-commerce experiences.",
        buttonHero: "Download CV",
        buttonHero2: "View My Work",
      },
      navigation: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
      },
      aboutme: {
        title: "About Me",
        description: "I am a Front-End Developer with over 5 years of experience in building web applications and e-commerce. I am passionate about design and usability, and I always seek to learn new technologies to improve my skills.",
      }, 
      skills: {
        title: "Skills & Technologies",
        subtitle: "Technologies I've Worked With",
      }, 
      experience: {
        title: "Professional Experience",
        subtitle: "My journey in web development",
      }, 
      projects: {
        title: "Projects recently",
        subtitle: "Some of my recent projects",
      },
      testimonials: {
        title: "What People Say",
        subtitle: "What my colleagues and clients say",
      },
      contact: { 
        title: "Lets Connect",
        subtitle: "I`m immediately available and always open to new challenges and projects",
       
      },
      footer: {
        name: "{{name}}",
        bio: "Contact me and let's talk about your project",
        copyright: "© {{year}} {{name}}. All rights reserved.",
        credits: "Design and develop by | Bandann dev 💻",
      },
    },
  },
  es: {
    translation: {
      hero: {
        begining: "Hola, soy",
        title: "Bienvenido a mi portafolio",
        subtitle: "Desarrollador Front-End | Magento y Diseño Web",
        presentation: "👋 ¡Hola! Soy Bani Inaga, Desarrollador Front-End con Expertise en E-commerce y Diseño Web, un apasionado Desarrollador Front-End con una probada trayectoria en la construcción de experiencias e-commerce excepcionales.",
        buttonHero: "Descargar CV",
        buttonHero2: "Ver Mis Trabajos",
      },
      navigation: {
        home: "Inicio",
        about: "Sobre mi",
        skills: "Habilidades",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contacto",
      },
      aboutme: {
        title: "Sobre mí",
        description: "Soy un Desarrollador Front-End con más de 5 años de experiencia en la creación de aplicaciones web y e-commerce. Me apasiona el diseño y la usabilidad, y siempre busco aprender nuevas tecnologías para mejorar mis habilidades.",
        
      },
      skills: {
        title: "Habilidades y Tecnologías",
        subtitle: "Tecnologias con las que he trabajado",
      },
      experience: {
        title: "Experiencia Profesional",
        subtitle: "Algunos de mis ultimos trabajos",
      },
      testimonials: {
        title: "Comentarios de la gente",
        subtitle: "Lo que dicen mis colegas y clientes",
      },
      projects: {
        title: "Proyectos mas recientes",
        subtitle: "Algunos de mis proyectos mas recientes",
      },
      contact: {
        title: "Conectemos",
        subtitle: "Estoy disponible de inmediato y siempre abierto a nuevos desafíos y proyectos",
      },
      footer: {
        name: "{{name}}",
        bio: "Contactame y hablemos de tu proyecto",
        copyright: "© {{year}} {{name}}. Todos los derechos reservados.",
        credits: "Diseñado y desarrollado por | BanDev 💻",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default i18n;
