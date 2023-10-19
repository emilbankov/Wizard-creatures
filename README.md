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