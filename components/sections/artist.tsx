import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageType } from "@/lib/types";
import Link from "next/link";

// Artist is a component that displays the artist's name(unsplash portfolio link), profile picture, and their website of choice if exists(could be paypal, instagram etc).

export default async function Artist({ image }: { image: ImageType }) {
  const website = image.user.social.portfolio_url;

  return (
    <section className="flex z-10 gap-4 w-full h-40 bg-gradient-to-b from-black/80 to-black/0 justify-center text-white p-4  transition-all">
      <div className="mt-4 xl:mt-8">
        <Avatar className="w-16 h-16 sm:w-20 sm:h-20 xl:w-32 xl:h-32 border-2 ">
          <AvatarImage
            src={image.user.profile_image.large}
            alt="user-avatar-image"
          />
          <AvatarFallback>{image.user.name.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-4 xl:mt-10  w-3/4 md:w-1/2 2xl:w-1/3 overflow-hidden">
        <p className="text-sm font-semibold text-nowrap truncate mb-1 sm:text-2xl xl:text-3xl transition-all xl:mb-1">
          {image.alt_description.replace(/^./, (str) => str.toUpperCase())}
        </p>

        <Link
          href={image.user.links.html}
          className="text-xs font-extrabold block text-white/80 text-nowrap truncate hover:text-sky-400 xl:text-base xl:mb-1 transition-all"
          target="_blank"
        >
          {image.user.name.toUpperCase()}
        </Link>
        {website && (
          <Link
            className="text-xs sm:text-md xl:text-base hover:text-sky-400 text-nowrap truncate "
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
