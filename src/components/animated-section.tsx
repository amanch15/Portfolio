// src/components/animated-section.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
}

export function AnimatedSection({ children }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
