import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmValidatorPassword = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.parent?.get('password')?.value;
    const passwordConfirm = control.value;
    if (!password) {
      return null;
    }
    return passwordConfirm !== password ? { confirmPassword: true } : null;
  };
};
