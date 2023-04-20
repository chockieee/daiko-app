import express from "express";
import { getRequest, requests } from "../data/request";

const router = express();

/**
 * 予約・利用履歴一覧情報取得
 */
router.get("/", (req, res) => {
  const editedRequests = requests.map((request) => {
    return {
      ...request,
      shopName: request.shop.name,
      userName: request.user.name,
    };
  });
  res.send(editedRequests);
});

/**
 * 予約の登録
 */
router.post("/", (req, res) => {
  res.send(requests[0].id);
});

/**
 * 予約のキャンセル
 */
router.put("/:id/cancel", (req, res) => {
  res.send("予約をキャンセルしました");
});

/**
 * 予約・利用履歴詳細情報取得
 */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const request = getRequest(id);
  const editedRequest = {
    ...getRequest(id),
    shopName: request.shop.name,
    shopAddress: request.shop.address,
    shopTel: request.shop.tel,
    userName: request.user.name,
  };
  res.send(editedRequest);
});

module.exports = router;
