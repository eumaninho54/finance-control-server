export interface GetTransactionsDTO {
  textFilter: string
}

export interface ITransactions {
  id: number;
  name: string
  reason: string
  value: number;
  release_date: Date;
}