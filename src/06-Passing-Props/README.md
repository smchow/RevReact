# Activity # 6

## Instructions

Create a new functional component named `Child` and import it into The `App` component file inside of the Unsolved folder. This Child component should just render a `p` tag containing `props.number`.

Render the Child component inside of the App component's render method three times, passing it a prop of `number` each time.

1. The first rendered Child component should receive a `number` prop equal to `this.state.intialNumber * 2`.

2. The second rendered Child component should receive a `number` prop equal to `this.state.intialNumber * 4`.

3. The third rendered Child component should receive a `number` prop equal to `this.state.intialNumber * 6`.

## About passing props

Anything you add as an "attribute" to a JSX element or component is considered a prop. e.g.

```html
<button className="btn btn-default" onClick={this.handleClick}>Click Me</button>
```

In this example the button element receives a `className` and `onClick` prop. Props are accessible to components either as `this.props` (if a class component), or as `props` if a functional component.

Props should be considered immutable (not able to be changed) inside of the components they are passed to. They should only be modified from the component from which they originate. 

This is part of the one-way data flow pattern synonymous with React.

## Helpful Links

* [Components and Props](https://facebook.github.io/react/docs/components-and-props.html)

* [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

