import React from "react";

interface HobbyCardProps {
  title: string;
  image: string;
  description: string;
  skills: string[];
}

const HobbyCard: React.FC<HobbyCardProps> = ({ title, image, description, skills }) => {
  return (
    <div className="flex flex-col border rounded-2xl shadow-lg p-4 w-[275px]">
      <div className="flex items-center mb-2">
        <h2 className="text-lg font-bold mr-2">{title}:</h2>
        <h3 className="text-base">{description}</h3>
      </div>
      <div className="flex items-center">
        <img src={image} alt={title} className="w-20 h-20 rounded-full object-cover" />
        <div className="ml-6 text-left">
          <span className="text-base font-semibold">Soft skills:</span>
          <ul className="list-disc pl-8">
            {skills.map((skill, index) => (
              <li key={index} className="pl-2">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HobbyCard;