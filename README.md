# Reactive

This is just a demo library in order to show how to build a reactive library for frontend. Nothing serious, just
for fun.

## Getting Started

### Importing `reactive.js`

You should download the `reactive.js` file and import it into the HTML of your project:

```html
<html>
  <head>
    <!-- Metadata, imports and other stuff -->
    <script src="{ROUTE_TO_reactive.js}"></script>
  </head>
  <body>
    <!-- Contents -->
  </body>
</html>
```

### Initializing `reactive.js`

As this is a demo project, and not something to be used in production I didn't do anything fancy in order to initialize
it automatically, you should initialize the project manually. It's pretty easy.

```html
<html>
  <head>
    <!-- Metadata, imports and other stuff -->
  </head>
  <body>
    <!-- Contents -->
    <script>
      const App = new Reactive();
    </script>
  </body>
</html>
```

### Passing initial data

You can pass initial data to Reactive using the `data` property received by the `Reactive` constructor.

```js
const App = new Reactive({
  data: {
    hello: "world",
    answer: 42,
  },
});
```

This will set `hello = 'world'` and `anwser = 42` as initial data and you can use them immediately.

### Execute function on mount

If you'd like to execute a function when Reactive has finished mounting, you can do it by passing a function to the
`mounted` property received by the `Reactive` constructor.

```js
const App = new Reactive({
  mounted() {
    alert("Hey, Reactive is mounted!");
  },
});
```

## Declarations

### r-data

You can use the `r-data` attribute to bind the component with data that is stored in Reactive.

```html
<p r-data="answer"></p>
<!-- This will show what's stored in answer -->
```

### r-model

You can use the `r-model` attribute to bind a form element to data stored in Reactive. You'll be able to update data
in Reactive using this element and binded elements will be updated immediately.

```html
<input type="text" placeholder="Enter your name" r-model="name" />
<p r-data="name"></p>
<!-- This will be updated when the user types something in the input above -->
```

### r-if

You can use the `r-if` attribute to show or hide elements based on data stored in Reactive. Something that must be
taken into account is that any _falsy_ value will be treated as _false_.

```html
<div r-if="isActive">
  <h2>Hey whatever thing you want active is active</h2>
</div>
```

### r-bind:\*

This is a property used to bind **any** attribute from an element to data stored in Reactive.

```html
<input type="text" placeholder="Image URL" r-model="imageUrl" />
<img r-bind:src="imageUrl" />
```

## Example

Simply go to the `examples/` folder, and double click the `index.html` file of the example you want to open.

Make sure to open the file in a web browser such as Mozilla Firefox, Safari, Google Chrome, Microsoft Edge, etc.

## Contributing

Even if this is not a ready-for-production project, you may still find it useful for learning purposes. If you happen
to build a feature you think may be useful, you fix a bug, want to improve documentation, want to document the JS file
better, want to create a new example, or anything else that will increase the quality of the process. You're totally
welcome to create a PR with your changes, please know that they will be evaluated first.

## License

[GNU GENERAL PUBLIC LICENSE v3](/LICENSE)
