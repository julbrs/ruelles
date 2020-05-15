import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteHeaderQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <header className="text-green-900">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center font-serif no-underline">
            {/* TODO put logo here */}
           
            <span className="text-6xl font-black tracking-tight">
            &ldquo;{site.siteMetadata.title}&rdquo;
            </span>
            
          </h1>
        </Link>
        <p className="text-xl font-medium tracking-tight">
        {site.siteMetadata.description}
        </p>
      </div>
      <hr className="h-1 bg-green-900 bg-opacity-25"/>
    </header>
  );
}

export default Header;
