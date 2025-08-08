import React from 'react';
import { services } from '../../../lib/services';
import { notFound } from 'next/navigation';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  // Map the URL slug to the service title
  const service = services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === params.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{service.title}</h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            This is a detailed description of our {service.title} service. We provide top-notch solutions tailored to your needs.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Custom solutions designed for your specific requirements</li>
            <li>Expert team with years of industry experience</li>
            <li>Latest technology and best practices</li>
            <li>24/7 support and maintenance</li>
          </ul>
        </div>
        <div className="mt-6">
          <a href="/contact" className="inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Contact Us About This Service
          </a>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all services at build time
export async function generateStaticParams() {
  return services.map(service => ({
    slug: service.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}
