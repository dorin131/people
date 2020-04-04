# People

## How to use

1. Start up the local database   
  `./start.sh`
2. Start up the UI   
  `cd people-frontend && npm start`

## How to back up your data

1. Find the container ID of the running Mongo instance  
  `docker ps`
2. Connect to it   
  `docker exec -it <container_id> bash`
3. Export the data   
  `mongoexport --db peopledb -c people --out people.json`
4. Copy the data from inside the container. Execute this from outside the container.   
  `docker cp <container_id>:/people.json .`