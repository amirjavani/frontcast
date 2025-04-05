import IntroductionComponent from "../Components/IntroductionComponent";
import CoursesComponent from "../Components/CoursesComponent";
import { Link } from "react-router";
import TestimonialsComponent from "../Components/TestimonialsComponent";
import { useEffect, useState } from "react";
import { getCardProducts } from "../utilities/api";

export type ProductsCard = {
  id: number;
  title: string;
  price: string;
  thumbnail: string;
};

function HomePage() {
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

  return (
    <main className="text-center">
      <IntroductionComponent />

      <CoursesComponent productsCards={productsCards.slice(0, 6)} />

      <Link
        to="/course"
        className="text-center text-[rgb(248,249,250)] px-3 bg-[#1976D2] py-2 rounded-lg hover:bg-[#1564b3] transition-colors ">
        مشاهده همه دوره‌های آموزشی{" "}
      </Link>

      <TestimonialsComponent />
    </main>
  );
}

export default HomePage;
