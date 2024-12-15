# E-Shop API Documentation

## Users

### 1. Create User
- **Endpoint:** `POST /user/create`
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

### 2. Get Users
- **Endpoint:** `GET /user/getusers`

### 3. Get User by ID
- **Endpoint:** `GET /user/getuser/{userId}`

---

## Categories

### 1. Create Categories
- **Endpoint:** `POST /category/create`
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

### 2. Get All Categories
- **Endpoint:** `GET /category/getcategory`

### 3. Get Category by ID
- **Endpoint:** `GET /category/getcategory/{categoryId}`

### 4. Update Categories
- **Endpoint:** `PUT /category/update/{categoryId}`
- **Request Body:**
    ```json
    {
        "name": "Elect-Motorola",
        "icon": "Elet",
        "color": "555"
    }
    ```

### 5. Delete Category by ID
- **Endpoint:** `DELETE /category/delete/{categoryId}`

---

## Products

### 1. Create Products
- **Endpoint:** `POST /product/create`
- **Request Body:**
    ```json
    {
        "name": "realme7",
        "description": "mobile",
        "richDescription": "new mobile",
        "image": "mobile.png",
        "brand": "Realme",
        "price": "15000",
        "category": "659107bf30a30a976034471b", // category id
        "countInStock": "10",
        "rating": 4,
        "numReviews": 20,
        "isFeatured": true
    }
    ```

### 2. Get All Products
- **Endpoint:** `GET /product/getproducts`

### 3. Get Product by ID
- **Endpoint:** `GET /product/getproduct/{productId}`

### 4. Get Short Product Details
- **Endpoint:** `GET /product/getshortdetails`
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

### 5. Update Product
- **Endpoint:** `PUT /product/update/{productId}`

### 6. Delete Product
- **Endpoint:** `DELETE /product/delete/{productId