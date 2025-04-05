import React, { useEffect, useState } from "react";
import { getCardProducts } from "../utilities/api";
import { ProductsCard } from "./HomePage";
import CoursesComponent from "../Components/CoursesComponent";

function CoursesPage() {
  const [productsCards, setProductsCards] = useState<ProductsCard[]>([]);
  const fetchProducts = async () => {
    try {
      const data = await getCardProducts();

      setProductsCards(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();

    return () => {};
  }, []);

  return <CoursesComponent productsCards={productsCards} />;
}

export default CoursesPage;
