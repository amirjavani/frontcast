import React from "react";
import IntroductionComponent from "../Components/IntroductionComponent";
import CoursesComponent from "../Components/CoursesComponent";
import { Link } from "react-router";
import CommentsComponent from "../Components/CommentsComponent";

function HomePage() {
  return (
    <main className="text-center">
      
      <IntroductionComponent />

      <CoursesComponent />

      <Link
        to="/course"
        className="text-center text-[rgb(248,249,250)] px-3 bg-[#1976D2] py-2 rounded-lg hover:bg-[#1564b3] transition-colors ">
        مشاهده همه دوره‌های آموزشی{" "}
      </Link>

      <CommentsComponent />
      
    </main>
  );
}

export default HomePage;
