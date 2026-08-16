import img from "@public/img/DSC09905.jpg";

interface IProstoryCard {
	id?: string;
	photo: string | typeof img;
	title: string;
	list: Array<{ name: string }>;
	price: number;
}

const DataList: Array<{ name: string }> = [
	{
		name: "15 m",
	},

	{
		name: "Polohovací lehátko",
	},

	{
		name: "Klimatizace",
	},
];

export const CardData: IProstoryCard[] = [
	{
		title: "Kabinet A1",
		photo: img,
		list: DataList,
		price: 1200,
	},
	{
		title: "Kabinet A1",
		photo: img,
		list: DataList,
		price: 1200,
	},
	{
		title: "Kabinet A1",
		photo: img,
		list: DataList,
		price: 1200,
	},
];
