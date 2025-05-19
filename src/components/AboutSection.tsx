import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ZapIcon, Code2Icon, BrainIcon, LayoutIcon } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const features = [
    {
      icon: <ZapIcon className="h-10 w-10 text-[#FF5722]" />,
      title: "Innovative Solutions",
      description: "We push boundaries with cutting-edge technology to deliver groundbreaking products."
    },
    {
      icon: <Code2Icon className="h-10 w-10 text-[#FF5722]" />,
      title: "Expert Development",
      description: "Our team of skilled developers creates robust, scalable, and high-performance applications."
    },
    {
      icon: <BrainIcon className="h-10 w-10 text-[#FF5722]" />,
      title: "AI Integration",
      description: "We harness the power of artificial intelligence to enhance user experiences and automate processes."
    },
    {
      icon: <LayoutIcon className="h-10 w-10 text-[#FF5722]" />,
      title: "Immersive Experiences",
      description: "We specialize in creating captivating AR/VR solutions that bring ideas to life."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #1a1a1a, #121212)'
      }}
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#121212] opacity-70"></div>
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(255,87,34,0.1)_0%,_transparent_50%)] animate-[spin_60s_linear_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ y, opacity }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="neon-orange">About</span> <span className="neon-white">Golden Z Vision</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-300 mb-6">
              At Golden Z Vision, we are committed to transforming ideas into reality. Our team of experts leverages cutting-edge technologies to create immersive and interactive experiences that push the boundaries of innovation.
            </p>
            <p className="text-lg text-gray-300">
              With expertise in game development, AI integration, AR/VR solutions, and enterprise software, we provide comprehensive technology solutions that drive growth and innovation for our clients.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,87,34,0.3)]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 rounded-full p-3 bg-[rgba(255,87,34,0.1)] animate-glow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;