import styleImport from 'vite-plugin-style-import';
const plugins = [
    styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style`,
          },
        ],
      })
]
export default plugins