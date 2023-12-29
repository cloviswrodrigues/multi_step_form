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
