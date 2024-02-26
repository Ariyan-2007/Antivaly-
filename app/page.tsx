import NewProducts from "@/components/NewProducts";
import Slideshow from "@/components/Slideshow";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Slideshow />
      <NewProducts />
      <Testimonial />
    </main>
  );
}
