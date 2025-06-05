import React from 'react';
import { motion } from 'framer-motion';
import {
	MapPin,
	Clock,
	ArrowRight,
	CheckCircle2,
} from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import {
	jobPositions,
	companyValues,
	companyBenefits,
} from '../data/careers';

const CareersPage: React.FC = () => {
	return (
		<>
			{/* Header */}
			<section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Careers at FOZ
						</h1>
						<p className="text-xl text-white/80">
							Join our team of talented professionals and
							build cutting-edge software solutions for
							Africa and beyond.
						</p>
					</div>
				</div>
			</section>

			{/* Company Culture */}
			<Section>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-3xl font-bold mb-6">
							Our Culture
						</h2>
						<p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
							At FOZ, we believe that great software is
							built by great teams. We've created a culture
							that fosters innovation, collaboration, and
							continuous learning. We're committed to
							providing an inclusive and supportive
							environment where every team member can thrive
							personally and professionally.
						</p>
						<p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
							Our team consists of passionate individuals
							who are not just skilled in their respective
							domains but also share a common vision of
							leveraging technology to solve complex
							problems and create meaningful impact.
						</p>
						<p className="text-lg text-neutral-600 dark:text-neutral-300">
							We value diversity, encourage open
							communication, and celebrate both individual
							achievements and team successes. If you're
							looking for a workplace that challenges you to
							grow while supporting your journey, FOZ might
							be the perfect fit for you.
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
							src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt="FOZ team collaboration"
							className="w-full h-auto"
						/>
					</motion.div>
				</div>
			</Section>

			{/* Company Values */}
			<Section
				title="Our Values"
				subtitle="These core principles guide everything we do at FOZ."
				className="bg-neutral-50 dark:bg-neutral-900"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{companyValues.map((value, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md"
						>
							<h3 className="text-xl font-semibold mb-3 text-primary-600 dark:text-primary-400">
								{value.title}
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								{value.description}
							</p>
						</motion.div>
					))}
				</div>
			</Section>

			{/* Company Benefits */}
			<Section
				title="Why Join Us"
				subtitle="We offer a range of benefits designed to support your professional growth and wellbeing."
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{companyBenefits.map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							className="flex items-start"
						>
							<div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-4 mt-1">
								<CheckCircle2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									{benefit.title}
								</h3>
								<p className="text-neutral-600 dark:text-neutral-400">
									{benefit.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</Section>

			{/* Open Positions */}
			<Section
				title="Open Positions"
				subtitle="Join our team and be part of building innovative software solutions."
				className="bg-neutral-50 dark:bg-neutral-900"
			>
				<div className="space-y-6">
					{jobPositions.map((job, index) => (
						<motion.div
							key={job.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
						>
							<div className="p-6 md:p-8">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
									<div>
										<h3 className="text-xl md:text-2xl font-semibold mb-2">
											{job.title}
										</h3>
										<div className="flex flex-wrap gap-3 text-sm">
											<span className="flex items-center text-neutral-600 dark:text-neutral-400">
												<MapPin className="w-4 h-4 mr-1" />
												{job.location}
											</span>
											<span className="flex items-center text-neutral-600 dark:text-neutral-400">
												<Clock className="w-4 h-4 mr-1" />
												{job.type}
											</span>
											<span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-xs font-medium">
												{job.department}
											</span>
										</div>
									</div>
									<div className="mt-4 md:mt-0">
										<Button
											to={job.applicationUrl}
											variant="primary"
											icon={
												<ArrowRight className="w-5 h-5" />
											}
										>
											Apply Now
										</Button>
									</div>
								</div>

								<p className="text-neutral-600 dark:text-neutral-400 mb-6">
									{job.description}
								</p>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<h4 className="font-semibold mb-3">
											Key Responsibilities
										</h4>
										<ul className="space-y-2">
											{job.responsibilities
												.slice(0, 4)
												.map((item, i) => (
													<li
														key={i}
														className="flex items-start"
													>
														<span className="text-primary-600 dark:text-primary-400 mr-2">
															•
														</span>
														<span className="text-neutral-600 dark:text-neutral-400 text-sm">
															{item}
														</span>
													</li>
												))}
											{job.responsibilities.length > 4 && (
												<li className="flex items-start">
													<span className="text-primary-600 dark:text-primary-400 mr-2">
														•
													</span>
													<span className="text-neutral-600 dark:text-neutral-400 text-sm">
														And{' '}
														{job.responsibilities.length -
															4}{' '}
														more responsibilities...
													</span>
												</li>
											)}
										</ul>
									</div>

									<div>
										<h4 className="font-semibold mb-3">
											Requirements
										</h4>
										<ul className="space-y-2">
											{job.requirements
												.slice(0, 4)
												.map((item, i) => (
													<li
														key={i}
														className="flex items-start"
													>
														<span className="text-primary-600 dark:text-primary-400 mr-2">
															•
														</span>
														<span className="text-neutral-600 dark:text-neutral-400 text-sm">
															{item}
														</span>
													</li>
												))}
											{job.requirements.length > 4 && (
												<li className="flex items-start">
													<span className="text-primary-600 dark:text-primary-400 mr-2">
														•
													</span>
													<span className="text-neutral-600 dark:text-neutral-400 text-sm">
														And{' '}
														{job.requirements.length - 4}{' '}
														more requirements...
													</span>
												</li>
											)}
										</ul>
									</div>
								</div>

								<div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
									Posted on: {job.postedDate}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</Section>

			{/* Application Process */}
			<Section
				title="Our Application Process"
				subtitle="What to expect when you apply for a position at FOZ."
			>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md text-center"
					>
						<div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
								1
							</span>
						</div>
						<h3 className="text-xl font-semibold mb-3">
							Application Review
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Our team carefully reviews your application
							and CV to assess your skills and experience.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md text-center"
					>
						<div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
								2
							</span>
						</div>
						<h3 className="text-xl font-semibold mb-3">
							Interview Process
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Selected candidates go through technical and
							cultural fit interviews with our team.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md text-center"
					>
						<div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
							<span className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
								3
							</span>
						</div>
						<h3 className="text-xl font-semibold mb-3">
							Offer & Onboarding
						</h3>
						<p className="text-neutral-600 dark:text-neutral-400">
							Successful candidates receive offers and begin
							our comprehensive onboarding process.
						</p>
					</motion.div>
				</div>
			</Section>

			{/* Talent Network CTA */}
			<section className="bg-secondary-500 py-16">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center text-white">
						<h2 className="text-3xl font-bold mb-6">
							Join Our Talent Network
						</h2>
						<p className="text-xl text-white/90 mb-8">
							Don't see a position that matches your skills?
							Join our talent network to be notified about
							future opportunities that align with your
							expertise.
						</p>
						<Button
							to="/careers/talent-network"
							variant="primary"
							size="lg"
							className="bg-white text-secondary-600 hover:bg-neutral-100 focus:ring-white"
						>
							Join Talent Network
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default CareersPage;
