import express from "express";

const router = express();

/**
 * ユーザー詳細情報取得
 */
 router.get("/:id", (req, res) => {
    const user = {
        id: 1,
        name: "テスト 太郎",
        mail: "test@mail.com",
        tel: "090-XXXX-XXXX",
        address: "香川県高松市仏生山町乙XXX-X"
    }
    res.send(user)
})

module.exports = router;