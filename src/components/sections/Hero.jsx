import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import GlowButton from '../ui/GlowButton';

const Hero = () => {
  return (
    <section className="flex justify-center items-center px-4 py-20 min-h-screen">
      <div className="mx-auto max-w-6xl text-center">
        {/* Animated greeting */}
        <div className="inline-block mb-4 animate-fade-in">
          <span className="bg-cyber-blue/10 px-4 py-2 border border-cyber-blue/30 rounded-full font-medium text-cyber-blue text-sm">
            Available for Opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 
          className="mb-6 font-bold text-5xl md:text-7xl lg:text-8xl animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          RAZAFISON Kevin Fitahiana
          <br />
          <span className="text-gradient">Software Engineer</span>
        </h1>

        {/* Description */}
        <p 
          className="mx-auto mb-8 max-w-3xl text-gray-400 text-xl md:text-2xl animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          21 years old, based in <span className="text-cyber-blue">Madagascar</span>. 
          Master's 2 student in Software Engineering & Database at the{' '}
          <span className="text-cyber-purple">National Distance Learning Centre of Madagascar</span>.
          Passionate about building scalable full-stack applications with modern technologies.
        </p>

        {/* Education Badge */}
        <div 
          className="inline-block mb-8 animate-slide-up"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="px-6 py-3 border border-cyber-purple/30 rounded-lg glass-effect">
            <p className="text-gray-400 text-sm">
              🎓 Bachelor's Degree in Software Engineering
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-wrap justify-center items-center gap-4 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <GlowButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} icon={ArrowRight}>
            View My Work
          </GlowButton>
          <GlowButton variant="secondary" icon={Download}>
            Download CV
          </GlowButton>
        </div>

        {/* Social Links */}
        <div 
          className="flex justify-center gap-6 mt-12 animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          {[
            { icon: Github, href: 'https://github.com/Kevin-Razafison', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/kevin-razafison-025952383/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:kevinrazafison2@gmail.com', label: 'Email' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
              className="group flex justify-center items-center hover:bg-cyber-blue/20 hover:border-cyber-blue rounded-full w-12 h-12 transition-all duration-300 glass-effect"
            >
              <social.icon 
                size={20} 
                className="text-gray-400 group-hover:text-cyber-blue transition-colors" 
              />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="bottom-8 left-1/2 absolute -translate-x-1/2 animate-bounce">
          <div className="flex justify-center items-start p-2 border-2 border-cyber-blue/30 rounded-full w-6 h-10">
            <div className="bg-cyber-blue rounded-full w-1 h-3 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;