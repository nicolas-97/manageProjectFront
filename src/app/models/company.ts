export interface ICompany{
  created_at: Date,
  email: string,
  id: number
  name: string
  nit: string
  phone: string
  projects: IProject[],
  users: IUser[],
}

interface IProject{
  company_id: number,
  created_at: Date,
  finish: Date,
  id: number,
  name: string,
  start: Date,
  updated_at: Date,
}

interface IUser{
  company_id: number,
  created_at: Date,
  email: string,
  email_verified_at: Date,
  id: number,
  name: string,
  updated_at: Date,
}
