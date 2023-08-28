<script lang="ts">
	import RestaurantCard from "./RestaurantCard.svelte";
	import type { Restaurant } from "$lib/unicafe/restaurant";
	import { localStorageStore } from "@skeletonlabs/skeleton";
	import { GoogleSpin } from "svelte-loading-spinners";

	import type { Writable } from "svelte/store";
	import { browser } from "$app/environment";
	export let name: string;
	export let restaurants: Restaurant[];
	let open: Writable<boolean> = localStorageStore(`restaurant-group-${name}`, false);
</script>

<div class="card">
	<details bind:open={$open}>
		<summary class="cursor-pointer p-4">
			<h1 class="text-xl inline-block">
				{name}
			</h1>
		</summary>
		<section class="p-4 pt-0 flex flex-col gap-4">
			{#each restaurants as restaurant, i}
				{@const previousRestaurant = restaurants[i - 1]}
				<RestaurantCard {restaurant} {previousRestaurant} />
			{/each}
		</section>
	</details>
</div>
