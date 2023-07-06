"use client";
interface CardProp {
  children: React.ReactNode;
}
const Card = ({ children }: CardProp) => {
  return (
    <div className="bg-white rounded-md w-full h-full shadow-md overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
