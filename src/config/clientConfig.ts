import { defineClientConfig } from "@vuepress/client";
// import AboutMe from "@/components/AboutMe.vue";
import components from "@/components/index.ts";

console.log(components);

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component);
    }
  },
  /* setup() {},
  layouts: {},
  rootComponents: [], */
});
