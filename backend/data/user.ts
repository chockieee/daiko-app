export interface IUser {
  id: number;
  name: string;
  mail: string;
  tel: string;
  address: string;
}

export const user: IUser = {
  id: 1,
  name: "テスト 太郎",
  mail: "test@mail.com",
  tel: "090-XXXX-XXXX",
  address: "香川県高松市仏生山町乙XXX-X",
};
