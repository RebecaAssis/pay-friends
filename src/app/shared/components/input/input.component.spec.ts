import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let fixture: ComponentFixture<InputComponent>;
  let component: InputComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
    });

    // Defines a specific valut to the iconPath during the test
    const iconPathTestValue = 'caminho/do/icone.png';

    // Creates a component with especifics values to the test
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.iconPath = iconPathTestValue;
  });

  it('should emit the event when clicking the icon', () => {
    // Arrange
    const eventoSpy = jest.spyOn(component.iconEvent, 'emit');

    // Act
    fixture.detectChanges(); // Ensures that changes are detected.

    // Finds the icon element and clicks on it.
    const icon = fixture.nativeElement.querySelector('.c-input__icon');
    icon.click();

    // Assert
    expect(eventoSpy).toHaveBeenCalled();
  });
});





