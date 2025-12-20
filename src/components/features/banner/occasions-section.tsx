import Image from "next/image";
import left from "@assets/imgs/image 5.png"
import middle from "@assets/imgs/image 6.png"
import right from "@assets/imgs/image 7.png"
import { Badge } from "@/components/ui/badge";

interface OccasionCard {
    id: string
    badge: string
    title: string
    src: StaticImageData | string;
    alt: string
}

const occasions: OccasionCard[] = [
    {
        id: "wedding",
        badge: "Wedding",
        title: "Celebrate Her Forever with a Gift She'll Always Remember",
        src: left,
        alt: "Wedding gifts with flowers",
    },
    {
        id: "engagement",
        badge: "Engagement",
        title: "Honor the Beginning of a Beautiful Journey Together",
        src: middle,
        alt: "Engagement gifts and keepsakes",
    },
    {
        id: "anniversary",
        badge: "Anniversary",
        title: "Mark Every Year of Love with a Meaningful Surprise",
        src: right,
        alt: "Anniversary gifts with roses",
    },
]

export default function OccasionsSection() {
    return (
        <section className="w-full">
            <div className="flex flex-col gap-6 md:flex-row md:gap-6  mx-auto ">
                {occasions.map((occasion) => (
                    <div key={occasion.id} className="flex-1 group relative overflow-hidden rounded-3xl">
                        {/* Image container */}
                        <div className="relative h-72 w-full overflow-hidden rounded-3xl">
                            <Image
                                src={occasion.src || "/placeholder.svg"}
                                alt={occasion.alt}
                                fill
                                className="object-cover "
                            />
                            {/* Gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Content overlay */}
                        <div className="absolute bottom-1 left-1 max-w-88 p-6 rounded-3xl">
                            {/* Badge at top */}
                            <div>
                                <Badge className="bg-maroon-50 text-maroon-600 dark:text-maroon-600 dark:bg-maroon-50 hover:bg-white">{occasion.badge}</Badge>
                            </div>

                            {/* Title at bottom */}
                            <h3 className="text-white mt-1 font-semibold text-xl leading-tight">{occasion.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}