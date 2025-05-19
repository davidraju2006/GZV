import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2Icon } from 'lucide-react';

  const projects = [
    {
      id: 'bus-tracking',
      title: 'Bus Tracking Application for Institutions',
      description: 'Our innovative bus tracking application allows institutions to monitor school bus locations in real-time, ensuring safety and punctuality for every student. Parents can track the live location of the bus, receive arrival notifications, and reduce waiting times, while schools gain better operational efficiency.',
      features: [
        'Real-time GPS tracking for buses',
        'Instant notifications for pick-up and drop-off times',
        'Enhanced student safety with live monitoring',
        'Easy access for parents via a mobile app'
      ],
      image: '/kp218vwycd861.jpg', // Better school bus image
      category: 'enterprise'
    },
    {
      id: 'echoes',
      title: 'ECHOES: IMPACT OF HIDING (EOH)',
      description: 'A suspenseful horror-survival game that challenges players to stay calm under pressure while escaping from a dark and eerie underground base.',
      features: [
        'Immersive horror atmosphere with eerie visuals and sound effects',
        'Tension-filled survival mechanics – Control your heartbeat to stay alive!',
        'Exploration-based gameplay – Search for hidden buttons to unlock the escape route',
        'Simple yet challenging experience – Easy controls, but intense survival moments!'
      ],
      image: '/eohh.jpg',
      category: 'games'
    },
    {
      id: 'hapticverse-vr',
      title: 'HapticVerse VR Dental Simulation',
      description: 'A next-gen virtual reality training platform for dental students that provides hands-on practice in a risk-free environment with haptic feedback.',
      features: [
        'High-fidelity 3D dental models',
        'Interactive tooth preparation and restoration tasks',
        'Performance evaluation dashboard for students and teachers',
        'Realistic haptic feedback to mimic real dental procedures'
      ],
      image: 'https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'ar-vr'
    },
    {
      id: 'food-booking',
      title: 'Smart Food Booking App',
      description: 'A convenient food ordering system for institutions and companies, enabling users to pre-book meals and reduce cafeteria wait times.',
      features: [
        'Pre-order meals from daily menus',
        'Real-time kitchen status and estimated delivery times',
        'User profiles with dietary preferences',
        'Admin dashboard for canteen staff and analytics'
      ],
      image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'enterprise'
    },
    {
      id: '3d-modelling',
      title: '3D Modeling & Visualization Services',
      description: 'We offer professional 3D modeling services for products, architecture, and game assets to help you visualize concepts with stunning detail.',
      features: [
        'Custom 3D asset creation for games and apps',
        'Product and architectural visualization',
        'Animation-ready model exports',
        'Collaboration with designers and developers'
      ],
      image: '/3d.jpg',
      category: 'design'
    }
  ];
  

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-xl overflow-hidden group"
    >
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="space-y-2">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle2Icon className="text-[#FF5722] h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredProjects = activeCategory 
    ? projects.filter(project => project.category === activeCategory)
    : projects;
    
  const categories = [
    { id: null, name: 'All Projects' },
    { id: 'games', name: 'Games' },
    { id: 'ar-vr', name: 'AR/VR' },
    { id: 'enterprise', name: 'Enterprise' },
    { id: 'ai', name: 'AI Solutions' }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #0A0A0A, #121212)'
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle,_rgba(255,87,34,0.07)_0%,_transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="neon-orange">WHAT CURRENTLY</span> <span className="neon-white">WE ARE DOING</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our current projects are focused on leveraging cutting-edge technologies to create immersive and interactive experiences that push the boundaries of innovation.
          </p>
        </motion.div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id ?? 'all'}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-[#FF5722] text-white' 
                  : 'bg-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,87,34,0.3)]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory ?? 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;