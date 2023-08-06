export const MEMBER_CONTRIBUTION = {
  STATUS_VERIFIED: "VERIFIED",
  ESTIMATED_COMPLETION: "Estimated Completion: ",
  COMPLETED_IN: "Completed in: ",
  FEATURE_LIVE_ON: "Feature live on",
} as const;

export const ACCORDION_TEXT = {
  NOTEWORTHY_CONTRIBUTION: {
    PRIMARY_TEXT: "Noteworthy Contribution",
    FALLBACK_TEXT: "No noteworthy contributions found 😢",
  },
  ACTIVE_CONTRIBUTION: {
    PRIMARY_TEXT: "Active tasks",
    FALLBACK_TEXT: "No active contributions found 😢",
  },
  ALL_CONTRIBUTION: {
    PRIMARY_TEXT: "All Contribution",
    FALLBACK_TEXT: "How is this person a member? 🤔",
  },
} as const;
