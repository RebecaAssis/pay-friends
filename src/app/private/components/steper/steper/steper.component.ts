import { map } from 'rxjs';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit, OnChanges {
  @Input() pagesNumber = 1;
  @Output() actualPage = 1;
  pageTeste = 1;
  pageList: Number[] = [];
  viewPagesList: Number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const pagesNumber = this.roundPagesNumber(changes?.['pagesNumber'].currentValue)
    this.createdPagesList(pagesNumber);
  }

  roundPagesNumber (pagesNumber : number) {
    if (parseInt(String(pagesNumber)) !== parseFloat(String(pagesNumber))) {
      return Math.round(pagesNumber);
    }

    return pagesNumber;
  }

  createdPagesList (pagesNumber: number) {
    if (pagesNumber) {
      this.pageList = [...Array(pagesNumber).keys()].map(x => x + 1); 
      this.viewPagesList = this.pageList.slice(0, 5);
      this.viewPagesList.push(this.pageList[this.pageList.length - 1]);
    }
  }

}
