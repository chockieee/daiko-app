import express from "express";

const router = express();

const logs = [
  {
    id: "FCFB5",
    company: "テクノ代行",
    name: "テスト 太郎",
    from: "高松市片原町",
    to: "高松市仏生山町",
    startTime: new Date(2023, 3, 26, 21, 0),
    fare: 3200,
    payment: "PayPay",
    status: "active",
  },
  {
    id: "7D4B5",
    company: "テクノ代行",
    name: "テスト 太郎",
    from: "高松市片原町",
    to: "高松市仏生山町",
    startTime: new Date(2023, 3, 6, 22, 7),
    endTime: new Date(2023, 3, 6, 22, 33),
    fare: 3200,
    payment: "PayPay",
    status: "past",
  },
  {
    id: "86288",
    company: "テクノ代行",
    name: "テスト 太郎",
    from: "高松市瓦町",
    to: "高松市仏生山町",
    startTime: new Date(2023, 2, 2, 22, 7),
    endTime: new Date(2023, 2, 2, 22, 33),
    fare: 2800,
    payment: "PayPay",
    status: "past",
  },
  {
    id: "09F8A",
    company: "テクノ代行",
    name: "テスト 太郎",
    from: "高松市瓦町",
    to: "高松市仏生山町",
    startTime: new Date(2023, 2, 2, 22, 7),
    endTime: new Date(2023, 2, 2, 22, 33),
    fare: 2800,
    payment: "PayPay",
    status: "cancel",
  },
  {
    id: "6ED33",
    company: "テクノ代行",
    name: "テスト 太郎",
    from: "JR高松駅",
    to: "高松市仏生山町",
    startTime: new Date(2023, 1, 17, 22, 7),
    endTime: new Date(2023, 1, 17, 22, 33),
    fare: 3400,
    payment: "PayPay",
    status: "past",
  },
  {
    id: "0EC398",
    company: "ai7代行運転アイセブン",
    name: "テスト 太郎",
    from: "高松市香西本町",
    to: "高松市国分寺町",
    startTime: new Date(2023, 0, 8, 22, 7),
    endTime: new Date(2023, 0, 8, 22, 33),
    fare: 2350,
    payment: "楽天Pay",
    status: "past",
  },
];

/**
 * 履歴一覧情報取得
 */
router.get("/", (req, res) => {
  res.send(logs);
});

/**
 * 履歴詳細情報取得
 */
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const target = logs.find((log) => log.id === id) || logs[0];
  const log = {
    id: "FCFB5",
    status: target.status,
    fare: {
      total: 3200,
      distance: 3200,
      time: 0,
      pickup: 0,
      additional: 0,
    },
    payment: "PayPay",
    startTime: "2023/04/26(水) 22:07",
    from: {
      place: "高松市片原町",
      time: "22:07",
    },
    to: {
      place: "高松市仏生山町",
      time: "22:33",
    },
    distance: 9.1,
    company: {
      name: "テクノ代行",
      address: "香川県高松市朝日町5-4-18",
      tel: "087-811-5000",
    },
  };
  res.send(log);
});

module.exports = router;
