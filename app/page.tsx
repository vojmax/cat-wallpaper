import Actions from "@/components/sections/actions";
import Artist from "@/components/sections/artist";
import { getBase64 } from "@/lib/base64";
import { getWallpaper } from "@/lib/unsplash";
import { ImageType } from "@/lib/types";
import Image from "next/image";

// server component that fetches the wallpaper and renders the artist and actions components.

export default async function Home() {
  const image: ImageType = await getWallpaper();
  const base64 = await getBase64(image);

  return (
    <main className="flex relative min-h-svh flex-col items-center justify-between">
      <Artist image={image} />
      <div className="w-full h-full">
        <Image
          className="object-cover"
          src={image.urls.full}
          alt={image.alt_description}
          placeholder="blur"
          blurDataURL={base64}
          fill
        />
      </div>
      <Actions image={image} />
    </main>
  );
}
