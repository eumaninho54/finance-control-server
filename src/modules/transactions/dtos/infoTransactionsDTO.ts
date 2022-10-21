export interface IInfoTransactions {
  input: {
    user: string;
    value: number;
    release_date: Date;
  },
  output: {
    user: string;
    value: number;
    release_date: Date;
  }
}