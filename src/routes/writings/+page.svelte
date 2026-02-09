<script>
	export let data;
</script>

<div class="min-h-screen bg-gruvbox-bg">
	<div class="mx-auto max-w-screen-xl px-6">
		<div class="flex items-center justify-start">
			<div class="pt-[5rem] font-sans text-sm text-gruvbox-fg lg:text-lg">
				<h1 class="font-serif text-3xl font-bold lg:text-5xl">writings</h1>
				<nav class="mt-2 flex items-center gap-2">
					<a href="/" class="text-gruvbox-green hover:underline lg:text-[15px]">home</a>
					::
					<a href="/rss.xml" class="text-gruvbox-green hover:underline lg:text-[15px]">subscribe</a>
				</nav>
			</div>
		</div>

		<div class="text-md pt-6 font-sans text-gruvbox-fg">My thoughts, compiled.</div>

		{#if data.posts.length === 0}
			<div class="text-md pt-6 font-sans text-gruvbox-fg lg:text-lg">No posts yet.</div>
		{:else}
			<div class="text-md pt-6 font-sans text-gruvbox-fg lg:text-lg">
				{#each data.posts as post, i}
					<div class="pt-4">
						{#if post.date}
							<span class="text-sm text-gruvbox-fg opacity-70 lg:text-[15px]">
								{new Date(post.date).toLocaleDateString('en-US', {
									timeZone: 'UTC',
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								})}
							</span>
							<span class="text-gruvbox-fg opacity-70"> :: </span>
						{/if}
						<a
							href="/writings/posts/{post.slug}"
							class="text-gruvbox-green hover:underline lg:text-[15px]"
						>
							{post.title}
						</a>
						{#if post.description}
							<div class="pt-1 pl-4 text-sm text-gruvbox-fg opacity-80 lg:text-[15px]">
								{post.description}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
