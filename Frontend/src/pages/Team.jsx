import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { team } from "../data/team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Starfield from "../components/Starfield";

const TeamCard = ({ image, name, role, instagram, linkedin }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

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
        ease: "power1.out",
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        transformPerspective: 500,
        ease: "power1.out",
        duration: 0.5,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={() => setIsActive(!isActive)}
      className="w-64 h-96 cursor-pointer group"
    >
      <div
        ref={cardRef}
        className="relative w-full h-full rounded-xl transform-style-3d transition-transform duration-300"
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-cover bg-center rounded-xl transition-all duration-300 ${
            isActive
              ? "brightness-50"
              : "brightness-75 group-hover:brightness-50"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-xl transition-opacity duration-300 ${
            isActive
              ? "opacity-100"
              : "opacity-20 group-hover:opacity-100"
          }`}
        />

        {/* Content */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 ${
            isActive
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          }`}
        >
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-white/80">{role}</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-3">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-pink-400 transition"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-blue-400 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamsSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-fixed bg-cover bg-teamsBackground">
      
      {/* Star Background */}
      <Starfield />

      {/* Content */}
      <div className="relative z-10 pt-32 md:pt-40 lg:pt-48 text-center">

        {/* Title */}
        <h1
          className="mb-16 text-5xl md:text-6xl font-extrabold tracking-wider text-white uppercase font-paperHeader drop-shadow-lg"
          style={{
            WebkitTextStroke: "0.01px black",
            textShadow: "2px 2px 2px black",
          }}
        >
          CORE TEAM
        </h1>

        {/* Sections */}
        <div className="px-4">
          {team.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={sectionIndex < team.length - 1 ? "mb-40" : "mb-20"}
            >
              <h2
                className="mb-12 text-3xl md:text-5xl font-extrabold text-white uppercase drop-shadow-md"
                style={{ WebkitTextStroke: "1px grey" }}
              >
                {section.title}
              </h2>

              <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center">
                {section.members.map((member, memberIndex) => (
                  <TeamCard
                    key={`${sectionIndex}-${memberIndex}`}
                    image={member.image}
                    name={member.name}
                    role={member.role}
                    instagram={member.instagram}
                    linkedin={member.linkedin}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamsSection;
