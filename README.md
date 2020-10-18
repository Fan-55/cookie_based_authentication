## Cookie-based Authentication

This is a simple web app for the practice of cookie-based authentication. 

### How to use
---
0. Prerequisites
- install [MongoDB](https://www.mongodb.com/try/download/community)
- install [Robo 3T](https://robomongo.org/)
- start the MongoDB server
- create a MongoDB connection
- create a database named "session"

1. Clone this repository 

```
$ git clone https://github.com/Fan-55/cookie_based_authentication.git
```

2. Go to the directory 

```
$ cd login_test
```

3. Install the required packages 

```
$ npm install
```

4. Implant seed data
```
$ npm run seed
```

5. Execute app via either nodemon or node

- via nodemon

```
$ npm run dev
```

- via node

```
$ npm run start
```

6. You will see the following on your terminal suggesting successful set up

```
This app is listening at http://localhost:3000
MongoDB connected!
```
7. Open the browser and type in the following URL

```
http://localhost:3000/users/login
```
8. Following is the list of valid data for testing

| User  | Email   | Password|
| ------ | ------ |------ |
|Tony|tony@stark.com|iamironman|
|Steve|captain@hotmail.com|icandothisallday|
|Peter|peter@parker.com|enajyram|
|Natasha|natasha@gamil.com|*parol#@$!|
|Nick|nick@shield.com|password|

### Tools used for this web application
---
- Node.js: v10.15.0
- Express: v4.17.1
- express-handlebars: v5.1.0
- body-parser: v1.19.0
- cookie-parser: v1.4.5
- Bootstrap: v4.5.2
- bcrypt: v5.0.0
- mongoose: v5.10.7
- MongoDB: v4.2.9
- Robo 3T: v1.4.1
