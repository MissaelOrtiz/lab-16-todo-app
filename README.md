## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## Signup
### HTML
-User Name input
-User password input
-submit button
### Event
-on clicking button
    -initialize user
    -send user to the list page

## Login
### HTML
-User Name input
-User password input
-submit button
### Event
-on clicking button
    -compare both password and username
        -grab user from local storage
            -return user if correct
            -return error if not
    -send user to the list page

## TODO
### HTML
-A place to input new todo task
-a UL to inject LI elements into via JS
### Event
-click on a todo
    -update state in localstorage
        -gather information about the todo through click
        -completed false to true
    -rerender page
-submit new todo
    -takes in the text information and initializes in local storage with false and an ID
    -render out the new task on page


## Dependency order:
-create users
-create todos
-complete todos
-login user
-login multiple users