<script lang="ts">
	const projects = [
		{
			name: 'rstatus',
			language: 'rust',
			url: 'https://github.com/zveihander/rstatus',
			description: 'minimal, hackable status bar for i3/sway',
			openSource: true,
			openSourceLink: 'https://github.com/zveihander/rstatus'
		}
	];
</script>

<ul>
	{#each projects as project}
		<li class="text-md font-sans py-[1rem] text-md lg:text-md">
			<div class="flex flex-col sm:flex-row sm:flex-wrap gap-x-2">
				<a class="text-gruvbox-green hover:underline" href={project.url}>
					{project.name}
				</a>
				<span class="hidden sm:inline">::</span>
				<p>{project.language}</p>
				<span class="hidden sm:inline">::</span>
				<p>{project.description}</p>
				<span class="hidden sm:inline">::</span>
				{#if project.openSource}
					<a class="text-gruvbox-green hover:underline" href={project.openSourceLink}>
						view source
					</a>
				{:else}
					<p>closed source ):</p>
				{/if}
			</div>
		</li>
	{/each}
</ul>
