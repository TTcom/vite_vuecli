
const styleImport  = require('vite-plugin-style-import');
const eslintPlugin  = require('vite-plugin-eslint');
module.exports = {
    pluginOptions: {
        vite: {
            disabledTypeChecker: true,
            plugins: [
                styleImport.default({
                    libs: [
                      {
                        libraryName: 'vant',
                        esModule: true,
                        resolveStyle: (name) => `vant/es/${name}/style`,
                      },
                    ],
                  }),
                  eslintPlugin.default({
                    include: 'src/**/*.{vue,js,jsx,ts,tsx}',
                    fix:true
                  })
            ]
        }
    }
}