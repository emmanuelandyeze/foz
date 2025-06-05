import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';

const CtaBanner: React.FC = () => {
	return (
		<section className="bg-primary-900 py-16 relative overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent opacity-20"></div>
			</div>

			<div className="container relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl md:text-4xl font-bold mb-4 text-white"
					>
						Ready to Transform Your Business?
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-xl text-white/90 mb-8"
					>
						Get a free consultation and let us help you
						build the technology solution your business
						needs.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Button
							to="/contact"
							variant="secondary"
							size="lg"
						>
							Get a Free Consultation
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CtaBanner;
