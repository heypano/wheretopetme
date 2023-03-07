import dynamic from "next/dynamic";
import { DrawWithin } from "@heypano/pupds";
import React from "react";
import { DrawWithinProps } from "@heypano/pupds/dist/components/DrawWithin/DrawWithin";

interface DrawWithinExtendedProps extends DrawWithinProps {
  containerRef: React.Ref<HTMLElement | null>;
}

export default function WrappedDrawWithin({
  containerRef,
  ...props
}: DrawWithinExtendedProps) {
  return <DrawWithin {...props} ref={containerRef} />;
}
