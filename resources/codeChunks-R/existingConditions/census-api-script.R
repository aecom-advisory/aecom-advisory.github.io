library(tidycensus)
census_api_key(readLines("path/to/APIkey.txt"))

california.housingUnits <- get_acs(
  geography = "state",
  state = "CA",
  variables = c("B25002_001E",
                "B25002_002E",
                "B25002_003E"),
  survey = "acs5",
  year = 2024
)