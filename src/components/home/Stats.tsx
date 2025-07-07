import React from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  count: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ count, label, delay = 0 }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{count}</h3>
      <p className="text-blue-100">{label}</p>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem count="10,000+" label="Books Managed" delay={0} />
          <StatItem count="1,000+" label="Active Users" delay={0.1} />
          <StatItem count="50+" label="Libraries" delay={0.2} />
          <StatItem count="99.9%" label="Uptime" delay={0.3} />
        </div>
      </div>
    </div>
  );
};

export default Stats;