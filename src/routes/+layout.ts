import { selectedLanguage } from "$lib/state";
import { getRestaurantData } from "$lib/unicafe/interface";
import { get } from "svelte/store";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
	return {
		restaurantData: getRestaurantData(get(selectedLanguage))
	};
}) satisfies LayoutLoad;
