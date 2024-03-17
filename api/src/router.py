# import fast api
# router for route the app
# request for give info when the user request info
from fastapi import APIRouter

# import animals (database)
from animals import animals

# return only types or names
# set is for exclude equal values 
# animal["type"] or animal["name"] is what i wnat from loop
# for animal in animals is a loop through every item in animals, animal will be animal obj
types = set(animal["type"] for animal in animals)
names = set(animal["name"] for animal in animals)

# function to search animals by contentKey and contentValue
def searchFor (contentKey, contentValue) :
    #loop throgh animals array
    # first animal, means i want all obj
    # for animal in animals, loop in animals array
    # if animal[contentKey] == contentValue, if found one animal with the same values as arguments return that animal
    return [animal for animal in animals if animal[contentKey] == contentValue]

# funtion to return animals by type
def getAnimalsByType (type) :
    # search in animal, animal which have the same type as type argument
    specific_animal_type = searchFor("type", type)

    if specific_animal_type: # if have animals with the same type as type argument 
        return specific_animal_type # return animals bu type
    else: # if dont have animals with the same type as type argument
        return {"error": f"No animals found for the type: {type}"}

# function to return animal by name
def getAnimalByName (name) :
    # search animals by name
    specific_animal_name = searchFor("name", name)

    if specific_animal_name: # if have animal with that name
        return specific_animal_name # return that animal
    else: # if dont have animal with that name
        return {"error": f"No animals found with that name: {name}"}

# initial path for api
api_router = APIRouter(
    prefix="/api",
    tags=["api"],
)

# on get / (/api/)
@api_router.get("/")
async def get_call():
    # return all animals
    return [animals]

# on get /types (/)
@api_router.get("/types")
async def get_call_types():
    # return all types
    return types

# on get /type?type={type}
@api_router.get("/type")
async def get_specific_animal_types(type: str):
    # verify if have type argument
    if type: # if have type as argument
        # return animals by type
        return getAnimalsByType(type)
    else: # if type does not exists
        # return all types
        return types

# on get /name?name={name}
@api_router.get("/name")
async def get_specific_animal_name(name: str):
    # verify if name argument exists
    if name: # if have name argument
        # return animal by name
        return getAnimalByName(name)
    else: # if does not have name argument
        # return all names
        return names