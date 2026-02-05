from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# Important! This allows your React app to talk to this Python server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all for now
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# This is our Data Model (Schema) - same as your TypeScript interface
class Item(BaseModel):
    name: str
    price: float
    description: Optional[str] = None

# Simple POST route
@app.post("/items/")
async def create_item(item: Item):
    print(f"Received from React: {item.name} costing {item.price}")
    return {"message": f"Item '{item.name}' received successfully!", "data": item}

# Simple GET route to check if server is alive
@app.get("/")
async def root():
    return {"status": "Server is running"}