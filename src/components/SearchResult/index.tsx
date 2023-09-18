import React, { useEffect, useState } from "react";
import shipping from "../../assets/ic_shipping.png"
import formatMoney from "../../utils/formatMoney";
import { navigate } from 'gatsby';
import { useLocation } from "@reach/router";
import { apiFetch } from "../../utils/apiFetch";
import "./styles.scss";

interface ResultItem {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  address: {
    state_name: string;
  };
  shipping: {
    free_shipping: boolean;
  };
}

const SearchResults: React.FC = () => {
  const [results, setResults] = useState<ResultItem[]>([])
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");

  useEffect(() => {
    handleSearch()
  }, [searchValue])

  const handleSearch = async () => {
    try {
      const uriString = encodeURIComponent(searchValue ?? " ");
      const { results } = await apiFetch(uriString);
      setResults(results);
    } catch (error) {
      console.error("Error de búsqueda:", error);
    }
  };

  const handleItemClick = (productId) => {
    navigate(`/items/${productId}`);
  };

  return (
    <div className="search-results">
      {results.map((item) => {
        
        const {
          id,
          thumbnail, 
          title, 
          price, 
          address : {state_name}, 
          shipping : {free_shipping}
        } = item

        return (
          <div className="result-item" onClick={() => handleItemClick(id)} key={id}>
            <img
              src={thumbnail}
              alt={title}
              className="result-image"
            />
            <div className="result-details">
              <div className="result-price-container">
                <p className="result-price">{formatMoney(price)}</p>
                {free_shipping ? <img src={shipping} alt={"envio gratis"}/> : null}
              </div>
              
              <h3 className="result-title">{title}</h3>
            </div>
            <p className="result-location">{state_name}</p>
          </div>
        )
      })}
    </div>
  );
};

export default SearchResults;
