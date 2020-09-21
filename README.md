# Question

`@svgr/webpack` seems to only apply svgo optimizations to the generated React component, but no to the svg image emitted by `file-loader`.

```bash
yarn build
cat dist/star.url.svg
```
