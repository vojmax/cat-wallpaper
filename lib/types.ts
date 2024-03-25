// ImageType is a type that describes the structure of the image object that we get from the Unsplash API. Only nececery fields are included.

export type ImageType = {
  id: string;
  slug: string;
  urls: {
    raw: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  user: {
    name: string;
    profile_image: {
      large: string;
      medium: string;
    };
    links: {
      html: string;
      download: string;
    };
    social: {
      instagram_username: string | null;
      portfolio_url: string;
      twitter_username: string | null;
    };
  };
};
