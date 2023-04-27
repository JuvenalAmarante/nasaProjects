import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  @ViewChild('sidemenu') sidemenu!: TemplateRef<any>;

  ngOnInit(): void {}

  src = `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png`;
  placeholder = `${this.src}?x-oss-process=image/blur,r_50,s_50/quality,q_1'`;
}
