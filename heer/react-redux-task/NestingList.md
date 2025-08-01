# 📂 JavaScript Task – Render Nested Navigation as HTML List

## 🔧 Task Description

You are given a nested JavaScript array of objects representing a navigation menu structure:

```js
const nestingNavigation = [
  {
    title: 'products',
    values: [
      {
        title: 'electronics',
        values: ['mobiles', 'laptops', 'earbuds']
      },
      {
        title: 'clothes',
        values: ['shirts', 'tshirts']
      }
    ]
  },
  {
    title: 'privacy policy',
    values: [
      {
        title: 'policy One'
      },
      {
        title: 'policy two',
        values: ['p1', 'p2']
      }
    ]
  }
]
```

## 🎯 Your Task

1. Create a simple HTML page with a container element (like a `<div>` or `<ul>`) where the nested list will be displayed.

2. Use **JavaScript's `map()` function** to loop through the array and render the data as **nested HTML lists**.

3. Every `title` should be displayed as a list item (`<li>`). If `values` are present, they should be displayed as **sub-lists** under their parent item.

4. The final result should appear as a structured, nested navigation menu on the webpage.

## 💻 Technologies to Use

* HTML
* JavaScript (No external libraries or frameworks)

## ✅ Bonus (Optional)

* Add some basic CSS to make the nested list look like a sidebar menu.
* Make sub-menus collapsible using JavaScript.
