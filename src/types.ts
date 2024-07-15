
export interface Product{
    name: string;
    price: string;
    width: string;
    height: string;
    depth: string;
    color: string;
    style: string;
    location: string;
    type: string;
    finish: string;
    drawerCount: number;
    store: string;
    brand: string;
    assembled: string;
    description: string;
    objectId: string;
  }
  
  export type FiltersState = {
    [key: string]: string[];
  };