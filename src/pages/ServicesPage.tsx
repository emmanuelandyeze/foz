import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
	return (
		<>
			{/* Header */}
			<section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Our Services
						</h1>
						<p className="text-xl text-white/80">
							Comprehensive software development and
							technology services to help your business
							innovate and grow.
						</p>
					</div>
				</div>
			</section>

			{/* Services Overview */}
			<Section>
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-3xl font-bold mb-6">
						How We Can Help Your Business
					</h2>
					<p className="text-lg text-neutral-600 dark:text-neutral-300">
						At FOZ, we offer a wide range of software
						development and technology services tailored to
						meet the unique needs of businesses across
						various industries. Our expertise spans web and
						mobile development, UI/UX design, enterprise
						solutions, cloud services, and more.
					</p>
				</div>

				<div className="space-y-24">
					{services.map((service, index) => (
						<div
							key={service.id}
							className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
								index % 2 === 1 ? 'lg:flex-row-reverse' : ''
							}`}
						>
							<motion.div
								initial={{
									opacity: 0,
									x: index % 2 === 0 ? -50 : 50,
								}}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className={`order-2 ${
									index % 2 === 1
										? 'lg:order-1'
										: 'lg:order-2'
								}`}
							>
								{/* <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-2xl inline-block mb-6">
									{React.createElement(
										require('lucide-react')[service.icon],
										{
											className:
												'w-12 h-12 text-primary-600 dark:text-primary-400',
										},
									)}
								</div> */}
								<h2 className="text-3xl font-bold mb-4">
									{service.title}
								</h2>
								<p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
									{service.details}
								</p>

								<h3 className="text-xl font-semibold mb-4">
									Key Benefits
								</h3>
								<ul className="space-y-3 mb-8">
									{service.benefits.map((benefit, i) => (
										<li
											key={i}
											className="flex items-start"
										>
											<span className="bg-primary-100 dark:bg-primary-900/30 p-1 rounded-full mr-3 mt-1">
												<Check className="w-4 h-4 text-primary-600 dark:text-primary-400" />
											</span>
											<span className="text-neutral-700 dark:text-neutral-300">
												{benefit}
											</span>
										</li>
									))}
								</ul>

								<Button
									to="/contact"
									variant="primary"
									icon={<ArrowRight className="w-5 h-5" />}
								>
									Discuss Your Project
								</Button>
							</motion.div>

							<motion.div
								initial={{
									opacity: 0,
									x: index % 2 === 0 ? 50 : -50,
								}}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className={`order-1 ${
									index % 2 === 1
										? 'lg:order-2'
										: 'lg:order-1'
								}`}
							>
								<div className="rounded-xl overflow-hidden shadow-lg aspect-video">
									<img
										src={`https://images.pexels.com/photos/${
											[
												'1181271', // Web Development
												'5082579', // Mobile App Development
												'7014916', // UI/UX Design
												'3182812', // Enterprise Software
												'325229', // Cloud Services
												'3183197', // Tech Consulting
												'3183150', // IT Support
											][index]
										}/pexels-photo-${
											[
												'1181271', // Web Development
												'5082579', // Mobile App Development
												'7014916', // UI/UX Design
												'3182812', // Enterprise Software
												'325229', // Cloud Services
												'3183197', // Tech Consulting
												'3183150', // IT Support
											][index]
										}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
										alt={service.title}
										className="w-full h-full object-cover"
									/>
								</div>
							</motion.div>
						</div>
					))}
				</div>
			</Section>

			{/* CTA Section */}
			<section className="bg-primary-900 text-white py-20">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-6">
							Ready to Discuss Your Project?
						</h2>
						<p className="text-xl text-white/80 mb-8">
							Contact us today for a free consultation to
							discuss how we can help you achieve your
							technology goals.
						</p>
						<Button
							to="/contact"
							variant="secondary"
							size="lg"
						>
							Get a Free Consultation
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServicesPage;
