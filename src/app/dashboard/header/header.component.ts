// src/app/dashboard/header/header.component.ts
import { Component } from '@angular/core';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private searchService: SearchService) {}

  onSearchChange(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Cast event.target
    this.searchService.setSearchTerm(inputElement.value); // Use inputElement.value
  }
}
