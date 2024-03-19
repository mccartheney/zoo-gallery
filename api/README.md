# Animal API

The Animal API is a simple API developed in Python using the FastAPI framework. It provides information about different types of animals, allowing users to search for animals by type or name.

## Available Endpoints

### 1. Get All Animals

- **Endpoint**: `/api/`
- **Method**: GET
- **Description**: Returns a list of all available animals.

### 2. Get All Animal Types

- **Endpoint**: `/api/types`
- **Method**: GET
- **Description**: Returns a list of all available animal types.

### 3. Get Animals by Type

- **Endpoint**: `/api/type?type={type}`
- **Method**: GET
- **Query Parameters**: 
  - `type`: The desired type of animal.
- **Description**: Returns a list of animals of the specified type.

### 4. Get Animal by Name

- **Endpoint**: `/api/name?name={name}`
- **Method**: GET
- **Query Parameters**: 
  - `name`: The name of the desired animal.
- **Description**: Returns information about an animal with the specified name.

## Example Response

### GET Request `/api/type?type=Mammal`

```json
[
    {
        "name": "Lion",
        "type": "Mammal",
        "habitat": "Savanna",
        "size": "Large"
    },
    {
        "name": "Giraffe",
        "type": "Mammal",
        "habitat": "Savanna",
        "size": "Large"
    }
]
