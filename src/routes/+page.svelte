<script lang="ts">
	import { groupRestaurantsByLocation } from "$lib/unicafe/utils";
	import type { LayoutData } from "./$types";
	import LocationCard from "./LocationCard.svelte";

	export let data: LayoutData;
</script>

<main class="flex flex-col gap-2 p-2">
	{#each Object.entries(groupRestaurantsByLocation(data.restaurantData)) as [name, restaurants]}
		<LocationCard {name} {restaurants} />
	{/each}
</main>
