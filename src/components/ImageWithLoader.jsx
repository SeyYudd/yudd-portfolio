import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageWithLoader = ({ src, alt, className, containerClassName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${containerClassName || ''}`}>
      {/* Loading skeleton */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/5 animate-pulse rounded-full flex items-center justify-center"
          >
            <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-white/5 rounded-full flex items-center justify-center">
          <span className="text-4xl">👤</span>
        </div>
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading || hasError ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default ImageWithLoader;
