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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-800 mb-2">Card Design for COEP Gathering</h2>
        <h3 className="text-xl text-gray-600">Designed by: <strong className="font-semibold">Sahil Tejwani</strong></h3>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-2xl h-80 sm:h-96 bg-white transition-all duration-700 ease-out"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-[110%] bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 translate-y-1/2 transition-transform duration-1000 ease-out group-hover:translate-y-0" />
            
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
  );
};

export default Team;