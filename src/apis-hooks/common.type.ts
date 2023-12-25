type TImageMediaFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string;
  width: number;
  height: number;
  size: number;
  url: string;
};
type TImageMedia = {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  formats?: {
    thumbnail: TImageMediaFormat;
    large: TImageMediaFormat;
    medium: TImageMediaFormat;
    small: TImageMediaFormat;
  };
};
