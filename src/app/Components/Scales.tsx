import React from "react";

const Scales = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden [--pattern:var(--color-neutral-200)]">
        <div className="h-14 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-[var(--color-neutral-200)]"></div>
      </div>
    </div>
  );
};
export default Scales;