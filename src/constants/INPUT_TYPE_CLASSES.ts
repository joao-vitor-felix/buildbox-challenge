export const INPUT_TYPE_CLASSES = ["DEFAULT", "TEXTAREA"] as const;

export type InputType = (typeof INPUT_TYPE_CLASSES)[number];
