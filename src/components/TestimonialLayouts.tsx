'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  profileImage: string;
  appScreenshot: string;
  niche: string;
  followerCount: string;
  quote: string;
  stat: string;
  name: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    profileImage: '/images/blurred-profile-1.png',
    appScreenshot: '/images/app-screenshot-1.png',
    niche: 'Fitness',
    followerCount: '53.1k',
    quote: "I just want to help people get fit without all the BS.",
    stat: "$8,700 in 11 days",
    name: "Tyler"
  },
  {
    id: 2,
    profileImage: '/images/blurred-profile-2.png',
    appScreenshot: '/images/app-screenshot-2.png',
    niche: 'Fashion',
    followerCount: '87.4k',
    quote: "I wish I could just style everyone personally.",
    stat: "1,500 users in week one",
    name: "Maya"
  }
];

export default function TestimonialLayouts() {
  const [currentLayout, setCurrentLayout] = useState(1);

  const LayoutToggle = () => (
    <div className="flex justify-center gap-2 mb-12">
      {[1, 2, 3, 4].map((layout) => (
        <button
          key={layout}
          onClick={() => setCurrentLayout(layout)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            currentLayout === layout
              ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Layout {layout}
        </button>
      ))}
    </div>
  );

  // Layout 1: Side-by-side
  const Layout1 = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
      <div className="flex items-center gap-8">
        <div className="flex-shrink-0">
          <img 
            src={testimonial.profileImage} 
            alt={`${testimonial.name} profile`}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        </div>
        
        <div className="flex-1 text-center">
          <h3 className="text-2xl font-bold text-white mb-1">{testimonial.name}</h3>
          <p className="text-cyan-400 text-lg mb-1">{testimonial.niche} Creator</p>
          <p className="text-gray-400 mb-4">{testimonial.followerCount} followers</p>
          <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
          <p className="text-3xl font-bold text-cyan-400">{testimonial.stat}</p>
        </div>
        
        <div className="flex-shrink-0">
          <img 
            src={testimonial.appScreenshot} 
            alt={`${testimonial.name} app`}
            className="w-48 h-32 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );

  // Layout 2: Stacked
  const Layout2 = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 max-w-md mx-auto">
      <div className="text-center space-y-4">
        <img 
          src={testimonial.profileImage} 
          alt={`${testimonial.name} profile`}
          className="w-24 h-24 rounded-full object-cover shadow-lg mx-auto"
        />
        
        <div>
          <h3 className="text-2xl font-bold text-white">{testimonial.name}</h3>
          <p className="text-cyan-400">{testimonial.niche} Creator</p>
          <p className="text-gray-400 text-sm">{testimonial.followerCount} followers</p>
        </div>
        
        <p className="text-gray-300 italic">"{testimonial.quote}"</p>
        
        <img 
          src={testimonial.appScreenshot} 
          alt={`${testimonial.name} app`}
          className="w-full h-48 rounded-lg object-cover shadow-lg"
        />
        
        <p className="text-2xl font-bold text-cyan-400">{testimonial.stat}</p>
      </div>
    </div>
  );

  // Layout 3: Left media
  const Layout3 = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <img 
            src={testimonial.profileImage} 
            alt={`${testimonial.name} profile`}
            className="w-full h-48 rounded-lg object-cover shadow-lg"
          />
          <img 
            src={testimonial.appScreenshot} 
            alt={`${testimonial.name} app`}
            className="w-full h-48 rounded-lg object-cover shadow-lg"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-white mb-2">{testimonial.name}</h3>
          <p className="text-cyan-400 text-xl mb-1">{testimonial.niche} Creator</p>
          <p className="text-gray-400 mb-6">{testimonial.followerCount} followers</p>
          <p className="text-gray-300 italic text-lg mb-6">"{testimonial.quote}"</p>
          <p className="text-3xl font-bold text-cyan-400">{testimonial.stat}</p>
        </div>
      </div>
    </div>
  );

  // Layout 4: Modern card
  const Layout4 = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="group hover:scale-105 transition-transform duration-300">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all duration-300">
        <div className="relative h-48">
          <img 
            src={testimonial.appScreenshot} 
            alt={`${testimonial.name} app`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <img 
            src={testimonial.profileImage} 
            alt={`${testimonial.name} profile`}
            className="absolute bottom-4 left-4 w-20 h-20 rounded-full object-cover border-4 border-gray-900 shadow-lg"
          />
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{testimonial.name}</h3>
            <p className="text-cyan-400">{testimonial.niche} Creator • {testimonial.followerCount} followers</p>
          </div>
          
          <p className="text-gray-300 italic">"{testimonial.quote}"</p>
          
          <div className="pt-4 border-t border-gray-800">
            <p className="text-2xl font-bold text-cyan-400">{testimonial.stat}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLayout = (testimonial: Testimonial) => {
    switch (currentLayout) {
      case 1:
        return <Layout1 key={testimonial.id} testimonial={testimonial} />;
      case 2:
        return <Layout2 key={testimonial.id} testimonial={testimonial} />;
      case 3:
        return <Layout3 key={testimonial.id} testimonial={testimonial} />;
      case 4:
        return <Layout4 key={testimonial.id} testimonial={testimonial} />;
      default:
        return <Layout1 key={testimonial.id} testimonial={testimonial} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E1A] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Testimonial Layout Variations
        </h1>
        
        <LayoutToggle />
        
        <div className={`
          ${currentLayout === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : ''}
          ${currentLayout === 4 ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : ''}
          ${currentLayout === 1 || currentLayout === 3 ? 'space-y-8' : ''}
        `}>
          {testimonialData.map((testimonial) => renderLayout(testimonial))}
        </div>
      </div>
    </div>
  );
} 