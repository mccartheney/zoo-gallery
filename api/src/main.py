# import fastApi stuff
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router import api_router

# from uvicorn import run for run api
from uvicorn import run

# create app to initialize fast api
app = FastAPI()

# include router to route api
app.include_router(router=api_router)

# origins is the links that api will give info
origins = [
    "http://localhost:5500",
]

# middleware is for api comunication
app.add_middleware(
    middleware_class=CORSMiddleware,
    allow_origins=origins, # accept only origins from origins array
    allow_methods=["GET"], # accept only get methods 
)

if __name__ == "__main__":

    # run api on http//:0.0.0.0:8001
    run(app, host="0.0.0.0", port=8001)