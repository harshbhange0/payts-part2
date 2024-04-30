import HeroSection from "@/components/HeroSection";
import HomeHeader from "@/components/homeHeader";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <section>
        <div className="">
          <HeroSection />
        </div >
      </section>
    </>
  );
}
