# E-Shop API Documentation

## Available APIs
- [User  APIs](#user-apis)
  - [1. Create User](#1-create-user)
  - [2. Get Users](#2-get-users)
  - [3. Get User by ID](#3-get-user-by-id)
- [Category APIs](#category-apis)
  - [1. Create Categories](#1-create-categories)
  - [2. Get All Categories](#2-get-all-categories)
  - [3. Get Category by ID](#3-get-category-by-id)
  - [4. Update Categories](#4-update-categories)
  - [5. Delete Categories by ID](#5-delete-categories-by-id)
- [Product APIs](#product-apis)
  - [1. Create Products](#1-create-products)
  - [2. Get All Products](#2-get-all-products)
  - [3. Get Product by ID](#3-get-product-by-id)
  - [4. Get Short Product Details](#4-get-short-product-details)
  - [5. Update Product](#5-update-product)
  - [6. Delete Product](#6-delete-product)
  - [7. Get Product Count](#7-get-product-count)
  - [8. Get Featured Products](#8-get-featured-products)
  - [9. Product Search API](#9-product-search-api)

---

## User APIs

### 1. Create User
- **Endpoint:** `POST http://localhost:5020/user/create`
- **Description:** Register a new user in the system.
- **Request Body:**
    ```json
    {
        "name": "khan",
        "email": "khan@gmail.com",
        "password": "123",
        "confirmPassword": "123",
        "phone": "7769",
        "isAdmin": false,
        "street": "123 Main St",
        "zip": "12345",
        "city": "Example City",
        "country": "Example Country"
    }
    ```
- **Response:**
    ```json
    {
      "success": true,
      "message": "User  registered successfully",
      "user": {
        "name": "khan",
        "email": "khan@gmail.com",
        "password": "$2b$10$1PqNRkPDdeWd4izwwgVHrecsrWCLT2.nAv9G1p2FlPDUQTR6qjSvu",
        "phone": "7769",
        "isAdmin": false,
        "street": "123 Main St",
        "zip": "12345",
        "city": "Example City",
        "country": "Example Country",
        "_id": "659431f5acde280c580391aa",
        "createdAt": "2024-01-02T15:55:33.703Z",
        "updatedAt": "2024-01-02T15:55:33.703Z",
        "__v": 0,
        "id": "659431f5acde280c580391aa"
      }
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/user/create' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "khan",
        "email": "khan@gmail.com",
        "password": "123",
        "confirmPassword": "123",
        "phone": "7769",
        "isAdmin": false,
        "street": "123 Main St",
        "zip": "12345",
        "city": "Example City",
        "country": "Example Country"
    }'
    ```

### 2. Get Users
- **Endpoint:** `GET http://localhost:5020/user/getusers`
- **Description:** Retrieve a list of all registered users (admin access required).
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/user/getusers'
    ```

### 3. Get User by ID
- **Endpoint:** `GET http://localhost:5020/user/getuser/{userId}`
- **Description:** Retrieve details of a specific user by their ID.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/user/getuser/659431f5acde280c580391aa'
    ```

---

## Category APIs

### 1. Create Categories
- **Endpoint:** `POST http://localhost:5020/category/create`
- **Description:** Create a new product category in the system.
- **Request Body:**
    ```json
    {
        "name": "computers",
        "icon": "pc",
        "color": "black"
    }
    ```
- **Response:**
    ```json
    {
      "success": true,
      "message": "Category Created Successfully...",
      "category": {
        "name": "computers",
        "icon": "pc",
        "color": "black",
        "_id": "6591083430a30a976034471f",
        "__v": 0
      }
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/category/create' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "computers",
        "icon": "pc",
        "color": "black"
    }'
    ```

### 2. Get All Categories
- **Endpoint:** `GET http://localhost:5020/category/getcategory`
- **Description:** Retrieve a list of all product categories in the system.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/category/getcategory'
    ```

### 3. Get Category by ID
- **Endpoint:** `GET http://localhost:5020/category/getcategory/{categoryId}`
- **Description:** Retrieve details of a specific category by its ID.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/category/getcategory/6583fc788f8ae9906c46c586'
    ```

### 4. Update Categories
- **Endpoint:** `PUT http://localhost:5020/category/update/{categoryId}`
- **Description:** Update the details of an existing category.
- **Request Body:**
    ```json
    {
        "name": "Elect-Motorola",
        "icon": "Elet",
        "color": "555"
    }
    ```
- **CURL Example:**
    ```bash
    curl --location --request PUT 'http://localhost:5020/category/update/6583fc788f8ae9906c46c586' \
    --header 'Content-Type: application/json' \
    --data '{
        "name": "Elect-Motorola",
        "icon": "Elet",
        "color": "555"
    }'
    ```

### 5. Delete Categories by ID
- **Endpoint:** `DELETE http://localhost:5020/category/delete/{categoryId}`
- **Description:** Remove a category from the system by its ID.
- **CURL Example:**
    ```bash
    curl --location --request DELETE 'http://localhost:5020/category/delete/6591083430a30a976034471f'
    ```

---

## Product APIs

### 1. Create Products
- **Endpoint:** `POST http://localhost:5020/product/create`
- **Description:** Add a new product to the system.
- **Request Body:**
    ```json
    {
        "name": "realme7",
        "description": "mobile",
        "richDescription": "new mobile",
        "image": "mobile.png",
        "brand": "Realme",
        "price": "15000",
        "category": "659107bf30a30a976034471b",
        "countInStock": "10",
        "rating": 4,
        "numReviews": 20,
        "isFeatured": true
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/product/create' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "realme7",
        "description": "mobile",
        "richDescription": "new mobile",
        "image": "mobile.png",
        "brand": "Realme",
        "price": "15000",
        "category": "659107bf30a30a976034471b",
        "countInStock": "10",
        "rating": 4,
        "numReviews": 20,
        "isFeatured": true
    }'
    ```

### 2. Get All Products
- **Endpoint:** `GET http://localhost:5020/product/getproducts`
- **Description:** Retrieve a list of all products in the system.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/product/getproducts'
    ```

### 3. Get Product by ID
- **Endpoint:** `GET http://localhost:5020/product/getproduct/{productId}`
- **Description:** Retrieve details of a specific product by its ID.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/product/getproduct/659112f29fe26de60c663dfc'
    ```

### 4. Get Short Product Details
- **Endpoint:** `GET http://localhost:5020/product/getshortdetails`
- **Description:** Retrieve a brief overview of products, including essential details like name, image, brand, and price.
- **Response:**
    ```json
    {
      "success": true,
      "productList": [
        {
          "name": "realme7",
          "image": "mobile.png",
          "brand": "Realme",
          "price": 15000
        }
      ]
    }
    ```
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/product/getshortdetails'
    ```

### 5. Update Product
- **Endpoint:** `PUT http://localhost:5020/product/update/{productId}`
- **Description:** Update the details of an existing product.
- **CURL Example:**
    ```bash
    curl --location --request PUT 'http://localhost:5020/product/update/6591110b9fe26de60c663df4' \
    --header 'Content-Type: application/json' \
    --data '{
        "name": "updated product name",
        "description": "updated description"
    }'
    ```

### 6. Delete Product
- **Endpoint:** `DELETE http://localhost:5020/product/delete/{productId}`
- **Description:** Remove a product from the system by its ID.
- **CURL Example:**
    ```bash
    curl --location --request DELETE 'http://localhost:5020/product/delete/6591110b9fe26de60c663df4'
    ```

### 7. Get Product Count
- **Endpoint:** `GET http://localhost:5020/product/get/count`
- **Description:** Retrieve the total count of products in the system.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/product/get/count'
    ```

### 8. Get Featured Products
- **Endpoint:** `GET http://localhost:5020/product/get/featured`
- **Description:** Retrieve a list of featured products.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/product/get/featured'
    ```

### 9. Product Search API
- **Endpoint:** `GET http://localhost:5020/products/search/{query}`
- **Description:** Search for products based on a query string.
- **CURL Example:**
    ```bash
    curl --location 'http://localhost:5020/products/search/hp'
    ```