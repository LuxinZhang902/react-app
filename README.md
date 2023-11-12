# Setup process - Vite + TypeScript

```python
npm create vite@4.1.0
npm i
npm run dev

```

1. .ts for typescript file, .tsx for react components
2. function-based approach

## Install css components

```python
npm i bootstrap@5.2.3
```

## Fragment

## Rendering List

## Conditional Rendering

## Handling Events

## Managing States

1. Using the updater functionwe can update variable and at that point react will be notified
   so it knonws that the state of our component is changed and then it will re-render our component
   which causes the Dom to be updated under the hood
2. In React, we almost never have to touch the Dom directly we think in terms of components that have state
   when the state of a component changes, react will update the Dom to match the new component State
