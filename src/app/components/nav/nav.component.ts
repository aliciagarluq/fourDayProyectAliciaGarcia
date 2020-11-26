import { Component, OnInit } from '@angular/core';


import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //public items: MenuItem[];
  movieText= '';

  constructor(private filmsService:FilmsService) { }

  getData(){
    console.log(this.movieText)
    
  }


  ngOnInit() {

        
        


       

  }
}