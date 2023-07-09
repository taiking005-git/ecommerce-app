"use client"
import Image, { StaticImageData } from "next/image";
import Link from 'next/link'


interface ProductItemsProp {
  productImageLink: StaticImageData | string;
  productTitle: string;
  productPrice: string;
  discountPrice?: string;
  quantity: string;
  flashSale?: boolean
}

const ProductItem = ({productImageLink, productTitle, productPrice, discountPrice, quantity, flashSale}:ProductItemsProp) => {
  return (
    <Link href="/product">
      <li
        className="flex flex-col relative cursor-pointer max-w-[200px] min-w-[200px] rounded-md overflow-hidden hover:shadow-lg hover:scale-[1.01]"
        onClick={() => {}}
      >
        <div className="flex items-center relative w-full justify-center align-center ">
          <figure className="h-[185px] w-[185px]">
            <Image className="w-full" src={productImageLink} alt="product" loading="lazy" />
            <span className="absolute top-1 right-1 bg-yellow-300 p-[2px] rounded-sm font-medium text-sm">
              -19%
            </span>
          </figure>
        </div>
        <div className="flex flex-col p-2 text-base w-full">
          <span className="max-w-full truncate text-base">{productTitle}</span>
          <span className="font-medium">N{productPrice}</span>
          <span className="line-through text-gray-500 text-xs italic">
            N{discountPrice}
          </span>
          {flashSale && (
            <>
              <span className="text-xs">{quantity} Items left </span>
              <span className="relative h-2 w-full overflow-hidden bg-red-200 rounded-md">
                <span className="h-full w-[80%] absolute bg-yellow-600 top-0 left-0 right-0 rounded-md"></span>
              </span>
            </>
          )}
        </div>
      </li>
    </Link>
  );
}

export default ProductItem