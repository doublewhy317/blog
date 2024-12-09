import { defineUserConfig } from "vuepress";
import { webpackBundler } from "@vuepress/bundler-webpack";

import theme from "./theme.js";

export default defineUserConfig({
  bundler: webpackBundler({
    // postcss: {},
    chainWebpack: (config) => {
      config.resolve.alias.set("~components", "@/components");
    },
  }),
  base: "/blog/",

  lang: "zh-CN",
  title: "Micky`s Space",
  description: "个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
