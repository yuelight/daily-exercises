// link https://bigfrontend.dev/zh/problem/two-way-binding



function model(state: { value: string }, element: HTMLInputElement) {
  // your code here
  let value = state.value;
  Object.defineProperty(state, 'value', {
    get() {
      return value;
    },
    set(val) {
      value = val;
      element.value = val;
    }
  });

  element.value = state.value;
  element.addEventListener('change', () => {
    state.value = element.value;
  });
}

