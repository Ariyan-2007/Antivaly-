import NewProducts from "@/components/NewProducts";
import Slideshow from "@/components/Slideshow";
import Testimonial from "@/components/Testimonial";

export default function Home(context: any) {
  return (
    <main>
      <Slideshow />
      <NewProducts page={Number(context.searchParams.page)} />
      <Testimonial />
    </main>
  );
}
