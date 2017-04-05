# Activity # 3 Solution

Bootstrap can either be installed via npm/yarn and imported, or included inside of a `link` tag in the HTML. 

In practice, it's best not to import Bootstrap multiple times across components if it's been installed from NPM. Instead it should be imported into the most parent element which will use it. All children of this parent element will have access to it.

Classes are defined using `className` as `class` is a reserved word in JavaScript.

And again, all returned JSX must be inside of one parent tag.
