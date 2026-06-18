import censusdis.data as ced
from censusdis.datasets import ACS5

with open("path/to/APIkey.txt") as f:
    api_key = f.read().strip()

df = ced.download(
    dataset=ACS5,
    vintage=2024,
    download_variables=[
        "B08301_001E",
        "B08301_002E",
        "B08301_010E",
        "B08301_017E",
        "B08301_018E",
        "B08301_019E",
        "B08301_020E",
        "B08301_021E"
    ],
    state="06",  # California
    api_key=api_key
)