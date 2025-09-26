import { Button } from '@/components/ui/button'; 
import { ArrowRight, Star, Users, Building, TrendingUp } from 'lucide-react';
import heroBg from '@/assets/qqq.jpeg';
import heroBgMobile from '@/assets/aa.jpg';
import LeadForm from '@/components/LeadForm';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center pt-20 md:pt-0"
      >
        {/* Desktop Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Mobile Background */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBgMobile})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary/60"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left side content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Trusted Real Estate Consultants in{' '}
                <span className="text-secondary">Gurgaon</span>
              </h1>

              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
                T and T Realty Services Private Ltd. <br /> Your trusted partner for premium 
                residential and commercial properties in Delhi NCR since 2014.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users size={32} className="text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-primary-foreground">2000+</div>
                  <div className="text-primary-foreground/80 text-sm">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Building size={32} className="text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-primary-foreground">500+</div>
                  <div className="text-primary-foreground/80 text-sm">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp size={32} className="text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-primary-foreground">10+</div>
                  <div className="text-primary-foreground/80 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star size={32} className="text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-primary-foreground">4.9</div>
                  <div className="text-primary-foreground/80 text-sm">Client Rating</div>
                </div>
              </div>
            </div>

            {/* Right side - Lead Form (desktop only) */}
            <div className="hidden md:flex justify-center md:justify-end">
              <LeadForm variant="compact" transparent />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form Section */}
      <section className="block md:hidden bg-gray-50 py-8 px-4">
        <div className="max-w-md mx-auto">
          <LeadForm variant="compact" />
        </div>
      </section>
    </>
  );
};

export default Hero;