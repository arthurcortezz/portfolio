import crypto from "crypto";
import axios, { AxiosResponse } from "axios";
import { Exception } from "../exceptions";

export class Controller {
  api: any;
  chavesCipher: any;
  service: any;
  constructor(route: string) {
    this.api = axios.create({
      baseURL: `${process.env.NEXT_STATIC_URL_API}/${route}`,
    });
  }

  async criptografarBody(body: any, chavePublica: any) {
    let vetorInicial = crypto.randomBytes(16);
    let chave = crypto.randomBytes(32);

    this.chavesCipher = {
      iv: vetorInicial,
      key: chave,
    };

    const objetoCriptografado = {
      message: body,
      chaves: {
        iv: vetorInicial,
        key: chave,
      },
    };
    const cryptografed = this.service.criptografar(objetoCriptografado, chavePublica);
    return {
      body: {
        message: cryptografed,
      },
      chaves: {
        iv: vetorInicial,
        key: chave,
      },
    };
  }

  descriptografarRetornoBody(response: AxiosResponse, chaves: any) {
    const data = response.data;
    if (data.message) {
      const decrypted = this.service.descriptografar(data.message, chaves);
      return decrypted;
    } else throw new Exception("Mensagem não foi recebida.");
  }

  async getRequestBody(body: any) {
    return { message: body };
  }

  async getReturn(response: AxiosResponse) {
    const data = response.data;
    if (data.message) {
      return data.message;
    } else throw new Error("Message was not received.");
  }

  tratarErros(error: any) {
    const response = error.response;
    let message = "An error has occurred, please try again later.";
    if (typeof response.data === "string") message = response.data;
    else {
      switch (response.status) {
        case 400:
          if (response.data && response.data.mensagem) message = response.data.mensagem;
          else message = response.data;
          break;
        case 403:
          message = "Você não possui permissão para esta ação.";
          break;
        case 404:
        case 500:
        default:
      }
    }
    throw new Exception("An error has occurred, please try again later.", response.status);
  }
}
