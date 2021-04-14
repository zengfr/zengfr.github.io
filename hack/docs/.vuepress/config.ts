import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',base:'/hack/',
  title: 'title',
  description: 'd title',
  head: [
  ['script',{type: 'text/javascript'},
  `var _hmt = _hmt || [];(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9b8a3461bd1caa2803b4d0cf63235be3";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`],['link', {rel: 'icon', href: '/images/logo.png'}]],
  theme2: 'vuepress-theme-local',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/zengfr/romhack',
    repoLabel: 'GitHub',lastUpdated: "Last Updated",
    docsDir: "docs",
    displayAllHeaders: true, // 默认值：false,显示所有页面的标题链接
        sidebarDepth: 2,
        editLink: false,
		
    navbar: [// 导航栏配置
        {
            text: 'Home',
            link: '/', exact: true
        },{
            text: 'ffight',
            link: '/ffight', exact: true
        },{
            text: 'captcomm',
            link: '/captcomm', exact: true
        },
        {
            text: 'dino',
            link: '/dino', exact: true
        },
        {
            text: 'punisher',
            link: '/punisher', exact: true
        },
        {
            text: 'wof',
            link: '/wof', exact: true
	    },{
			text: 'viostorm',
            link: '/viostorm', exact: true
        }],
      sidebar: [{
        text: 'hack',
        link: '/', exact: true,
        children: [
          {
            text: 'ffight',
            link: 'ffight',
          }, {
            text: 'captcomm',
            link: 'captcomm',
          }, {
            text: 'dino',
            link: 'dino',
          } ,{
            text: 'punisher',
            link: 'punisher',
          } ,{
            text: 'wof',
            link: 'wof',
          } ,{
            text: 'viostorm',
            link: 'viostorm',
          }
        ],},
		'/',
		],
  
  },plugins: [
     
  ],
})