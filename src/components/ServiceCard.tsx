import React from 'react';
import { Service } from '../lib/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
