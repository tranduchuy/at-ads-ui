import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let AdsAccountIdPipe = class AdsAccountIdPipe {
    transform(value) {
        let arr = value.split('');
        return arr.splice(0, 3).join('') + '-'
            + arr.splice(0, 3).join('') + '-'
            + arr.splice(0, 4).join('');
    }
};
AdsAccountIdPipe = tslib_1.__decorate([
    Pipe({ name: 'adsAccountId' })
], AdsAccountIdPipe);
export { AdsAccountIdPipe };
//# sourceMappingURL=ads-account-id.pipe.js.map