import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }



    
  ngOnInit():void {

  }
  onNavigate(){
    window.location.href="https://www.fotogramas.es/noticias-cine/a29306652/marvel-2021-estrenos-confirmados/", "_blank";
}
}
