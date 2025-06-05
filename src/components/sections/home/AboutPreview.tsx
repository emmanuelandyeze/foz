import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Section from '../../ui/Section';
import Button from '../../ui/Button';

const AboutPreview: React.FC = () => {
	const features = [
		'Experienced team of software engineers',
		'Focus on African markets and global scalability',
		'Agile development methodology',
		'Commitment to quality and security',
		'Innovative and scalable solutions',
		'Client-centric approach',
	];

	return (
		<Section
			id="about-preview"
			className="bg-neutral-50 dark:bg-neutral-900"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.5 }}
						className="text-3xl md:text-4xl font-bold mb-6"
					>
						About Foz
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-lg text-neutral-600 dark:text-neutral-300 mb-6"
					>
						Founded in 2018, Foz is a leading software
						development company based in Nigeria, focused on
						creating cutting-edge solutions for businesses
						across Africa and beyond.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-lg text-neutral-600 dark:text-neutral-300 mb-8"
					>
						Our mission is to empower organizations with
						technology solutions that drive growth,
						efficiency, and innovation. We combine technical
						excellence with deep understanding of local
						market dynamics to deliver solutions that truly
						work for African contexts.
					</motion.p>

					<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-8">
						{features.map((feature, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{
									duration: 0.3,
									delay: 0.3 + index * 0.1,
								}}
								className="flex items-center"
							>
								<CheckCircle2 className="text-primary-600 dark:text-primary-400 w-5 h-5 mr-2 flex-shrink-0" />
								<span className="text-neutral-700 dark:text-neutral-300">
									{feature}
								</span>
							</motion.li>
						))}
					</ul>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						<Button to="/about" variant="primary">
							Learn More About Us
						</Button>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.5 }}
					className="rounded-xl overflow-hidden shadow-xl"
				>
					<img
						src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="Foz team collaboration"
						className="w-full h-auto"
					/>
				</motion.div>
			</div>
		</Section>
	);
};

export default AboutPreview;
