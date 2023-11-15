import { map } from 'rxjs';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit, OnChanges {
  @Input() pagesNumber = 1;
  @Output() EventActualPage = new EventEmitter();
  actualPage = 1;
  pageTeste = 1;
  pageList: number[] = [];
  viewPagesList: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const pagesNumber = this.roundPagesNumber(changes?.['pagesNumber'].currentValue)
    this.createdPagesList(pagesNumber);
    this.actualPage = 1;
  }

  roundPagesNumber (pagesNumber: number) {
    if (parseInt(String(pagesNumber)) !== parseFloat(String(pagesNumber))) {
      return parseInt(String(pagesNumber)) + 1;
    }

    return pagesNumber;
  }

  createdPagesList (pagesNumber: number) {
    if (pagesNumber) {
      this.pageList = [...Array(pagesNumber).keys()].map(x => x + 1); 
    } 
    
    if (pagesNumber > 5 ) {
      this.viewPagesList = this.pageList.slice(0, 5);
      this.viewPagesList.push(this.pageList[this.pageList.length - 1]);
    } else {
      this.viewPagesList = this.pageList;
    }
  }

  previousPage () {
    if (this.actualPage !== this.pageList[0]) {
      this.actualPage -= 1;
      this.EventActualPage.emit(this.actualPage);
    }
    
    (this.viewPagesList[0] !== this.pageList[0] && (this.actualPage < this.viewPagesList[this.viewPagesList.length - 2])) && this.updateViewPagesList('');
  }

  nextPage () {
    if (this.actualPage < this.pageList[this.pageList.length - 1]) {
      this.actualPage += 1;
      this.EventActualPage.emit(this.actualPage);
    }

    (this.actualPage >= 5 && this.actualPage < this.pageList[this.pageList.length - 2]) && this.updateViewPagesList('next');
  }
  
  updateViewPagesList (param: string) {
    const viewPagesListUptaded = param ? this.viewPagesList.slice(0, 5).map(x => x + 1) : this.viewPagesList.slice(0, 5).map(x => x - 1);

    viewPagesListUptaded.push(this.pageList[this.pageList.length - 1]);
    this.viewPagesList = viewPagesListUptaded;
    console.log(this.viewPagesList);
  }

}
