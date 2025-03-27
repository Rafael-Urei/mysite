<script lang="ts">
	let { header, content } = $props();
</script>

<div
	class={`mb-4 flex max-w-[400px] break-inside-avoid-column flex-col items-center gap-4 rounded-md shadow-md duration-300 hover:opacity-50 dark:bg-neutral-900`}
>
	{#if header}
		{@render header?.()}
	{/if}
	{#if content}
		{@render content?.()}
	{/if}
</div>
