import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./food-selector.css";

export default function FoodSelector({ onChange }) {
  const [categories, setCategories] = useState([]);
  const apiURL = "http://localhost:4000/graphql";
  const body = `#graphql
    {
        getAllCategories {
        label: name
        options: foods {
          value: id,
          label: name
        }
      }
    }`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: body }),
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(apiURL, options)
      .then((response) => response.json())
      .then(({ data }) => {
        const categoriesData = data.getAllCategories.map((category) => ({
          label: category.label,
          options: category.options.map((option) => ({
            value: option.value,
            label: option.label,
          })),
        }));
        setCategories(categoriesData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const formatGroupLabel = (data) => (
    <div>
      <span>{data.label}</span>
    </div>
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <Select
      options={categories}
      formatGroupLabel={formatGroupLabel}
      onChange={onChange}
      style={{ minWidth: "300px", maxWidth: "300px" }}
    />
  );
}
