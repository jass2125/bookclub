import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeerService } from 'src/services/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private beerService: BeerService) {
    this.beerService.searchBeers();
  }
}
