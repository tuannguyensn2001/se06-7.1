import { useMemo } from "react";

function Hotspot({ children, position, slot, normal }) {
  const convertPosition = useMemo(() => {
    if (!Array.isArray(position)) return "";
    return position.join(" ");
  }, [position]);

  const convertNormal = useMemo(() => {
    if (!Array.isArray(normal)) return "";
    return normal.join(" ");
  }, [normal]);

  return (
    <div
      slot={`hotspot-${slot}`}
      data-normal={convertNormal}
      data-position={convertPosition}
    >
      {children}
    </div>
  );
}

export default Hotspot;
