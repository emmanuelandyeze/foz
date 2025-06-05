import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	ChevronLeft,
	ChevronRight,
	Quote,
} from 'lucide-react';
import Section from '../../ui/Section';
import { testimonials } from '../../../data/testimonials';

const Testimonials: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0
				? testimonials.length - 1
				: prevIndex - 1,
		);
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === testimonials.length - 1
				? 0
				: prevIndex + 1,
		);
	};

	return (
		<Section
			title="What Our Clients Say"
			subtitle="Don't just take our word for it. Here's what our clients have to say about working with FOZ."
			className="bg-gradient-to-br from-primary-900 to-primary-950 text-white"
		>
			<div className="relative max-w-4xl mx-auto">
				<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-primary-400 opacity-30">
					<Quote className="w-24 h-24" />
				</div>

				<div className="relative overflow-hidden pb-12">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							initial={{ opacity: 0, x: 100 }}
							animate={{
								opacity: index === activeIndex ? 1 : 0,
								x: index === activeIndex ? 0 : 100,
								position:
									index === activeIndex
										? 'relative'
										: 'absolute',
							}}
							transition={{ duration: 0.5 }}
							className="w-full"
						>
							{index === activeIndex && (
								<div className="text-center px-4">
									<p className="text-xl md:text-2xl italic mb-8 text-white/90">
										"{testimonial.text}"
									</p>

									<div className="flex flex-col items-center">
										<img
											src={testimonial.image}
											alt={testimonial.author}
											className="w-16 h-16 object-cover rounded-full mb-4"
										/>
										<div>
											<h4 className="text-lg font-semibold">
												{testimonial.author}
											</h4>
											<p className="text-white/80">
												{testimonial.position},{' '}
												{testimonial.company}
											</p>
										</div>
									</div>
								</div>
							)}
						</motion.div>
					))}
				</div>

				<div className="flex justify-center gap-4 mt-8">
					<button
						onClick={handlePrev}
						className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
						aria-label="Previous testimonial"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>

					<div className="flex gap-2 items-center">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`w-2.5 h-2.5 rounded-full transition-all ${
									index === activeIndex
										? 'bg-white w-6'
										: 'bg-white/50 hover:bg-white/80'
								}`}
								aria-label={`Go to testimonial ${
									index + 1
								}`}
							/>
						))}
					</div>

					<button
						onClick={handleNext}
						className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
						aria-label="Next testimonial"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>
		</Section>
	);
};

export default Testimonials;
