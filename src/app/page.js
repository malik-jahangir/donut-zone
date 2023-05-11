import Header from "@/components/Header";
import Showcase from "@/components/Showcase";
import SliderImages from "@/components/SliderImages";
import AboutUs from "@/components/AboutUs";
import OrderOnline from "@/components/OrderOnline";
import ImageBanner from "@/components/ImageBanner";
export default function Home() {
  return (
    <>
      <section className="section1">
        <Header />
        <Showcase />
      </section>
      <section className="section2">
        <SliderImages />
        <AboutUs />
      </section>
      <section className="section3">
        <OrderOnline />
        <ImageBanner />
      </section>
    </>
  );
}
