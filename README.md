# Node.js Express MongoDB Image Backend

This guide details the process of setting up a Node.js Express backend using MongoDB to store and retrieve image data.

## Installation

Navigate to the project directory:

```
cd image-db
```

Use code with caution.
Install dependencies:

```
npm install
```

Use code with caution.

Add MongoDB URI in .env file.

**_Ensure MongoDB is running:_**

Make sure you have a MongoDB instance running on your local system or a cloud provider. Refer to the official MongoDB documentation for setup instructions if needed.

Start the server:

```
node app.js
```

or (only during development)

```
nodemon app.js
```

Use code with caution.
This will start the server, typically listening on port 8000 by default.

## Usage

GET Request (Retrieve Images):

To retrieve all image data from the backend, send a GET request to the /images endpoint using a tool like cURL:

```
curl http://localhost:8000/images
```

Use code with caution.
This will return a JSON response containing an array of image objects, with each object containing the image's ID, category, and any additional data you choose to store.

POST Request (Upload Image):

To upload an image along with its category, send a POST request to the /images endpoint:

```
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "imageUrl": "https://example.com/image.jpg",
    "genre": "landscape",
    "author": "John Doe"
  }' \
  http://localhost:8080/images
```

Use code with caution.

Explanation of the POST request:

- X POST: Specifies that the request method is POST.

- -F "image=@/path/to/your/image.jpg": Indicates that a form field named "image" is being included in the request with the value being the contents of the file located at the specified path /path/to/your/image.jpg. The @ symbol indicates that cURL should read the file content and include it as part of the request.

- -F "category=your_category": Specifies another form field named "category" with the value your_category.

- http://localhost:8000/images: The URL where the request should be sent, specifically the /images endpoint of your server running locally.

Example POST request response:

The backend should return a JSON response indicating the success or failure of the upload, potentially including the newly created image's ID and other relevant information.
