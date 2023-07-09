"use client"

import tvImg from "../../public/products/tv.jpg";
import ProductItem from "./ProductItem";
import Link from 'next/navigation'

interface ProductListProps{
flashSale?:boolean
}



const ProductList = ({flashSale}:ProductListProps) => {
  return (
    <>
      <ul className="p-2 w-full flex gap-2 overflow-x-scroll">
        <ProductItem
          productImageLink={tvImg}
          productTitle="32 SmartTv Samsung"
          quantity="23"
          productPrice="45000"
          discountPrice="75000"
          flashSale={flashSale}
        />
        <ProductItem
          productImageLink={tvImg}
          productTitle="32 SmartTv Samsung"
          quantity="23"
          productPrice="45000"
          discountPrice="75000"
          flashSale={flashSale}
        />
        <ProductItem
          productImageLink={tvImg}
          productTitle="32 SmartTv Samsung"
          quantity="23"
          productPrice="45000"
          discountPrice="75000"
          flashSale={flashSale}
        />
        <ProductItem
          productImageLink={tvImg}
          productTitle="32 SmartTv Samsung"
          quantity="23"
          productPrice="45000"
          discountPrice="75000"
          flashSale={flashSale}
        />
        <ProductItem
          productImageLink={tvImg}
          productTitle="32 SmartTv Samsung"
          quantity="23"
          productPrice="45000"
          discountPrice="75000"
          flashSale={flashSale}
        />
        <ProductItem
          productImageLink={tvImg}
          productTitle="32 SmartTv Samsung"
          quantity="23"
          productPrice="45000"
          flashSale={flashSale}
        />
        <ProductItem
          productImageLink={tvImg}
          productTitle="32 SmartTv Samsung"
          quantity="23"
          productPrice="45000"
          flashSale={flashSale}
        />
        <ProductItem
          productImageLink={tvImg}
          productTitle="32 SmartTv Samsung"
          quantity="23"
          productPrice="45000"
          flashSale={flashSale}
        />
        <ProductItem
          productImageLink={tvImg}
          productTitle="32 SmartTv Samsung"
          quantity="23"
          productPrice="45000"
          flashSale={flashSale}
        />
        <ProductItem
          productImageLink={tvImg}
          productTitle="32 SmartTv Samsung"
          quantity="23"
          productPrice="45000"
          flashSale={flashSale}
        />
      </ul>
    </>
  );
};

export default ProductList;
