import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ title, isOpen, onToggle, children, index }) => {
  return (
    <div className="border-b border-white/10">
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-accent/50 text-sm font-mono">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white group-hover:text-accent transition-colors duration-200">
            {title}
          </h2>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors duration-200"
        >
          {isOpen ? (
            <Minus size={20} className="text-accent" />
          ) : (
            <Plus size={20} />
          )}
        </motion.div>
      </button>

      {/* Accordion Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pb-12 pl-0 md:pl-14">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
