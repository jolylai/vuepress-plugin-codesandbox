"use strict";

var src = function(options, context) {
  return {
    name: "vuepress-plugin-codesandbox",
    extendMarkdown: function extendMarkdown(md) {
      console.log("md: ", md);
      md.use(require("markdown-it-codesandbox"));
    }
  };
};

module.exports = src;
