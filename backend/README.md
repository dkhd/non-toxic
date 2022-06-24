# Non-Toxic Back-End Part
This is the Back-End part of the Non-Toxic app, the toxic comment detection.

## How To Run
In order to be able to run this back-end, please run the following commands:
1. Install all dependencies
```
$ npm i
```
2. install `nodemon`
```
$ npm i -g nodemon
```
3. Run the project
```
$ nodemon ./bin/www
```
4. Put the URL to the  `.env` file in the Front-End part
```
REACT_APP_API_URL="http://{IP_ADDRESS:PORT}/toxic"
```