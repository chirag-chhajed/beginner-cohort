# Week 2
For this's week task we are learning MongoDB

First of all install you need to install [MongoDB](https://www.mongodb.com/docs/manual/installation/) and [Mongosh](https://www.mongodb.com/docs/manual/installation/) on your system. For further setup you can refer to documentation.

For learning the MongoDB commands I have used fake data from generated from this [site](https://www.mockaroo.com/). You can find the data used by me in JSON format [here](./assets/MOCK_DATA.json). 

## Let's get started

Type the following commands in your preferred CLI
```
mongosh
```
```
use <dbname>
```
```
db.createCollection("myCollection")
```
To confirm you can use the command
```
show collections
```
Now we can use various sorts of commands offered by MongoDB

**I have used studentdb as my db name and students as my collection name**
### Create Command
To add data to database we can use **insertOne** **insertMany** commands
```
db.students.insertMany(array of objects)
```

To get all the data use command
```
db.students.find()
```

To get specific number of objects
```
db.users.find().limit(3)
```

To skip specific number of objects from top use
```
db.students.find().skip(12)
```
To exit the mongosh session use the command ```exit```


