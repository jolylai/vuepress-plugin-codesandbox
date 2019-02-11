module.exports = {
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-codesandbox"));
    }
  }
};
