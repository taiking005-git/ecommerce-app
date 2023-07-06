import { IconType } from "react-icons";

interface Category {
  id: string;
  name: string;
  icon: IconType;
}

interface ItemsListProp {
  catList: Category[];
  productList?: boolean;
}
const ItemsList = ({ catList, productList }: ItemsListProp) => {
  return (
    <ul className="flex flex-col gap-1 py-2">
      {catList.map((item) => (
        <li
          className="cursor-pointer flex gap-2 items-center transition duration-75 hover:text-yellow-500 pl-2"
          key={item.id}
        >
          <span>
            <item.icon size={18} />
          </span>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
