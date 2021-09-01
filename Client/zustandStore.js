import create from 'zustand';
import { exampleData } from '../exampleData';

const useDataStore = create((set) => ({
  productCategories: [],
  servicesCategories: [],
  productData: exampleData.productListings,
  serviceData: exampleData.serviceListings,
  currentProduct: exampleData.productListings[0],
  currentProductCategory: exampleData.productListings[0].productCategory,
  currentServiceCategory: exampleData.serviceListings[0].serviceCategory,
  setCategoryInformation: (array1, array2) => set((state) => {
    return {productCategories: array1, servicesCategories: array2};
  }),
  setProductCategory: (category) =>
    set((state) => {
      let categorisedPoducts;
      state.productData.map((product) => {
        if (product.productCategory === category) {
          categorisedPoducts.push(product);
        }
      });
      return { currentProductCategory: categorisedPoducts };
    }),
  setServiceCategory: (category) =>
    set((state) => {
      let categorisedServices;
      state.serviceData.map((service) => {
        if (service.serviceCategory === category) {
          categorisedServices.push(service);
        }
      });
      return { currentServiceCategory: categorisedServices };
    }),
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
