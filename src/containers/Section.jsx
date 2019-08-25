import React from "react";
import Fade from "react-reveal/Fade";

const Section = ({ title, id, children }) => {
  return (
    <Fade bottom>
      <div>
        <hr className="border border-gray-900" />
        <section
          id={id}
          className="p-12 flex flex-col md:flex-row w-full items-center justify-between"
        >
          <div className="w-full md:w-1/6 self-start">
            {title && (
              <p className="section-title select-none font-expanded font-bold text-gray-500 md:text-gray-900 text-5xl md:text-7xl lg:text-7xl mb-5 md:mb-0">
                {title}
              </p>
            )}
          </div>
          <div className="w-full md:w-9/12 flex flex-col justify-end">
            {children}
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Section;
