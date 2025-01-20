import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
    import { CircuitBoard } from 'lucide-react';

    interface ContentMenuProps {
      isOpen: boolean;
      onToggle: () => void;
    }

    export const ContentMenu: React.FC<ContentMenuProps> = ({ isOpen, onToggle }) => {
      const [isSpinning, setIsSpinning] = useState(true);

      useEffect(() => {
        const timeoutId = setTimeout(() => {
          setIsSpinning(false);
        }, 5000); // Initial spin for 5 seconds

        return () => clearTimeout(timeoutId);
      }, []);

      const handleClick = () => {
        setIsSpinning(true);
        setTimeout(() => {
          setIsSpinning(false);
        }, 5000); // Spin for 5 seconds on click
        onToggle();
      };

      return (
        <motion.button
          onClick={handleClick}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CircuitBoard className={`w-6 h-6 ${isSpinning ? 'animate-spin' : ''}`} />
        </motion.button>
      );
    };
