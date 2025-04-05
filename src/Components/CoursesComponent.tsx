import CardComponent from "./CardComponent";
function CoursesComponent() {
  return (
    <div className="text-start mt-50 mb-20">
      <h1 className="text-[32px] font-bold mb-10">دوره‌های آموزشی</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8
 mx-10">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default CoursesComponent;
