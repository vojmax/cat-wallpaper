import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageType } from "@/lib/types";
import Link from "next/link";

export default async function Artist({ image }: { image: ImageType }) {
  const portfolioLink = image.user.social.portfolio_url;

  return (
    <section className="flex z-10 gap-10 w-full h-64 bg-gradient-to-t from-indigo-950/0 to-indigo-950/60 justify-center text-white ">
      <div className="mt-10">
        <Avatar className="w-28 h-28  border-4 ">
          <AvatarImage src={image.user.profile_image.large} />
          <AvatarFallback>{image.user.name.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-14">
        <h1 className="text-3xl font-semibold tracking-tight first:mt-0">
          {image.alt_description[0].toUpperCase() +
            image.alt_description.slice(1)}
        </h1>
        <Link
          href={image.user.links.html}
          className="text-xl font-extrabold text-white/80 block"
          target="_blank"
        >
          {image.user.name}
        </Link>
        {portfolioLink && (
          <Link
            className="text-amber-300"
            href={image.user.social.portfolio_url}
            target="_blank"
          >
            {image.user.social.portfolio_url}
          </Link>
        )}
      </div>
    </section>
  );
}
