# Yourco Back End Tech Interview

## Background

Your job is to build an application that allows the user to `create` and `read` their created `Polls`. No authentication is necessary.

We define a `poll` as a question and the possible options/answers to that question.

All data should be stored within MongoDB. You will be provided with a database connection string.

**Below is an example of a possible Poll object.**

```
{
    question: 'What should we have for lunch on Friday?',
    options: ['Pizza', 'Salad', 'Sandwiches']
}
```

<b>NOTE</b>: The above is an example object, please feel free to use a different data structure if you would like.


## Server Structure 

You have been provided with an already created Express.js server in pure javascript.

To install dependencies, run:

```
npm i
```

To start the server, run:

```
npm run dev
```

## Considerations

#### Language

Please use Javascript, not Typescript.

#### Dependencies

The main dependencies needed to accomplish this task are defined in both projects package.json, but please feel free to install and use any other dependencies you want (except Mongoose).

#### MONGOOSE

Please `do not` use Mongoose. Use the native mongodb nodejs client that is already provided in package.json.

#### Internet

Use the internet! It's a big part of our job and also shows that you can learn something you don't know. The use of ChatGPT is also fine as long as it is used solely for technical questions and not for generating your code.
