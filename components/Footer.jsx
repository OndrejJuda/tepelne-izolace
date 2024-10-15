/* eslint-disable @next/next/no-sync-scripts */
import Link from 'next/link';
import configuration from '../conf';
import { FaFacebook, FaSolarPanel, FaInstagram } from "react-icons/fa";
import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const { email, phone, urlSubdomain } = configuration;

const Footer = () => {
  const router = useRouter();
  useEffect(() => {
    const sendFBdata = async () => {
      try {
        const currentUrl = router.asPath;
        console.log('Current URL:', currentUrl);
        const getIp = await fetch('/api/get-ip');
        const ipAddress = await getIp.json();
        const fb = await fetch(
          '/api/facebook/',
          {
            method: 'POST',
            body: JSON.stringify({ ipAddress: ipAddress.ip, currentUrl: "https://lunastav.cz" + currentUrl }),
          }
        );
      } catch (error) {
        console.error(error);
      }
    };

    sendFBdata();
  }, []);

  return (
    <footer className="px-8 divide-y mt-12 bg-primary-50 flex flex-col items-center">
      <div className="container flex flex-col justify-evenly py-10 space-y-8 lg:flex-row lg:space-y-0">
        <div className='flex justify-center'>
          <Link href='/'>
            <img src='/logo/logo-name.png' alt='logo' className='w-[200px]' />
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracki uppercase ">Služby</h3>
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
                <Link href="https://www.damepanely.cz">FVE na ohřev vody</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase ">Firma</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/gdpr">Ochrana osobních údajů</Link>
              </li>
              <li>
                <Link href="/#proces">Proces</Link>
              </li>
              <li>
                <Link href="/#benefity">Výhody</Link>
              </li>
              <li>
                <Link href="/dotace">Dotace</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase ">Kontakt</h3>
            <ul className="space-y-1">
              <li>+420 731 513 994</li>
              <li>info@lunastav.cz </li>
              <li>IČO: 05591872 </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase ">Sociální média</div>
            <div className="flex justify-start space-x-2">
              <Link href="https://www.facebook.com/lunastav" title="Facebook" className="flex items-center p-1">
                <FaFacebook className="w-5 h-5 fill-current" /> {/* Ikona Facebooku */}
              </Link>
              <Link href="https://damepanely.cz" title="damepanely" className="flex items-center p-1">
                <FaSolarPanel className="w-5 h-5 fill-current" /> {/* Ikona solárního panelu */}
              </Link>
              <Link href="https://www.instagram.com/lunastav.cz/" title="Instagram" className="flex items-center p-1">
                <FaInstagram className="w-5 h-5 fill-current" /> {/* Ikona Instagramu */}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center self-stretch">© 2023 LUNASTAV CZ s.r.o. - všechna práva vyhrazena, použití obsahu nebo jeho částí je možné pouze se souhlasem společnosti.</div>
    </footer>
  );
};

export default Footer;