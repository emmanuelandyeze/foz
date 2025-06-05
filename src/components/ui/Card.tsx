import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	hoverable?: boolean;
	delay?: number;
}

const Card: React.FC<CardProps> = ({
	children,
	className = '',
	onClick,
	hoverable = false,
	delay = 0,
}) => {
	const hoverClass = hoverable
		? 'hover:shadow-lg hover:-translate-y-1'
		: '';

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5, delay: delay * 0.1 }}
			className={`bg-white dark:bg-neutral-900 rounded-xl shadow-md transition-all duration-300 ${hoverClass} ${className}`}
			onClick={onClick}
		>
			{children}
		</motion.div>
	);
};

export default Card;
