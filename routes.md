Got it—you want a **complete list of route names** for a full eCommerce API in **Node.js**, covering both **frontend (user)** and **admin panel**. I’ll structure it cleanly so you can plug it into Express or any framework.

---

# 🛒 1. Auth Routes (User + Admin)

### User Auth

```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh-token
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
GET    /api/auth/profile
PUT    /api/auth/profile/update
```

### Admin Auth

```
POST   /api/admin/auth/login
POST   /api/admin/auth/logout
GET    /api/admin/auth/profile
```

---

# 👤 2. User Routes (Frontend)

```
GET    /api/users/me
PUT    /api/users/update
DELETE /api/users/delete
GET    /api/users/orders
GET    /api/users/wishlist
POST   /api/users/wishlist/add
DELETE /api/users/wishlist/remove/:productId
```

---

# 🛍️ 3. Product Routes (Frontend)

```
GET    /api/products
GET    /api/products/:id
GET    /api/products/search?q=
GET    /api/products/category/:categoryId
GET    /api/products/featured
GET    /api/products/top-rated
```

---

# 🗂️ 4. Category Routes

```
GET    /api/categories
GET    /api/categories/:id
```

---

# 🛒 5. Cart Routes

```
GET    /api/cart
POST   /api/cart/add
PUT    /api/cart/update/:productId
DELETE /api/cart/remove/:productId
DELETE /api/cart/clear
```

---

# 💳 6. Order Routes (Frontend)

```
POST   /api/orders/create
GET    /api/orders
GET    /api/orders/:id
PUT    /api/orders/cancel/:id
```

---

# 💰 7. Payment Routes

```
POST   /api/payments/create-order
POST   /api/payments/verify
GET    /api/payments/history
```

---

# ⭐ 8. Review & Rating Routes

```
POST   /api/reviews/add
GET    /api/reviews/:productId
PUT    /api/reviews/update/:id
DELETE /api/reviews/delete/:id
```

---

# 📦 9. Shipping Address Routes

```
GET    /api/address
POST   /api/address/add
PUT    /api/address/update/:id
DELETE /api/address/delete/:id
```

---

# ❤️ 10. Wishlist Routes

```
GET    /api/wishlist
POST   /api/wishlist/add
DELETE /api/wishlist/remove/:productId
```

---

# 🔔 11. Notification Routes

```
GET    /api/notifications
PUT    /api/notifications/read/:id
DELETE /api/notifications/delete/:id
```

---

# 🛠️ ADMIN PANEL ROUTES

---

# 📊 12. Dashboard

```
GET    /api/admin/dashboard
GET    /api/admin/stats
```

---

# 👥 13. User Management

```
GET    /api/admin/users
GET    /api/admin/users/:id
PUT    /api/admin/users/update/:id
DELETE /api/admin/users/delete/:id
```

---

# 📦 14. Product Management

```
POST   /api/admin/products/create
GET    /api/admin/products
GET    /api/admin/products/:id
PUT    /api/admin/products/update/:id
DELETE /api/admin/products/delete/:id
```

---

# 🗂️ 15. Category Management

```
POST   /api/admin/categories/create
GET    /api/admin/categories
PUT    /api/admin/categories/update/:id
DELETE /api/admin/categories/delete/:id
```

---

# 📑 16. Order Management

```
GET    /api/admin/orders
GET    /api/admin/orders/:id
PUT    /api/admin/orders/update-status/:id
DELETE /api/admin/orders/delete/:id
```

---

# 💵 17. Payment Management

```
GET    /api/admin/payments
GET    /api/admin/payments/:id
```

---

# ⭐ 18. Review Management

```
GET    /api/admin/reviews
DELETE /api/admin/reviews/delete/:id
```

---

# 🎟️ 19. Coupon / Discount Routes

```
POST   /api/admin/coupons/create
GET    /api/admin/coupons
PUT    /api/admin/coupons/update/:id
DELETE /api/admin/coupons/delete/:id
```

---

# 🚚 20. Shipping Management

```
GET    /api/admin/shipping
PUT    /api/admin/shipping/update/:id
```

---

# 📁 21. File Upload (Images)

```
POST   /api/upload/image
DELETE /api/upload/image/:id
```

---

# 🔍 Optional Advanced Routes (Recommended)

### Filters & Sorting

```
GET /api/products?minPrice=&maxPrice=&brand=&rating=&sort=
```

### Inventory

```
PUT /api/admin/products/stock/:id
```

---

# ✅ Pro Tips

* Use **JWT authentication**
* Add **role-based middleware** (`user`, `admin`)
* Use **pagination** on all GET lists
* Add **rate limiting & validation**

---

If you want, I can next:
✅ Generate full **Express.js folder structure**
✅ Write **controllers + models (MongoDB)**
✅ Or build a **complete production-ready API boilerplate**

Just tell me 👍
