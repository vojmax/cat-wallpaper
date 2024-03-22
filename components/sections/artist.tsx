import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageType } from "@/lib/types";

export default async function Artist({ image }: { image: ImageType }) {
  return (
    <section className="flex z-10 gap-10 w-full h-64 bg-gradient-to-t from-indigo-950/0 to-indigo-950/60 justify-center text-white ">
      <div className="mt-10">
        <Avatar className="w-20 h-20">
          <AvatarImage src={image.user.profile_image.large} />
          <AvatarFallback>{image.user.name.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-10">
        <h1>{image.alt_description}</h1>
        <h2>{image.user.name}</h2>
        <a>{image.user.social.portfolio_url}</a>
      </div>
    </section>
  );
}
