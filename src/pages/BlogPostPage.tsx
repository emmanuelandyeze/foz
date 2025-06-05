import React from 'react';
import {
	useParams,
	Link,
	useNavigate,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import {
	ArrowLeft,
	Calendar,
	Clock,
	Tag,
	Share2,
	Facebook,
	Twitter,
	Linkedin,
} from 'lucide-react';
import Section from '../components/ui/Section';
import { blogPosts } from '../data/blog';

const BlogPostPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const post = blogPosts.find((p) => p.id === id);

	if (!post) {
		// If post not found, navigate to blog page
		React.useEffect(() => {
			navigate('/blog');
		}, [navigate]);

		return null;
	}

	// Related posts (same category or shared tags)
	const relatedPosts = blogPosts
		.filter((p) => p.id !== id)
		.filter(
			(p) =>
				p.category === post.category ||
				p.tags.some((tag) => post.tags.includes(tag)),
		)
		.slice(0, 2);

	return (
		<>
			{/* Header */}
			<section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
				<div className="container">
					<div className="max-w-3xl mx-auto">
						<Link
							to="/blog"
							className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
						>
							<ArrowLeft className="w-5 h-5 mr-2" />
							Back to Blog
						</Link>
						<h1 className="text-3xl md:text-4xl font-bold mb-4">
							{post.title}
						</h1>
						<p className="text-xl text-white/80 mb-6">
							{post.excerpt}
						</p>
						<div className="flex items-center">
							<img
								src={post.author.avatar}
								alt={post.author.name}
								className="w-12 h-12 rounded-full mr-4"
							/>
							<div>
								<p className="font-medium">
									{post.author.name}
								</p>
								<p className="text-white/80 text-sm">
									{post.author.role}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Section>
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Main Content */}
					<div className="lg:w-2/3">
						<motion.article
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<img
								src={post.image}
								alt={post.title}
								className="w-full h-auto rounded-xl mb-8"
							/>

							<div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-8 gap-6">
								<div className="flex items-center">
									<Calendar className="w-4 h-4 mr-2" />
									{post.date}
								</div>
								<div className="flex items-center">
									<Clock className="w-4 h-4 mr-2" />
									{post.readTime} min read
								</div>
								<div className="flex items-center">
									<Tag className="w-4 h-4 mr-2" />
									{post.category}
								</div>
							</div>

							<div
								className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-neutral-900 dark:prose-headings:text-white prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-a:text-primary-600 dark:prose-a:text-primary-400 mb-8"
								dangerouslySetInnerHTML={{
									__html: post.content.replace(
										/\n/g,
										'<br />',
									),
								}}
							/>

							<div className="border-t border-b border-neutral-200 dark:border-neutral-700 py-6 my-8">
								<div className="flex flex-wrap items-center justify-between">
									<div className="mb-4 md:mb-0">
										<span className="text-sm text-neutral-500 dark:text-neutral-400 mr-3">
											Tags:
										</span>
										{post.tags.map((tag, index) => (
											<Link
												key={index}
												to={`/blog?tag=${tag}`}
												className="inline-block px-3 py-1 mr-2 mb-2 md:mb-0 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
											>
												{tag}
											</Link>
										))}
									</div>

									<div className="flex items-center">
										<span className="text-sm text-neutral-500 dark:text-neutral-400 mr-3">
											Share:
										</span>
										<div className="flex space-x-3">
											<a
												href="#"
												className="text-neutral-400 hover:text-[#1877F2] transition-colors"
												aria-label="Share on Facebook"
											>
												<Facebook className="w-5 h-5" />
											</a>
											<a
												href="#"
												className="text-neutral-400 hover:text-[#1DA1F2] transition-colors"
												aria-label="Share on Twitter"
											>
												<Twitter className="w-5 h-5" />
											</a>
											<a
												href="#"
												className="text-neutral-400 hover:text-[#0A66C2] transition-colors"
												aria-label="Share on LinkedIn"
											>
												<Linkedin className="w-5 h-5" />
											</a>
											<button
												className="text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
												aria-label="Copy link"
												onClick={() => {
													navigator.clipboard.writeText(
														window.location.href,
													);
													alert(
														'Link copied to clipboard!',
													);
												}}
											>
												<Share2 className="w-5 h-5" />
											</button>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
								<div className="flex flex-col md:flex-row items-center">
									<img
										src={post.author.avatar}
										alt={post.author.name}
										className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-6"
									/>
									<div>
										<h3 className="text-xl font-semibold mb-2">
											{post.author.name}
										</h3>
										<p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
											{post.author.role}
										</p>
										<p className="text-neutral-700 dark:text-neutral-300">
											A technology leader with expertise in
											software development and innovation
											for African markets.
										</p>
									</div>
								</div>
							</div>
						</motion.article>
					</div>

					{/* Sidebar */}
					<div className="lg:w-1/3">
						<div className="sticky top-24">
							{/* Related Posts */}
							<div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 mb-8">
								<h3 className="text-xl font-semibold mb-6">
									Related Articles
								</h3>
								<div className="space-y-6">
									{relatedPosts.map(
										(relatedPost, index) => (
											<div
												key={index}
												className="flex items-start"
											>
												<Link
													to={`/blog/${relatedPost.id}`}
													className="shrink-0"
												>
													<img
														src={relatedPost.image}
														alt={relatedPost.title}
														className="w-20 h-20 object-cover rounded-md mr-4"
													/>
												</Link>
												<div>
													<h4 className="font-medium mb-1">
														<Link
															to={`/blog/${relatedPost.id}`}
															className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
														>
															{relatedPost.title}
														</Link>
													</h4>
													<p className="text-neutral-500 dark:text-neutral-400 text-sm">
														{relatedPost.date} ·{' '}
														{relatedPost.readTime} min read
													</p>
												</div>
											</div>
										),
									)}
								</div>
							</div>

							{/* Categories */}
							<div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6">
								<h3 className="text-xl font-semibold mb-4">
									Categories
								</h3>
								<ul className="space-y-2">
									{Array.from(
										new Set(
											blogPosts.map((p) => p.category),
										),
									).map((category, index) => (
										<li key={index}>
											<Link
												to={`/blog?category=${category}`}
												className={`flex items-center text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
													category === post.category
														? 'font-medium text-primary-600 dark:text-primary-400'
														: ''
												}`}
											>
												<ArrowLeft
													className={`w-4 h-4 mr-2 ${
														category === post.category
															? 'opacity-100'
															: 'opacity-0'
													}`}
												/>
												{category}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
};

export default BlogPostPage;
