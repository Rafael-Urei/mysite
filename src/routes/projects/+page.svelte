<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';

	let { data } = $props();
</script>

<div class="flex flex-col items-center justify-center">
	<div class="h-full columns-1 sm:columns-2 md:columns-3">
		{#each data.sortedProjects as { id, title, tags, image, url }}
			<a
				class="max-w-max self-center justify-self-center"
				href={url ? url : '/portfolio'}
				target={url && '_blank'}
			>
				<Card>
					{#snippet header()}
						<img
							loading="lazy"
							decoding="async"
							role="presentation"
							src={image}
							alt=""
							class="rounded-tl-md rounded-tr-md"
						/>
					{/snippet}
					{#snippet content()}
						<h1>{title}</h1>
						<ul class="flex flex-wrap gap-1 p-4 text-slate-600">
							{#each tags as tag}
								<li
									class="flex items-center gap-2 rounded bg-white px-2 py-1 text-xs font-medium dark:bg-zinc-200/20 dark:text-white"
								>
									{tag}
								</li>
							{/each}
						</ul>
					{/snippet}
				</Card>
			</a>
		{/each}
	</div>
</div>
