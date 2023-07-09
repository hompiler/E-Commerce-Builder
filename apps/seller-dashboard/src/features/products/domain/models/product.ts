export default class Product {
    constructor(
        public id: string,
        public name: string,
        public priceRange: [number, number],
        public sales: number,
        public quantity: number,
        public imageUrl: string,
        public category: string
    ) {}

    get quantityStatusColor() {
        if(this.quantity <= 10) {
            return "#e9da64";
        }
        else if (this.quantity === 0) {
            return "#e85f61"
        }
        else {
            return "#64f08f";
        }
    }

    get priceFormatted() {
        return this.priceRange[0] + " EGP"
    }
}
