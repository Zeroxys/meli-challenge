import React, { useState } from "react";
import ProductDetail from "../../../components/ProductDetail";
import Layout from "../../../components/Layout/Layout";
import { useLocation } from "@reach/router";
import { apiFetch } from "../../../utils/apiFetch";

const IndexPage = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log("props",props)
  return (
    <Layout>
        <ProductDetail product={{}}/>
    </Layout>
  );
};

export default IndexPage;
