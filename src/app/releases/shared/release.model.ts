import {Label} from "../../labels/shared/label.model";
import {Artist} from "../../artists/common/artist.model";
export class Release {
  id: string;
  name: string;
  description: string;
  artist: Artist;
  label: Label;
  releaseDate: Date;
}
