import React from 'react';
import { motion } from 'framer-motion';
import {
	Globe,
	Smartphone,
	Palette,
	Building2,
	Cloud,
	Lightbulb,
	Headset as HeadsetHelp,
} from 'lucide-react';
import Section from '../../ui/Section';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';

const services = [
	{
		icon: (
			<Globe className="w-10 h-10 text-primary-600 dark:text-primary-400" />
		),
		title: 'Web Development',
		description:
			'Custom web applications and responsive websites built with modern technologies and frameworks.',
	},
	{
		icon: (
			<Smartphone className="w-10 h-10 text-primary-600 dark:text-primary-400" />
		),
		title: 'Mobile App Development',
		description:
			'Native and cross-platform mobile applications for iOS and Android platforms.',
	},
	{
		icon: (
			<Palette className="w-10 h-10 text-primary-600 dark:text-primary-400" />
		),
		title: 'UI/UX Design',
		description:
			'User-centered design approach to create intuitive and engaging digital experiences.',
	},
	{
		icon: (
			<Building2 className="w-10 h-10 text-primary-600 dark:text-primary-400" />
		),
		title: 'Enterprise Software',
		description:
			'Custom enterprise solutions to streamline business processes and improve efficiency.',
	},
	// {
	// 	icon: (
	// 		<Cloud className="w-10 h-10 text-primary-600 dark:text-primary-400" />
	// 	),
	// 	title: 'Cloud Services',
	// 	description:
	// 		'Cloud infrastructure setup, migration, and management for optimal performance and scalability.',
	// },
	{
		icon: (
			<Lightbulb className="w-10 h-10 text-primary-600 dark:text-primary-400" />
		),
		title: 'Tech Consulting',
		description:
			'Strategic technology guidance to help businesses navigate digital transformation and innovation.',
	},
	{
		icon: (
			<HeadsetHelp className="w-10 h-10 text-primary-600 dark:text-primary-400" />
		),
		title: 'IT Support',
		description:
			'Comprehensive IT support services to ensure smooth operation of your technology infrastructure.',
	},
];

const FeaturedServices: React.FC = () => {
	return (
		<Section
			title="Our Services"
			subtitle="We provide a comprehensive range of software development and technology services to help businesses innovate and grow."
			id="services"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{services.map((service, index) => (
					<Card
						key={index}
						hoverable
						className="p-6"
						delay={index}
					>
						<div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg inline-block mb-4">
							{service.icon}
						</div>
						<h3 className="text-xl font-semibold mb-3">
							{service.title}
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400 mb-4">
							{service.description}
						</p>
						<Link
							to="/services"
							className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center hover:underline"
						>
							Learn more
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 ml-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</Link>
					</Card>
				))}
			</div>

			<div className="mt-12 text-center">
				<Button to="/services" variant="primary" size="lg">
					View All Services
				</Button>
			</div>
		</Section>
	);
};

export default FeaturedServices;
