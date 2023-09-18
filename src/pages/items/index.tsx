import React from "react";
import SearchResults from "../../components/SearchResult";
import { useLocation } from "@reach/router";
import Layout from "../../components/Layout/Layout";

const IndexPage = (props) => {
  const location = useLocation();
  console.log("props",props)
  return (
    <Layout>
      <SearchResults/>
    </Layout>
  );
};

export default IndexPage;
