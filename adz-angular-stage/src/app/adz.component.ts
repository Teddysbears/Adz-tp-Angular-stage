import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'adz-root',
  templateUrl: './adz.component.html',
  styleUrls: ['./adz.component.css']
})

export class AdzComponent {

  selected: string;

  title = 'adz-angular-stage';

  constructor(private translate: TranslateService) {
    this.selected = navigator.language.substr(0,2);
    translate.setDefaultLang(this.selected);
  }

  onChange() {
    this.translate.use(this.selected);
  }

}
