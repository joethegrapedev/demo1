import React, { useState } from 'react';
import Title from './Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Achievement from './Achievement';
import { Tab } from '@headlessui/react';
import { FadeIn } from './FadeIn';

const teamMembers = {
  leaders: [
    { 
      name: "Dr. Leslie Kuek", 
      role: "Founder / Plastic Surgeon", 
      image: "https://www.farrerpark.com/dam/jcr:5f16b4d2-012c-4bf3-9062-974f94ac7b5e/LeslieKuek.jpg" // Direct URL to the image
    },
    { 
      name: "Nurse Cordelia", 
      role: "Lead Nurse", 
      image: "/src/assets/images/people/nurses&volunteers/john-doe.jpg" 
    },
    { 
      name: "Prof. Lee Seng Teik", 
      role: "Advisor", 
      image: "https://mindfulnessacademy.org/images/events/conferences/2015-MTeachers/speakers/LeeSengTeik-pt.jpg" 
    },
    { 
      name: "Dr. Woffles Wu", 
      role: "Lead Plastic Surgeon", 
      image: "https://www.woffleswu.com/wp-content/uploads/2020/04/dr-woffles-wu.jpg" 
    },
  ],
  // surgeons: [
  //   { name: "Dr. Emily Chen", image: "/src/assets/images/people/surgeons/emily-chen.jpg" },
  //   { name: "Dr. Michael Wong", image: "/src/assets/images/people/surgeons/michael-wong.jpg" },
  //   { name: "Dr. Sarah Johnson", image: "/src/assets/images/people/surgeons/sarah-johnson.jpg" },
  // ],
  // nursesAndVolunteers: [
  //   { name: "Maria Garcia", image: "/src/assets/images/people/nurses&volunteers/maria-garcia.jpg" },
  //   { name: "David Lee", image: "/src/assets/images/people/nurses&volunteers/david-lee.jpg" },
  //   { name: "Emma Wilson", image: "/src/assets/images/people/nurses&volunteers/emma-wilson.jpg" },
  //   { name: "Alex Tan", image: "/src/assets/images/people/nurses&volunteers/alex-tan.jpg" },
  // ],
};

const Resume = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  //  <section
  //      id="features"
  //      className="w-full py-20 border-b-[1px] border-b-gray-700"
  //  ></section>
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700">
        <FadeIn>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Story</h1>
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/2 aspect-video relative">
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <p className="text-gray-500">Loading video...</p>
              </div>
            )}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_dih2JOb2C8" //https://youtu.be/_dih2JOb2C8
              title="MyLaoSmile Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setVideoLoaded(true)}
              className={`absolute inset-0 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            ></iframe>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">The History of MyLaoSmile</h2>
            <p className="text-gray-700 mb-4">
              MyLaoSmile was founded in 2010 by a group of passionate healthcare professionals who recognized the urgent need for cleft lip and palate surgeries in Laos. What started as a small team of volunteers has grown into a robust organization that has transformed thousands of lives.
            </p>
            <p className="text-gray-700 mb-4">
              Over the years, we've expanded our reach from the capital city of Vientiane to remote areas across Laos. Our commitment to providing high-quality care and comprehensive support has made us a trusted name in cleft care throughout the country.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        {Object.keys(teamMembers).map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers[category].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-square relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-lg object-cover w-full h-full"
                      onError={(e) => {
                        e.currentTarget.src = 'fallback-image-url'; // Optional: Add a fallback image URL
                        e.currentTarget.alt = 'Fallback Image';
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  {member.role && (
                    <p className="text-gray-600">{member.role}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </FadeIn>
    </section>
  );
};

export default Resume;
