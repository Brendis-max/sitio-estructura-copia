import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchApi, SearchFilters } from '../../services/search.component';
import { SiteItem } from '../../data/site-index';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [RouterModule, FormsModule, NgFor, NgIf,AsyncPipe],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
query = '';

filters: SearchFilters = {
  type: 'todos',
  section: 'todas',
};
  
sections: string[] = [] ;
results$!: Observable<SiteItem[]>;

constructor(private route: ActivatedRoute, private api: SearchApi ){

  this.sections = this.api.getSecctions();
  this.route.queryParamMap.subscribe(params => {

    const q = params.get('q') ?? '';
    this.query = q;

    this.doSearch();
  });
}
doSearch(): void {
 this.results$ = this.api.search(this.query, this.filters);

}
clear(): void{
  this.query= '';
  this.filters ={type: 'todos', section: 'todas'};
  this.doSearch();
}
}
