'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

/** Next.js `Link` with Framer Motion — use for in-app navigation with tap/hover feedback. */
export const MotionLink = motion.create(Link);
