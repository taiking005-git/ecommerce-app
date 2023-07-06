import { IconType } from "react-icons";
import Card from "../Card";
import ItemsList from "../itemslist/ItemsList";
import { CiApple } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { IoIosRestaurant } from "react-icons/io";
import { BsBook } from "react-icons/bs";
import { TiBrush } from "react-icons/ti";
import { AiOutlineGift } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoIosFitness } from "react-icons/io";
import { FiMusic } from "react-icons/fi";

const products = [
  "Supermarket",
  "Health & Beauty",
  "Home & Office",
  "Appliance",
  "Phones & Tablets ",
  "Computing",
  "Other Categories",
];

interface Category {
  id: string;
  name: string;
  icon: IconType;
}

const categories: Category[] = [
  {
    id: "supermarket",
    name: "Supermarket",
    icon: RiShoppingCartLine,
  },
  {
    id: "health-beauty",
    name: "Health & Beauty",
    icon: FaHeart,
  },
  {
    id: "home-office",
    name: "Home & Office",
    icon: GiHomeGarage,
  },
  {
    id: "pets",
    name: "Pets",
    icon: MdPets,
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: FiSmartphone,
  },
  {
    id: "food",
    name: "Food",
    icon: IoIosRestaurant,
  },
  {
    id: "books",
    name: "Books",
    icon: BsBook,
  },
  {
    id: "art-craft",
    name: "Art & Craft",
    icon: TiBrush,
  },
  {
    id: "gifts",
    name: "Gifts",
    icon: AiOutlineGift,
  },
  {
    id: "computers",
    name: "Computers",
    icon: HiOutlineDesktopComputer,
  },
  {
    id: "fitness",
    name: "Fitness",
    icon: IoIosFitness,
  },
  {
    id: "music",
    name: "Music",
    icon: FiMusic,
  },
];

const Categories = () => {
  return (
    <div className="w-52 sm:flex hidden">
      <Card>
        <ItemsList catList={categories} />
      </Card>
    </div>
  );
};

export default Categories;
