import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
	return (
		<div className="min-h-screen flex items-center justify-center pt-32 pb-20">
			<div className="container">
				<div className="max-w-2xl mx-auto text-center">
					<h1 className="text-6xl md:text-8xl font-bold text-primary-600 dark:text-primary-400 mb-6">
						404
					</h1>
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Page Not Found
					</h2>
					<p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
						The page you are looking for might have been
						removed, had its name changed, or is temporarily
						unavailable.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							to="/"
							variant="primary"
							icon={<Home className="w-5 h-5" />}
						>
							Go to Homepage
						</Button>
						<Button
							to="#"
							variant="outline"
							icon={<ArrowLeft className="w-5 h-5" />}
							onClick={() => window.history.back()}
						>
							Go Back
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
