# Activity # 9

This activity demonstrates how multiple components or JSX elements might be rendered from a array of data.

Take a moment to study the code. Notice the array of objects is set to `this.state.data`.

Now look at the render method

```js
render() {
    return (
      <ul>
        {this.state.data.map(item => {
          return (
            <li key={item.id}>
              {item.text}
            </li>
          );
        })}
      </ul>
    );
  }
```

* First we return a pair of `<ul>` tags, inside we use JSX curly braces to execute some JavaScript. We map through the objects in the `this.state.data` array. For each object, return a pair of `<li>` tags. We pass the `<li>` tag a prop of `key` set equal to `item.id`. Inside the `<li>` tags, we use JSX curly braces again (this is required whenever we "switch" from using JSX to regular JavaScript), and insert `item.text`.

`this.state.data.map` returns an array of `<li>` tags containing the `text` property of each object inside of `this.state.data`. A map is more or less a functional for-loop that loops over an array and returns an new array of equal length.

Anytime you we try and render an array of JSX, React is smart enough to figure out that the items inside the array should be rendered.

The `key` property isn't required per-sei, but we'll get a warning without it. React utilizes this key prop internally to more efficiently render and re-render the list of items. This `key` property can be anything, but it must be unique and specific to the data being used. 

It is possible to pass the `index` of the current looped element as a second argument in the map callback function. But this is a bad practice as the element's index can change if the number of elements in the array changes. So that would defeat the purpose and introduce bugs. A unique ID passed back from a database is preferred, but any other property can be used, like `text` if we were certain it wouldn't be duplicated. 

There are also NPM packages available for creating UUIDs such as [uuid](https://www.npmjs.com/package/uuid) if you need.

Try rendering only the items in `this.state.data` with odd numbered IDs. You will need to filter the data BEFORE mapping it. Anyway you can figure out to do this is probably fine. But I'd probably:

Create a new method which creates a new filtered array from `this.state.data` where only odd numbered IDs, and then return the new filtered array from the method.

Then execute this method in place of `this.state.data` inside of the render method, mapping over the result of the method execution.


## Helpful Links

* [Lists and Keys](https://facebook.github.io/react/docs/lists-and-keys.html)


WHATS NEXT???

I think you guys actually have enough to go off of for now. This was really just to get people a super basic understanding of certain basic concepts before rushing through to try and build final projects right away. 

The most important thing now is to read the [React Documentation](https://facebook.github.io/react/). It's awesome, really. Any tutorial you find online is for the most part just rehashing everything that's in here. I'd also recommend everyone build something simple using React. I like todolist examples because you have to manipulate data in a diverse way (CRUD).

