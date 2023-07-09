"use client"

import Card from "../Card";
import ProductList from "./ProductList";
import { HiChevronRight } from "react-icons/hi";

interface ProductCardProp{
  title?: string
  flashSale?: boolean
}

const ProductsCard = ({ title, flashSale}:ProductCardProp) => {
  flashSale ? title = "FLASH SALE" : "";
  return (
    <section className="flex flex-1 w-full">
      <Card>
        <div
          className={`flex justify-between p-4  font-medium text-lg
        ${flashSale ? "bg-red-800" : "bg-red-100"} 
        
        `}
        >
          <h2 className="">{title}</h2>
          {flashSale && (
            <h3>
              Time Left <span>08h : 58 : 49s</span>{" "}
            </h3>
          )}
          <h4 className="cursor-pointer flex items-center gap-1">
            SELL ALL <HiChevronRight size={24} />{" "}
          </h4>
        </div>
        <ProductList flashSale={flashSale} />
      </Card>
    </section>
  );
};

export default ProductsCard;
