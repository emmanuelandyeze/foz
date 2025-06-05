import React from 'react';
import { motion } from 'framer-motion';
import {
	CheckCircle2,
	BarChart3,
	Code2,
	Users,
	Lightbulb,
} from 'lucide-react';
import Section from '../components/ui/Section';
import { teamMembers } from '../data/team';

const AboutPage: React.FC = () => {
	const values = [
		{
			icon: (
				<Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
			),
			title: 'Technical Excellence',
			description:
				'We are committed to the highest standards of software development, embracing best practices and innovative technologies.',
		},
		{
			icon: (
				<Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
			),
			title: 'Client Partnership',
			description:
				'We build strong, collaborative relationships with our clients, understanding their unique needs and working together to achieve their goals.',
		},
		{
			icon: (
				<Lightbulb className="w-8 h-8 text-primary-600 dark:text-primary-400" />
			),
			title: 'Innovation',
			description:
				'We constantly explore new ideas and approaches to solve complex problems and create cutting-edge solutions.',
		},
		{
			icon: (
				<BarChart3 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
			),
			title: 'Impact-Driven',
			description:
				"We measure our success by the positive impact our solutions have on our clients' businesses and their users.",
		},
	];

	const milestones = [
		{
			year: '2018',
			title: 'Founded in Lagos',
			description:
				'FOZ was established with a vision to build world-class software solutions for African businesses.',
		},
		{
			year: '2019',
			title: 'First Enterprise Client',
			description:
				'Secured our first major enterprise client and delivered a successful enterprise resource planning system.',
		},
		{
			year: '2020',
			title: 'Expansion to Fintech',
			description:
				'Developed our first mobile banking platform, marking our entry into the fintech sector.',
		},
		{
			year: '2021',
			title: 'Regional Growth',
			description:
				'Expanded our client base to Ghana, Kenya, and South Africa, establishing FOZ as a pan-African provider.',
		},
		{
			year: '2022',
			title: 'Cloud Services Launch',
			description:
				'Launched our dedicated cloud services division to help clients leverage cloud technologies.',
		},
		{
			year: '2023',
			title: 'Innovation Lab',
			description:
				'Established our Innovation Lab to explore emerging technologies like AI, blockchain, and IoT.',
		},
		{
			year: '2024',
			title: 'Global Partnerships',
			description:
				'Formed strategic partnerships with global technology leaders to enhance our service offerings.',
		},
		{
			year: '2025',
			title: 'New Headquarters',
			description:
				'Moved to our new state-of-the-art headquarters in Lagos to accommodate our growing team.',
		},
	];

	return (
		<>
			{/* Header */}
			<section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							About FOZ
						</h1>
						<p className="text-xl text-white/80">
							Building scalable software solutions for
							Africa and beyond.
						</p>
					</div>
				</div>
			</section>

			{/* Company Overview */}
			<Section>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-3xl font-bold mb-6">
							Our Story
						</h2>
						<p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
							Founded in 2018 by Foluso Ogunfile, FOZ
							was born out of a vision to create world-class
							software solutions that address the unique
							challenges faced by businesses in Africa while
							competing on a global scale.
						</p>
						<p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
							Starting with a small team of passionate
							engineers in Lagos, we've grown into a leading
							software development company with a diverse
							portfolio of clients across multiple
							industries and countries.
						</p>
						<p className="text-lg text-neutral-600 dark:text-neutral-300">
							Our journey has been defined by a commitment
							to technical excellence, deep understanding of
							local contexts, and a focus on building
							solutions that drive real business value for
							our clients.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="rounded-xl overflow-hidden shadow-lg"
					>
						<img
							src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt="FOZ team working together"
							className="w-full h-auto"
						/>
					</motion.div>
				</div>
			</Section>

			{/* Mission and Vision */}
			<Section className="bg-neutral-50 dark:bg-neutral-900">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md"
					>
						<h3 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">
							Our Mission
						</h3>
						<p className="text-lg text-neutral-600 dark:text-neutral-300">
							To empower businesses across Africa with
							innovative, scalable, and reliable software
							solutions that drive growth, efficiency, and
							competitive advantage in the global digital
							economy.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md"
					>
						<h3 className="text-2xl font-bold mb-4 text-secondary-500">
							Our Vision
						</h3>
						<p className="text-lg text-neutral-600 dark:text-neutral-300">
							To be the leading software development partner
							for African businesses, recognized globally
							for our technical excellence, innovative
							solutions, and deep understanding of local and
							regional markets.
						</p>
					</motion.div>
				</div>
			</Section>

			{/* Our Values */}
			<Section
				title="Our Values"
				subtitle="These core principles guide everything we do at FOZ."
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{values.map((value, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md border border-neutral-100 dark:border-neutral-800"
						>
							<div className="flex items-start">
								<div className="bg-primary-50 dark:bg-primary-900/20 p-3 rounded-lg mr-4">
									{value.icon}
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										{value.title}
									</h3>
									<p className="text-neutral-600 dark:text-neutral-400">
										{value.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</Section>

			

			{/* Timeline */}
			{/* <Section
				title="Our Journey"
				subtitle="Key milestones in our growth and evolution as a company."
			>
				<div className="relative">
					<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700 transform md:translate-x-0 translate-x-6"></div>

					<div className="relative">
						{milestones.map((milestone, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className={`flex md:items-center mb-12 ${
									index % 2 === 0
										? 'md:flex-row'
										: 'md:flex-row-reverse'
								}`}
							>
								<div
									className={`md:w-1/2 ${
										index % 2 === 0
											? 'md:pr-12 md:text-right'
											: 'md:pl-12'
									}`}
								>
									<span className="inline-block text-lg font-semibold px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-3">
										{milestone.year}
									</span>
									<h3 className="text-xl font-semibold mb-2">
										{milestone.title}
									</h3>
									<p className="text-neutral-600 dark:text-neutral-400">
										{milestone.description}
									</p>
								</div>

								<div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-primary-600 border-4 border-white dark:border-neutral-950 transform -translate-y-1/2 md:translate-x-[-50%] translate-x-0 flex items-center justify-center">
									<CheckCircle2 className="w-6 h-6 text-white" />
								</div>

								<div className="md:w-1/2"></div>
							</motion.div>
						))}
					</div>
				</div>
			</Section> */}

			{/* Tech Stack */}
			<Section
				title="Our Technology Stack"
				subtitle="We leverage modern technologies to build scalable, robust, and maintainable solutions."
				className="bg-neutral-50 dark:bg-neutral-900"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Frontend */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
					>
						<h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
							Frontend
						</h3>
						<ul className="space-y-2">
							{[
								'React',
								'Next.js',
								'Vue.js',
								'Angular',
								'TypeScript',
								'Tailwind CSS',
								'Material UI',
							].map((tech, i) => (
								<li key={i} className="flex items-center">
									<CheckCircle2 className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
									<span className="text-neutral-700 dark:text-neutral-300">
										{tech}
									</span>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Backend */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
					>
						<h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
							Backend
						</h3>
						<ul className="space-y-2">
							{[
								'Node.js',
								'Express',
								'Django',
								'Laravel',
								'Spring Boot',
								'GraphQL',
								'REST API',
							].map((tech, i) => (
								<li key={i} className="flex items-center">
									<CheckCircle2 className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
									<span className="text-neutral-700 dark:text-neutral-300">
										{tech}
									</span>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Mobile */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
					>
						<h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
							Mobile
						</h3>
						<ul className="space-y-2">
							{[
								'React Native',
								'Flutter',
								'Swift',
								'Kotlin',
								'iOS',
								'Android',
								'Progressive Web Apps',
							].map((tech, i) => (
								<li key={i} className="flex items-center">
									<CheckCircle2 className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
									<span className="text-neutral-700 dark:text-neutral-300">
										{tech}
									</span>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Infrastructure */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
					>
						<h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
							DevOps & Cloud
						</h3>
						<ul className="space-y-2">
							{[
								'AWS',
								'Azure',
								'Google Cloud',
								'Docker',
								'Kubernetes',
								'CI/CD',
								'Terraform',
							].map((tech, i) => (
								<li key={i} className="flex items-center">
									<CheckCircle2 className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
									<span className="text-neutral-700 dark:text-neutral-300">
										{tech}
									</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</Section>
		</>
	);
};

export default AboutPage;
