import Actions from "@/components/sections/actions";
import Artist from "@/components/sections/artist";
import { getBase64 } from "@/lib/base64";
import { getWallpaper } from "@/lib/unsplash";
import { ImageType } from "@/lib/types";

import Image from "next/image";

export default async function Home() {
  const image: ImageType = await getWallpaper();
  const base64 = await getBase64(image);

  // ...

  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between">
      <Artist image={image} />
      <Image
        className="object-cover w-full h-full"
        src={image.urls.full}
        alt={image.alt_description}
        placeholder="blur"
        blurDataURL={base64}
        fill
      />
      <Actions />
    </main>
  );
}
