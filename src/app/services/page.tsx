import React from 'react';
import ServiceCard from '../../components/ServiceCard';
import { services } from '../../lib/services';

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <a href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} key={service.id}>
            <ServiceCard service={service} />
          </a>
        ))}
      </div>
    </div>
  );
}
