export interface IShop {
  id: number;
  name: string;
  address: string;
  tel: string;
  isAvailable: boolean;
  position: number[];
}

export const shops: IShop[] = [
  {
    id: 1,
    name: "テクノ代行",
    address: "香川県高松市朝日町5-4-18",
    tel: "087-811-5000",
    isAvailable: true,
    position: [34.34900751537537, 134.07536246910186],
  },
  {
    id: 2,
    name: "ai7代行運転アイセブン",
    address: "香川県高松市築地町4-9",
    tel: "087-811-5000",
    isAvailable: false,
    position: [34.344055424794405, 134.06831672492677],
  },
  {
    id: 3,
    name: "Bダッシュ代行",
    address: "香川県高松市中間町732-1",
    tel: "080-3922-7109",
    isAvailable: true,
    position: [34.29650327675214, 133.98517139609004],
  },
  {
    id: 4,
    name: "きずな代行運転",
    address: "香川県高松市東山崎町514",
    tel: "080-4992-7890",
    isAvailable: true,
    position: [34.30334461587841, 134.09865960958533],
  },
];

export const getShop = (id: number) => {
  return shops.find((shop) => shop.id === id) || shops[0];
};
