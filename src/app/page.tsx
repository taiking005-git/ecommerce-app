import Container from "@/components/Container";
import HeroIndex from "@/components/hero/HeroIndex";
import ProductsCard from "@/components/products/ProductsCard";

export default function Home() {
  return (
    <Container>
      <main className="py-20 w-full flex flex-col gap-4 ">
        <HeroIndex />
        <ProductsCard flashSale />
        <ProductsCard title="Best Gadget"/>
      </main>
    </Container>
  );
}
