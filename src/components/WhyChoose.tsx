// src/components/WhyChoose.tsx
import { Card, CardContent } from "@/components/ui/card";
import { HeartPulse, Sparkles, ShieldCheck, Users2 } from "lucide-react";
import { motion } from "framer-motion";

const whyChoose = [
  {
    icon: HeartPulse,
    title: "Expert DAaaAAaASASermatologists",
    description:
      "Our certified and highly experienced dermatologists ensure safe, effective, and customized treatments for every skin type.",
  },
  {
    icon: Sparkles,
    title: "Advanced Technology",
    description:
      "We use FDA-approved, world-class equipment and modern techniques to deliver visible and long-lasting results.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Hygiene First",
    description:
      "Your safety is our top priority — our clinic follows strict hygiene protocols and uses sterilized equipment for every procedure.",
  },
  {
    icon: Users2,
    title: "Personalized Care",
    description:
      "Every treatment is tailored to your unique skin and body needs, ensuring a luxurious and comfortable experience.",
  },
];

const WhyChoose = () => {
  return (
    <motion.section
      id="why-choose"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
        Why Choose{" "}
        <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
          Timeless Aesthetics?
        </span>
      </h3>

      {/* Cards */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {whyChoose.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-2xl bg-white/90 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-black rounded-full text-white shadow-lg">
                    <item.icon size={28} />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-black">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChoose;
