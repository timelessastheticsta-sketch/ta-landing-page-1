import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  HeartPulse, 
  GraduationCap, 
  Scissors, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Courses",
      description: "A long list of professional aesthetics courses taught by leading industry experts in India.",
      features: [
        "Permanent Makeup",
        "Cosmetology",
        "Facial Aesthetics",
        "Fellowship Courses"
      ]
    },
    {
      icon: HeartPulse,
      title: "Treatments",
      description: "The best non-surgical beauty treatments for skincare, aging, and rejuvenation.",
      features: [
        "Skin Rejuvenation",
        "Anti-Aging Treatments",
        "Permanent Makeup",
        "Laser Treatments"
      ]
    },
    {
      icon: Sparkles,
      title: "Advanced Certifications",
      description: "Government-certified, globally accredited professional training programs.",
      features: [
        "PG Diploma in Permanent Makeup",
        "Master’s in Eyebrows & Scalp Micropigmentation",
        "Certificate Courses in Lips, Brows & Lash Lift"
      ]
    },
    {
      icon: Scissors,
      title: "Workshops & Hands-on Training",
      description: "Exclusive hands-on learning sessions with expert trainers for real-world experience.",
      features: [
        "Live Demonstrations",
        "One-on-One Training",
        "AAM Certified Trainers",
        "Career Guidance"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Timeless Aesthetics{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Expert cosmetic treatments and professional education – discover beauty and excellence at Timeless Aesthetics.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl border border-gray-100">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-5 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-full shadow-lg">
                      <service.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-10 md:p-16 rounded-3xl text-center text-black mb-20 shadow-xl bg-[radial-gradient(circle_at_center,_#FBE03F,_#F68C1E_80%)]"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey in Aesthetics?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Whether you’re aspiring to become an aesthetic expert or seeking professional beauty treatments, Timeless Aesthetics is your trusted partner.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-black text-white hover:bg-gray-800 font-semibold transition-all"
          >
            Apply Now
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
