import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  //inititalized with these properties from the hero interface class (hero.ts)
  hero: Hero = {
    id:1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
