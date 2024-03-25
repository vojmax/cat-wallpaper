import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageType } from "@/lib/types";
import Link from "next/link";

// Artist is a component that displays the artist's name(unsplash portfolio link), profile picture, and their website of choice if exists(could be paypal, instagram etc).

export default async function Artist({ image }: { image: ImageType }) {
  const website = image.user.social.portfolio_url;

  return (
    <section className="flex z-10 gap-4 w-full h-64 bg-gradient-to-t from-black/0 to-black/80 justify-center text-white p-4 transition-all">
      <div className="mt-4 md:mt-8">
        <Avatar className="hidden sm:block sm:w-20 sm:h-20 md:w-32 md:h-32  border-4 ">
          <AvatarImage
            src={image.user.profile_image.large}
            alt="user-avatar-image"
          />
          <AvatarFallback>{image.user.name.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-4 md:mt-10">
        <p className="text-xl font-semibold  max-w-xs md:max-w-2xl text-nowrap truncate overflow-hidden mb-1 sm:text-2xl md:text-3xl transition-all ">
          {image.alt_description.replace(/^./, (str) => str.toUpperCase())}
        </p>

        <Link
          href={image.user.links.html}
          className="text-sm font-extrabold block text-white/80  hover:text-sky-400 md:text-base transition-all"
          target="_blank"
        >
          {image.user.name.toUpperCase()}
        </Link>
        {website && (
          <Link
            className="text-sm hover:text-sky-400"
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
