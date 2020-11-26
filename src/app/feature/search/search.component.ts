import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
info:any;
loading=true;
id:string='';
  constructor(
    private route: ActivatedRoute,
    private filmServ: FilmsService
    ) { }

  async ngOnInit(): Promise<void> {
    const data =  this.route.snapshot.paramMap.get('data');
    this.info = await this.filmServ.getInfo(data);
    console.log(this.info);
    console.log(data);
    this.loading=false;

  }
  buscaFilm(id:string){
    

  }

}
