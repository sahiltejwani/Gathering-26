import React from 'react';

const Team = () => {
  const cards = [
    {
      title: "Snow View",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://images.unsplash.com/photo-1581017601156-b4e8e53df291?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
    },
    {
      title: "Photoshoot mood",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://images.unsplash.com/photo-1581014023865-4209099f2b71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
    },
    {
      title: "3D View",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://images.unsplash.com/photo-1580842579866-b985411b5bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      title: "Explore The Canvas",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://images.unsplash.com/photo-1580986475035-f0778c60f5ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Dynamic Animated Background Layers */}
      
      {/* Layer 1: Floating Purple Nebula */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_30%,rgba(168,85,247,0.2),transparent_50%)] animate-[float_20s_ease-in-out_infinite]" />
      
      {/* Layer 2: Blue Nebula */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(59,130,246,0.15),transparent_50%)] animate-[float_25s_ease-in-out_infinite_reverse] [animation-delay:-5s]" />
      
      {/* Layer 3: Green Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(34,197,94,0.1),transparent_50%)] animate-[pulse_15s_ease-in-out_infinite]" />
      
      {/* Sparkling Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,#a855f7,transparent),radial-gradient(2px_2px_at_80px_80px,#3b82f6,transparent),radial-gradient(1px_1px_at_40px_40px,#10b981,transparent)] bg-size-[200px_100px] bg-repeat animate-[sparkle_20s_linear_infinite]" />
      
      {/* Additional Particle Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_90px_40px,#f59e0b,transparent),radial-gradient(1px_1px_at_130px_80px,#ef4444,transparent),radial-gradient(2px_2px_at_160px_30px,#ec4899,transparent)] bg-size-[200px_100px] bg-repeat animate-[sparkle_25s_linear_infinite] [animation-delay:-10s]" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid animate-[grid-move_40s_linear_infinite]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white mb-2 drop-shadow-2xl animate-[fade-in-up_1s_ease-out]">Card Design for COEP Gathering</h2>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-2xl h-80 sm:h-96 bg-white transition-all duration-700 ease-out animate-[fade-in-up_0.8s_ease-out] delay-${index * 100}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-[110%] bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/80 translate-y-1/2 transition-transform duration-1000 ease-out group-hover:translate-y-0" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white z-10 flex flex-col items-center justify-end h-full transition-transform duration-700 ease-out sm:translate-y-[calc(100%-4.5rem)] sm:group-hover:translate-y-0 sm:group-hover:justify-center">
                <h2 className="text-2xl font-bold mb-4 leading-tight">{card.title}</h2>
                <p className="italic text-lg leading-relaxed opacity-100 sm:opacity-0 sm:translate-y-4 transition-all duration-700 ease-out sm:group-hover:opacity-100 sm:group-hover:translate-y-0 delay-100">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
