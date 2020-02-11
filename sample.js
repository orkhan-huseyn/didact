function Counter() {
  const [state, setState] = Didact.useState(1);
  return Didact.createElement(
    'h1',
    { onClick: () => setState(c => c + 1) },
    'Count: ',
    state
  );
}

const element = Didact.createElement(Counter);

const container = document.getElementById('root');
Didact.render(element, container);
