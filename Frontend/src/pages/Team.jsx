import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import teamData from '../data/team.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

/* ================= TEAM CARD ================= */

const TeamCard = ({ image, name, role, instagram, linkedin }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      gsap.to(card, {
        rotationX: -mouseY / 20,
        rotationY: mouseX / 20,
        transformPerspective: 500,
        ease: 'power1.out',
        duration: 0.4
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        transformPerspective: 500,
        ease: 'power1.out',
        duration: 0.4
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const bgImage = image ? `url(${image})` : 'none';

  return (
    <div
      ref={containerRef}
      className="w-64 h-96 perspective-800 group"
    >
      <div
        ref={cardRef}
        className="relative w-full h-full transition-transform duration-300 ease-out transform-style-3d backface-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover rounded-xl shadow-lg shadow-black brightness-75 group-hover:brightness-50 transition-all duration-300"
          style={{ backgroundImage: bgImage }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black/70 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="
  absolute bottom-0 left-0 right-0 p-6 text-white
  transition-all duration-300
  translate-y-0 opacity-100
  md:translate-y-10 md:opacity-0
  md:group-hover:translate-y-0 md:group-hover:opacity-100
">
          <h3 className="mb-1 text-xl font-bold">{name}</h3>
          {/* <p className="text-sm text-white/80">{role}</p> */}

          <div className="flex mt-2 space-x-3">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= TEAMS SECTION ================= */

const TeamsSection = () => {
  return (
    <div
  className="relative min-h-[100svh] overflow-hidden bg-fixed bg-no-repeat bg-cover bg-center"
  // className="relative min-h-[100svh] bg-fixed bg-cover bg-center"
   style={{
     backgroundImage: "url('/images/team/back_image.webp')",
   }}
>
  <div className="absolute inset-0 bg-black/10" />

      {/* Header */}
      <div className="mt-20 mb-12 text-center text-white uppercase drop-shadow-md font-paperHeader">
        {/* <p
          className="text-[2em] font-extrabold"
          style={{
            WebkitTextStroke: '0.01px black',
            textShadow: '2px 2px 2px black'
          }}
        >
          9th EDITION
        </p> */}
        <p
          className="text-5xl font-extrabold tracking-wider"
          style={{
            WebkitTextStroke: '0.01px black',
            textShadow: '2px 2px 2px black'
          }}
        >
          CORE TEAM
        </p>
      </div>

      {/* Sections */}
      <div className="px-4 overflow-hidden">
        {teamData.map((section, sectionIndex) => (
          <div
            key={section.title}
            className={sectionIndex < teamData.length - 1 ? 'mb-40' : 'mb-10'}
          >
            <h2
              className="mb-12 text-3xl md:text-5xl font-extrabold tracking-wider text-center text-white uppercase drop-shadow-md"
              style={{ WebkitTextStroke: '1px grey' }}
            >
              {section.title}
            </h2>

            <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-center md:space-y-0 md:space-x-8">
              {section.members.map((member) => (
                <TeamCard
                  key={member.name}
                  image={member.image}
                  name={member.name}
                  // role={member.role}
                  instagram={member.instagram}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsSection;
