import {Artist} from "./artist.model";
export function toArtist(a: any) {
  let artist = <Artist> {
    id: a.id,
    name: a.name,
  }
  return artist
}
