module.exports = {
  content: ['./src/**/*.jsx', './public/**/*.html'],
  css: ['src/index.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },
      extensions: ['jsx']
    }
  ]
}
