import {Component, Input, OnInit} from '@angular/core';
import {Division} from '../../models/division.model';
import {DivisionService} from '../../../modules/division-season/division.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-division-selector',
  templateUrl: './division-selector.component.html',
  styleUrls: ['./division-selector.component.css']
})
export class DivisionSelectorComponent implements OnInit {
  divisions: Division[];
  @Input() selectedDivision;
  division = new FormControl('');
  constructor(
      private divisionService: DivisionService
  ) { }

  ngOnInit() {
    this.getDivisions();
    console.log(this.selectedDivision);
    this.setInitialValue(this.selectedDivision);
  }

  getDivisions() {
    return this.divisionService.getActiveDivisions()
        .subscribe(
            divisions => this.divisions = divisions
        );
  }

  setInitialValue(value: number): void {
    this.division.setValue(value);
  }

}
