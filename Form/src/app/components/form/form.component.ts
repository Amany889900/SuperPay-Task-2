import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formData = {
    cardNum: '',
  };
formatedInput(digits:string){
  const formattedNumber = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  this.formData.cardNum = formattedNumber.trim();
}

  isValid(digits:string) {
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        let cardNum = parseInt(digits[i]);

        if (isNaN(cardNum)) {
          continue;
        }

        if ((digits.length - i) % 2 === 0) {
            cardNum = cardNum * 2;

            if (cardNum > 9) {
                cardNum = cardNum - 9;
            }
        }

        sum += cardNum;
    }

    return sum % 10 === 0;

}
}
