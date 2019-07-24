import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Division} from '../../models/division.model';
import {DivisionService} from '../../../modules/division-season/division.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-division-selector',
  templateUrl: './division-selector.component.html',
  styleUrls: ['./division-selector.component.css']
})
export class DivisionSelectorComponent implements OnInit {
  divisions: Division[];
  constructor(private divisionService: DivisionService) { }

  ngOnInit() {
    this.getDivisions();
  }

  getDivisions() {
    return this.divisionService.getActiveDivisions()
        .subscribe(
            divisions => this.divisions = divisions
        );
  }
}
