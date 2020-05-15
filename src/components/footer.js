import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

function Footer() {
  const { site } = useStaticQuery(graphql`
    query SiteFooterQuery {
      site {
        siteMetadata {
          author
          social {
            github
          }
        }
      }
    }
  `);

  return (
    <footer className="text-green-900">
      <hr className="h-1 bg-green-900 bg-opacity-25"/>
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p>
          Par{` `}
          <a
            className="font-bold no-underline"
            href={`https://twitter.com/${site.siteMetadata.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.siteMetadata.author}
          </a>
        </p>

        <Link to="/list">
          Liste des ruelles
        </Link>

        <p>
          <a
            className="font-bold no-underline"
            href={site.siteMetadata.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
