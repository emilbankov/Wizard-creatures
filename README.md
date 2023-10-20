1. Initialize project and structure
    - npm init -y
    - npm i express
    - npm i express-handlebars
    - npm i nodemon

2.Configuration
    - configure static middleware
    - configure bodyparser
    - configure routes

3. Add images and css in public folder
4. Add html files in views folder
5. Configure view engine
    - add main layout
    - fix hyperlink styles
    - render home page in hbs

6. Convert all html files to handlebars views
    - group views by meaning

7. Add controllers folder with home controller
8. Add database
    - npm i mongoose
    - connect to DB

9. Prepare user functionality 
    - user controller
    - add controller to routes
    - fix navigations in the nav bar
    - render login and register page

10. Add user model
    - simple validation in Schema
    - add method for register
    - create first User record in the DB
    - validate password missmatch
    - validate unique email

11. Hash password
    - npm i bcrypt
    - hash password

12. Login
    - find user by email
    - validate password with hash

13. Generate jsonwebtoken
    - npm i jsonwebtoken
    - promisify jsonwebtoken
    - generate secret
    - generate token in service login

14. Return token in cookie
    - npm i cookie-parser
    - comfigure cookie-parser
    - set cookies with token

15. Implement logout
16. Authentication middleware
    - create middleware folder
    - add auth middleware and import it in expres configuration below cookie-parser
    - decode the token
    - handle invalid token
    - provide authorization

17. Dynamic navigation
    - conditional options in navigation
    - add data to res.locals for hbs templates

18. Error handling
    - add 404 page
    - redirect miising rout to 404
    - add global error handler
    - add error message util

19. Show error notification
    - show in main layout
    - pass error to render in login and register pages

20. Automatically login after register
21. Add creature model to mongoose
22. Implement - All posts page
    - show each creature with image, name, description, species
    - add details button to every creature

23. Add details page
    - if no creatures - "There are no posts yet..."
    - if the user is the owner of the post should have "Edit" and "Delete" buttons
    - if the users hasn't logged in - no buttons
    - if the users isn't the owner - vote button

24. Vote button
    - when clicked - "Voted"
    - redirect to the details page of the current creature
    - show the email of the people voted
    - if user already voted - "Thanks for voting" message

25. Add creature
    - on success redirect to All posts page

26. Delete creature
    - on success redirect to All posts page

26. Edit creature
    - on success redirect to the details page of the current creature

27. Routes guards - check
28. Validations
    - login
    - register
    - animals

29. Bonus - profile
    - show my posts
    - if there no posts - message
