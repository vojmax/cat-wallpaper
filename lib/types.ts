import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ImageType = {
  id: string | undefined;
  urls: {
    raw: string | StaticImport;
    regular: string | StaticImport;
    full: string | StaticImport;
  };
  alt_description: string;
  user: {
    name: string;
    profile_image: {
      large: string;
      medium: string;
    };
    social: {
      instagram_username: string | null;
      portfolio_url: string | null;
      twitter_username: string | null;
    };
  };
};
