import { Image, TypedObject } from "sanity";

export type ComedianProfile = {
  _id: string,
  name: string,
  slug: {
    current: string,
    _type: string,
  };
  bio: TypedObject[],
  image: Image,
  video: {
    url: string,
    name: string,
  },
  keywords: string[],
}

export type HeroProfile = {
  _id: string,
  image: Image,
  about: TypedObject[],
}