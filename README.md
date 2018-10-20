# vue-laravel-example-project
A Vue.js and Laravel sample team manager CRUD project ( RESTful )

The authentication uses JWT tokens.


# Requirements

- First install Composer for your operation system from this link https://getcomposer.org/download/
- Second install latest NPM and Node JS from https://www.npmjs.com/get-npm
- (Optional) install WAMP or XAMPP in your system to run PHP & MySQL & Apache (Laravel version is 5.6 so you need php version > 7.1)

# Installation

for Server Side:
1. cd to the project's root directory and run ```composer install``` in terminal
1. create a database and open .env file and edit it according to your DB settings (Note: if you can't find .env file then rename .env.example file to .env and use it)
2. run the migration with this command: ```php artisan migrate```
3. seed the table: i had provided you two ways to seed the DB (the explanation has commented in the codes)
4. run ```php artisan serve``` and enjoy the app

for Client Side:
1. run command: ```npm install```
2. run command: ```npm run watch```
