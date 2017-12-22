import {types} from '../types';

let id = 0;
export const addSample = () => {
    return {'type': types.sample, 'id': id++, 'text': 'sdsd'}
};
