import { DetachedRouteHandle } from "@angular/router";

export class Product {

  id: string = '';
  sku: string = '';
  name: string = '';
  description: string = '';
  unitPrice: number = 0;
  imageUrl: string = '';
  active: boolean = false;
  unitsInStock ?: number;
  dateCreated?: Date;
  lastUpdated?: Date;

}
