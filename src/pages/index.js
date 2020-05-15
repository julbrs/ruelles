import React from "react";

import Layout from "../layouts/layout";
import SEO from "../components/seo";

import BackLaneMap from "../components/backlane/map"

import backlanes from "../../data/backlanes"


function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Acceuil"
      />
      <BackLaneMap backlanes={backlanes} />
    </Layout>
  );
}

export default IndexPage;
