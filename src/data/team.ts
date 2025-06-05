export interface TeamMember {
	id: string;
	name: string;
	role: string;
	bio: string;
	image: string;
	social: {
		linkedin?: string;
		twitter?: string;
		github?: string;
	};
}

export const teamMembers: TeamMember[] = [
	{
		id: '1',
		name: 'Oluwatomiwa Adebayo',
		role: 'Founder & CEO',
		bio: 'Tomiwa founded Foz in 2018 after 10 years at Microsoft and Google. With a Computer Science degree from MIT and an MBA from Lagos Business School, he combines technical expertise with business acumen. His vision is to build world-class software solutions that address African challenges while competing globally.',
		image:
			'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		social: {
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
			github: 'https://github.com',
		},
	},
	{
		id: '2',
		name: 'Amina Ibrahim',
		role: 'Chief Technology Officer',
		bio: "Amina leads Foz's technology strategy and engineering teams. With over 15 years of experience in software development, she previously led engineering teams at Interswitch and Andela. Amina holds a Ph.D. in Computer Science from the University of Cape Town and is passionate about building scalable, resilient systems.",
		image:
			'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		social: {
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
			github: 'https://github.com',
		},
	},
	{
		id: '3',
		name: 'Emmanuel Okafor',
		role: 'Enterprise Solutions Director',
		bio: "Emmanuel oversees Foz's enterprise solutions division, focusing on large-scale implementations for corporate and government clients. Before joining Foz, he spent 8 years at Oracle consulting for clients across Africa. Emmanuel specializes in digital transformation strategies and complex system integrations.",
		image:
			'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		social: {
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
		},
	},
	{
		id: '4',
		name: 'Ngozi Eze',
		role: 'Head of Mobile Development',
		bio: "Ngozi leads Foz's mobile development team, bringing 10 years of experience building apps for diverse African markets. Her expertise spans native and cross-platform development with a focus on creating intuitive user experiences that work in challenging connectivity environments. She holds a degree in Software Engineering from Covenant University.",
		image:
			'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		social: {
			linkedin: 'https://linkedin.com',
			github: 'https://github.com',
		},
	},
	{
		id: '5',
		name: 'David Mensah',
		role: 'Creative Director',
		bio: "David oversees Foz's design team, ensuring all products deliver exceptional user experiences. With a background in both UX design and front-end development, he bridges the gap between aesthetics and functionality. David previously worked at top design agencies in Ghana and Nigeria before joining Foz in 2020.",
		image:
			'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		social: {
			linkedin: 'https://linkedin.com',
			twitter: 'https://twitter.com',
		},
	},
	{
		id: '6',
		name: 'Fatima Zahra',
		role: 'Cloud & DevOps Lead',
		bio: "Fatima leads Foz's cloud infrastructure and DevOps initiatives. With certifications in AWS, Azure, and Google Cloud, she designs resilient architectures that power our solutions. Her focus on automation and infrastructure-as-code has transformed how Foz delivers and maintains software at scale.",
		image:
			'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		social: {
			linkedin: 'https://linkedin.com',
			github: 'https://github.com',
		},
	},
];
