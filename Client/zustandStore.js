import create from 'zustand';

const useStore = (create(set => ({
  exampleStateField: 'exampleStateValue',
  exampleChangeStateFn: () => set(state => ({exampleStateField: state.exampleStateField + ' changed'}))
})));

export default useStore;