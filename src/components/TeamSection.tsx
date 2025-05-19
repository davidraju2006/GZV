import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const teamMembers = [
  {
    name: 'Akshaya Raj',
    role: 'Founder and Chief Executive Officer',
    image: '/akshay.jpg',
    bio: 'Visionary leader with extensive experience in game development and technology innovation.'
  },
  {
    name: 'Mogana Murali',
    role: 'Co-Founder and Chief Technology Officer',
    image: '/Murali.jpg',
    bio: 'Expert in AI and AR/VR technologies with a passion for creating immersive digital experiences.'
  },
  {
    name: 'Dhanush',
    role: 'Co-Founder and Chief Data Officer',
    image: '/dy.jpg',
    bio: 'Data scientist and machine learning specialist focused on implementing cutting-edge AI solutions.'
  },
  {
    name: 'David Raju',
    role: 'Chief Operating Officer',
    image: '/coo-photo.jpg',
    bio: 'Award-winning designer with expertise in creating engaging user interfaces and visual experiences.'
  },
  {
    name: 'Mohammed Aashiq',
    role: 'Chief Financial Officer',
    image: '/cfo-photo.jpg',
    bio: 'Finance strategist dedicated to sustainable business growth and managing tech startup budgets efficiently.'
  },
  {
    name: 'Dinesh',
    role: 'Chief Marketing Officer',
    image: '/cmo-photo.jpg',
    bio: 'Creative mastermind behind branding, storytelling, and visual communication in the digital realm.'
  },
  {
    name: 'Ajay',
    role: 'Chief Communication Officer',
    image: '/CCO.png',
    bio: 'Creative mastermind behind branding, storytelling, and visual communication in the digital realm.'
  },
  {
    name: 'Guhan',
    role: 'Chief Digital Marketing Officer',
    image: '/CDMO.jpg',
    bio: 'Marketing innovator with expertise in digital campaigns and user engagement strategies.'
  },
  
];


const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="glass-card rounded-xl overflow-hidden transform transition-all group-hover:shadow-[0_0_30px_rgba(255,87,34,0.2)]">
        <div className="relative aspect-square overflow-hidden">
          {/* Holographic effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,87,34,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
          {/* Scan line effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(255,255,255,0.05)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-20"></div>
          
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Glowing border on hover */}
          <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#FF5722] transition-all duration-500 rounded-t-xl opacity-0 group-hover:opacity-70 z-30"></div>
        </div>
        
        <div className="p-6 text-center relative">
          {/* Animated background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,87,34,0)] via-[rgba(255,87,34,0.1)] to-[rgba(255,87,34,0)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite linear' }}></div>
          
          <h3 className="text-xl font-bold mb-1 group-hover:text-[#FF5722] transition-colors duration-300">{member.name}</h3>
          <p className="text-sm font-medium text-gray-400 mb-3">{member.role}</p>
          <p className="text-sm text-gray-300">{member.bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #121212, #0A0A0A)'
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,87,34,0.05)_0%,_transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="neon-orange">Our Leadership</span> <span className="neon-white">Team</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Meet the visionaries behind Golden Z Vision, driving innovation and excellence in everything we do.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;