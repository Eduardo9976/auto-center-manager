import type { AxiosInstance } from "axios";
import type { RequestError } from "../types/error";

type ViaCepResponse = {
  data: GetPayload;
  errors: RequestError | null;
};

type GetPayload = {
  cep: string | number;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string | number;
  gia: string | number;
  ddd: string | number;
  siafi: string | number;
};

export interface ViaCepServiceInterface {
  getCep(postalCode: string): Promise<ViaCepResponse>;
}

function ViaCepService(httpClient: AxiosInstance): ViaCepServiceInterface {
  async function getCep(postalCode: string): Promise<ViaCepResponse> {
    const response = await (httpClient as any)({
      url: `/ws/${postalCode}/json/`,
      baseURL: "https://viacep.com.br",
    });
    let errors: RequestError | null = null;

    if (response.data.data.error) {
        console.log('não tem response data');
        throw new Error('Cep Não encontrado')
        
    }

    return {
      data: response.data,
      errors,
    };
  }

  return {
    getCep,
  };
}

export default ViaCepService;
