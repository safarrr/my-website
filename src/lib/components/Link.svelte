<script lang="ts">
	let { to }: { to: string } = $props();
</script>

<a
	href={to}
	target="_blank"
	rel="noopener noreferrer"
	class="font-semibold text-blue-500 hover:underline"
>
	<slot />
</a>
