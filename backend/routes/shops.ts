import express from "express";

const router = express();

/**
 * 一覧取得
 */
router.get("/", (req, res) => {
    const createData =(id: string, name: string, bookable: boolean) => {
        return { id, name, bookable };
      }
      const rows = [
        createData("1", "Buddy代行", false),
        createData("2", "テクノ代行　高松", true),
        createData("3", "２４代行運転（にーよん）", true),
        createData("4", "Bダッシュ代行", false),
        createData("5", "アスター代行", true),
        createData("6", "ハンドルサービス運転代行", true),
      ];
    res.send(rows)
})

/**
 * 詳細情報取得
 */
router.get("/:id", (req, res) => {
  console.log(req.params)  
  const shopinfo = {
      id: "2",
      name: "テクノ代行 高松",
      time: "１８時～４時　　　 (月は3時、日祝は2時)",
      fee: `初乗り：１kmまで1400円　(会員料金)\n追　加：1kmごとに200円\nその他：※年会費無料　ご利用時にドライバーにお申し付け下さい。当日から会員料金でご利用になれます。`,
    };
  res.send(shopinfo)
})

/**
 * 依頼
 */
 router.post("/:id/request", (req, res) => {
res.send("登録に成功しました")
})

module.exports = router;