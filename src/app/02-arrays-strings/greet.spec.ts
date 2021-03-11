import { from } from "rxjs";
import {greet} from './greet';

describe('greeting from JAMIE DONOHOE S00189802', () => {
    it('should include name in the msg', () => {
        expect(greet('Frank')).toBe('Welcome Frank');
    });
});