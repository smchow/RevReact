# Activity # 7

## Instructions

Add a new button which decreases `this.state.count` by 1 when clicked. You'll want to do this inside of the index.js file.

You'll notice that we have the following code inside of the App component's constructor:

```js
  this.handleClick = this.handleClick.bind(this);
```

Whenever you pass a method as a prop, either to another component or just to a JSX element, `this` inside the method will change. In our case, this code:

```js
handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
```
Won't work properly. `this` no longer refers to the `App` component. This has to do with how props are actually passed, which is easier to see without JSX. Imagine a simple button:

```js
React.createElement('Button', { onClick: this.handleClick }, 'Increment +')
```

`this` now refers to that object being passed into `React.createElement`. It has no `setState` property, so the code would break.

By binding `this` to the method inside of the constructor, we are effectively permanently binding `this` to mean, "this component we're inside right now". So even if the function is passed as a prop or anywhere else where `this` may change, it still refers to the component it was bound to.


## Helpful Links

* [Handling Events in React](https://facebook.github.io/react/docs/handling-events.html)

* [SetState API](https://facebook.github.io/react/docs/react-component.html#setstate)

* [props.children](https://facebook.github.io/react/docs/react-component.html#props)
