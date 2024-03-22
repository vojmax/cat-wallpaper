import { getPlaiceholder } from "plaiceholder";
import { ImageType } from "./types";

export async function getBase64(wallpaper: ImageType) {
  if (!wallpaper.urls.regular) {
    throw new Error("Regular URL is undefined");
  }

  const buffer = await fetch(wallpaper.urls.regular).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await getPlaiceholder(buffer, { size: 32 });

  return base64;
}
