import Image from "next/image";
import tvImg from "../../public/products/tv.jpg";




const ProductList = () => {
  return (
    <>
      <ul className="p-2 w-full flex gap-2 overflow-x-scroll">
        <li className="flex flex-col relative cursor-pointer w-[200px] rounded-md overflow-hidden hover:shadow-lg hover:scale-[1.02]">
          <div className="flex items-center relative w-full justify-center align-center ">
            <figure className="h-[185px] w-[185px]" >
              <Image className="w-full" src={tvImg} alt="product" />
              <span className="absolute top-1 right-1 bg-yellow-300 p-[2px] rounded-sm font-medium">
                -19%
              </span>
            </figure>
          </div>
          <div className="flex flex-col p-2 text-base w-full">
            <span className="max-w-full truncate text-base">32 Smart TV: Samsung smart internet TV</span>
            <span className="font-medium">N 97,000</span>
            <span className="line-through text-gray-500 text-xs italic">
              N 120,000
            </span>
            <span className="text-xs">10 items left</span>
            <span className="relative h-2 w-full overflow-hidden bg-red-200 rounded-md">
              <span className="h-full w-[80%] absolute bg-yellow-600 top-0 left-0 right-0 rounded-md"></span>
            </span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ProductList;
