import React from 'react';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

export const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex bg-primary-25" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <FiChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            )}
            {index === 0 ? (
              <Link
                href={item.href}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white"
              >
                <FiHome className="w-3 h-3 mr-2.5" /> {item.label}
              </Link>
            ) : index === items.length - 1 ? (
              <span className="text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="inline-flex items-center text-sm md:ml-2 font-medium text-gray-700 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};