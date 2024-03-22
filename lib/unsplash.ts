const clientId = process.env.UNSPLASH_ACCESS_KEY;

const query = {
  cat: "cat",
  dog: "dog",
  nature: "nature",
  city: "city",
  car: "car",
  space: "space",
  mountain: "mountain",
  beach: "beach",
  universe: "universe",
};

export async function getWallpaper() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${clientId}&orientation=landscape`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();

  return data;
}
