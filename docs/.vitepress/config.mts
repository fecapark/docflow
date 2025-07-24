import { defineConfig } from "vitepress";
import { en } from "./en.mts";
import { ko } from "./ko.mts";
import { shared } from "./shared.mts";

export default defineConfig({
  ...shared,
  locales: {
    root: {
      label: "한국어",
      ...ko,
    },
    en: {
      label: "English",
      ...en,
    },
  },
  rewrites: {
    "ko/:rest*": ":rest*",
  },
});
