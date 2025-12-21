<script>
	export let data;
</script>

<div class="bg-gruvbox-bg min-h-screen">
	<div class="mx-auto max-w-screen-xl px-6">
		<div class="flex items-center justify-start">
			<div class="text-gruvbox-fg pt-[5rem] text-sm lg:text-lg font-sans">
				<h1 class="font-serif font-bold text-3xl lg:text-5xl">writings</h1>
				<a href="/" class="text-gruvbox-green hover:underline lg:text-[15px]">home</a>
				::
				<a href="/rss.xml" class="text-gruvbox-green hover:underline lg:text-[15px]">subscribe</a>
			</div>
		</div>

		<div class="text-gruvbox-fg pt-6 text-md font-sans">My thoughts, compiled.</div>

		{#if data.posts.length === 0}
			<div class="text-gruvbox-fg text-md lg:text-lg pt-6 font-sans">No posts yet.</div>
		{:else}
			<div class="text-gruvbox-fg text-md lg:text-lg pt-6 font-sans">
				{#each data.posts as post, i}
					<div class="pt-4">
						{#if post.date}
							<span class="text-gruvbox-fg opacity-70 text-sm lg:text-[15px]">
								{new Date(post.date).toLocaleDateString('en-US', {
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
							<div class="text-gruvbox-fg opacity-80 text-sm lg:text-[15px] pt-1 pl-4">
								{post.description}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
