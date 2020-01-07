import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'userButton',
})
export class UserButtonPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        console.log(value, args);
        return null;
    }
}
