import { ProductListItem } from "./product-list-item.model.ts"

export class ProductPagedListViewModel {
    public items: ProductListItem[];
    public pageIndex: number;
    public pageNumber: number;
    public pageSize: number;
    public totalItems: number;
    public totalPages: number;
    public firstItem: number;
    public lastItem: number;
    public hasPreviousPage: boolean;
    public hasNextPage: boolean
}
