import React from 'react';
import Hero from '../components/sections/home/Hero';
import FeaturedServices from '../components/sections/home/FeaturedServices';
import AboutPreview from '../components/sections/home/AboutPreview';
import PortfolioPreview from '../components/sections/home/PortfolioPreview';
import Testimonials from '../components/sections/home/Testimonials';
import CtaBanner from '../components/sections/home/CtaBanner';

const HomePage: React.FC = () => {
	return (
		<>
			<Hero />
			<FeaturedServices />
			<AboutPreview />
			<PortfolioPreview />
			<Testimonials />
			<CtaBanner />
		</>
	);
};

export default HomePage;
