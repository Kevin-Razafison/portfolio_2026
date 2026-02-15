import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import GlowButton from '../ui/GlowButton';

const Hero = () => {
  return (
    <section className="flex justify-center items-center px-4 py-20 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <div className="flex lg:flex-row flex-col items-center gap-12">
          
          {/* Photo Profile - Left Side */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-30 blur-3xl rounded-full animate-pulse"></div>
              
              {/* Photo container */}
              <div className="relative w-64 lg:w-80 h-64 lg:h-80">
                <div className="absolute inset-0 border-4 border-cyber-blue/30 rounded-full animate-glow"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Kevin Razafison"
                  className="border-4 border-cyber-blue/50 rounded-full w-full h-full object-cover"
                />
                {/* Status badge */}
                <div className="right-4 bottom-4 absolute bg-green-500/20 backdrop-blur-sm px-4 py-2 border border-green-400/50 rounded-full">
                  <span className="flex items-center gap-2 font-medium text-green-400 text-sm">
                    <span className="bg-green-400 rounded-full w-2 h-2 animate-pulse"></span>
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="flex-1 lg:text-left text-center">
            {/* Animated greeting */}
            <div className="inline-block mb-4 animate-slide-up">
              <span className="bg-cyber-blue/10 px-4 py-2 border border-cyber-blue/30 rounded-full font-medium text-cyber-blue text-sm">
                👋 Welcome to my Portfolio
              </span>
            </div>

            {/* Main heading */}
            <h1 
              className="mb-6 font-bold text-4xl md:text-6xl lg:text-7xl animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              RAZAFISON Kevin Fitahiana
              <br />
              <span className="text-gradient">Software Engineer</span>
            </h1>

            {/* Description */}
            <p 
              className="mx-auto lg:mx-0 mb-8 max-w-2xl text-gray-400 text-lg md:text-xl animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              21 years old, based in <span className="text-cyber-blue">Madagascar</span>. 
              Master's 2 student in Software Engineering & Database at the{' '}
              <span className="text-cyber-purple">Centre National de Télé-Enseignement de Madagascar (CNTEMAD)</span>.
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
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-8 animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              <GlowButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} icon={ArrowRight}>
                View My Work
              </GlowButton>
            </div>

            {/* Social Links */}
            <div 
              className="flex justify-center lg:justify-start gap-6 animate-slide-up"
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
          </div>
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