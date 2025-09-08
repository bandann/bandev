
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import Developments from '@/components/Developments';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import portfolioData from '@/data/portfolio.json';

const Index = () => {
  const { personal } = portfolioData;

  return (
    <>
      <Helmet>
        <title>{personal.name} - Frontend Developer & E-commerce Specialist</title>
        <meta name="description" content={personal.bio} />
        <meta name="keywords" content="frontend developer, react developer, magento developer, e-commerce specialist, web developer" />
        <meta property="og:title" content={`${personal.name} - Frontend Developer & E-commerce Specialist`} />
        <meta property="og:description" content={personal.bio} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={personal.avatar} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personal.name} - Frontend Developer & E-commerce Specialist`} />
        <meta name="twitter:description" content={personal.bio} />
        <meta name="twitter:image" content={personal.avatar} />
        <link rel="canonical" href="https://alexrodriguez.dev" />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Developments />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
