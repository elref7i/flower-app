import { StarRatingReadonly } from "@/components/common/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CommentComponent() {
  return (
    <div className="space-y-[10px] border-b-2 pb-2">
      {" "}
      {/* Person Comment */}
      <div className="flex gap-1 items-center">
        {/* Avater */}
        <Avatar className="size-[45px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {/* Info person */}
        <div>
          <h2 className="font-semibold ">Adrain</h2>
          <p className="font-medium text-sm text-zinc-400">Apr 7, 2025</p>
        </div>
      </div>
      {/* Rating Comment */}
      <StarRatingReadonly />
      {/* Review Title */}
      <h3 className="font-semibold">Awesome Bouquet!</h3>
      {/* Review Description */}
      <p>
        I ordered this bouquet for a special occasion, and it absolutely exceeded my expectations!
        The flowers were fresh, beautifully arranged, and exactly as pictured—if not better. The
        color combination was stunning and gave off such a luxurious vibe. Even the wrapping was
        elegant and thoughtful. Delivery was right on time, and the bouquet arrived in perfect
        condition. The recipient was genuinely touched and couldn't stop admiring it. Highly
        recommend for anyone looking to make a lasting impression. Will definitely order again!
      </p>
    </div>
  );
}
