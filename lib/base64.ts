import { getPlaiceholder } from "plaiceholder";
import { ImageType } from "./types";

// getBase64 is a function that takes an image url and returns compressed base64 blured image while loading full image.
// unsplash api provides base87 encoded image url that isnt compatible with next/image component.

export async function getBase64(wallpaper: ImageType) {
  try {
    const buffer = await fetch(wallpaper.urls.regular).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const { base64 } = await getPlaiceholder(buffer, { size: 32 });

    return base64;
  } catch (e) {
    throw new Error(String(e));
  }
}
