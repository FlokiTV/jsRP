export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-6d862ff0.js","js":["start-6d862ff0.js","chunks/index-c3650d4a.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "dead",
				pattern: /^\/dead\/?$/,
				names: [],
				types: [],
				path: "/dead",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "index.[ext]",
				pattern: /^\/index\.([^/]+?)$/,
				names: ["ext"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
