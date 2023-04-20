import express from "express";
import { getShop, shops } from "../data/shop";

const router = express();

/**
 * 運転代行一覧の取得
 */
router.get("/", (req, res) => {
  res.send(shops);
});

/**
 * 運転代行の取得
 */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const shop = getShop(+id);
  res.send(shop);
});

module.exports = router;
