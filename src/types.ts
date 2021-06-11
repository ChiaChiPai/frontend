export type TSupplyInfo = {
  id: string;
  organization: {
    type: string;
    name: string;
      city: string;
  };
  name: string;
  amount: number;
  unit: string;
  ended_date: string;
}

export interface InputChildren {
  text: string
  value: string
}
