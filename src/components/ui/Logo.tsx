import React from 'react';

interface LogoProps {
	variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({}) => {

	return (
		<div className="flex items-center">
			<img src="/foz_logo.png" alt="FOZ Logo" className='w-16 h-16' />
		</div>
	);
};

export default Logo;
