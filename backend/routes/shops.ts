import express from "express";
import { shops } from "../data/shop";

const router = express();

/**
 * 運転代行一覧の取得
 */
router.get("/", (req, res) => {
  res.send(shops);
});

module.exports = router;
