<script lang="ts">
	import { selectedPriceGroup, selectedTimeSlot } from "$lib/state";
	import type { Restaurant } from "$lib/unicafe/restaurant";
	import { getItemPrice, menuDateFilter } from "$lib/unicafe/utils";

	export let restaurant: Restaurant;
	$: filteredMenus = menuDateFilter(restaurant.menuData.menus, 2);
	export let previousRestaurant: Restaurant | null;
</script>

<div class="flex gap-4">
	<div class="w-32">
		<h2 class="text-lg font-bold" id={restaurant.title}>{restaurant.title}</h2>
		{#each Object.entries(restaurant.menuData.visitingHours) as [label, hours]}
			{#if $selectedTimeSlot === null || $selectedTimeSlot === label}
				{#if typeof hours === "boolean"}
					{#if hours}
						<p>{label}: Open</p>
					{/if}
				{:else}
					{#if $selectedTimeSlot === null}
						<p>{label}</p>
					{/if}
					{#each hours.items as range}
						<p class="ml-2">
							{#if range.closedException}
								!
							{/if}
							{#if range.exception}
								?
							{/if}
							{range.label}: {range.hours}
						</p>
					{/each}
				{/if}
			{/if}
		{/each}
	</div>
	{#each filteredMenus as menu, i}
		{@const previousMenu = previousRestaurant ? previousRestaurant.menuData.menus[i] : null}
		<div class="flex-1 flex flex-col gap-1">
			{#if previousMenu && previousMenu.date === menu.date}
				<hr />
			{:else}
				<p class="text-lg">{menu.date}</p>
			{/if}
			{#if !menu.data || menu.data.length === 0}
				<p class="">Ruokalista puuttuu</p>
			{/if}
			{#each menu.data as item}
				{@const price = getItemPrice(item, $selectedPriceGroup)}
				<div class="card p-1" class:variant-soft-surface={i} class:variant-ghost-surface={!i}>
					<div class="flex gap-1 p-1">
						<p class="flex-1">
							{item.name}
						</p>
						<p>
							{#if typeof price === "string"}
								{price}€
							{:else}
								{price.min}€ - {price.max}€
							{/if}
						</p>
					</div>
					<small>
						{#if item.meta["0"] && item.meta["0"].length > 0}
							<p class="ml-2">
								{item.meta["0"].join(", ")}
							</p>
						{/if}
						{#if item.meta["1"] && item.meta["1"].length > 0}
							<p class="ml-2">
								sisältää {item.meta["1"].join(", ")}
							</p>
						{/if}
						{#if item.meta["2"] && item.meta["2"].length > 0}
							<p class="ml-2">
								{item.meta["2"].join(", ")}
							</p>
						{/if}
					</small>
				</div>
			{/each}
			{#if menu.message}
				<hr />
				<p class="text-sm">
					{menu.message}
				</p>
			{/if}
		</div>
	{/each}
</div>
