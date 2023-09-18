import React, { useState } from "react";
import ProductDetail from "../../../components/ProductDetail";
import Layout from "../../../components/Layout/Layout";
import { useLocation } from "@reach/router";

const IndexPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return (
    <Layout>
        <ProductDetail/>
    </Layout>
  );
};

export default IndexPage;
