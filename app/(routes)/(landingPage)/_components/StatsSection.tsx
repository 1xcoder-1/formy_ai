"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, FileText, CheckCircle, Globe } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Active Users",
    value: "10K+",
    target: 10,
    suffix: "K+",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    id: 2,
    name: "Forms Created",
    value: "500K+",
    target: 500,
    suffix: "K+",
    icon: FileText,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    id: 3,
    name: "Completion Rate",
    value: "99.9%",
    target: 99.9,
    suffix: "%",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/20",
  },
  {
    id: 4,
    name: "Global Reach",
    value: "120+",
    target: 120,
    suffix: "+",
    icon: Globe,
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/20",
  },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return target % 1 === 0 ? Math.round(latest) : parseFloat(latest.toFixed(1));
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, target, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section id="stats" className="pt-20 pb-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group"
            >
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                <Counter target={stat.target} suffix={stat.suffix} />
              </h3>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                {stat.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
