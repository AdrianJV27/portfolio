import type { CATEGORIES } from "./constants";

type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES];
