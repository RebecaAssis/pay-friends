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

  //createdPageList
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

  //roundPagesNumber
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

  //previousPage
  it('should update actualPage value to a value 1x smaller than the previous value and emit a event', () => {
    component.pageList = [1, 2, 3, 4, 5, 34]
    component.actualPage = 5;
    const eventoSpy = jest.spyOn(component.EventActualPage, 'emit');

    component.previousPage();

    expect(component.actualPage).toEqual(4);
    expect(eventoSpy).toHaveBeenCalled();
  });

  //nextPage
  it('should update actualPage value to a value 1x bigger than the previous value and emit a event', () => {
    component.pageList = [3, 4, 5, 6, 7, 34]
    component.actualPage = 6;
    const eventoSpy = jest.spyOn(component.EventActualPage, 'emit');

    component.nextPage();

    expect(component.actualPage).toEqual(7);
    expect(eventoSpy).toHaveBeenCalled();
  });

  //updateViewPagesList
  it('should update the actual viewPagesList to an array that each item is 1x bigger than previous items, and the last item must have the same value', 
    () => {
      component.viewPagesList = [2, 3, 4, 5, 6, 10];
      component.pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const param = '';

      component.updateViewPagesList(param);

      expect(component.viewPagesList).toEqual([1, 2, 3, 4, 5, 10]);
    }
  );

  it('should update the actual viewPagesList to an array that each item is 1x smaller than previous items, and the last item must have the same value', 
    () => {
      component.viewPagesList = [1, 2, 3, 4, 5, 10];
      component.pageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const param = 'next';

      component.updateViewPagesList(param);

      expect(component.viewPagesList).toEqual([2, 3, 4, 5, 6, 10]);
    }
  );
});



