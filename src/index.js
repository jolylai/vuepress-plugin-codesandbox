module.exports = (options, context) => ({
  name: "vuepress-plugin-codesandbox",
  extendMarkdown: md => {
    console.log("md: ", md);
    md.use(require("markdown-it-codesandbox"));
  }
});
