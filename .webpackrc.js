import proxy from './src/utils/proxy'

export default {
  extraBabelPlugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }]
  ],
  proxy
}