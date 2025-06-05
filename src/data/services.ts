export interface Service {
	id: string;
	title: string;
	description: string;
	icon: string;
	benefits: string[];
	details: string;
}

export const services: Service[] = [
	{
		id: 'web-development',
		title: 'Web Development',
		description:
			'Custom web applications and responsive websites built with modern technologies and frameworks.',
		icon: 'Globe',
		benefits: [
			'Responsive design for all devices',
			'Progressive Web Apps (PWA)',
			'SEO optimization',
			'Fast loading speeds',
			'Scalable architecture',
		],
		details:
			'Our web development team creates high-performance, responsive websites and web applications tailored to your business needs. We use modern technologies like React, Angular, Vue.js, Node.js, and Laravel to build scalable, secure, and user-friendly web solutions. From simple landing pages to complex enterprise applications, we deliver web experiences that engage users and drive business growth.',
	},
	{
		id: 'mobile-app-development',
		title: 'Mobile App Development',
		description:
			'Native and cross-platform mobile applications for iOS and Android platforms.',
		icon: 'Smartphone',
		benefits: [
			'Native and cross-platform solutions',
			'Intuitive user interfaces',
			'Offline functionality',
			'Push notifications',
			'App store optimization',
		],
		details:
			'We develop high-quality mobile applications for iOS and Android platforms that provide seamless user experiences. Our mobile app development team uses technologies like React Native, Flutter, Swift, and Kotlin to build feature-rich applications that work across multiple platforms. We focus on creating intuitive interfaces, optimized performance, and robust functionality to ensure your mobile app stands out in the market.',
	},
	{
		id: 'ui-ux-design',
		title: 'UI/UX Design',
		description:
			'User-centered design approach to create intuitive and engaging digital experiences.',
		icon: 'Palette',
		benefits: [
			'User research and testing',
			'Wireframing and prototyping',
			'Visual design and branding',
			'Interaction design',
			'Accessibility compliance',
		],
		details:
			'Our UI/UX design team creates visually appealing and user-friendly interfaces that enhance user engagement and satisfaction. We follow a user-centered design approach, conducting thorough research, creating wireframes and prototypes, and iterating based on user feedback. Our designs are not just beautiful but also functional, accessible, and aligned with your business goals and user needs.',
	},
	{
		id: 'enterprise-software',
		title: 'Enterprise Software',
		description:
			'Custom enterprise solutions to streamline business processes and improve efficiency.',
		icon: 'Building2',
		benefits: [
			'Workflow automation',
			'Data integration',
			'Custom dashboards',
			'Reporting and analytics',
			'Scalable infrastructure',
		],
		details:
			'We develop robust enterprise software solutions that help businesses optimize operations, manage resources efficiently, and make data-driven decisions. Our enterprise solutions include ERP systems, CRM platforms, inventory management systems, and custom business applications. We ensure our enterprise software is secure, scalable, and seamlessly integrates with your existing systems.',
	},
	// {
	// 	id: 'cloud-services',
	// 	title: 'Cloud Services',
	// 	description:
	// 		'Cloud infrastructure setup, migration, and management for optimal performance and scalability.',
	// 	icon: 'Cloud',
	// 	benefits: [
	// 		'Infrastructure as Code (IaC)',
	// 		'Multi-cloud strategies',
	// 		'Cost optimization',
	// 		'Auto-scaling solutions',
	// 		'Disaster recovery',
	// 	],
	// 	details:
	// 		'Our cloud services help businesses leverage the power of cloud computing for enhanced performance, scalability, and cost efficiency. We offer cloud infrastructure setup, migration from on-premises to cloud, and ongoing cloud management. Our expertise spans across major cloud platforms including AWS, Google Cloud, and Microsoft Azure, ensuring you get the most out of your cloud investment.',
	// },
	{
		id: 'tech-consulting',
		title: 'Tech Consulting',
		description:
			'Strategic technology guidance to help businesses navigate digital transformation and innovation.',
		icon: 'Lightbulb',
		benefits: [
			'Digital transformation roadmaps',
			'Technology stack assessment',
			'Security audits',
			'Performance optimization',
			'Innovation workshops',
		],
		details:
			'Our technology consulting services provide strategic guidance to help businesses navigate digital transformation and innovation. We analyze your current technology landscape, identify areas for improvement, and develop a roadmap for implementation. Our consultants bring deep industry knowledge and technical expertise to help you make informed technology decisions that align with your business objectives.',
	},
	{
		id: 'it-support',
		title: 'IT Support',
		description:
			'Comprehensive IT support services to ensure smooth operation of your technology infrastructure.',
		icon: 'HeadsetHelp',
		benefits: [
			'24/7 technical support',
			'Preventive maintenance',
			'System monitoring',
			'Troubleshooting',
			'Software updates and patches',
		],
		details:
			'We provide reliable IT support services to ensure your technology infrastructure operates smoothly. Our IT support team offers 24/7 technical assistance, preventive maintenance, system monitoring, and troubleshooting. We handle software updates, security patches, and user support, allowing you to focus on your core business activities without worrying about IT issues.',
	},
];
