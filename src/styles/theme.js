// Component Theme Tokens
// Pre-configured styles for common components

import colors from "./colors";

export const theme = {
  // Button variants
  buttons: {
    primary: {
      backgroundColor: colors.primary,
      color: colors.white,
      hoverBackgroundColor: colors.hover,
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: colors.white,
    },
    tertiary: {
      backgroundColor: colors.tertiary,
      color: colors.white,
    },
    outline: {
      backgroundColor: "transparent",
      color: colors.primary,
      border: `1px solid ${colors.primary}`,
    },
    ghost: {
      backgroundColor: "transparent",
      color: colors.text,
    },
  },

  // Input styles
  inputs: {
    default: {
      backgroundColor: colors.white,
      border: `1px solid ${colors.border}`,
      color: colors.text,
      placeholderColor: colors.textTertiary,
      focusBorderColor: colors.primary,
      focusRingColor: `${colors.primary}30`,
    },
    search: {
      backgroundColor: colors.offWhite,
      border: "none",
      color: colors.text,
      placeholderColor: colors.textSecondary,
    },
  },

  // Card styles
  cards: {
    default: {
      backgroundColor: colors.white,
      border: `1px solid ${colors.border}`,
      borderRadius: "12px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
    elevated: {
      backgroundColor: colors.white,
      border: "none",
      borderRadius: "16px",
      boxShadow:
        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
    },
    chat: {
      backgroundColor: colors.white,
      hoverBackgroundColor: colors.offWhite,
      selectedBackgroundColor: colors.offWhite,
    },
  },

  // Badge styles
  badges: {
    success: {
      backgroundColor: colors.successLight,
      color: colors.success,
    },
    error: {
      backgroundColor: colors.errorLight,
      color: colors.error,
    },
    warning: {
      backgroundColor: colors.warningLight,
      color: colors.warning,
    },
    info: {
      backgroundColor: colors.infoLight,
      color: colors.info,
    },
    primary: {
      backgroundColor: colors.primaryLight,
      color: colors.primary,
    },
  },

  // Status indicators
  status: {
    online: {
      backgroundColor: colors.success,
    },
    offline: {
      backgroundColor: colors.textTertiary,
    },
    away: {
      backgroundColor: colors.warning,
    },
    busy: {
      backgroundColor: colors.error,
    },
  },

  // Message bubble styles
  messages: {
    own: {
      backgroundColor: colors.primaryLight,
      textColor: colors.text,
    },
    other: {
      backgroundColor: colors.white,
      textColor: colors.text,
    },
  },

  // Layout backgrounds
  layouts: {
    main: {
      backgroundColor: colors.background,
    },
    sidebar: {
      backgroundColor: colors.white,
      borderColor: colors.border,
    },
    header: {
      backgroundColor: colors.white,
      backdropFilter: "blur-lg",
    },
  },
};

export default theme;
