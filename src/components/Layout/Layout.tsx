import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import Breadcrumbs from "../BreadCrumb";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import "./styles.scss"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const [value, setValue] = useState<string | null>(null);
  const location = useLocation();
  const [crumbs, setCrumbs] =  useState<{ text: string; link: string }[]>([{ text: "Inicio", link: "/" }])


  useEffect( () => {
    configCrumbs()
  }, [location])



  const configCrumbs = () => {
    const match = location.pathname.match(/\/items\/([^/]+)/);
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search");
    let id = ""

    let crumbsConfig = [
      { text: "Inicio", link: "/" },
    ]

    if (match) {
        id = match[1]
        let crumb = { text: id, link: `/items?search=${search}` }
        crumbsConfig = [...crumbsConfig, crumb]
    } 

    if (search) {
        let crumb = { text: search, link: `/items?search=${search}` }
        crumbsConfig = [...crumbsConfig, crumb]
    }

    setCrumbs(crumbsConfig)
  }

  const handleSearch = async () => {
    try {
      const uriString = encodeURIComponent(value ?? " ");
      navigate(`/items?search=${uriString}`, { replace: true });
    } catch (error) {
      console.error("Error de búsqueda:", error);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      const uriString = encodeURIComponent(value ?? " ");
      navigate(`/items?search=${uriString}`, { replace: true });
    }
  };

  const onChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  return (
    <div className="layout">
      <SearchBar
        onChange={onChange}
        value={value}
        onSearch={handleSearch}
        onKeyDown={handleInputKeyDown}
      />
      <Breadcrumbs crumbs={crumbs}/>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
