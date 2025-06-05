import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Button from '../../ui/Button';

const Hero: React.FC = () => {
	return (
		<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 text-white">
			{/* Gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-950/90 z-10"></div>

			{/* Background pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
			</div>

			<div className="container relative z-20">
				<div className="max-w-3xl mx-auto text-center">
					<motion.h1
						className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Building Scalable Software Solutions for Africa
						and Beyond
					</motion.h1>

					<motion.p
						className="text-xl md:text-2xl text-white/80 mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						We create cutting-edge software that empowers
						businesses to transform digitally and compete
						globally.
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Button
							to="/contact"
							size="lg"
							variant="secondary"
							icon={<ChevronRight className="w-5 h-5" />}
						>
							Let's Build Together
						</Button>
						<Button
							to="/services"
							size="lg"
							variant="outline"
							className="border-white text-white hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10"
						>
							Explore Our Services
						</Button>
					</motion.div>
				</div>
			</div>

			{/* Wave shape divider */}
			<div className="absolute bottom-0 left-0 right-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 120"
					className="w-full h-auto"
				>
					<path
						fill="currentColor"
						fillOpacity="1"
						className="text-white dark:text-neutral-950"
						d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,74.7C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>
			</div>
		</section>
	);
};

export default Hero;
