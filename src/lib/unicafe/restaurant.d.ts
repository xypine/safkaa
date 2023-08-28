// Automatically generated from the endpoint
export type Restaurant = {
	id: number;
	title: string;
	slug: string;
	permalink: string;
	location: Location[];
	address: string;
	visitingHours: null | string;
	blocksHtml: string;
	menuData: MenuData;
};

export type Location = {
	id: number;
	name: LocationName;
};

export type LocationName = "Viikki" | "Keskusta" | "Meilahti" | "Kumpula";

export type MenuData = {
	areacode: number;
	id: number;
	name: string;
	phone: null | string;
	email: null | string;
	feedback_address: null | string;
	description: string;
	visitingHours: VisitingHours;
	menus: Menu[];
};

export type Menu = {
	message: null | string;
	data: Datum[];
	date: DateEnum;
};

export type Datum = {
	sku: string;
	price: Price;
	nutrition: string;
	name: string;
	meta: { [key: string]: Meta[] };
	ingredients: string;
};

export type Meta =
	| "G"
	| "[S]"
	| "VE"
	| "K"
	| "L"
	| "M"
	| "VL"
	| "Pyydä Ve"
	| "palkokasveja"
	| "valkosipulia"
	| "Gluteiiniton ilman pastaa"
	| "maitoa"
	| "gluteenia"
	| "kalaa"
	| "sulfiitteja"
	| "äyriäisiä"
	| "maapähkinää"
	| "siemeniä"
	| "sinapinsiemeniä"
	| "sinappia"
	| "seesaminsiemeniä"
	| "kananmunaa"
	| "soijaa"
	| "rikkidioksidia"
	| "selleriä"
	| "pähkinää"
	| "mantelia"
	| "Pyydettäessä vegaaninen"
	| "nilviäisiä"
	| "Ilmastovalinta"
	| "Vastuullisesti kalastettua"
	| "Sisältää luomua"
	| "Sisältää Reilun kaupan tuotteita"
	| "Toiveklassikko"
	| "Vastuullisesti kasvatettua kalaa";

export type Price = {
	name: PriceName;
	value: Value;
};

export type PriceName =
	| "Päivän lounas"
	| "Lisuke"
	| "Bowl"
	| "Vegaani"
	| "Makeasti"
	| "Kaivopiha Vegaani"
	| "Kaivopiha Päivän lounas"
	| "Kaivopiha Vegaaninen salaattibaari"
	| "Well Kaisa VEGESALAATTIBUFFA"
	| "Well-Kaisa KEITTO tai TOAST VEGAANI"
	| "Well Kaisa VEGAANIBOWL"
	| "Well-Kaisa Lohikeitto"
	| "Well-Kaisa KEITTO tai TOAST"
	| "Päivän erikoinen"
	| "Porthanian henkilökunta"
	| "Tiedoitus"
	| "Infokeskus buffet";

export type Value = {
	student: string;
	graduate_hyy: string;
	graduate: string;
	contract: string;
	normal: string;
	student_hyy: string;
};

export type DateEnum =
	| "Ma 28.08."
	| "Ti 29.08."
	| "Ke 30.08."
	| "To 31.08."
	| "Pe 01.09."
	| "La 02.09."
	| "Su 03.09."
	| "Ma 04.09."
	| "Ti 05.09."
	| "Ke 06.09."
	| "To 07.09."
	| "Pe 08.09."
	| "La 09.09."
	| "Su 10.09.";

export type VisitingHours = {
	business: boolean | BistroClass;
	breakfast: boolean | BistroClass;
	bistro: boolean | BistroClass;
	lounas: boolean | BistroClass;
};

export type BistroClass = {
	name?: null | string;
	items: Item[];
};

export type Item = {
	closedException?: boolean;
	label: string;
	hours: string;
	exceptionUndefinedTime?: boolean;
	exception?: boolean;
};
