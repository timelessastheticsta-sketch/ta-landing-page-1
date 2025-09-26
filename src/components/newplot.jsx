// components/CompanySection.jsx
import React from 'react';
import companyImage from '@/assets/sco.jpeg';

const CompanySection = () => {
  const scrollToSection = (id) => {  // <- type annotation removed
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-gray-50 flex justify-center">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <img
            src={companyImage}
            alt="Company"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
<button
  onClick={() => scrollToSection('contact')}
  className="mt-5 w-full mx-auto bg-black text-white font-semibold tracking-wide py-4 text-lg rounded-md shadow-md hover:bg-[#FCBD01] hover:text-black transition-all duration-300"
>
  Book a Visit
</button>


      </div>
    </section>
  );
};

export default CompanySection;
