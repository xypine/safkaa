import type { Language } from "$lib/state";
import { ENDPOINT } from "./constants";
import type { Restaurant } from "./restaurant";

export async function getRestaurantData(lang: Language) {
	const params = new URLSearchParams({ lang });
	const response = await fetch(`${ENDPOINT}?${params}`);
	const data = (await response.json()) as Restaurant[];
	return data;
}
