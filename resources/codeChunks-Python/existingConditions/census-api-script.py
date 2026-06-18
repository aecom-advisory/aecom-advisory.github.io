import censusdis.data as ced
from censusdis.datasets import ACS5

with open("path/to/APIkey.txt") as f:
    api_key = f.read().strip()

df = ced.download(
    dataset=ACS5,
    vintage=2024,
    download_variables=["B25002_001E", "B25002_002E", "B25002_003E"],
    state="06",  # California
    api_key=api_key
)
