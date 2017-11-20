This is a simple example of a REST API implementation. It allows to create a list of cities which
are saved in a mongodb data base. It exposes a front end web interface where it is possible to get all created cities for a 
corresponding country that is send as parameter. It exposes an API for Get, Post, Put and Delete requests. The service is implemented
in NodeJS and uses express for handling the HTTP requests. It also implements a simple back-end that saves and query cities in 
a mongoDB data base depending of the HTTPS request is received.
