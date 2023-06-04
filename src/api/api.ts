import { db } from './db';
import { IShop } from '../models/IShop';

const promise = new Promise<IShop[]>(function (resolve, reject) {
    setTimeout(() => resolve(db), 1000);
});

export default promise;
