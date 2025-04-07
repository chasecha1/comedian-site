import { Image, TypedObject } from "sanity";

export type ComedianProfile = {
  _id: string,
  name: string,
  bio: TypedObject[],
  image: Image,
  video: string,
  keywords: string[],
}