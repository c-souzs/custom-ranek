// Types global
export interface ErrorData {
  code: string
  data: { message: number }
  message: string
}

export interface Product {
  id: string
  fotos: { titulo: string; src: string }[] | null
  nome: string
  preco: string
  descricao: string
  vendido: string
  usuario_id: string
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
  produto: {
    id: string
    fotos: { titulo: string; src: string }[]
  }
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
