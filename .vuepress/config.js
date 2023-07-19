import { defineUserConfig, defaultTheme } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  lang: "uz",
  title: "Islom Karimov",
  description: "Islom Karimov veb dasturlash darslari",
  theme: defaultTheme({
    navbar: [
      {
        text: "HTML",
        link: "/html/",
      },
      {
        text: "CSS",
        link: "/css/",
      },
    ],
    sidebar: {
      "/html/": [
        {
          text: "HTML Darslari",
          collapsible: false,
          children: [
            '1-dars.md',
            '2-dars.md',
            '3-dars.md',
            '4-dars.md',
            '5-dars.md',
          ],
        },
      ],
      "/css/": [
        {
          text: "CSS Darslari",
          collapsible: false,
          children: [],
        },
      ],
    },
  }),
  plugins: [
    docsearchPlugin({
      appId: "<APP_ID>",
      apiKey: "<API_KEY>",
      indexName: "<INDEX_NAME>",
      locales: {
        "/": {
          placeholder: "Search Documentation",
          translations: {
            button: {
              buttonText: "Search Documentation",
            },
          },
        },
        "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
            },
          },
        },
      },
    }),
  ],
});
