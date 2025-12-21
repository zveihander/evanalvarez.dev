<script lang="ts">
	import './layout.css';
	import 'katex/dist/katex.min.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/ibm-plex-sans/wght.css';
	import '@fontsource-variable/petrona/wght.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Nav />
{@render children()}
