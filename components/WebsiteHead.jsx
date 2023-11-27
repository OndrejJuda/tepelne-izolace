import React from 'react';
import Head from 'next/head';
import configuration from '../conf';

const { title, description, url, jsonLd } = configuration;

const WebsiteHead = ({ titleSuffix, canonicalHref }) => {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <link rel='canonical' href={canonicalHref}></link>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#e5a832" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* <!-- Primary Meta Tags --> */}
        <title>{`${title}${titleSuffix ? titleSuffix : ''}`}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/business/metaimage.png' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:image' content='/business/metaimage.png'></meta>

        {/* Schema Markup JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async dangerouslySetInnerHTML={{
          __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1747459502334265');
        fbq('track', 'PageView');
      `}} />
        <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1747459502334265&ev=PageView&noscript=1"
        /></noscript>
      </Head>
    </>
  );
};

export default WebsiteHead;