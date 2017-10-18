interface IProduct {
    id: number;
    name: string;
    code: string;
    release_date: string;
    price: number;
    description: string;
    star_rating: number;
    image_url: string;
    calculateDiscount(percent: number): number;
}

export class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public code: string,
        public release_date: string,
        public description: string,
        public price: number,
        public star_rating: number,
        public image_url: string) {}

    calculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }

}

