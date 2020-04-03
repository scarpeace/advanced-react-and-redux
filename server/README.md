[AUTHENTICATION]

- Até agora inicializamos o projeto com `yarn init`
- Em seguida instalamos as seguintes dependências:  `yarn add express mongoose morgan body-parser`

[NPM]

- `NODEMON` - Live server refresh (yarn run dev)

*Low-Level request handling*
- `HTTP Module` - Handles HTTP requests (not instaled)

*Routing Server and Logic*
- `BODY-PARSER` - Help parse incoming HTTP requests (Doesn't matter the type)
- `MORGAN` - Logging framework (console.log)
- `EXPRESS` - Parse response + routing (yarn run dev)

*Database*
- `MONGOOSE` - Work with mongoDB (ORM)
- `MONGODB` - Storing data (To start 'mongod')
- CONFIGURING MONGODB AS A ENVIROMENT PATH
  `To add it to the PATH:

01) Get path to bin, something like: C:\Program Files\MongoDB\Server\4.0\bin
02) Press the Windows key, type env, select Edit the system environment variables
03) On the Advanced tab, click Environment Variables
04) In the User variables for xxxx section, select path and then click the Edit... button
05) Click New and paste your path with a trailing slash, eg:
C:\Program Files\MongoDB\Server\4.0\bin\
06) Click OK, OK, OK and restart your command window.`
07) To start = net start MongoDB, to stop net stop MongoDB

*Athentication*
- `Bcrypt - nodeJS` - Storing a users encrypted password (yarn add bcrypt-nodejs).
- `Passport - JWT` - Authenticating users with a JWT (JSON Web Tokes)(yarn add jwt-simple)
- `Passport - Local` - Authenticating users with a username/password (yarn add passport passport-jwt)
- `Passport-JS` - Authenticating users
