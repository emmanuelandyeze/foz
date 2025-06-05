import React from 'react';
import {
	useParams,
	Link,
	useNavigate,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import {
	ArrowLeft,
	ExternalLink,
	CheckCircle,
} from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { caseStudies } from '../data/portfolio';

const CaseStudyPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const caseStudy = caseStudies.find((cs) => cs.id === id);

	if (!caseStudy) {
		// If case study not found, navigate to portfolio page
		React.useEffect(() => {
			navigate('/portfolio');
		}, [navigate]);

		return null;
	}

	return (
		<>
			{/* Header */}
			<section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
				<div className="container">
					<div className="max-w-4xl mx-auto">
						<Link
							to="/portfolio"
							className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
						>
							<ArrowLeft className="w-5 h-5 mr-2" />
							Back to Portfolio
						</Link>
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							{caseStudy.title}
						</h1>
						<p className="text-xl text-white/80 mb-6">
							{caseStudy.brief}
						</p>
						<div className="flex flex-wrap gap-3">
							<span className="bg-white/10 px-4 py-1 rounded-full text-white">
								{caseStudy.category}
							</span>
							<span className="bg-white/10 px-4 py-1 rounded-full text-white">
								Client: {caseStudy.client}
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Case Study Content */}
			<Section>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					<div className="lg:col-span-2">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="rounded-xl overflow-hidden shadow-lg mb-12"
						>
							<img
								src={caseStudy.image}
								alt={caseStudy.title}
								className="w-full h-auto"
							/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<h2 className="text-2xl font-bold mb-4">
								Challenge
							</h2>
							<p className="text-neutral-600 dark:text-neutral-300 mb-8">
								{caseStudy.challenge}
							</p>

							<h2 className="text-2xl font-bold mb-4">
								Solution
							</h2>
							<p className="text-neutral-600 dark:text-neutral-300 mb-8">
								{caseStudy.solution}
							</p>

							<h2 className="text-2xl font-bold mb-4">
								Results
							</h2>
							<ul className="space-y-3 mb-12">
								{caseStudy.results.map((result, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.3,
											delay: 0.2 + index * 0.1,
										}}
										className="flex items-start"
									>
										<CheckCircle className="text-primary-600 dark:text-primary-400 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
										<span className="text-neutral-700 dark:text-neutral-300">
											{result}
										</span>
									</motion.li>
								))}
							</ul>

							{caseStudy.testimonial && (
								<div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-xl mb-8 relative">
									<div className="absolute top-0 right-0 text-primary-200 dark:text-primary-800 opacity-30 transform -translate-y-1/4 translate-x-1/4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="80"
											height="80"
											viewBox="0 0 24 24"
											fill="currentColor"
											stroke="none"
										>
											<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
										</svg>
									</div>
									<p className="text-lg text-neutral-700 dark:text-neutral-300 italic mb-6">
										"{caseStudy.testimonial.text}"
									</p>
									<div className="flex items-center">
										<div>
											<p className="font-semibold text-neutral-900 dark:text-white">
												{caseStudy.testimonial.author}
											</p>
											<p className="text-neutral-600 dark:text-neutral-400 text-sm">
												{caseStudy.testimonial.position}
											</p>
										</div>
									</div>
								</div>
							)}
						</motion.div>
					</div>

					<div>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md sticky top-24"
						>
							<h3 className="text-xl font-semibold mb-6">
								Project Details
							</h3>

							<div className="space-y-4 mb-8">
								<div>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										Client
									</p>
									<p className="font-medium">
										{caseStudy.client}
									</p>
								</div>
								<div>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										Category
									</p>
									<p className="font-medium">
										{caseStudy.category}
									</p>
								</div>
								<div>
									<p className="text-sm text-neutral-500 dark:text-neutral-400">
										Technologies Used
									</p>
									<div className="flex flex-wrap gap-2 mt-2">
										{caseStudy.technologies.map(
											(tech, i) => (
												<span
													key={i}
													className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs px-3 py-1 rounded-full"
												>
													{tech}
												</span>
											),
										)}
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<Button
									to="/contact"
									variant="primary"
									className="w-full justify-center"
								>
									Start a Similar Project
								</Button>
								<Button
									href="#"
									variant="outline"
									className="w-full justify-center"
									icon={
										<ExternalLink className="w-4 h-4" />
									}
								>
									Visit Live Project
								</Button>
							</div>
						</motion.div>
					</div>
				</div>
			</Section>

			{/* Related Case Studies */}
			<Section
				title="More Case Studies"
				subtitle="Explore other projects we've worked on"
				className="bg-neutral-50 dark:bg-neutral-900"
			>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{caseStudies
						.filter((cs) => cs.id !== id)
						.slice(0, 3)
						.map((cs, index) => (
							<motion.div
								key={cs.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
							>
								<div className="relative h-48 overflow-hidden">
									<img
										src={cs.image}
										alt={cs.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
										<div className="p-4 text-white">
											<p className="font-medium">
												{cs.category}
											</p>
										</div>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										{cs.title}
									</h3>
									<p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
										{cs.brief}
									</p>
									<Link
										to={`/portfolio/${cs.id}`}
										className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
									>
										View Case Study
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</div>
							</motion.div>
						))}
				</div>
			</Section>
		</>
	);
};

export default CaseStudyPage;
