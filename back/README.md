# express auth jwt token base

```js
cp .env.example .env 
/*
    set up database in .env
*/
npm install
npm install tspace-orm -g
tspace-orm migrate src/app/models/migrations

Open [http://localhost:8000] to view it in the browser.
- POST : api/login
- POST : api/register
- DELETE : api/logout 
- GET : api/users/profile
- GET : api/users/projects
- POST : api/users/projects
- PUT/PATCH : api/users/projects/:id
- DELETE : api/users/projects/:id
```