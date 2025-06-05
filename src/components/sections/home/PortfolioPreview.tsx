import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../../ui/Section';
import Button from '../../ui/Button';
import { caseStudies } from '../../../data/portfolio';

const PortfolioPreview: React.FC = () => {
	// Display only the first 3 case studies
	const featuredCaseStudies = caseStudies.slice(0, 3);

	return (
		<Section
			title="Our Work"
			subtitle="Take a look at some of our recent projects and see how we've helped our clients achieve their goals."
			id="portfolio"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{featuredCaseStudies.map((caseStudy, index) => (
					<motion.div
						key={caseStudy.id}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{
							duration: 0.5,
							delay: index * 0.1,
						}}
						className="group rounded-xl overflow-hidden shadow-md bg-white dark:bg-neutral-900 hover:shadow-xl transition-all duration-300"
					>
						<div className="relative h-60 overflow-hidden">
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
							<h3 className="text-xl font-semibold mb-2">
								{caseStudy.title}
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400 mb-4">
								{caseStudy.brief.length > 120
									? caseStudy.brief.substring(0, 120) +
									  '...'
									: caseStudy.brief}
							</p>
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

			<div className="mt-12 text-center">
				<Button to="/portfolio" variant="outline">
					View All Projects
				</Button>
			</div>
		</Section>
	);
};

export default PortfolioPreview;
