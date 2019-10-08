import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'adsAccountId' })
export class AdsAccountIdPipe implements PipeTransform {
    transform(value: string): string {
        let arr = value.split('');
        return (arr.splice(0, 3).join('') + '-'
            + arr.splice(0, 3).join('') + '-'
            + arr.splice(0, 4).join('')).trim();
    }
}