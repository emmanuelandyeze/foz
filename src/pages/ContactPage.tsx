import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	CheckCircle,
} from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
	const [formStatus, setFormStatus] = useState<
		'idle' | 'submitting' | 'success' | 'error'
	>('idle');
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<
			| HTMLInputElement
			| HTMLTextAreaElement
			| HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormStatus('submitting');

		// Simulate form submission
		setTimeout(() => {
			setFormStatus('success');
			// Reset form after success
			setFormData({
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: '',
			});
		}, 1500);
	};

	return (
		<>
			{/* Header */}
			<section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Contact Us
						</h1>
						<p className="text-xl text-white/80">
							Get in touch with our team to discuss how we
							can help with your software development needs.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Info & Form */}
			<Section>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-3xl font-bold mb-6">
							Get in Touch
						</h2>
						<p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
							Have a question or want to discuss a project?
							We'd love to hear from you. Fill out the form
							or contact us directly using the information
							below.
						</p>

						<div className="space-y-6 mb-8">
							<div className="flex items-start">
								<div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
									<MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Our Office
									</h3>
									<p className="text-neutral-600 dark:text-neutral-400">
										1, Yinka Ogunfile Street,
										<br />
										Ikorodu.
										<br />
										Lagos, Nigeria
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
									<Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Phone
									</h3>
									<p className="text-neutral-600 dark:text-neutral-400">
										<a
											href="tel:+2348012345678"
											className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
										>
											+234 913 772 0636
										</a>
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
									<Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Email
									</h3>
									<p className="text-neutral-600 dark:text-neutral-400">
										<a
											href="mailto:info@foz.ng"
											className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
										>
											mail@foz.ng
										</a>
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
									<Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Business Hours
									</h3>
									<p className="text-neutral-600 dark:text-neutral-400">
										Monday - Friday: 9:00 AM - 5:00 PM
										<br />
										Saturday: 10:00 AM - 2:00 PM
										<br />
										Sunday: Closed
									</p>
								</div>
							</div>
						</div>

						{/* Map */}
						<div className="rounded-xl overflow-hidden shadow-md h-64 md:h-80">
							<iframe
								title="Foz Office Location"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9774353678776!2d3.5044037!3d6.6034167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e7620f1a1c3%3A0x61bb4a4db6e26e9!2s1%20Yinka%20Ogunfile%20St%2C%20Ikorodu%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1717589212816!5m2!1sen!2s"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-8">
							<h2 className="text-2xl font-bold mb-6">
								Send Us a Message
							</h2>

							{formStatus === 'success' ? (
								<div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
									<div className="flex justify-center mb-4">
										<span className="bg-green-100 dark:bg-green-800/30 p-3 rounded-full">
											<CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
										</span>
									</div>
									<h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-300">
										Message Sent!
									</h3>
									<p className="text-green-700 dark:text-green-400 mb-4">
										Thank you for contacting us. We'll get
										back to you as soon as possible.
									</p>
									<Button
										onClick={() => setFormStatus('idle')}
										variant="outline"
										className="border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
									>
										Send Another Message
									</Button>
								</div>
							) : (
								<form onSubmit={handleSubmit}>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
											>
												Your Name*
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
												placeholder="John Doe"
												required
											/>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
											>
												Your Email*
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
												placeholder="john@example.com"
												required
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
										<div>
											<label
												htmlFor="phone"
												className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
											>
												Phone Number
											</label>
											<input
												type="tel"
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
												placeholder="+234 801 234 5678"
											/>
										</div>

										<div>
											<label
												htmlFor="subject"
												className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
											>
												Subject*
											</label>
											<select
												id="subject"
												name="subject"
												value={formData.subject}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
												required
											>
												<option value="" disabled>
													Select a subject
												</option>
												<option value="General Inquiry">
													General Inquiry
												</option>
												<option value="Project Request">
													Project Request
												</option>
												<option value="Career Information">
													Career Information
												</option>
												<option value="Partnership Opportunity">
													Partnership Opportunity
												</option>
												<option value="Other">Other</option>
											</select>
										</div>
									</div>

									<div className="mb-6">
										<label
											htmlFor="message"
											className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
										>
											Your Message*
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											rows={6}
											className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
											placeholder="Tell us about your project or inquiry..."
											required
										></textarea>
									</div>

									<Button
										type="submit"
										variant="primary"
										className="w-full justify-center"
										disabled={formStatus === 'submitting'}
									>
										{formStatus === 'submitting'
											? 'Sending...'
											: 'Send Message'}
									</Button>
								</form>
							)}
						</div>
					</motion.div>
				</div>
			</Section>

			{/* CTA Section */}
			<section className="bg-primary-900 py-16">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center text-white">
						<h2 className="text-3xl font-bold mb-6">
							Let's Build Something Amazing Together
						</h2>
						<p className="text-xl text-white/80 mb-8">
							Whether you have a specific project in mind or
							just want to explore possibilities, we're here
							to help turn your vision into reality.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								href="tel:+2348012345678"
								variant="secondary"
								size="lg"
							>
								Call Us Now
							</Button>
							<Button
								href="mailto:info@foz.ng"
								variant="outline"
								size="lg"
								className="border-white text-white hover:bg-white/10"
							>
								Email Us
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactPage;
