import { Event } from './types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2026',
    date: '2026-03-15',
    location: 'San Francisco, CA',
    shortDescription: 'Annual technology conference featuring the latest innovations in AI and software development.',
    fullDescription: 'Join us for a full day of talks, workshops, and networking with industry leaders. Topics include machine learning, cloud architecture, and modern web development practices.',
    image: '/images/tech-conf.jpg',
    externalLink: 'https://example.com/tech-conf-2026',
  },
  {
    id: '2',
    title: 'Startup Pitch Night',
    date: '2026-04-22',
    location: 'New York, NY',
    shortDescription: 'Watch emerging startups pitch their ideas to top venture capitalists.',
    fullDescription: 'An evening of innovation where 10 selected startups will present their groundbreaking ideas. Network with founders, investors, and entrepreneurs shaping the future.',
  },
  {
    id: '3',
    title: 'Design Workshop Series',
    date: '2026-05-10',
    location: 'Austin, TX',
    shortDescription: 'Hands-on workshop covering UI/UX design principles and modern design tools.',
    fullDescription: 'A comprehensive workshop series spanning three sessions. Learn Figma, design systems, user research, and prototyping. Perfect for designers and developers looking to level up their skills.',
    image: '/images/design-workshop.jpg',
  },
  {
    id: '4',
    title: 'Hackathon 2026',
    date: '2026-06-05',
    location: 'Seattle, WA',
    shortDescription: '48-hour coding marathon to build innovative solutions for social good.',
    fullDescription: 'Team up with developers, designers, and product managers to create impactful projects. Prizes for top teams, mentorship from industry experts, and plenty of food and energy drinks.',
    externalLink: 'https://example.com/hackathon-2026',
  },
];
