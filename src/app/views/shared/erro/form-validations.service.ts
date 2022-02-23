import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {

  constructor() { }


  RetornaMensagemErro(nomeCampo: string, nomeValidacao: string, valorValidacao?: any, coincidirTextoNome?: string) {
    switch (nomeValidacao) {
        case "required": return `${nomeCampo} é obrigatório(a).`
        case "minlength": return `${nomeCampo} precisa ter no mínimo ${valorValidacao.requiredLength} caracteres.`
        case "maxlength": return `${nomeCampo} precisa ter no máximo ${valorValidacao.requiredLength} caracteres.`
        case "pattern": return  `${nomeCampo} inválido(a).`
        case "min": return  `${nomeCampo} mínimo(a) permitido(a): ${valorValidacao.min}.`
        case "max": return  `${nomeCampo} máximo(a) permitido(a): ${valorValidacao.max}.`
        case "DataInvalida": return  `${nomeCampo} não pode ultrapassar a data atual.`
        case "ValorSelecionadoInvalido": return  `${nomeCampo} é obrigatório(a).`
        case "DataSelecionadaInvalida": return  `${nomeCampo} é inválido(a).`
        case "EmailInvalido": return  `${nomeCampo} é inválido(a).`
        case "CPFInvalido": return  `${nomeCampo} é inválido(a).`
        case "CNPJInvalido": return  `${nomeCampo} é inválido(a).`
        case "CPFECNPJInvalido": return  `${nomeCampo} é inválido(a).`
        case "CompararCamposInvalido": return  `${coincidirTextoNome} não coincidem.`
        case "ValorMaiorZeroInvalido": return  `${nomeCampo} é inválido(a).`
        default: return "";
    }
  }
}
