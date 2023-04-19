import express from "express";

const router = express();

/**
 * 一覧取得
 */
router.get("/", (req, res) => {
  const createData = (id: string, name: string, bookable: boolean) => {
    return { id, name, bookable };
  };
  const rows = [
    createData("1", "Buddy代行", false),
    createData("2", "テクノ代行　高松", true),
    createData("3", "２４代行運転（にーよん）", true),
    createData("4", "Bダッシュ代行", false),
    createData("5", "アスター代行", true),
    createData("6", "ハンドルサービス運転代行", true),
  ];
  res.send(rows);
});

/**
 * 一覧取得
 */
router.get("/map", (req, res) => {
  res.send(shops);
});

/**
 * 詳細情報取得
 */
router.get("/:id", (req, res) => {
  console.log(req.params);
  const shopinfo = {
    id: "2",
    name: "テクノ代行 高松",
    time: "１８時～４時　　　 (月は3時、日祝は2時)",
    fee: `初乗り：１kmまで1400円　(会員料金)\n追　加：1kmごとに200円\nその他：※年会費無料　ご利用時にドライバーにお申し付け下さい。当日から会員料金でご利用になれます。`,
  };
  res.send(shopinfo);
});

/**
 * 依頼
 */
router.post("/:id/request", (req, res) => {
  res.send("登録に成功しました");
});

export const shops = [
  {
    id: 1,
    company: "テクノ代行",
    adress: "香川県高松市朝日町5-4-18",
    tel: "087-811-5000",
    isAvailable: true,
    position: [34.34900751537537, 134.07536246910186],
  },
  {
    id: 2,
    company: "ai7代行運転アイセブン",
    adress: "香川県高松市築地町4-9",
    tel: "087-811-5000",
    isAvailable: false,
    position: [34.344055424794405, 134.06831672492677],
  },
  {
    id: 3,
    company: "Bダッシュ代行",
    adress: "香川県高松市中間町732-1",
    tel: "080-3922-7109",
    isAvailable: true,
    position: [34.29650327675214, 133.98517139609004],
  },
  {
    id: 4,
    company: "きずな代行運転",
    adress: "香川県高松市東山崎町514",
    tel: "080-4992-7890",
    isAvailable: true,
    position: [34.30334461587841, 134.09865960958533],
  },
];

module.exports = router;
