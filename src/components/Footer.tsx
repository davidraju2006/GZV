import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Facebook,
  Youtube 
} from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Github className="h-5 w-5" />, href: "#" },
    { icon: <Youtube className="h-5 w-5" />, href: "#" }
  ];
  
  const footerLinks = [
    { title: "Company", links: ["About Us", "Careers", "News", "Partners"] },
    { title: "Services", links: ["Game Development", "AR/VR Solutions", "AI Integration", "Enterprise Software"] },
    { title: "Resources", links: ["Blog", "Case Studies", "Documentation", "FAQs"] }
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative pt-16 pb-6 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #121212, #0A0A0A)',
        boxShadow: 'inset 0 1px 0 rgba(255, 87, 34, 0.1)'
      }}
    >
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_rgba(255,87,34,0.05)_0%,_transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Zap className="text-[#FF5722] h-8 w-8" />
              <span className="text-2xl font-bold">
                <span className="neon-orange">Golden</span>
                <span className="neon-white">Z Vision</span>
              </span>
            </a>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming ideas into reality with cutting-edge technology, immersive experiences, and innovative solutions. We're dedicated to pushing the boundaries of what's possible.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-2 rounded-full bg-[rgba(255,255,255,0.05)] text-white hover:text-[#FF5722] hover:bg-[rgba(255,87,34,0.1)] transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-[#FF5722] transition-colors duration-300 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Golden Z Vision. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#FF5722] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#FF5722] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-[#FF5722] text-sm transition-colors duration-300">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;