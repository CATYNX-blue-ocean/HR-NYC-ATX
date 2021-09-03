import create from 'zustand';
import { exampleData } from '../../exampleData';

const useDataStore = create((set) => ({
  productData: exampleData.productListings,
  serviceData: exampleData.serviceListings,
  currentProduct: exampleData.productListings[0],
  // this function sets the current product
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

  // for Search: reset data
  resetProductData: (data) => {
    set((state) => {
      return { productData: data };
    });
  }
}));

export default useDataStore;