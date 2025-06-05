import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
	children: React.ReactNode;
	className?: string;
	title?: string;
	subtitle?: string;
	id?: string;
	fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({
	children,
	className = '',
	title,
	subtitle,
	id,
	fullWidth = false,
}) => {
	return (
		<section
			id={id}
			className={`py-16 md:py-24 ${className}`}
		>
			{(title || subtitle) && (
				<div className="container mb-12">
					{title && (
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.5 }}
							className="text-3xl md:text-4xl font-bold mb-6 text-center"
						>
							{title}
						</motion.h2>
					)}
					{subtitle && (
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-lg text-neutral-600 dark:text-neutral-300 text-center max-w-3xl mx-auto"
						>
							{subtitle}
						</motion.p>
					)}
				</div>
			)}
			<div className={fullWidth ? '' : 'container'}>
				{children}
			</div>
		</section>
	);
};

export default Section;
