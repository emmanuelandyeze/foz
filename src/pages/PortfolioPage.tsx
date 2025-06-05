import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import { caseStudies } from '../data/portfolio';

const PortfolioPage: React.FC = () => {
	return (
		<>
			{/* Header */}
			<section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Our Portfolio
						</h1>
						<p className="text-xl text-white/80">
							Explore our work and see how we've helped
							clients across various industries achieve
							their technology goals.
						</p>
					</div>
				</div>
			</section>

			{/* Portfolio Grid */}
			<Section>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{caseStudies.map((caseStudy, index) => (
						<motion.div
							key={caseStudy.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							className="group bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
						>
							<div className="relative h-64 overflow-hidden">
								<img
									src={caseStudy.image}
									alt={caseStudy.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
									<div className="p-4 text-white">
										<p className="font-medium">
											{caseStudy.category}
										</p>
									</div>
								</div>
							</div>

							<div className="p-6">
								<div className="flex justify-between items-start mb-4">
									<h3 className="text-2xl font-semibold">
										{caseStudy.title}
									</h3>
									<span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium px-3 py-1 rounded-full">
										{caseStudy.category}
									</span>
								</div>
								<p className="text-neutral-600 dark:text-neutral-400 mb-6">
									{caseStudy.brief}
								</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{caseStudy.technologies
										.slice(0, 4)
										.map((tech, i) => (
											<span
												key={i}
												className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs px-3 py-1 rounded-full"
											>
												{tech}
											</span>
										))}
									{caseStudy.technologies.length > 4 && (
										<span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs px-3 py-1 rounded-full">
											+{caseStudy.technologies.length - 4}{' '}
											more
										</span>
									)}
								</div>
								<Link
									to={`${caseStudy.link}`}
									target='_blank'
									className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
								>
									View Project
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</Section>

			{/* CTA Section */}
			<section className="bg-secondary-500 py-16">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center text-white">
						<h2 className="text-3xl font-bold mb-6">
							Ready to Build Something Amazing?
						</h2>
						<p className="text-xl text-white/90 mb-8">
							Let's discuss how we can help bring your
							vision to life with our expertise in software
							development and technology solutions.
						</p>
						<Link
							to="/contact"
							className="inline-flex items-center justify-center px-8 py-3 bg-white text-secondary-600 font-medium rounded-lg hover:bg-neutral-100 transition-colors"
						>
							Get in Touch
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioPage;
