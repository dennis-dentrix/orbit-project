// Satoshi Font Family Color Palette
// This file contains all color definitions for the Orbit project

const colors = {
  // Core Colors
  primary: "#a25b3c", // Clay brown – grounded confidence
  secondary: "#5b7c99", // Muted steel blue – techy trust
  tertiary: "#d9a066", // Soft amber – warmth and friendliness
  accent: "#8e7cc3", // Muted violet – modern creativity

  // Neutrals
  background: "#f5f3ef", // Warm light beige – clean and soft
  white: "#FFFFFF",
  offWhite: "#edeae4", // Slightly deeper neutral
  border: "#d1cfcb", // Subtle gray-beige for structure

  // Text
  text: "#2c2c2c", // Deep charcoal – readable and elegant
  textSecondary: "#5a5a5a",
  textTertiary: "#8a8a8a",

  // Status Colors
  success: "#4caf50", // Balanced green
  error: "#c0392b", // Muted red
  warning: "#e6b800", // Earthy yellow
  info: "#2980b9", // Trustworthy blue

  // Hover States
  hover: "#2c2c2c",
  hoverSecondary: "#d1cfcb",
  successLight: "#dff0d8",
  errorLight: "#f2dede",
  warningLight: "#fcf8e3",
  infoLight: "#d9edf7",
  primaryLight: "#f2d8c2", // Gentle clay highlight
};

// Icon styles
export const iconStyle = {
  fontSize: "25px",
  color: colors.primary,
  paddingRight: "30px",
  paddingTop: "20px",
  cursor: "pointer",
  borderRadius: "10%",
  "&:hover": { color: "black" },
};

// Utility function to get color value
export const getColor = (colorName) => {
  return colors[colorName] || colors.text;
};
