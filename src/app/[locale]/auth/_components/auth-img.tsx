import Image from "next/image";
import img from "@assets/imgs/image 1.png";

export default function AuthPageImg() {
  return <Image src={img} className="h-full w-full object-fill" alt="Auth Image" />;
}
