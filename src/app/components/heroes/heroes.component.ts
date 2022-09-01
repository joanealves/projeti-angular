import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // public results: any; // Change it private to public
  // public mymessage: any;

  constructor(public route: Router, public activeRoute: ActivatedRoute) {}

  hero: any = {
    id: 5,
    name: 'Windstorm',
    nac: '1986-12-29',
  };

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params['id'];
    let hero = JSON.parse(localStorage.getItem('hero')!);
    if (!hero) {
      this.hero = {};
    } else {
      this.hero = hero;
    }
  }

  escreveConsoleLog() {
    console.log('Texto');
  }

  villanPage() {
    this.route.navigateByUrl('/villans');
  }
  save() {
    localStorage.setItem('hero', JSON.stringify(this.hero));
  }
}
