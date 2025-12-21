<script lang="ts">
	import GetAllProjects from '$lib/components/GetAllProjects.svelte';
</script>

<div class="bg-gruvbox-bg min-h-screen">
	<div class="mx-auto max-w-screen-xl px-6">
		<div class="flex items-center justify-start">
			<div class="text-gruvbox-fg pt-[5rem] text-sm lg:text-lg font-sans">
				<h1 class="font-serif font-bold text-3xl lg:text-5xl">projects</h1>
				<a href="/" class="text-gruvbox-green hover:underline lg:text-[15px]">home</a>
				::
				<a
					href="https://github.com/zveihander"
					class="text-gruvbox-green hover:underline lg:text-[15px]">github</a
				>
			</div>
		</div>
		<div class="text-gruvbox-fg text-md pt-4 lg:text-lg">
			<GetAllProjects />
		</div>
	</div>
</div>
