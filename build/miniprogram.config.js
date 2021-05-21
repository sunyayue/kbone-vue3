module.exports = {
	origin: 'https://test.miniprogram.com',
	entry: '/',
	router: {
		index: [
			'/',
		],
	},
	redirect: {
		notFound: 'index',
		accessDenied: 'index',
	},
	generate: {
		globalVars: [
			['__VUE_PROD_DEVTOOLS__ ', false],
			['__VUE_OPTIONS_API__', true]
		]
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},
	global: {
		extra: {
			navigationBarTextStyle: 'black',
		},
		rem: true
	},
	projectConfig: {
		appid: '',
        projectname: 'kbone-demo2',
	},
	packageConfig: {
		author: 'wechat-miniprogram',
	},
}
