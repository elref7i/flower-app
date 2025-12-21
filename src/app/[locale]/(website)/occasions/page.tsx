import { Card, CardContent } from "@/components/ui/card";
import { fetchOccasions } from "@/lib/api/occasions.api";
import { imagepath } from "@/lib/utils/handlepathImage";
import Image from "next/image";

interface Occasion {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
  productsCount: number;
}

const OCCASIONS_DATA: Occasion[] = [
  {
    _id: "673b34c21159920171827ae0",
    name: "Wedding",
    slug: "wedding",
    image: "Frame 76.png",
    createdAt: "2024-11-18T12:36:18.366Z",
    updatedAt: "2024-11-18T12:36:18.366Z",
    isSuperAdmin: true,
    productsCount: 4,
  },
  {
    _id: "673b351e1159920171827ae5",
    name: "Graduation",
    slug: "graduation",
    image: "Frame 76.png",
    createdAt: "2024-11-18T12:37:50.433Z",
    updatedAt: "2024-11-18T12:37:50.433Z",
    isSuperAdmin: true,
    productsCount: 4,
  },
];

export default async function OccasionsPage() {

  const occasions  = await fetchOccasions();
  console.log(occasions);
  
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="font-great mb-8 text-center text-4xl font-bold text-maroon-900 md:mb-12 md:text-5xl">
        Shop By Occasion
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {occasions.map((occasion) => (
          <Card
            key={occasion._id}
            className="group relative cursor-pointer overflow-hidden border-none bg-transparent shadow-none transition-all duration-300 hover:scale-105"
          >
            <CardContent className="p-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={imagepath(occasion.image)}
                  alt={occasion.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="to-maroon-900/80 absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <h3 className="font-sarabun text-2xl font-bold tracking-wide">
                    {occasion.name}
                  </h3>
                  <p className="font-zain mt-2 text-lg font-medium text-maroon-100 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-4">
                    {occasion.productsCount} Products
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
