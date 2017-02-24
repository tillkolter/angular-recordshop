

import {Label} from "./label.model";
export function toLabel(l: any) {
  let label = <Label> {
    id: l.id,
    name: l.name,
  }
  return label
}
