import React from "react";
import useLandingStore from "~/modules/Landing/LandingStore";

export interface KDramasProps {}

export default function KDramas({}: KDramasProps) {
  const {
    kdramas,
    actions: { addDrama, removeDrama },
  } = useLandingStore((state) => ({
    kdramas: state.kdramas,
    actions: state.actions,
  }));
  return (
    <div>
      {kdramas.map((item) => (
        <div>{item.name}</div>
      ))}

      <button onClick={addDrama}>Add new</button>
      <button onClick={removeDrama}>Remove first</button>
    </div>
  );
}
