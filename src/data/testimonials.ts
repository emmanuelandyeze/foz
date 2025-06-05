export interface Testimonial {
	id: string;
	text: string;
	author: string;
	position: string;
	company: string;
	image: string;
}

export const testimonials: Testimonial[] = [
	{
		id: '1',
		text: "Foz transformed our digital presence with a cutting-edge mobile app and website. Their team's understanding of African markets and technical expertise delivered a solution that truly resonates with our customers.",
		author: 'Oluwaseun Adebayo',
		position: 'CTO',
		company: 'AfriBank',
		image:
			'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		id: '2',
		text: 'Working with Foz on our enterprise resource planning system was a game-changer. They understood our complex requirements and delivered a solution that streamlined our operations across multiple African countries.',
		author: 'Chioma Okonkwo',
		position: 'CEO',
		company: 'MarketHub',
		image:
			'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		id: '3',
		text: 'The healthcare management system developed by Foz has revolutionized how we deliver care. Our staff can access patient information securely from anywhere, and the telemedicine features have been particularly valuable in reaching patients in remote areas.',
		author: 'Dr. Folake Adeleke',
		position: 'Medical Director',
		company: 'HealthConnect Nigeria',
		image:
			'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		id: '4',
		text: 'Foz understood the unique challenges of logistics in Nigeria and built us a system that works even in the most remote areas. The route optimization alone has saved us millions in operational costs.',
		author: 'Ibrahim Oladele',
		position: 'Operations Director',
		company: 'FastTrack Logistics',
		image:
			'https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
];
