import {Component} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {Translation} from 'primeng/api/translation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contas';

  translation: Translation = {
    startsWith: 'Começa com',
    contains: 'Contém',
    notContains: 'Não contém',
    endsWith: 'Termina com',
    equals: 'Igual a',
    notEquals: 'Diferente de',
    noFilter: 'Sem filtro',
    lt: 'Menor que',
    lte: 'Menor ou igual a',
    gt: 'Maior que',
    gte: 'Melhor que ou igual a',
    is: 'É',
    isNot: 'Não é',
    before: 'Antes',
    after: 'Depois',
    dateIs: 'A data é',
    dateIsNot: 'A data não é',
    dateBefore: 'A data é anterior',
    dateAfter: 'A data é depois',
    clear: 'Limpar',
    apply: 'Aplicar',
    matchAll: 'Corresponder a todos',
    matchAny: 'Corresponder a Qualquer',
    addRule: 'Adicionar regra',
    removeRule: 'Remover regra',
    accept: 'Sim',
    reject: 'Não',
    choose: 'Escolher',
    upload: 'Upload',
    cancel: 'Cancelar',
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dateFormat: 'dd/mm/yy',
    firstDayOfWeek: 0,
    today: 'Hoje',
    weekHeader: 'Wk',
    weak: 'Fraca',
    medium: 'Média',
    strong: 'Forte',
    passwordPrompt: 'insira uma senha',
    emptyMessage: 'Vázio',
    emptyFilterMessage: 'Nenhum resultado encontrado'
  };

  constructor(
    private config: PrimeNGConfig,
  ) {
    this.config.ripple = true;
    this.config.setTranslation(this.translation);
    // this.translateService.setDefaultLang('pt');
    // this.translateService.get('primeng').subscribe(res => this.config.setTranslation(this.translation));
  }
}
