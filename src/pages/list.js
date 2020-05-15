import React from "react";

import Layout from "../layouts/layout";
import SEO from "../components/seo";

import BackLaneList from "../components/backlane/list"

import backlanes from "../../data/backlanes"

function ListPage() {
  return (
    <Layout>
      <SEO
        title="Liste des ruelles"
      />
      <BackLaneList backlanes={backlanes} />
    </Layout>
  );
}

export default ListPage;
