# AnimateAutoHeight React Component

A React component that animates the height of its child element based on its content.

## Installation

Install the package using npm:

`npm install animate-auto-height`

Install the package using yarn:

`yarn add animate-auto-height`


## Usage

To use the `AnimateAutoHeight` component, simply import it into your React project and include it in your JSX.

```jsx
import React from 'react';
import AnimateAutoHeight from 'animate-auto-height';

function MyComponent() {
  return (
    <AnimateAutoHeight>
      <p>Hello, world!</p>
    </AnimateAutoHeight>
  );
}
```

The AnimateAutoHeight component accepts the following props:

* children (required): The child element that the component will animate.
* className: A string representing the class name(s) to be added to the component's root element.
* transitionDuration: The duration of the transition animation in milliseconds. Defaults to 250.
* transitionDelay: The delay before the transition animation starts in milliseconds. Defaults to 0.

## License
This package is licensed under the MIT License.
