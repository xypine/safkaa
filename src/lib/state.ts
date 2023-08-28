import { browser } from "$app/environment";
import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from "svelte/store";

export const ALL_LANGUAGES = ["fi", "en", "sv"] as const;
export type Language = (typeof ALL_LANGUAGES)[number];
export const selectedLanguage: Writable<Language> = localStorageStore("selectedLanguage", "fi");
selectedLanguage.subscribe((value) => {
	if (browser) document.cookie = `lang=${value}; path=/; max-age=31536000`;
});

export const selectedPriceGroup: Writable<string | null> = localStorageStore(
	"selectedPriceGroup",
	"student_hyy"
);

export const selectedTimeSlot: Writable<string | null | undefined> = localStorageStore(
	"selectedTimeSlot",
	"lounas"
);
