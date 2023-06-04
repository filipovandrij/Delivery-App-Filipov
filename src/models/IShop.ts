import { IGood } from './IGood';

export interface IShop {
    id: number;
    name: string;
    goods: IGood[];
}
