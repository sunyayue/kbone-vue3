module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/",
	"router": {
		"index": [
			{
				"regexp": "^\\/(?:\\/)?$",
				"options": "i"
			}
		]
	},
	"runtime": {
		"subpackagesMap": {},
		"tabBarMap": {},
		"usingComponents": {}
	},
	"pages": {
		"index": {
			"extra": {
				"navigationBarTextStyle": "black"
			}
		}
	},
	"redirect": {
		"notFound": "index",
		"accessDenied": "index"
	},
	"optimization": {}
}