import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title: string = "Basic Angular";
  content: string = "This is premium content.";
  isTechRelated: boolean = false;

  changeIsTechRelated() {
    if(this.isTechRelated === true){
      return this.isTechRelated = false;
    } else return this.isTechRelated = true;
  }
}
