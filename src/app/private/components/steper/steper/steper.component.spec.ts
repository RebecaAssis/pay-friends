import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteperComponent } from './steper.component';

describe('SteperComponent', () => {
  let component: SteperComponent;
  let fixture: ComponentFixture<SteperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SteperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should assign the same pageList value to the viewPageList', () => {
    //Arrange
    component.pagesNumber = 5;

    //Act
    component.createdPagesList(component.pagesNumber);

    //Assert
    expect(component.viewPagesList).toEqual([1, 2, 3, 4, 5]);
    expect(component.viewPagesList).toEqual(component.pageList);
  });


  it('should assign the first five items and the last item of the pageList to the viewPagesList array.', () => {
    //Arrange
    component.pagesNumber = 10;
    
    //Act
    component.createdPagesList(component.pagesNumber);

    //Assert
    expect(component.viewPagesList).toEqual([1, 2, 3, 4, 5, 10]);
  });

  it('should round the page number value and to add with 1', () => {
    //Arrange
    let pagesNumber = 0;
    component.pagesNumber = 10.5;

    //Act
    pagesNumber = component.roundPagesNumber(component.pagesNumber);

    //Assert
    expect(pagesNumber).toEqual(11);
  });

  it('should return the same value passed as parameter', () => {
    //Arrange
    let pagesNumber = 0;
    component.pagesNumber = 9;

    //Act
    pagesNumber = component.roundPagesNumber(component.pagesNumber);

    //Assert
    expect(pagesNumber).toEqual(9);
  });
});



