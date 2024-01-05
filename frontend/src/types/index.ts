export enum Period {
  Monthly = 'monthly',
  Yearly = 'yearly'
}

export type periodOption = Period.Monthly | Period.Yearly

export enum Plan {
  Arcade = 'arcade',
  Advanced = 'advanced',
  Pro = 'pro'
}

export type pickAddOns = {
  name: string,
  title: string,
  description: string,
  [Period.Monthly]: number,
  [Period.Yearly]: number,
  checked: boolean
}

export type FormValues = {
  plan: Plan;
  periodOption: string;
  pickAddOns: {
    name: string;
    title: string;
    description: string;
    monthly: number;
    yearly: number;
    checked: boolean;
  }[];
  addonsCustomizableProfile: boolean,
  addonsLargerStorage: boolean,
  addonsOnlineService: boolean,
}
