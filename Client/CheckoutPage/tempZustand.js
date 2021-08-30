import create from 'zustand';

const useCheckoutStore = create((set) => ({
  exampleStateField: 'exampleStateValue',
  exampleChangeStateFn: () =>
    set((state) => ({
      exampleStateField: state.exampleStateField + 'changed',
    })),
}));
