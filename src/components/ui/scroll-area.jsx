import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => (
  React.createElement(ScrollAreaPrimitive.Root, {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      React.createElement(ScrollAreaPrimitive.Viewport, {
        key: "viewport",
        className: "h-full w-full rounded-[inherit]",
        children
      }),
      React.createElement(ScrollBar, { key: "scrollbar" }),
      React.createElement(ScrollAreaPrimitive.Corner, { key: "corner" })
    ]
  })
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => (
  React.createElement(ScrollAreaPrimitive.ScrollAreaScrollbar, {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    ),
    ...props,
    children: React.createElement(ScrollAreaPrimitive.ScrollAreaThumb, {
      className: "relative flex-1 rounded-full bg-border"
    })
  })
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };