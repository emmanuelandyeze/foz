import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BlogPostPage from './pages/BlogPostPage';
import CaseStudyPage from './pages/CaseStudyPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="services" element={<ServicesPage />} />
				<Route
					path="portfolio"
					element={<PortfolioPage />}
				/>
				<Route
					path="portfolio/:id"
					element={<CaseStudyPage />}
				/>
				<Route path="blog" element={<BlogPage />} />
				<Route path="blog/:id" element={<BlogPostPage />} />
				<Route path="careers" element={<CareersPage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
