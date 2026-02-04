import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../component/shared/breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  
})
export class LayoutComponent {

  quickQuery = '';
  constructor(private router: Router) {}

  goSearch(): void{
    const q = (this.quickQuery || '').trim();
    this.router.navigate(['/busqueda'], {queryParams: {q} }); 
  }

}

