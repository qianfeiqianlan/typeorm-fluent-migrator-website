import { defineConfig } from "vitepress";

export default defineConfig({
  cleanUrls: true,
  // appearance: false,
  base: "/",

  // 全局 favicon 配置
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/favicon.ico",
      },
    ],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?4b935b7d700dd0f1ad85695ff96160cb";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/",
      title: "TypeORM Fluent Migrator",
      description: "TypeORM Fluent Migrator 多语言文档",
      // 添加 favicon
      head: [
        ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        [
          "link",
          { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
        ],
        ["link", { rel: "apple-touch-icon", href: "/favicon.ico" }],
      ],
      themeConfig: {
        outlineTitle: "目录",
        nav: [
          { text: "指南", link: "/zh/guide/getting-started" },
          { text: "API 参考", link: "/zh/api/column-types" },
          { text: "示例", link: "/zh/examples/create-table" },
        ],
        sidebar: {
          "/zh/guide/": [
            {
              text: "指南",
              items: [
                { text: "快速开始", link: "/zh/guide/getting-started" },
                { text: "对比", link: "/zh/guide/comparison" },
              ],
            },
          ],
          "/zh/api/": [
            {
              text: "API 参考",
              items: [
                { text: "列类型", link: "/zh/api/column-types" },
                { text: "列约束", link: "/zh/api/constraints" },
              ],
            },
          ],
          "/zh/examples/": [
            {
              text: "示例",
              items: [
                { text: "创建表", link: "/zh/examples/create-table" },
                { text: "修改表", link: "/zh/examples/alter-table" },
                { text: "索引", link: "/zh/examples/indexes" },
              ],
            },
          ],
        },
        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2026-present TypeORM Fluent Migrator Project",
        },
      },
    },
    // 英文 locale
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "TypeORM Fluent Migrator",
      description: "TypeORM Fluent Migrator Documentation",
      // 添加 favicon
      head: [
        [
          "link",
          { rel: "icon", type: "image/x-icon", href: "/public/favicon.ico" },
        ],
        [
          "link",
          {
            rel: "shortcut icon",
            type: "image/x-icon",
            href: "/public/favicon.ico",
          },
        ],
        ["link", { rel: "apple-touch-icon", href: "/public/favicon.ico" }],
      ],
      themeConfig: {
        outlineTitle: "On this page",
        nav: [
          { text: "Guide", link: "/en/guide/getting-started" },
          { text: "API Reference", link: "/en/api/column-types" },
          { text: "Examples", link: "/en/examples/create-table" },
        ],
        sidebar: {
          "/en/guide/": [
            {
              text: "Guide",
              items: [
                { text: "Getting Started", link: "/en/guide/getting-started" },
                { text: "Comparison", link: "/en/guide/comparison" },
              ],
            },
          ],
          "/en/api/": [
            {
              text: "API Reference",
              items: [
                { text: "Column Types", link: "/en/api/column-types" },
                { text: "Constraints", link: "/en/api/constraints" },
              ],
            },
          ],
          "/en/examples/": [
            {
              text: "Examples",
              items: [
                { text: "Create Table", link: "/en/examples/create-table" },
                { text: "Alter Table", link: "/en/examples/alter-table" },
                { text: "Indexes", link: "/en/examples/indexes" },
              ],
            },
          ],
        },
        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2026-present TypeORM Fluent Migrator Project",
        },
      },
    },
  },
});
