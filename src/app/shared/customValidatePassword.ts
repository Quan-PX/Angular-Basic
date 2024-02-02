import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export const passwordValidator = (): ValidatorFn => {  

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    // console.log(control.parent?.value, "control.parent")


    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value); 

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? { passwordStrength: true } : null;
  };
};
