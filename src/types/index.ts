// Types global
export interface ErrorData {
  code: string
  data: { message: number }
  message: string
}

// Type userProduct
export interface Product {
  id: string
  fotos: { titulo: string; src: string }[]
  nome: string
  preco: string
  descricao: string
  vendido: string
  usuario_id: string
}

export interface ProductPost {
  name: string
  price: string
  description: string
  photos: { name: string; file: File }[]
}

// Types userReducer
export interface UserGetToken {
  username: string
  password: string
}

export interface UserInformation {
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

export interface Transaction {
  comprador_id: string
  vendedor_id: string
  endereco: UserInformation
  produto: Product
  data: string
}

export interface UserRegister {
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

export interface DataPurchase {
  comprador_id: string
  vendedor_id: string
  produto: Product
  endereco: UserInformation
}
