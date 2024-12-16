# E-SHOP API Documentation

## Available APIs

### USERS
- **POST**: Create a new user.
- **GET**: Retrieve all users.
- **GET**: Retrieve a user by ID.

### CATEGORIES
- **POST**: Create a new category.
- **GET**: Retrieve all categories.
- **GET**: Retrieve a category by ID.
- **PUT**: Update an existing category.
- **DELETE**: Delete a category by ID.

### PRODUCTS
- **POST**: Create a new product.
- **GET**: Retrieve all products.
- **GET**: Retrieve a product by ID.
- **GET**: Retrieve a list of short product details.
- **PUT**: Update an existing product.
- **DELETE**: Delete a product by ID.
- **GET**: Retrieve the total product count.
- **GET**: Retrieve featured products.
- **GET**: Search for products by keyword.

---

## API Details

### USERS

#### Create User
- **Endpoint**: `POST http://localhost:5020/user/create`
- **Request Body**:
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
- **Response**:
  ```json
  {
      "success": true,
      "message": "User registered successfully",
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

#### Get All Users
- **Endpoint**: `GET http://localhost:5020/user/getusers`

#### Get User By ID
- **Endpoint**: `GET http://localhost:5020/user/getuser/{id}`

---

### CATEGORIES

#### Create Category
- **Endpoint**: `POST http://localhost:5020/category/create`
- **Request Body**:
  ```json
  {
      "name": "computers",
      "icon": "pc",
      "color": "black"
  }
  ```
- **Response**:
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

#### Get All Categories
- **Endpoint**: `GET http://localhost:5020/category/getcategory`

#### Get Category By ID
- **Endpoint**: `GET http://localhost:5020/category/getcategory/{id}`

#### Update Category
- **Endpoint**: `PUT http://localhost:5020/category/update/{id}`
- **Request Body**:
  ```json
  {
      "name": "Elect-Motorola",
      "icon": "Elet",
      "color": "555"
  }
  ```

#### Delete Category By ID
- **Endpoint**: `DELETE http://localhost:5020/category/delete/{id}`

---

### PRODUCTS

#### Create Product
- **Endpoint**: `POST http://localhost:5020/product/create`
- **Request Body**:
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

#### Get All Products
- **Endpoint**: `GET http://localhost:5020/product/getproducts`

#### Get Product By ID
- **Endpoint**: `GET http://localhost:5020/product/getproduct/{id}`

#### Get Short Product Details
- **Endpoint**: `GET http://localhost:5020/product/getshortdetails`
- **Response**:
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

#### Update Product
- **Endpoint**: `PUT http://localhost:5020/product/update/{id}`

#### Delete Product
- **Endpoint**: `DELETE http://localhost:5020/product/delete/{id}`

#### Get Product Count
- **Endpoint**: `GET http://localhost:5020/product/get/count`

#### Get Featured Products
- **Endpoint**: `GET http://localhost:5020/product/get/featured`
- **Query Parameter**: Limit the number of featured products (e.g., `/get/featured/2`)

#### Search Products
- **Endpoint**: `GET http://localhost:5020/products/search/{keyword}`

---

## Notes
- Replace `{id}` in the endpoints with the actual ID of the user, category, or product.
- Ensure the server is running at `http://localhost:5020` before making API requests.
