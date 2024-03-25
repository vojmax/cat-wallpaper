import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageType } from "@/lib/types";
import Link from "next/link";

// Artist is a component that displays the artist's name(unsplash portfolio link), profile picture, and their website of choice if exists(could be paypal, instagram etc).

export default async function Artist({ image }: { image: ImageType }) {
  const website = image.user.social.portfolio_url;

  return (
    <section className="flex z-10 gap-10 w-full h-64 bg-gradient-to-t from-black/0 to-black/60 justify-center text-white ">
      <div className="mt-10">
        <Avatar className="w-28 h-28  border-4 ">
          <AvatarImage src={image.user.profile_image.large} />
          <AvatarFallback>{image.user.name.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-12">
        <p className="text-3xl font-semibold  max-w-2xl truncate text-nowrap mb-1">
          {image.alt_description.replace(/^./, (str) => str.toUpperCase())}
        </p>

        <Link
          href={image.user.links.html}
          className="text-l font-extrabold block text-white/80  hover:text-sky-400 mb-1"
          target="_blank"
        >
          {image.user.name.toUpperCase()}
        </Link>
        {website && (
          <Link
            className=" hover:text-sky-400"
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
