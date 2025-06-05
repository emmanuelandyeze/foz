export interface JobPosition {
	id: string;
	title: string;
	department: string;
	location: string;
	type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
	description: string;
	responsibilities: string[];
	requirements: string[];
	benefits: string[];
	applicationUrl: string;
	postedDate: string;
}

export const jobPositions: JobPosition[] = [
	// {
	// 	id: '1',
	// 	title: 'Senior Frontend Developer',
	// 	department: 'Engineering',
	// 	location: 'Lagos, Nigeria (Hybrid)',
	// 	type: 'Full-time',
	// 	description:
	// 		'We are looking for an experienced Frontend Developer to join our growing team. In this role, you will be responsible for building high-quality, scalable web applications for our clients across various industries.',
	// 	responsibilities: [
	// 		'Develop responsive and performant web applications using modern JavaScript frameworks (React, Vue, Angular)',
	// 		'Collaborate with UX/UI designers to implement visually appealing and user-friendly interfaces',
	// 		'Write clean, maintainable, and well-documented code',
	// 		'Participate in code reviews and help maintain code quality',
	// 		'Optimize applications for maximum speed and scalability',
	// 		'Stay up-to-date with emerging trends and technologies in frontend development',
	// 	],
	// 	requirements: [
	// 		'5+ years of experience in frontend development',
	// 		'Proficiency in React, Vue, or Angular',
	// 		'Strong knowledge of HTML, CSS, and JavaScript',
	// 		'Experience with state management (Redux, Vuex, etc.)',
	// 		'Familiarity with build tools and module bundlers (Webpack, Vite, etc.)',
	// 		'Understanding of responsive design principles',
	// 		'Experience with version control systems (Git)',
	// 		"Bachelor's degree in Computer Science or related field (or equivalent experience)",
	// 	],
	// 	benefits: [
	// 		'Competitive salary and performance bonuses',
	// 		'Health insurance coverage',
	// 		'Professional development opportunities',
	// 		'Flexible work arrangements',
	// 		'Modern office in central Lagos',
	// 		'Regular team building activities',
	// 		'Opportunity to work on impactful projects across Africa',
	// 	],
	// 	applicationUrl:
	// 		'/careers/apply/senior-frontend-developer',
	// 	postedDate: 'March 15, 2025',
	// },
	// {
	// 	id: '2',
	// 	title: 'Backend Developer (Node.js/Python)',
	// 	department: 'Engineering',
	// 	location: 'Remote (Nigeria)',
	// 	type: 'Full-time',
	// 	description:
	// 		'Join our backend development team and help build robust, scalable APIs and services. You will work on challenging problems and implement solutions that power our client applications.',
	// 	responsibilities: [
	// 		'Design and develop scalable backend services and APIs',
	// 		'Work with databases (SQL and NoSQL) to store and retrieve data efficiently',
	// 		'Implement authentication, authorization, and security measures',
	// 		'Integrate with third-party services and APIs',
	// 		'Write automated tests for backend code',
	// 		'Collaborate with frontend developers to ensure seamless integration',
	// 		'Participate in system architecture discussions and decisions',
	// 	],
	// 	requirements: [
	// 		'3+ years of experience in backend development',
	// 		'Proficiency in Node.js, Python, or similar backend technologies',
	// 		'Experience with RESTful API design and implementation',
	// 		'Knowledge of database systems (PostgreSQL, MongoDB, etc.)',
	// 		'Understanding of authentication and authorization mechanisms',
	// 		'Familiarity with cloud platforms (AWS, Azure, GCP)',
	// 		'Experience with containerization (Docker, Kubernetes is a plus)',
	// 		'Good problem-solving skills and attention to detail',
	// 	],
	// 	benefits: [
	// 		'Competitive salary and performance bonuses',
	// 		'Health insurance coverage',
	// 		'Home office setup allowance',
	// 		'Professional development budget',
	// 		'Flexible working hours',
	// 		'Regular virtual team activities',
	// 		'Quarterly in-person team retreats',
	// 	],
	// 	applicationUrl: '/careers/apply/backend-developer',
	// 	postedDate: 'March 10, 2025',
	// },
	// {
	// 	id: '3',
	// 	title: 'UX/UI Designer',
	// 	department: 'Design',
	// 	location: 'Lagos or Abuja, Nigeria',
	// 	type: 'Full-time',
	// 	description:
	// 		'We are seeking a talented UX/UI Designer to create exceptional user experiences for our web and mobile applications. You will work closely with product managers, developers, and stakeholders to design intuitive and visually appealing interfaces.',
	// 	responsibilities: [
	// 		'Create user flows, wireframes, prototypes, and high-fidelity mockups',
	// 		'Conduct user research and usability testing',
	// 		'Develop and maintain design systems and style guides',
	// 		'Collaborate with developers to ensure proper implementation of designs',
	// 		'Gather and analyze user feedback to improve designs',
	// 		'Stay current with UX/UI trends and best practices',
	// 		'Present design concepts and solutions to stakeholders',
	// 	],
	// 	requirements: [
	// 		'3+ years of experience in UX/UI design for digital products',
	// 		'Strong portfolio demonstrating user-centered design process',
	// 		'Proficiency in design tools (Figma, Adobe XD, Sketch)',
	// 		'Knowledge of design principles, typography, and color theory',
	// 		'Experience designing for both web and mobile platforms',
	// 		'Understanding of accessibility standards and responsive design',
	// 		'Excellent communication and presentation skills',
	// 		'Ability to translate business requirements into design solutions',
	// 	],
	// 	benefits: [
	// 		'Competitive salary and performance bonuses',
	// 		'Health insurance coverage',
	// 		'Professional development opportunities',
	// 		'Creative work environment',
	// 		'Flexible work arrangements',
	// 		'Design conference and event allowance',
	// 		'Opportunity to shape the user experience of impactful products',
	// 	],
	// 	applicationUrl: '/careers/apply/ux-ui-designer',
	// 	postedDate: 'March 5, 2025',
	// },
	// {
	// 	id: '4',
	// 	title: 'DevOps Engineer',
	// 	department: 'Engineering',
	// 	location: 'Lagos, Nigeria',
	// 	type: 'Full-time',
	// 	description:
	// 		'We are looking for a DevOps Engineer to help us build and maintain our cloud infrastructure, automate deployment processes, and ensure the reliability and security of our systems.',
	// 	responsibilities: [
	// 		'Design, implement, and manage cloud infrastructure on AWS, Azure, or GCP',
	// 		'Automate deployment pipelines and CI/CD processes',
	// 		'Monitor system performance and troubleshoot issues',
	// 		'Implement security best practices and ensure compliance',
	// 		'Optimize system resources and costs',
	// 		'Collaborate with development teams to improve infrastructure',
	// 		'Create and maintain documentation for infrastructure and processes',
	// 	],
	// 	requirements: [
	// 		'3+ years of experience in DevOps or System Administration',
	// 		'Experience with cloud platforms (AWS, Azure, GCP)',
	// 		'Knowledge of infrastructure as code (Terraform, CloudFormation)',
	// 		'Familiarity with containerization and orchestration (Docker, Kubernetes)',
	// 		'Experience with CI/CD tools (Jenkins, GitHub Actions, etc.)',
	// 		'Understanding of networking and security principles',
	// 		'Scripting and automation skills (Bash, Python)',
	// 		'Problem-solving attitude and ability to work under pressure',
	// 	],
	// 	benefits: [
	// 		'Competitive salary and performance bonuses',
	// 		'Health insurance coverage',
	// 		'Professional certifications support',
	// 		'Flexible work arrangements',
	// 		'Modern office environment',
	// 		'Regular team building activities',
	// 		'Opportunity to build and scale infrastructure for impactful projects',
	// 	],
	// 	applicationUrl: '/careers/apply/devops-engineer',
	// 	postedDate: 'February 28, 2025',
	// },
	// {
	// 	id: '5',
	// 	title: 'Project Manager',
	// 	department: 'Project Management',
	// 	location: 'Lagos, Nigeria',
	// 	type: 'Full-time',
	// 	description:
	// 		'We are seeking an experienced Project Manager to lead our software development projects from inception to delivery. You will be responsible for planning, executing, and closing projects while ensuring they meet quality standards, deadlines, and budget constraints.',
	// 	responsibilities: [
	// 		'Lead project planning, execution, monitoring, and closure',
	// 		'Manage project scope, timeline, budget, and resources',
	// 		'Coordinate communication between clients, developers, and other stakeholders',
	// 		'Identify and mitigate project risks and issues',
	// 		'Track project progress and create regular status reports',
	// 		'Facilitate meetings and decision-making processes',
	// 		'Ensure project deliverables meet quality standards',
	// 		'Implement and maintain project management methodologies',
	// 	],
	// 	requirements: [
	// 		'5+ years of experience in managing software development projects',
	// 		'PMP, PRINCE2, or equivalent project management certification',
	// 		'Experience with Agile and Waterfall methodologies',
	// 		'Strong understanding of software development lifecycle',
	// 		'Excellent communication and leadership skills',
	// 		'Proficiency in project management tools (Jira, Asana, MS Project, etc.)',
	// 		'Problem-solving abilities and attention to detail',
	// 		'Experience working with clients in multiple industries',
	// 	],
	// 	benefits: [
	// 		'Competitive salary and performance bonuses',
	// 		'Health insurance coverage',
	// 		'Professional development opportunities',
	// 		'Flexible work arrangements',
	// 		'Modern office in central Lagos',
	// 		'Regular team building activities',
	// 		'Opportunity to lead impactful projects across Africa',
	// 	],
	// 	applicationUrl: '/careers/apply/project-manager',
	// 	postedDate: 'February 20, 2025',
	// },
];

export const companyValues = [
	{
		title: 'Excellence',
		description:
			'We strive for excellence in everything we do, from code quality to client interactions.',
	},
	{
		title: 'Innovation',
		description:
			'We embrace new technologies and approaches to solve complex problems.',
	},
	{
		title: 'Integrity',
		description:
			'We act with honesty, transparency, and ethical responsibility.',
	},
	{
		title: 'Collaboration',
		description:
			'We believe in the power of teamwork and open communication.',
	},
	{
		title: 'Empathy',
		description:
			'We understand and value the needs of our clients, users, and team members.',
	},
	{
		title: 'Impact',
		description:
			'We focus on creating solutions that make a meaningful difference.',
	},
];

export const companyBenefits = [
	{
		title: 'Work-Life Balance',
		description:
			'Flexible working hours and remote work options to help you balance your personal and professional life.',
	},
	{
		title: 'Health & Wellness',
		description:
			'Comprehensive health insurance and wellness programs to support your physical and mental wellbeing.',
	},
	{
		title: 'Professional Growth',
		description:
			'Continuous learning opportunities, conference attendance, and professional certification support.',
	},
	{
		title: 'Inclusive Environment',
		description:
			"A diverse and inclusive workplace where everyone's voice is heard and valued.",
	},
	{
		title: 'Competitive Compensation',
		description:
			'Attractive salary packages and performance-based bonuses to recognize your contributions.',
	},
	{
		title: 'Modern Workspace',
		description:
			'Comfortable office environment with the latest equipment and technology to support your work.',
	},
];
