import React from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
export default function FooterLayout({style, links, logo, copyright}) {
  const location = useLocation();
  const isOpenapi = location.pathname.includes("openapi-spec") || location.pathname.includes("db-support-functions");
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      },
      isOpenapi ? "full--width" : null,
      )}>
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
