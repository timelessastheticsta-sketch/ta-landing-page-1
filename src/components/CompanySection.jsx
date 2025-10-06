// components/CompanySection.jsx
import React from 'react';
import companyImage from '@/assets/q.jpg';
import secondImage from '@/assets/saas.jpeg';

const CompanySection = () => {
  return (
    <section className="py-12 bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Image */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-3xl border border-gray-200 shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src={companyImage}
              alt="Company 1"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-3xl border border-gray-200 shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src={secondImage}
              alt="Company 2"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
