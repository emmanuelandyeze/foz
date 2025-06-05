export interface CaseStudy {
	id: string;
	title: string;
	client: string;
	category: string;
	image: string; // This will now be the full URL or path
	brief: string;
	challenge: string;
	solution: string;
	results: string[];
	technologies: string[];
	testimonial?: {
		text: string;
		author: string;
		position: string;
	};
	link: string; // Added for the portfolio card href
}

export const caseStudies: CaseStudy[] = [
	// {
	// 	id: 'fintech-mobile-app',
	// 	title: 'Mobile Banking Platform',
	// 	client: 'AfriBank',
	// 	category: 'Mobile App Development',
	// 	image:
	// 		'https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	// 	brief:
	// 		'A comprehensive mobile banking solution that allows users to manage their finances, make transfers, pay bills, and access financial services on the go.',
	// 	challenge:
	// 		'AfriBank needed a secure, scalable, and user-friendly mobile banking application to serve their growing customer base across Nigeria and other African countries. The solution needed to work reliably in areas with intermittent internet connectivity while maintaining strict security standards.',
	// 	solution:
	// 		'We developed a feature-rich mobile banking platform for iOS and Android using React Native. The app includes biometric authentication, offline transaction queuing, real-time notifications, and integration with multiple payment gateways. We implemented advanced encryption and security measures to protect user data and financial transactions.',
	// 	results: [
	// 		'250,000+ downloads within the first 3 months',
	// 		'40% increase in mobile banking adoption',
	// 		'60% reduction in branch visits for routine transactions',
	// 		'99.9% uptime with robust failover mechanisms',
	// 		'Award for "Best Financial App" at the Africa Tech Awards',
	// 	],
	// 	technologies: [
	// 		'React Native',
	// 		'Node.js',
	// 		'MongoDB',
	// 		'Firebase',
	// 		'AWS',
	// 		'Plaid API',
	// 	],
	// 	testimonial: {
	// 		text: "Foz delivered a mobile banking solution that exceeded our expectations. The app is not only secure and reliable but also intuitive and user-friendly. Our customers love the seamless experience, and we've seen significant growth in mobile transactions since launch.",
	// 		author: 'Oluwaseun Adebayo',
	// 		position: 'CTO, AfriBank',
	// 	},
	// 	link: '/case-studies/fintech-mobile-app', // Example link
	// },
	// {
	// 	id: 'e-commerce-platform',
	// 	title: 'E-Commerce Marketplace',
	// 	client: 'MarketHub',
	// 	category: 'Web Development',
	// 	image:
	// 		'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	// 	brief:
	// 		'A comprehensive e-commerce marketplace connecting local vendors with customers across Africa, featuring secure payments, vendor management, and logistics integration.',
	// 	challenge:
	// 		'MarketHub wanted to create an online marketplace that could accommodate thousands of vendors, manage complex logistics across multiple African countries, and provide a seamless shopping experience for customers with varying levels of tech literacy.',
	// 	solution:
	// 		'We built a scalable e-commerce platform using Next.js for the frontend and Node.js for the backend. The platform features a vendor management system, integrated payment processing for multiple African payment methods, logistics tracking, and a recommendation engine. We optimized the platform for low-bandwidth environments and implemented progressive loading techniques.',
	// 	results: [
	// 		'Successfully onboarded 5,000+ vendors in the first year',
	// 		'300% increase in online sales for participating merchants',
	// 		'Expanded market reach to 12 African countries',
	// 		'Reduced page load time by 60% through optimization',
	// 		'Seamless integration with local payment and delivery providers',
	// 	],
	// 	technologies: [
	// 		'Next.js',
	// 		'Node.js',
	// 		'PostgreSQL',
	// 		'Redis',
	// 		'Elasticsearch',
	// 		'Google Cloud',
	// 	],
	// 	testimonial: {
	// 		text: 'Foz transformed our business with a marketplace platform that truly works for African markets. They understood our unique challenges and built solutions that address connectivity issues, payment complexities, and logistics hurdles. The platform has been a game-changer for our growth.',
	// 		author: 'Chioma Okonkwo',
	// 		position: 'CEO, MarketHub',
	// 	},
	// 	link: '/case-studies/e-commerce-platform', // Example link
	// },
	// {
	// 	id: 'healthcare-management',
	// 	title: 'Healthcare Management System',
	// 	client: 'HealthConnect Nigeria',
	// 	category: 'Enterprise Software',
	// 	image:
	// 		'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	// 	brief:
	// 		'An integrated healthcare management system that streamlines patient records, appointments, billing, and telemedicine services for a network of hospitals.',
	// 	challenge:
	// 		'HealthConnect needed to digitize and centralize operations across their network of 15 hospitals and 30+ clinics in Nigeria. They required a system that could work with limited infrastructure, maintain patient data privacy, and provide accessibility to both medical professionals and patients.',
	// 	solution:
	// 		'We developed a comprehensive healthcare management system with electronic medical records (EMR), appointment scheduling, inventory management, billing, and telemedicine capabilities. The system includes both web and mobile interfaces, works offline with synchronization when connectivity is restored, and implements strict access controls and data encryption to ensure HIPAA compliance.',
	// 	results: [
	// 		'70% reduction in administrative paperwork',
	// 		'35% improvement in appointment adherence',
	// 		'40% faster access to patient records for healthcare providers',
	// 		'Successful deployment across all 45+ facilities',
	// 		'Integration with laboratory systems and insurance providers',
	// 	],
	// 	technologies: [
	// 		'Angular',
	// 		'Django',
	// 		'PostgreSQL',
	// 		'Docker',
	// 		'Kubernetes',
	// 		'Azure',
	// 	],
	// 	testimonial: {
	// 		text: 'The healthcare management system developed by Foz has revolutionized how we deliver care. Our staff can access patient information securely from anywhere, and the telemedicine features have been particularly valuable in reaching patients in remote areas. The system is robust, secure, and adaptable to our evolving needs.',
	// 		author: 'Dr. Folake Adeleke',
	// 		position: 'Medical Director, HealthConnect Nigeria',
	// 	},
	// 	link: '/case-studies/healthcare-management', // Example link
	// },
	// {
	// 	id: 'logistics-tracking',
	// 	title: 'Logistics Tracking System',
	// 	client: 'FastTrack Logistics',
	// 	category: 'Web & Mobile Development',
	// 	image:
	// 		'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	// 	brief:
	// 		'An end-to-end logistics management and tracking system with real-time updates, route optimization, and customer notifications.',
	// 	challenge:
	// 		'FastTrack Logistics needed a reliable system to track deliveries across challenging environments with limited GPS coverage, manage a fleet of vehicles, optimize delivery routes, and provide real-time updates to customers.',
	// 	solution:
	// 		'We created a comprehensive logistics platform with web and mobile components. The system includes GPS and SMS-based tracking, intelligent route optimization algorithms that account for traffic patterns and road conditions, driver mobile apps with offline functionality, and customer notification systems. We implemented a mesh network approach for areas with limited connectivity.',
	// 	results: [
	// 		'30% reduction in delivery times',
	// 		'25% decrease in fuel costs through route optimization',
	// 		'99% on-time delivery rate, up from 80%',
	// 		'Enhanced customer satisfaction with real-time tracking',
	// 		'Expanded operations to rural areas previously considered unreachable',
	// 	],
	// 	technologies: [
	// 		'React',
	// 		'React Native',
	// 		'Node.js',
	// 		'MongoDB',
	// 		'GraphQL',
	// 		'Google Maps API',
	// 		'Twilio',
	// 	],
	// 	testimonial: {
	// 		text: 'Foz understood the unique challenges of logistics in Nigeria and built us a system that works even in the most remote areas. The route optimization alone has saved us millions in operational costs, and the real-time tracking has significantly improved customer satisfaction. This system has been key to our expansion across West Africa.',
	// 		author: 'Ibrahim Oladele',
	// 		position: 'Operations Director, FastTrack Logistics',
	// 	},
	// 	link: '/case-studies/logistics-tracking', // Example link
	// },
	// Your existing smaller portfolio items can be added here if you still want them displayed.
	// For consistency, you might want to convert them to the CaseStudy interface as well
	// or keep them separate and render them in a different loop if their structure differs too much.
	// {
	// 	id: 'timer-app',
	// 	title: 'Timer App',
	// 	client: 'Personal Project', // Assuming this is a personal project
	// 	category: 'Web Development',
	// 	image: '/images/timer.png',
	// 	brief: 'An animation timer',
	// 	challenge: 'N/A', // Add appropriate brief descriptions
	// 	solution: 'N/A',
	// 	results: [],
	// 	technologies: [],
	// 	link: '/webdev/portfolio/timerApp',
	// },
	// {
	// 	id: 'colour-game',
	// 	title: 'Colour Game',
	// 	client: 'Personal Project',
	// 	category: 'Web Development',
	// 	image: '/images/colourGame.png',
	// 	brief:
	// 		'See how good you are with identifying colours in the RGB colour scheme.',
	// 	challenge: 'N/A',
	// 	solution: 'N/A',
	// 	results: [],
	// 	technologies: [],
	// 	link: '/webdev/portfolio/colourgame',
	// },
	{
		id: 'reporting-application',
		title: 'Reporting Application',
		client: 'Personal Project',
		category: 'Web Development',
		image: '/scc.png',
		brief:
			'A robust reporting application that makes attendance reporting easy',
		challenge: 'N/A',
		solution: 'N/A',
		results: [],
		technologies: [],
		link: 'https://sccreport.com.ng',
	},
	{
		id: 'league-table',
		title: 'League Table',
		client: 'Personal Project',
		category: 'Web Development',
		image: '/league.jpg',
		brief: 'A simple league table',
		challenge: 'N/A',
		solution: 'N/A',
		results: [],
		technologies: [],
		link: 'http://football.foz.ng',
	},
	{
		id: 'movie-app',
		title: 'Movie App',
		client: 'Personal Project',
		category: 'Web Development',
		image:
			'https://uizard.io/static/abd75e2512df2f0625e09d2032bd9272/a8e47/86e58f6f271b32748cd5d18a6ac76c3a3f6614fc-1440x835.png',
		brief: 'Compare two movies and see which is best.',
		challenge: 'N/A',
		solution: 'N/A',
		results: [],
		technologies: [],
		link: '/webdev/portfolio/movieApp',
	},
	{
		id: 'todo-list',
		title: 'Todo List',
		client: 'Personal Project',
		category: 'Web Development',
		image:
			'https://uizard.io/static/94aaccf85c8db1300648285553e1a9d3/a8e47/e0877cb90f763aec3b40807fec617341abca6c34-1440x835.png',
		brief: 'A Simple Todo List App',
		challenge: 'N/A',
		solution: 'N/A',
		results: [],
		technologies: [],
		link: 'https://todolist-foz.herokuapp.com/',
	},
];
