import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  src = `https://graphics.jifo.co/imgs/d7534dd0ab4580aab4bec75873065fa317a0fb64fd3971e4cdcd5b6b394099b9.jpeg`;
  placeholder = `${this.src}?x-oss-process=image/blur,r_50,s_50/quality,q_1'`;
}
