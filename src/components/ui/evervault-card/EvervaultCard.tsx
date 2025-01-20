import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';

interface EvervaultCardProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  className?: string;
}

export const EvervaultCard: React.FC<EvervaultCardProps> = ({
  text = "hover",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative group/card w-full h-full",
        className
      )}
      {...props}
    >
      <div className="relative z-10 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative shadow-2xl rounded-2xl p-8 overflow-hidden h-full bg-[#0F0F23] border border-white/[0.08]"
        >
          <div className="relative z-20">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center text-3xl font-bold text-neutral-200"
            >
              {text}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute -inset-[1px] group-hover:blur-xl rounded-2xl transition duration-500 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20" />
    </div>
  );
};
