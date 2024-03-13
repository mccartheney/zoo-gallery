# import fast api
# router for route the app
# request for give info when the user request info
from fastapi import APIRouter, Request

# import animals (database)
from animals import animals

# initial path for api
api_router = APIRouter(
    prefix="/api",
    tags=["api"],
)


# on get / (/api/)
@api_router.get("/")
async def get_call(_: Request):
    # return all animals
    return [animals]

# on get /types (/)
@api_router.get("/types")
async def get_call_types(_: Request):
    # return only types
    # set is for exclude equal values 
    # animal2
    return [set(animal["type"] for animal in animals)]


@api_router.get("/type")
async def get_specific_animal_types(request: Request, type: str):
    if type:
        filtered_animals = [animal for animal in animals if animal["type"] == type]
        if filtered_animals:
            return filtered_animals
        else:
            return {"error": f"No animals found for the type: {type}"}
    else:
        types = set(animal["type"] for animal in animals)
        return types
    
@api_router.get("/name")
async def get_specific_animal_name(request: Request, name: str):
    if name:
        specific_animal_name = [animal for animal in animals if animal["name"] == name]
        if specific_animal_name:
            return specific_animal_name
        else:
            return {"error": f"No animals found with that name: {name}"}
    else:
        names = set(animal["name"] for animal in animals)
        return names




@api_router.post("/")
async def post_call(_: Request):
    return {"message": "You successfully POST called the API!"}