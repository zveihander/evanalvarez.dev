<script lang="ts">
	const projects = [
		{
			name: 'rstatus',
			language: 'rust',
			url: 'https://git.evanalvarez.dev/rstatus',
			description: 'minimal, hackable status bar for i3/sway',
			openSource: true,
			openSourceLink: 'https://git.evanalvarez.dev/rstatus'
		},
		{
			name: 'abaddon',
			language: 'rust',
			url: 'https://git.evanalvarez.dev/abaddon',
			description: 'secure file shredder for UNIX systems',
			openSource: true,
			openSourceLink: 'https://git.evanalvarez.dev/abaddon'
		}
	];
</script>

<ul class="space-y-6">
	{#each projects as project}
		<li class="group relative border-l-2 border-transparent pl-4 transition-all">
			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-3">
					<a
						class="text-lg font-bold tracking-tight text-gruvbox-green no-underline hover:underline"
						href={project.url}
					>
						{project.name}
					</a>

					<span
						class="rounded bg-gruvbox-green/10 px-2 py-0.5 font-mono text-xs text-gruvbox-green"
					>
						{project.language}
					</span>
				</div>

				<p class="max-w-2xl font-sans text-sm leading-relaxed opacity-80">
					{project.description}
				</p>

				<div
					class="mt-1 flex items-center gap-4 font-mono text-xs tracking-widest uppercase opacity-60"
				>
					{#if project.openSource}
						<a
							class="transition-opacity hover:text-gruvbox-green hover:opacity-100"
							href={project.openSourceLink}
						>
							[ source ]
						</a>
					{:else}
						<span class="text-gruvbox-red italic">[ closed ]</span>
					{/if}

					<a
						href={project.url}
						class="transition-opacity hover:text-gruvbox-green hover:opacity-100"
					>
						[ visit ]
					</a>
				</div>
			</div>
		</li>
	{/each}
</ul>
