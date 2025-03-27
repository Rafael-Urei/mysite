<script lang="ts">
	import { cn } from '$lib/utils';

	export let size = 200;
	export let duration = 15;
	export let anchor = 90;
	export let borderWidth = 2;
	export let colorFrom = '#0CF25D';
	export let colorTo = 'transparent';
	export let delay = 0;
	let delaySec = delay + 's';

	let className: any = '';
	export { className as class };
</script>

<div
	style:--border-width={borderWidth}
	style:--size={size}
	style:--color-from={colorFrom}
	style:--color-to={colorTo}
	style:--delay={delaySec}
	style:--anchor={anchor}
	style:--duration={duration}
	class={cn(
		'pointer-events-none absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]',

		// mask styles
		'![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]',

		// pseudo styles
		'after:animate-border-beam after:absolute after:aspect-square after:w-[300px] after:bg-gradient-to-l after:from-transparent after:via-indigo-500 after:via-30% after:to-transparent after:[animation-delay:var(--delay)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))] dark:after:via-white',
		className
	)}
></div>
