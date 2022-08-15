// Types global
export interface IErrorData {
  code: string
  data: { message: number }
  message: string
}

// Type userProduct
export interface IProduct {
  id: string
  fotos: { titulo: string; src: string }[]
  nome: string
  preco: string
  descricao: string
  vendido: string
  usuario_id: string
}

export interface IProductPost {
  name: string
  price: string
  description: string
  photos: { name: string; file: File }[]
}

// Types userReducer
export interface IUserGetToken {
  username: string
  password: string
}

export interface IUserInformation {
  id: string
  nome: string
  email: string
  cep: string
  numero: string
  rua: string
  bairro: string
  cidade: string
  estado: string
}

export interface ITransaction {
  comprador_id: string
  vendedor_id: string
  endereco: IUserInformation
  produto: IProduct
  data: string
}

export interface IUserRegister {
  nome: string
  email: string
  senha: string
  cep: string
  numero: string
  rua: string
  bairro: string
  cidade: string
  estado: string
}

export interface IDataPurchase {
  comprador_id: string
  vendedor_id: string
  produto: IProduct
  endereco: IUserInformation
}
