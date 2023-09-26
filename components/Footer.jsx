/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import Link from 'next/link';
import configuration from '../conf';
import { FaFacebook, FaSolarPanel, FaInstagram } from "react-icons/fa"; // Importovat ikony z knihovny react-icons

const { email, phone, urlSubdomain } = configuration;

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-800 bg-primary-50 dark:text-gray-100">
      <div className="container mr-4 flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="flex justify-center md:justify-start sm:justify-start lg:justify-start">
          <div className="w-[200px]">
            <Link href='/'>
              <img src='/logo/logo-name.png' alt='logo' className='w-[250px] lg:ml-10' />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50">Služby</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/zatepleni/zatepleni-stropu">Zateplení stropu</Link>
              </li>
              <li>
                <Link href="/zatepleni/zatepleni-strechy">Zateplení střechy</Link>
              </li>
              <li>
                <Link href="/zatepleni/zatepleni-fasady">Zateplení fasády</Link>
              </li>
              <li>
                <Link href="https://www.damepanely.cz">Solární ohřev vody</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-50">Firma</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/gdpr">Ochrana osobních údajů</Link>
              </li>
              <li>
                <Link href="#">Všeobecné obchodní podmínky</Link>
              </li>
              <li>
                <Link href="/#proces">Proces</Link>
              </li>
              <li>
                <Link href="/#benefity">Výhody</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50">Kontakt</h3>
            <ul className="space-y-1">
              <li>+420 605 898 894</li>
              <li>info@lunastav.cz </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-50">Sociální média</div>
            <div className="flex justify-start space-x-2">
              <Link href="https://www.facebook.com/lunastav" title="Facebook" className="flex items-center p-1">
                <FaFacebook className="w-5 h-5 fill-current" /> {/* Ikona Facebooku */}
              </Link>
              <Link href="https://damepanely.cz" title="Damepanely" className="flex items-center p-1">
                <FaSolarPanel className="w-5 h-5 fill-current" /> {/* Ikona solárního panelu */}
              </Link>
              <Link href="https://www.instagram.com/lunastavcz/" title="Instagram" className="flex items-center p-1">
                <FaInstagram className="w-5 h-5 fill-current" /> {/* Ikona Instagramu */}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">© 2023 LUNSTAV CZ s.r.o. - všechna práva vyhrazena, použití obsahu nebo jeho částí je možné pouze se souhlasem společnosti.</div>
    </footer>

  );
};

export default Footer;