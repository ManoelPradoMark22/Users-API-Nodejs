## UsersApi - Api de usuários

---

### Requisitos (Passed Tests)

- [x] UsersRepository should be able to create new users;
- [x] UsersRepository should be able to list all users;
- [x] UsersRepository should be able to find user by ID;
- [x] UsersRepository should be able to find user by e-mail address;
- [x] UsersRepository should be able to turn an user as admin;
- [x] ListAllUsersUseCase should be able to list all users;
- [x] TurnUserAdminUseCase should be able to turn an user as admin;
- [x] ShowUserProfileUseCase should be able to get user profile by ID;
- [x] [POST] /users should be able to create new users;
- [x] [PATCH] /users/:user_id/admin should be able to turn an user as admin;
- [x] [GET] /users/:user_id should be able to get user profile by ID;
- [x] [GET] /users should be able to list all users;
- [x] CreateUserUseCase should be able to create new users;
- [x] User model should be able to create an user with all props.

---

## Regras de negócio (Passed Tests)

- [x] ListAllUsersUseCase should not be able to a non admin user get list of all users;
- [x] ListAllUsersUseCase should not be able to a non existing user get list of all users;
- [x] TurnUserAdminUseCase should not be able to turn a non existing user as admin;
- [x] ShowUserProfileUseCase should not be able to show profile of a non existing user;
- [x] [POST] /users should not be able to create new users when email is already taken;
- [x] [PATCH] /users/:user_id/admin should not be able to turn a non existing user as admin;
- [x] [GET] /users/:user_id should not be able to show profile of a non existing user;
- [x] [GET] /users should not be able to a non admin user get list of all users;
- [x] [GET] /users should not be able to a non admin user get list of all users;
- [x] [GET] /users should not be able to a non existing user get list of all users;
- [x] CreateUserUseCase should not be able to create new users when email is already taken;