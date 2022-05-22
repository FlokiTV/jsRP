export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\dead.svelte"),
	() => import("..\\..\\src\\routes\\index.[ext].svelte"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"dead": [[0, 2], [1]],
	"index.[ext]": [[0, 3], [1]]
};