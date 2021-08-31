import create from 'zustand';

const useCheckoutStore = create((set) => ({
  exampleChangeStateFn: () =>
    set((state) => ({
      exampleStateField: state.exampleStateField + 'changed',
    })),
}));
