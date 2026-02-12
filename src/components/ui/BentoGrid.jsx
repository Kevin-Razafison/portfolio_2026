import { motion } from 'framer-motion';

export const BentoCard = ({ children, className, title }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`glass rounded-3xl p-6 flex flex-col gap-4 overflow-hidden relative ${className}`}
    >
      {title && <h3 className="opacity-50 font-bold text-sm uppercase tracking-widest">{title}</h3>}
      {children}
      {/* Petit reflet lumineux en haut à gauche */}
      <div className="-top-10 -left-10 absolute bg-primary/10 blur-[50px] rounded-full w-32 h-32" />
    </motion.div>
  );
};