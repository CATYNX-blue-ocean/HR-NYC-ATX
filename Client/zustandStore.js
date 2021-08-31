import create from 'zustand';
import { exampleData } from './../exampleData';

const useDataStore = create((set) => ({
  productData: exampleData.productListings,
  serviceData: exampleData.serviceListings,
  currentProduct: exampleData.productListings[0],
  // this function sets the current product
  cart: [exampleData.productListings[0], exampleData.productListings[1]],
  setCurrentProduct: (id) =>
    set((state) => {
      let current;
      state.productData.map((product) => {
        if (product.id === Number(id)) {
          current = product;
        }
      });
      return { currentProduct: current };
    }),
  // this function adds a product to cart
  addToCart: (product) => set((state) => ({ cart: product })),
}));

export default useDataStore;
