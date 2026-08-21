"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-brand-expression";
const brands = ["terminal", "product"];

function applyBrand(brand) {
  document.documentElement.dataset.brand = brand;
  document.documentElement.style.colorScheme =
    brand === "product" ? "light" : "dark";
}

export default function BrandToggle() {
  const [brand, setBrand] = useState("terminal");

  useEffect(() => {
    const storedBrand = window.localStorage.getItem(STORAGE_KEY);
    const initialBrand = brands.includes(storedBrand) ? storedBrand : "terminal";

    setBrand(initialBrand);
    applyBrand(initialBrand);
  }, []);

  function chooseBrand(nextBrand) {
    setBrand(nextBrand);
    applyBrand(nextBrand);
    window.localStorage.setItem(STORAGE_KEY, nextBrand);
  }

  return (
    <div className="brand-toggle" role="group" aria-label="Brand expression">
      <span>Brand</span>
      {brands.map((item) => (
        <button
          aria-label={`Use ${item === "terminal" ? "Terminal" : "Product"} brand expression`}
          aria-pressed={brand === item}
          className={brand === item ? "is-active" : undefined}
          key={item}
          onClick={() => chooseBrand(item)}
          type="button"
        >
          {item === "terminal" ? "Terminal" : "Product"}
        </button>
      ))}
    </div>
  );
}
