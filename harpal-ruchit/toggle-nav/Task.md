```js
const users = [
  { name: "Amit", email: "amit@example.com", age: 25, city: "Delhi" },
  { name: "Sneha", email: "sneha@example.com", age: 28, city: "Mumbai" },
  { name: "Rahul", email: "rahul@example.com", age: 22, city: "Ahmedabad" },
  { name: "Priya", email: "priya@example.com", age: 30, city: "Pune" },
  { name: "Vikram", email: "vikram@example.com", age: 35, city: "Bangalore" },
  { name: "Meena", email: "meena@example.com", age: 26, city: "Jaipur" },
  { name: "Raj", email: "raj@example.com", age: 27, city: "Chennai" },
  { name: "Kajal", email: "kajal@example.com", age: 24, city: "Kolkata" },
  { name: "Ankit", email: "ankit@example.com", age: 29, city: "Hyderabad" },
  { name: "Nikita", email: "nikita@example.com", age: 21, city: "Surat" }
]

users.map((x) => x.city)

[
  'Delhi',     'Mumbai',
  'Ahmedabad', 'Pune',
  'Bangalore', 'Jaipur',
  'Chennai',   'Kolkata',
  'Hyderabad', 'Surat'
]
```
