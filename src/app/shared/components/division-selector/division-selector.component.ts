import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Division} from '../../models/division.model';

@Component({
  selector: 'app-division-selector',
  templateUrl: './division-selector.component.html',
  styleUrls: ['./division-selector.component.css']
})
export class DivisionSelectorComponent implements OnInit {
  $divisions: Observable<Division[]>;
  constructor() { }

  ngOnInit() {
  }

}
