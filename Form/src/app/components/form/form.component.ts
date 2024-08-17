import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formData = {
    cardNum: '',
    expNum: ''
  };
formatedInput(digits:string){
  const formattedNumber = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  this.formData.cardNum = formattedNumber.trim();
}

formatDate(digits:string){
  const formattedDate = digits.replace(/^(\d{2})(?=\d)/, '$1/');
  this.formData.expNum = formattedDate.trim();
}
expired(digits: string) {
  const [month, year] = digits.split('/').map(Number);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11
  const currentYear = currentDate.getFullYear() % 100;

  if (month < 1 || month > 12 || year < currentYear || (year === currentYear && month < currentMonth)) {
    return true; // Expired
  }
  return false; // Valid
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
