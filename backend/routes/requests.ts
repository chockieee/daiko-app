import express from "express";

const router = express();

/**
 * 依頼のキャンセル
 */
router.put("/:id/cancel", (req, res) => {
  res.send("予約をキャンセルしました");
});

module.exports = router;
