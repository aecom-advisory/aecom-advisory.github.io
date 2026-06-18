library(tidycensus)
census_api_key(readLines("path/to/APIkey.txt"))

california.meansOfTransportation <- get_acs(
  geography = "state",
  state = "CA",
  variables = c("B08301_001E",
                "B08301_002E",
                "B08301_010E",
                "B08301_017E",
                "B08301_018E",
                "B08301_019E",
                "B08301_020E",
                "B08301_021E"),
  survey = "acs5",
  year = 2024
)