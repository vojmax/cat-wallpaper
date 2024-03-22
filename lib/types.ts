export type ImageType = {
  id: string | undefined;
  urls: {
    raw: string | undefined;
    regular: string | undefined;
    full: string | undefined;
  };
  alt_description: string;
};
