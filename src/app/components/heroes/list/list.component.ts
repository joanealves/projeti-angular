import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  heroes: any = [
    { id: 1, name: 'Flash' },
    { id: 2, name: 'Arqueiro' },
  ];

  ngOnInit(): void {}
}
