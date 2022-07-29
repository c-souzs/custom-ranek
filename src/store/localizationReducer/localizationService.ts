import axios from 'axios';

interface CepResponse {
  cep: string
  uf: string
}

export interface CityData {
  nome: string
}

export const getCep = async (cep: string): Promise<CepResponse> => {
  const { data } = await axios.get<CepResponse>(`https://viacep.com.br/ws/${cep}/json/`);

  return data;
};

export const getCitys = async (uf: string): Promise<string[]> => {
  const { data } = await axios.get<CityData[]>(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
  );

  const dataString = data.map((city) => city.nome);

  return dataString;
};
