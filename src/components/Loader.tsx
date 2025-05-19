import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="mb-6"
        >
          <Zap className="h-16 w-16 text-[#FF5722]" />
        </motion.div>
        
        <div className="relative w-64 h-2 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5722] to-transparent"
          ></motion.div>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-white"
        >
          Loading Golden Z Vision...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;