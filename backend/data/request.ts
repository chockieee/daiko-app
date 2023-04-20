import { getShop, IShop } from "./shop";
import { IUser, user } from "./user";

export interface IRequest {
  id: string;
  shop: IShop;
  user: IUser;
  from: string;
  to: string;
  distance: number;
  startTime: Date;
  endTime: Date;
  totalFare: number;
  distanceFare: number;
  timeFare: number;
  pickupFare: number;
  additionalFare: number;
  payment: string;
  status: string;
}

export const requests: IRequest[] = [
  {
    id: "FCFB5",
    shop: getShop(1),
    user: user,
    from: "高松市片原町",
    to: "高松市仏生山町",
    distance: 9.1,
    startTime: new Date(2023, 3, 26, 21, 0),
    endTime: new Date(2023, 3, 26, 21, 30),
    totalFare: 3200,
    distanceFare: 3200,
    timeFare: 0,
    pickupFare: 0,
    additionalFare: 0,
    payment: "PayPay",
    status: "active",
  },
  {
    id: "7D4B5",
    shop: getShop(1),
    user: user,
    from: "高松市片原町",
    to: "高松市仏生山町",
    distance: 9.1,
    startTime: new Date(2023, 3, 6, 22, 7),
    endTime: new Date(2023, 3, 6, 22, 33),
    totalFare: 3200,
    distanceFare: 3200,
    timeFare: 0,
    pickupFare: 0,
    additionalFare: 0,
    payment: "PayPay",
    status: "past",
  },
  {
    id: "86288",
    shop: getShop(1),
    user: user,
    from: "高松市瓦町",
    to: "高松市仏生山町",
    distance: 7.3,
    startTime: new Date(2023, 2, 2, 22, 7),
    endTime: new Date(2023, 2, 2, 22, 33),
    totalFare: 2800,
    distanceFare: 2800,
    timeFare: 0,
    pickupFare: 0,
    additionalFare: 0,
    payment: "PayPay",
    status: "past",
  },
  {
    id: "09F8A",
    shop: getShop(1),
    user: user,
    from: "高松市瓦町",
    to: "高松市仏生山町",
    distance: 7.3,
    startTime: new Date(2023, 2, 2, 22, 7),
    endTime: new Date(2023, 2, 2, 22, 33),
    totalFare: 2800,
    distanceFare: 2800,
    timeFare: 0,
    pickupFare: 0,
    additionalFare: 0,
    payment: "PayPay",
    status: "cancel",
  },
  {
    id: "6ED33",
    shop: getShop(1),
    user: user,
    from: "JR高松駅",
    to: "高松市仏生山町",
    distance: 8.1,
    startTime: new Date(2023, 1, 17, 22, 7),
    endTime: new Date(2023, 1, 17, 22, 33),
    totalFare: 3400,
    distanceFare: 3400,
    timeFare: 0,
    pickupFare: 0,
    additionalFare: 0,
    payment: "PayPay",
    status: "past",
  },
  {
    id: "0EC398",
    shop: getShop(2),
    user: user,
    from: "高松市香西本町",
    to: "高松市国分寺町",
    distance: 8.1,
    startTime: new Date(2023, 0, 6, 22, 7),
    endTime: new Date(2023, 0, 6, 22, 33),
    totalFare: 2350,
    distanceFare: 0,
    timeFare: 2350,
    pickupFare: 0,
    additionalFare: 0,
    payment: "楽天Pay",
    status: "past",
  },
];

export const getRequest = (id: string) => {
  return requests.find((request) => request.id === id) || requests[0];
};
