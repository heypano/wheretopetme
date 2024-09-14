import { forwardRef } from "react";

interface ColorPickerProps {}
export const ColorPicker = forwardRef<ColorPickerProps, HTMLElement>(
  (props, ref) => <div></div>
);
ColorPicker.displayName = "ColorPicker";
