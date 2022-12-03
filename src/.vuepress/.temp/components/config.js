import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";

import { useStyleTag } from "/Users/hubiao/me/aide-cloud.github.io/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "/Users/hubiao/me/aide-cloud.github.io/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/hubiao/me/aide-cloud.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/Users/hubiao/me/aide-cloud.github.io/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/c/font_3803922_ln5narsr64c.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
