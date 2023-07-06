import Card from '../Card'
import Image from "next/image";
import sideImg from '@/public/products/JForce.png'

const RightSideBar = () => {
  return (
    <div className="w-52 lg:flex flex-col hidden gap-4">
      <Card>
        <Image src={sideImg} alt="side image" className='w-full h-full' />
      </Card>
      <Card>
        <Image src={sideImg} alt="side image" className='w-full h-full'  />
      </Card>
    </div>
  );
}

export default RightSideBar