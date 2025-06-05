import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	href?: string;
	to?: string;
	className?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'md',
	href,
	to,
	className = '',
	onClick,
	type = 'button',
	disabled = false,
	icon,
}) => {
	const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
		disabled ? 'opacity-60 cursor-not-allowed' : ''
	}`;

	const variantClasses = {
		primary:
			'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
		secondary:
			'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-400',
		outline:
			'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500 dark:border-primary-400 dark:text-primary-400',
	};

	const sizeClasses = {
		sm: 'text-sm px-4 py-2 rounded-md',
		md: 'px-6 py-3 rounded-lg',
		lg: 'text-lg px-8 py-4 rounded-lg',
	};

	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

	// With icon
	const content = (
		<>
			{icon && <span className="mr-2">{icon}</span>}
			{children}
		</>
	);

	if (to) {
		return (
			<Link to={to} className={classes}>
				{content}
			</Link>
		);
	}

	if (href) {
		return (
			<a
				href={href}
				className={classes}
				target="_blank"
				rel="noopener noreferrer"
			>
				{content}
			</a>
		);
	}

	return (
		<button
			type={type}
			className={classes}
			onClick={onClick}
			disabled={disabled}
		>
			{content}
		</button>
	);
};

export default Button;
