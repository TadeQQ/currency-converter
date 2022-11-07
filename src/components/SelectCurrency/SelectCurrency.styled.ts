import React from "react";
import { styled } from "@stitches/react";
import { violet, mauve, blackA } from "@radix-ui/colors";
import * as SelectPrimitive from "@radix-ui/react-select";

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: "white",
  color: "#282c34",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: mauve.mauve3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
  "&[data-placeholder]": { color: "#282c34" },
});

export const StyledContent = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});
const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: "#282c34",
});

const StyledItem = styled(SelectPrimitive.Item, {
  all: "unset",
  fontFamily: "system-ui",
  fontSize: 13,
  lineHeight: 1,
  color: "#282c34",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: mauve.mauve8,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "#61dafb",
    color: "#282c34",
  },
});
const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
});

export const Select = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = StyledIcon;
export const SelectPortal = SelectPrimitive.Portal;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectViewport = StyledViewport;
export const SelectItemIndicator = StyledItemIndicator;
