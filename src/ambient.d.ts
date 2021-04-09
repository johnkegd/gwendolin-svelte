/**
 * These declarations tell TypeScript that we allow import of images, e.g.
 * ```
		<script lang='ts'>
			import light from 'images/light_mode_24px.svg';
		</script>

		<img src="{light}">
	 ```
 */
declare module "*.gif" {
	const value: string;
	export default value;
}

declare module "*.jpg" {
	const value: string;
	export default value;
}

declare module "*.jpeg" {
	const value: string;
	export default value;
}

declare module "*.png" {
	const value: string;
	export default value;
}

declare module "*.svg" {
	const value: string;
	export default value;
}

declare module "*.webp" {
	const value: string;
	export default value;
}
