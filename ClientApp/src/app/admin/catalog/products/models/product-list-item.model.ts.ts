import { StickyDirection } from "@angular/cdk/table";

export interface ProductListItem {
    sku: string;
    name: string;
    description: string;
    price: number;
    productNo: number;
    stockQuantity: number;
}
