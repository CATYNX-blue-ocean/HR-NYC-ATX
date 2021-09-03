import create from 'zustand';
import { exampleData } from '../exampleData';

const useDataStore = create((set) => ({
  productCategories: [],
  servicesCategories: [],
  productData: [],
  serviceData: [],
  currentProduct: exampleData.productListings[0],
  currentProductCategory: exampleData.productListings[0].productCategory,
  currentServiceCategory: exampleData.serviceListings[0].serviceCategory,
  userName: null,
  cart: [exampleData.productListings[0], exampleData.productListings[1]],
  isCheckout: false,
  itemsPrice: 0,

  setCategoryInformation: (array1, array2) =>
    set((state) => {
      return { productCategories: array1, servicesCategories: array2 };
    }),

  setProductCategory: (category) =>
    set((state) => {
      return { currentProductCategory: category };
    }),
  setServiceCategory: (category) =>
    set((state) => {
      return { currentServiceCategory: category };
    }),

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
  // this function adds a product to cart

  addToCart: (product) => set((state) => ({ cart: product })),

  setUserName: (name) => {
    set((state) => {
      return { userName: name };
    });
  },

  // for Search: reset data
  resetProductData: (data) => {
    set((state) => {
      return { productData: data };
    });
  },
  // for Search: reset data
  resetServiceData: (data) => {
    set((state) => {
      return { serviceData: data };
    });
  },

  setIsCheckout: (toggle) => {
    set((state) => {
      return { isCheckout: toggle };
    });
  },

  setItemsPrice: (price) => {
    set((state) => {
      return { itemsPrice: price };
    });
  }

}));

export default useDataStore;
