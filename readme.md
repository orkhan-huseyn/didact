# Minimal clone of React written for learning purposes

Didact is clone of React written by [Roddigo Pombo](https://pomb.us/)
You can find tutorial link [here](https://pomb.us/build-your-own-react/).

An example of what this library can do.

```javascript
function Counter() {
  const [state, setState] = Didact.useState(1);
  return Didact.createElement(
    "h1",
    { onClick: () => setState(c => c + 1) },
    "Count: ",
    state
  );
}

const element = Didact.createElement(Counter);

const container = document.getElementById("root");
Didact.render(element, container);
```

This will render element into the DOM. Didact also support concurrent mode.
