import { get } from "svelte/store";
import type { DateEnum, Datum, LocationName, Menu, Restaurant } from "./restaurant";
import { selectedPriceGroup } from "$lib/state";

export function groupRestaurantsByLocation(restaurants: Restaurant[]) {
	const grouped: Record<LocationName, Restaurant[]> = {
		Kumpula: [],
		Keskusta: [],
		Viikki: [],
		Meilahti: []
	};

	for (const restaurant of restaurants) {
		const location = restaurant.location[0].name;
		grouped[location].push(restaurant);
	}

	return grouped;
}

export function getAvailableSlots(restaurants: Restaurant[]) {
	const slots = new Set<string>();

	for (const restaurant of restaurants) {
		for (const slot of Object.keys(restaurant.menuData.visitingHours)) {
			slots.add(slot);
		}
	}
	return Array.from(slots);
}

export function getAvailablePriceGroups(restaurants: Restaurant[]) {
	const priceGroups = new Set<string>();

	for (const restaurant of restaurants) {
		for (const menu of restaurant.menuData.menus) {
			for (const datum of menu.data) {
				for (const group of Object.keys(datum.price.value)) {
					priceGroups.add(group);
				}
			}
		}
	}

	return Array.from(priceGroups);
}

export function getItemPrice(item: Datum, priceGroup: string | null) {
	const price = item.price.value;
	if (priceGroup !== null) {
		return (
			Object.entries(price)
				.map((a) => {
					return {
						key: a[0],
						value: a[1]
					};
				})
				.find((p) => p.key === priceGroup)?.value ?? "?"
		);
	}
	let min = null;
	let max = null;
	for (const [key, value] of Object.entries(price)) {
		if (min === null || value < min) {
			min = value;
		}
		if (max === null || value > max) {
			max = value;
		}
	}
	return {
		min,
		max
	};
}

export function getAvailableDates(menus: Menu[]) {
	return menus.map((menu) => menu.date);
}

export function menuDateFilter(menus: Menu[], upcoming: number) {
	return menus.slice(0, upcoming);
}
