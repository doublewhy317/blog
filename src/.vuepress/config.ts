import { defineUserConfig } from "vuepress";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  clientConfigFile: path.resolve(__dirname, "../config/clientConfig.ts"),
  bundler: webpackBundler({
    // postcss: {},
    chainWebpack: (config) => {
      config.resolve.alias.set("~components", "@/components");
    },
  }),
  alias: {
    "@": path.resolve(__dirname, "../../src"),
  },
  base: "/blog/",

  lang: "zh-CN",
  title: "Micky`s Space",
  description: "个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
