import React from "react";
import useLandingState, {
  addDrama,
  removeDrama,
} from "~/modules/Landing/LandingStore";
import { useSnapshot } from "valtio";

export interface KDramasProps {}

export default function KDramas({}: KDramasProps) {
  // const {
  //   kdramas,
  //   actions: { addDrama, removeDrama },
  // } = useLandingStore((state) => ({
  //   kdramas: state.kdramas,
  //   actions: state.actions,
  // }));
  const snap = useSnapshot(useLandingState);

  // const { } = useLandingStore()

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
