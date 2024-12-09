import { defineClientConfig } from "@vuepress/client";
import AboutMe from "./components/AboutMe.vue";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("AboutMe", AboutMe);
  },
});
