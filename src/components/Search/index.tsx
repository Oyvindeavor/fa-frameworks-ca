"use client";

import { useState, useEffect } from "react";
import styles from "./search.module.scss";
import { filterProducts } from "@/utils/filterProducts";
import type { Product } from "@/types/api/apiresponse";
import { SearchInput } from "./Input ";
import { Dropdown } from "./Dropdown";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setIsLoading(true);
      const products = await filterProducts(searchQuery);
      setSearchResults(products);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchQuery.length >= 2) {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsLoading(true);
    const products = await filterProducts(searchQuery);
    setSearchResults(products);
    setIsLoading(false);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.container}>
      <SearchInput
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onFocus={handleDropdownToggle}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />

      {isLoading && <p>Loading...</p>}
      <Dropdown show={showDropdown && searchQuery.length >= 2} products={searchResults} />
    </div>
  );
}
