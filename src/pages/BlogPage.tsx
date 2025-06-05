import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	ArrowRight,
	CalendarDays,
	Clock,
	Search,
	Tag,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import { blogPosts } from '../data/blog';

const BlogPage: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<
		string | null
	>(null);

	// Extract unique categories
	const categories = Array.from(
		new Set(blogPosts.map((post) => post.category)),
	);

	// Filter posts based on search term and category
	const filteredPosts = blogPosts.filter((post) => {
		const matchesSearch =
			searchTerm === '' ||
			post.title
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			post.excerpt
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			post.tags.some((tag) =>
				tag
					.toLowerCase()
					.includes(searchTerm.toLowerCase()),
			);

		const matchesCategory =
			selectedCategory === null ||
			post.category === selectedCategory;

		return matchesSearch && matchesCategory;
	});

	return (
		<>
			{/* Header */}
			<section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
				<div className="container">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Blog & Insights
						</h1>
						<p className="text-xl text-white/80">
							Thoughts, insights, and perspectives on
							software development, technology trends, and
							digital innovation.
						</p>
					</div>
				</div>
			</section>

			<Section>
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Main Content */}
					<div className="lg:w-2/3">
						{/* Search Bar */}
						<div className="mb-8">
							<div className="relative">
								<input
									type="text"
									placeholder="Search articles..."
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
									className="w-full px-4 py-3 pl-12 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
								/>
								<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
							</div>
						</div>

						{/* Blog Posts */}
						{filteredPosts.length > 0 ? (
							<div className="space-y-10">
								{filteredPosts.map((post, index) => (
									<motion.article
										key={post.id}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: index * 0.1,
										}}
										className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
									>
										<div className="md:flex">
											<div className="md:w-2/5">
												<Link
													to={`/blog/${post.id}`}
													className="block h-full"
												>
													<img
														src={post.image}
														alt={post.title}
														className="w-full h-full object-cover aspect-video md:aspect-auto"
													/>
												</Link>
											</div>
											<div className="md:w-3/5 p-6">
												<span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
													{post.category}
												</span>
												<h2 className="text-xl md:text-2xl font-bold mb-2">
													<Link
														to={`/blog/${post.id}`}
														className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
													>
														{post.title}
													</Link>
												</h2>
												<p className="text-neutral-600 dark:text-neutral-400 mb-4">
													{post.excerpt}
												</p>
												<div className="flex flex-wrap items-center text-sm text-neutral-500 dark:text-neutral-400 mb-4 gap-4">
													<div className="flex items-center">
														<CalendarDays className="w-4 h-4 mr-1" />
														{post.date}
													</div>
													<div className="flex items-center">
														<Clock className="w-4 h-4 mr-1" />
														{post.readTime} min read
													</div>
												</div>
												<div className="flex items-center mt-4">
													<img
														src={post.author.avatar}
														alt={post.author.name}
														className="w-10 h-10 rounded-full mr-3"
													/>
													<div>
														<p className="font-medium text-neutral-900 dark:text-white">
															{post.author.name}
														</p>
														<p className="text-sm text-neutral-500 dark:text-neutral-400">
															{post.author.role}
														</p>
													</div>
												</div>
											</div>
										</div>
									</motion.article>
								))}
							</div>
						) : (
							<div className="text-center py-12">
								<p className="text-xl text-neutral-600 dark:text-neutral-300">
									No articles found matching your search
									criteria.
								</p>
								<button
									onClick={() => {
										setSearchTerm('');
										setSelectedCategory(null);
									}}
									className="mt-4 text-primary-600 dark:text-primary-400 font-medium hover:underline"
								>
									Clear filters
								</button>
							</div>
						)}
					</div>

					{/* Sidebar */}
					<div className="lg:w-1/3">
						<div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6">
							{/* Categories */}
							<div className="mb-8">
								<h3 className="text-xl font-semibold mb-4">
									Categories
								</h3>
								<ul className="space-y-2">
									<li>
										<button
											onClick={() =>
												setSelectedCategory(null)
											}
											className={`flex items-center ${
												selectedCategory === null
													? 'text-primary-600 dark:text-primary-400 font-medium'
													: 'text-neutral-700 dark:text-neutral-300'
											}`}
										>
											<ArrowRight
												className={`w-4 h-4 mr-2 ${
													selectedCategory === null
														? 'opacity-100'
														: 'opacity-0'
												}`}
											/>
											All Categories
										</button>
									</li>
									{categories.map((category, index) => (
										<li key={index}>
											<button
												onClick={() =>
													setSelectedCategory(category)
												}
												className={`flex items-center ${
													selectedCategory === category
														? 'text-primary-600 dark:text-primary-400 font-medium'
														: 'text-neutral-700 dark:text-neutral-300'
												}`}
											>
												<ArrowRight
													className={`w-4 h-4 mr-2 ${
														selectedCategory === category
															? 'opacity-100'
															: 'opacity-0'
													}`}
												/>
												{category}
											</button>
										</li>
									))}
								</ul>
							</div>

							{/* Popular Tags */}
							<div>
								<h3 className="text-xl font-semibold mb-4">
									Popular Tags
								</h3>
								<div className="flex flex-wrap gap-2">
									{Array.from(
										new Set(
											blogPosts.flatMap(
												(post) => post.tags,
											),
										),
									).map((tag, index) => (
										<button
											key={index}
											onClick={() => setSearchTerm(tag)}
											className="flex items-center px-3 py-1 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full text-sm text-neutral-700 dark:text-neutral-300 transition-colors"
										>
											<Tag className="w-3 h-3 mr-1" />
											{tag}
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
};

export default BlogPage;
