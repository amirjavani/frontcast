import { useThemeContext } from "../Context/ThemeProvider";

export type Testimonial = {
  id: number;
  name: string;
  text: string;
  imgURL: string;
};

function SingleTestimonialComponent({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const { theme } = useThemeContext();

  return (
    <div
      className={`flex flex-col w-full shadow ${
        theme == "dark" ? "bg-gray-500" : "bg-white"
      } rounded-2xl p-4`}>
      <div className="flex items-center gap-4">
        <img className="rounded-full" src={testimonial.imgURL} alt="pic" />
        <span>{testimonial.name}</span>
      </div>
      <p className="mt-2">{testimonial.text}</p>
    </div>
  );
}

export default SingleTestimonialComponent;
