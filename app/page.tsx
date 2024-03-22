import { getBase64 } from "@/lib/base64";
import { getWallpaper } from "@/lib/unsplash";

import Image from "next/image";

export default async function Home() {
  const image = await getWallpaper();
  const base64 = await getBase64(image);

  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between">
      <section className="z-10 h-16 justify-center align-middle">
        <h1>header</h1>
      </section>
      <section className="h-full">
        <Image
          className="object-cover w-full h-full"
          src={image.urls.full}
          alt={image.alt_description}
          placeholder="blur"
          blurDataURL={base64}
          fill
        />
      </section>
      <section className="z-10 h-16">footer</section>
    </main>
  );
}
