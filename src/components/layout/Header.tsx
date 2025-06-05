import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () =>
			window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Services', path: '/services' },
		{ name: 'Portfolio', path: '/portfolio' },
		{ name: 'Blog', path: '/blog' },
		{ name: 'Careers', path: '/careers' },
		{ name: 'Contact', path: '/contact' },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-sm'
					: 'bg-transparent'
			}`}
		>
			<div className="container py-4 flex items-center justify-between">
				<Link to="/" className="z-10" onClick={closeMenu}>
					<Logo />
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-8">
					{navItems.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) =>
								`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
									isActive
										? 'text-primary-600 dark:text-primary-400'
										: 'text-gray-400 dark:text-neutral-200'
								}`
							}
							end={item.path === '/'}
						>
							{item.name}
						</NavLink>
					))}
					<button
						onClick={toggleTheme}
						className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
						aria-label={`Switch to ${
							theme === 'dark' ? 'light' : 'dark'
						} mode`}
					>
						{theme === 'dark' ? (
							<Sun className="w-5 h-5 text-neutral-200" />
						) : (
							<Moon className="w-5 h-5 text-neutral-700" />
						)}
					</button>
				</nav>

				<div className="flex items-center md:hidden">
					<button
						onClick={toggleTheme}
						className="p-2 mr-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
						aria-label={`Switch to ${
							theme === 'dark' ? 'light' : 'dark'
						} mode`}
					>
						{theme === 'dark' ? (
							<Sun className="w-5 h-5 text-neutral-200" />
						) : (
							<Moon className="w-5 h-5 text-neutral-700" />
						)}
					</button>
					<button
						onClick={toggleMenu}
						className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<X className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
						) : (
							<Menu className="w-6 h-6 text-neutral-700 dark:text-neutral-200" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				<div
					className={`fixed inset-0 bg-white dark:bg-neutral-900 z-0 transition-transform duration-300 ease-in-out transform ${
						isMenuOpen
							? 'translate-x-0'
							: '-translate-x-full'
					} md:hidden`}
				>
					<div className="container h-full flex flex-col pt-20 pb-6">
						<nav className="flex-1 flex flex-col space-y-6 items-center justify-center">
							{navItems.map((item) => (
								<NavLink
									key={item.path}
									to={item.path}
									className={({ isActive }) =>
										`text-xl font-medium transition-colors ${
											isActive
												? 'text-primary-600 dark:text-primary-400'
												: 'text-neutral-700 dark:text-neutral-200'
										}`
									}
									onClick={closeMenu}
									end={item.path === '/'}
								>
									{item.name}
								</NavLink>
							))}
						</nav>
						<div className="text-center text-neutral-500 dark:text-neutral-400 text-sm">
							&copy; 2025 FOZ
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
