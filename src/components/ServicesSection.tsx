import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Gamepad2Icon, 
  BrainCircuitIcon, 
  Glasses, 
  ServerIcon, 
  LineChartIcon, 
  PuzzleIcon 
} from 'lucide-react';

const services = [
  {
    icon: <Gamepad2Icon className="h-12 w-12" />,
    title: "Custom Game Development",
    description: "From concept to release, we create tailored gaming experiences across various genres and platforms, ensuring high-quality gameplay that captivates players."
  },
  {
    icon: <BrainCircuitIcon className="h-12 w-12" />,
    title: "AI Integration",
    description: "We integrate AI into games and applications, enabling advanced character behaviors, automated processes, and smarter user experiences."
  },
  {
    icon: <Glasses className="h-12 w-12" />,
    title: "AR/VR Solutions",
    description: "We develop cutting-edge Augmented Reality (AR) and Virtual Reality (VR) applications for various industries, bringing immersive experiences to life."
  },
  {
    icon: <ServerIcon className="h-12 w-12" />,
    title: "Enterprise Software",
    description: "We build robust, scalable enterprise solutions that streamline business operations, improve efficiency, and drive innovation in your organization."
  },
  {
    icon: <LineChartIcon className="h-12 w-12" />,
    title: "Consulting & Strategy",
    description: "Our expert team provides consulting services, helping businesses optimize their digital strategies, implement technology solutions, and innovate effectively."
  },
  {
    icon: <PuzzleIcon className="h-12 w-12" />,
    title: "Interactive Experiences",
    description: "We specialize in creating interactive installations for museums, retail spaces, and events, allowing users to engage with content in meaningful ways."
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="glass-card rounded-xl p-8 relative overflow-hidden group"
    >
      {/* Neon border effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-xl border border-[#FF5722] shadow-[0_0_15px_rgba(255,87,34,0.5)]"></div>
      </div>
      
      {/* Icon with glow effect */}
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full bg-[rgba(255,87,34,0.1)] text-[#FF5722] group-hover:animate-glow">
          {service.icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-center group-hover:text-[#FF5722] transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-300 text-center">
        {service.description}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #121212, #0A0A0A)'
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[50%] -right-[50%] w-[100%] h-[100%] bg-[radial-gradient(circle,_rgba(255,87,34,0.05)_0%,_transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ y }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="neon-orange">WHAT CAN WE</span> <span className="neon-white">DO?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            At GoldenZ Vision, we are committed to transforming ideas into reality. Here's what we can do for you:
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;