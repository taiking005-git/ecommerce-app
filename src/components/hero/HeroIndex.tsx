import Categories from "@/components/categories/Categories";
import Hero from "@/components/hero/Hero";
import RightSideBar from "./RightSideBar";

const HeroIndex = () => {
  return (
    <div className="my-2 h-[350px] flex gap-4">
      <Categories />
      <Hero />
      <RightSideBar />
    </div>
  );
};

export default HeroIndex;
