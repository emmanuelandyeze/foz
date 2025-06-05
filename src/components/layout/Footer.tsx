import React from 'react';
import { Link } from 'react-router-dom';
import {
	Mail,
	Phone,
	MapPin,
	Linkedin,
	Twitter,
	Instagram,
	Facebook,
} from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-neutral-950 text-white pt-16 pb-8">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
					{/* Company Info */}
					<div>
						<Logo variant="light" />
						<p className="mt-4 text-neutral-300 text-sm leading-relaxed">
							Building scalable software solutions for
							Africa and beyond. We turn your vision into
							cutting-edge technology.
						</p>
						<div className="flex space-x-4 mt-6">
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-400 hover:text-primary-400 transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-400 hover:text-primary-400 transition-colors"
								aria-label="Twitter"
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-400 hover:text-primary-400 transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-400 hover:text-primary-400 transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-lg mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							{[
								{ name: 'About Us', path: '/about' },
								{ name: 'Services', path: '/services' },
								{ name: 'Portfolio', path: '/portfolio' },
								{ name: 'Blog', path: '/blog' },
								{ name: 'Careers', path: '/careers' },
								{ name: 'Contact', path: '/contact' },
							].map((link) => (
								<li key={link.path}>
									<Link
										to={link.path}
										className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-semibold text-lg mb-4">
							Our Services
						</h3>
						<ul className="space-y-2">
							{[
								'Web Development',
								'Mobile App Development',
								'UI/UX Design',
								'Enterprise Software',
								// 'Cloud Services',
								'Tech Consulting',
								'IT Support',
							].map((service) => (
								<li key={service}>
									<Link
										to="/services"
										className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
									>
										{service}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact & Newsletter */}
					<div>
						<h3 className="font-semibold text-lg mb-4">
							Contact Us
						</h3>
						<ul className="space-y-3">
							<li className="flex items-start">
								<MapPin className="w-5 h-5 text-neutral-400 mt-0.5 mr-3 flex-shrink-0" />
								<span className="text-neutral-400 text-sm">
									1, Yinka Ogunfile Street, Ikorodu, Lagos,
									Nigeria
								</span>
							</li>
							<li className="flex items-center">
								<Phone className="w-5 h-5 text-neutral-400 mr-3 flex-shrink-0" />
								<a
									href="tel:+2348012345678"
									className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
								>
									+234 913 772 0636
								</a>
							</li>
							<li className="flex items-center">
								<Mail className="w-5 h-5 text-neutral-400 mr-3 flex-shrink-0" />
								<a
									href="mailto:info@foz.ng"
									className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
								>
									mail@foz.ng
								</a>
							</li>
						</ul>

						<h3 className="font-semibold text-lg mb-4 mt-8">
							Newsletter
						</h3>
						<form className="flex">
							<input
								type="email"
								placeholder="Your email"
								className="bg-neutral-800 text-white placeholder:text-neutral-500 px-4 py-2 rounded-l-md w-full text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
								required
							/>
							<button
								type="submit"
								className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md text-sm transition-colors"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				<div className="border-t border-neutral-800 pt-8 mt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-neutral-400 text-sm">
							&copy; {currentYear} Foz. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link
								to="/privacy"
								className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
