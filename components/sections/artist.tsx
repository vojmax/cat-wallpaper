import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageType } from "@/lib/types";

export default async function Artist({ image }: { image: ImageType }) {
  return (
    <section className="z-10 w-full h-64 bg-gradient-to-t from-indigo-950/0 to-indigo-950/60 justify-center items-center text-white">
      <div>
        <h1>{image.alt_description}</h1>
        <h2>{image.user.name}</h2>
        <a>{image.user.social.portfolio_url}</a>
      </div>
    </section>
  );
}
