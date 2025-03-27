<script lang="ts">
	import { page } from '$app/state';
	import { twMerge } from 'tailwind-merge';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-dvh max-h-dvh min-h-dvh flex-col">
	<header class="p-6">
		<nav class="flex items-center justify-center gap-2">
			<a
				href="/"
				class={twMerge(
					'relative',
					page.url.pathname === '/' &&
						'before:absolute before:-bottom-1 before:h-1 before:w-full before:rounded before:bg-black dark:before:bg-white'
				)}>Home</a
			>
			<a
				href="/projects"
				class={twMerge(
					'relative',
					page.url.pathname === '/projects' &&
						'before:absolute before:-bottom-1 before:h-1 before:w-full before:rounded before:bg-black dark:before:bg-white'
				)}>Projects</a
			>
		</nav>
	</header>
	<main class="flex flex-1 flex-col">
		{@render children()}
	</main>

	<footer class="p-6">
		<p class="text-center text-xs text-neutral-400">Powered by - Rafael de Souza</p>
	</footer>
</div>
