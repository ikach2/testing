
setwd("/Users/isabelk/Downloads")
click_dataold <- read.csv("PATHWiSE Prototype Logging  - Form Responses 1.csv")
num_users <- length(unique(click_dataold$first))
print(num_users)
unique_users <- unique(click_dataold$first)
unique_elements <- unique(click_dataold$fourth)

setwd("/Users/isabelk/Downloads/")

click_datanew <- read.csv("clickdatanew.csv")
unique_elementsnew <- unique(click_datanew$fourth)

library(dplyr)

top_elements_old <- click_dataold %>% count(fourth, sort=TRUE)%>% slice_head(n=10)
#                      fourth     n
# 1  div#comment-input textarea 42571
# 2         div#viewerContainer  4665
# 3     li.comments-list-toggle  3184
# 4 li.comments-template-toggle  2133
# 5      div#selected-emotion p  2031

top_elements_new <- click_datanew %>% count(fourth, sort=TRUE)%>% slice_head(n=10)
#                     fourth    n
# 1 div#comment-input textarea 5195
# 2        div#viewerContainer  172
# 3       input#group-password  171
# 4         div.textLayer span  101
# 5              div.textLayer   95

# PArsing coordinates for heat map


library(dplyr)
library(jsonlite)

click_coords <- click_datanew %>%
  mutate(parsed = lapply(fifth, function(x) fromJSON(x))) %>%
  mutate(
    pageX = sapply(parsed, function(x) x$pageX),
    pageY = sapply(parsed, function(x) x$pageY)
  ) %>%
  select(pageX, pageY)
# Removes na/null values
filtered_data <- click_data %>%
  filter(grepl("pageX", fifth) & grepl("pageY", fifth))

parsed_coords <- lapply(filtered_data$fifth, fromJSON)

# pull out the x and y coordinates
pageX <- sapply(parsed_coords, function(x) x$pageX)
pageY <- sapply(parsed_coords, function(x) x$pageY)

click_coords <- data.frame(pageX = pageX, pageY = pageY)
heatmap_data <- click_coords %>%
  transmute(
    x = pageX,
    y = pageY
  )

json_data <- toJSON(heatmap_data, auto_unbox = TRUE)
write(json_data, file = "C:/Users/isabelk/Downloads/heatmap_data.json")
getwd()
