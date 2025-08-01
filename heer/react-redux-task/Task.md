# 🧠 React Redux Toolkit Task – Counter App (With Vite)

## 🔧 Task Description

1. Set up a new React project using **Vite**.
2. Install **React-Redux** and **@reduxjs/toolkit** in the project.
3. For Redux:
   - Create a **slice** that contains an **initial state** with `num: 0`.
   - Define two **reducers** inside the slice: `increment` and `decrement`.
   - Create and configure a **Redux store** that includes this slice.
4. In your `Index.jsx` component:
   - Display the `num` value from the Redux store.
   - Create two buttons: **Increment** and **Decrement**.
   - When clicked, these buttons should increase or decrease the `num` value accordingly.
5. Add the following condition:
   - The `num` value **should never go below 0** (i.e., prevent negative values).

## 🎯 Objective

- Understand how to set up and use Redux Toolkit in a React project.
- Learn how to manage and update state using Redux.
- Implement conditional logic to prevent invalid state updates.
