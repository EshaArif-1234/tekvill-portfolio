export interface Service {
  id: number;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Creating responsive and modern web applications tailored to your needs using the latest technologies.'
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Developing cross-platform mobile applications for iOS and Android with React Native.'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces with a focus on user experience.'
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Implementing scalable cloud architectures using AWS, Azure, or Google Cloud.'
  },
  {
    id: 5,
    title: 'DevOps Services',
    description: 'Setting up CI/CD pipelines and infrastructure as code for efficient deployments.'
  },
  {
    id: 6,
    title: 'Technical Consulting',
    description: 'Providing expert advice on technology strategy and implementation.'
  }
];
