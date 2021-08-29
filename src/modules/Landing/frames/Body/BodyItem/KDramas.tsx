import React from "react";
import useLandingState, {
  addDrama,
  removeDrama,
} from "~/modules/Landing/LandingStore";
import { useSnapshot } from "valtio";

export interface KDramasProps {}

export default function KDramas({}: KDramasProps) {
  const snap = useSnapshot(useLandingState);

  return (
    <div>
      {snap.kdramas.map((item) => (
        <div>{item.name}</div>
      ))}

      <button onClick={addDrama}>Add new</button>
      <button onClick={removeDrama}>Remove first</button>
    </div>
  );
}
