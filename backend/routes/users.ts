import express from "express";
import { user } from "../data/user";

const router = express();

/**
 * ユーザー詳細情報取得
 */
router.get("/:id", (req, res) => {
  res.send(user);
});

module.exports = router;
