import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { MockComponent } from 'ng-mocks'
import { ButtonComponent } from '../button/button.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ModalComponent,
        MockComponent(ButtonComponent)
      ]
    })
    .compileComponents();

  });
  
  beforeEach(() => {
    const propButtonIsDisabled = false;
    
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.buttonSubmitDisabled = propButtonIsDisabled;
    fixture.detectChanges();
  });

  it('should emit the event when clicking the decline button', () => {
    
    //Arrange
    const eventSpy = jest.spyOn(component.declineEvent, 'emit');
    
    //Act
    const declineButton = fixture.nativeElement.querySelector('.c-modal__content__footer__decline-btn');
    declineButton.click();

    //Assert
    expect(eventSpy).toHaveBeenCalled()
  });
  
  it('should call the submitFunction when clicking the submite button', () => {
    
    //Arrange
    const mockFunction = jest.fn();
    component.executeSubmitFunction = mockFunction;

    //Act
    const submitButton = fixture.nativeElement.querySelector('.c-modal__content__footer__submit-btn');
    submitButton.click();

    //Assert
    expect(mockFunction).toHaveBeenCalled();
  });
});


