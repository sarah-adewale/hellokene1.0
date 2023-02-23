

![site-icon](https://user-images.githubusercontent.com/49436342/220751132-e77e46a7-c70a-44ae-9604-3c964fe9d4a9.png)

**Live Website:** [https://venddir.cyclic.app/](https://venddir.cyclic.app/)

Venddir is an online directory for vendors. As with any directory, its core function is listing - alphabetically or thematically with details such as names, addresses, and phone numbers, - all vendors who have opted to showcase their business information on the platform.

Users can sign up either as a client or a vendor. Clients can change their avatars, view vendors, and bookmark vendors. Vendors can create their business profile with all their business details, bookmark other vendors, view other vendors, and change business logo. 


![Screen Shot 2023-01-14 at 1 07 53 AM](https://user-images.githubusercontent.com/49436342/220752725-5b2e168d-4156-41fc-8c6e-0d426fc20c79.png)

## How To Run Application

Clone the project

```bash
  git clone https://github.com/sarah-adewale/hellokene2.0
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Start Tailwind

```bash
  npm run tailwind:css 
```


## Tech Used: 

## Client: FIGMA, EJS, TailwindCSS

**Figma:**
#### Why was this tool chosen?

Figma is an easy to use design tool. I wanted a tool that would help with a hiFi view of what my idea was. Figma was used for logo, whiteboarding, site map, wireframes and prototyping. 

**EJS:**
#### Why was this stack chosen?
I used EJS for my view. I wanted a chance to use a new tool that looked kinda similar to html and javascript. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 

**Tailwind:**
#### Why was this stack chosen?
Tailwind is a "utility-first CSS framework" which provides several of these opinionated, single-purpose utility classes that you can use directly inside your markup to design an element. Tailwind is simply a fast and easy way to create your designs

## Server: Node, Express

#### Why was this stack chosen?
I used the MVC (Model, View, Controller) Architecture for my backend. MVC is an architectural design pattern used in web development. MVC helped me with structure and separation of concerns. I have my database and passport method in the config folder. My server method in the controller folder. The model folder has the database schema. My view in the view folder (used partial to handle reusable pieces of code). Public folder has all my styles(tailwind and custom css). I have my routes in the routes folder and basically connected everything in my server.js file. 

Node is a pretty lightweight server choice and can be spun up fairly easily. I needed a backend that could send a different response based on the result of another controller. 

By using Express' built in middleware architecture we could cleanly write fallbacks. MongoDB is used to handle databases, on venddir although users can browse through different vendors without signing in, when a user signs in, mongoDB is used to handle the user tables. I used Mongoose to handle my database schema. 


## Optimizations






