// components/CompanySection.jsx
import React from 'react';
import companyImage from '@/assets/q.jpeg';

const CompanySection = () => {
  return (
    <section className="py-12 bg-gray-50 flex justify-center items-center">
      <div className="w-full">
        <img
          src={companyImage}
          alt="Company"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default CompanySection;
