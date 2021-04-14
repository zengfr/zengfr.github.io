const { path } = require('@vuepress/utils')

module.exports = {
  extend: '@vuepress/theme-default',
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
  heady:[
  ]
}