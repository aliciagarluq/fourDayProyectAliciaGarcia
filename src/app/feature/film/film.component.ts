import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  info:any;
  loading=true;
    constructor(
      private route: ActivatedRoute,
      private filmServ: FilmsService
      ) { }
  
    async ngOnInit(): Promise<void> {
      const id =  this.route.snapshot.paramMap.get('id');
      this.info = await this.filmServ.getFilm(id);
      console.log(this.info);
      console.log(id);
      this.loading=false;
  
    }

}
