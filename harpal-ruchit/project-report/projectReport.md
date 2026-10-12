# 🧩 Project Overview

## 🔐 1. User Registration

* Fields: `username`, `email`, `password`, `confirmPassword`
* Validation:

  * All fields required
  * Email format check
  * Password = Confirm Password
  * Unique email in DB

## 🔑 2. User Login

* Fields: `username/email`, `password`
* After successful login → Redirect to **Home Page**
* JWT/localStorage used for session management

## 🏠 3. Home Page (After Login)

* Product Cards fetched from backend API
* Each card shows:

  * Product image
  * Product title
  * Price
  * Discount
  * “Add to Cart” button

## 🛒 4. Add to Cart System

* User can add or remove products
* Cart stored in backend with user ID reference
* “Remove from Cart” button available

## 💰 5. Cart Total Calculation

* Auto calculate total price + discount
* Show subtotal and final payable amount
* Dynamic update when item removed or added

## 🔍 6. Search & Filter

* Search bar for product name
* Optional: filter by price range / discount

## 👤 7. User Profile Page

* Show user info (username, email)
* Option to edit/update basic info (like username or password)

## 🚪 8. Logout

* JWT/localStorage clear
* Redirect back to Login page

## ⚙️ 9. Admin Panel (Next Task)

* Temporary use Postman to add products
* Fields: `title`, `price`, `discount`, `imageUrl`, `description`
* Image URLs fetched from **Amazon product listings**
