import React from "react";

import Layout from "../layouts/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <p className="text-6xl font-bold align-center">
        Oups !
      </p>
      <p className="text-2xl font-bold align-center lg:m-24 ">
        Vous avez fait mauvaise route ! 
      </p>
      <h2>(Erreur 404)</h2>
    </Layout>
  );
}

export default NotFoundPage;
