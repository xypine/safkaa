<script lang="ts">
	// Your selected Skeleton theme:
	import "../theme.postcss";

	// This contains the bulk of Skeletons required styles:
	import "@skeletonlabs/skeleton/styles/skeleton.css";

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import "../app.postcss";

	import { AppBar } from "@skeletonlabs/skeleton";
	import { getAvailablePriceGroups, getAvailableSlots } from "$lib/unicafe/utils";
	import type { LayoutData } from "./$types";
	import {
		ALL_LANGUAGES,
		selectedLanguage,
		selectedPriceGroup,
		selectedTimeSlot
	} from "$lib/state";
	import { autoModeWatcher } from "@skeletonlabs/skeleton";
	import { browser } from "$app/environment";
	import { BarLoader } from "svelte-loading-spinners";
	import { invalidateAll } from "$app/navigation";
	export let data: LayoutData;
</script>

<svelte:head
	>{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}</svelte:head
>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<a href="/">
			<h1 class="text-xl font-bold">Safkaa🍴</h1>
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#if browser}
			<select class="select" bind:value={$selectedTimeSlot}>
				<option value={null}> kaikki aukioloajat </option>
				<optgroup label="rajaa aukioloaikaan">
					{#each getAvailableSlots(data.restaurantData) as slot}
						<option value={slot}>{slot}</option>
					{/each}
				</optgroup>
			</select>
			<select class="select" bind:value={$selectedPriceGroup}>
				<option value={null}> kaikki hintaryhmät </option>
				<optgroup label="rajaa hintaryhmään">
					{#each getAvailablePriceGroups(data.restaurantData) as group}
						<option value={group}>{group}</option>
					{/each}
				</optgroup>
			</select>
		{:else}
			<BarLoader color="rgba(var(--color-primary-500))" />
		{/if}
		<select
			class="select"
			bind:value={$selectedLanguage}
			disabled={!browser}
			on:change={() => {
				invalidateAll();
			}}
		>
			{#each ALL_LANGUAGES as lang}
				<option value={lang}>{lang}</option>
			{/each}
		</select>
	</svelte:fragment>
</AppBar>
<slot />
