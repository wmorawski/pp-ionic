import { AbstractControl, FormGroup } from '@angular/forms';

export function ValidateDates(fg: FormGroup) {
    const startDate = fg.get('startDate').value;
    const endDate = fg.get('endDate').value;
    if (startDate && endDate) {
        if (startDate.value < endDate.value) {
            return { dateDiff: true };
        }
    }

    return null;
}
