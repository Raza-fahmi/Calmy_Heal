import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center flex-row gap-2 w-full bg-white shadow-xl hover:bg-fourt p-5 rounded-md transition-colors duration-700 focus:outline-none"
      >
        <span className="text-left">{title}</span>
        <div className="w-10 h-10 flex items-center justify-center">
          {accordionOpen ? (
            <svg
              className="w-4 h-4 lg:w-6 lg:h-6 transition-transform duration-500 transform rotate-180"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.5227 2.78183L13.1523 13.1523C12.5159 13.7887 11.4841 13.7887 10.8477 13.1523L0.477287 2.78183C-0.159095 2.14545 -0.159095 1.11367 0.477287 0.477286C1.11367 -0.159097 2.14545 -0.159097 2.78183 0.477286L12 9.69546L21.2182 0.477287C21.8546 -0.159096 22.8863 -0.159096 23.5227 0.477287C24.1591 1.11367 24.1591 2.14545 23.5227 2.78183Z"
                fill="#04364A"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 lg:w-6 lg:h-6 transition-transform duration-500 transform"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.5227 2.78183L13.1523 13.1523C12.5159 13.7887 11.4841 13.7887 10.8477 13.1523L0.477287 2.78183C-0.159095 2.14545 -0.159095 1.11367 0.477287 0.477286C1.11367 -0.159097 2.14545 -0.159097 2.78183 0.477286L12 9.69546L21.2182 0.477287C21.8546 -0.159096 22.8863 -0.159096 23.5227 0.477287C24.1591 1.11367 24.1591 2.14545 23.5227 2.78183Z"
                fill="#04364A"
              />
            </svg>
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
          accordionOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white rounded-lg p-2 shadow-xl">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
