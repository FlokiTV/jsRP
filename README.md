# jsRP

Javascript powered FiveM RolePlay Base 🎮

# Important

This framework is still under development and may demonstrate instabilities. Wait for a first release to use in production

## Setup steps

### Windows

1. [Download server artifacts](https://runtime.fivem.net/artifacts/fivem/build_server_windows/)

2. Create a folder for server (Ex: `C:/jsRP`)

3. Create a folder for artifacts (Ex: `C:/jsRP/artifacts`)

4. Extract `server.7z` to `jsRP/artifacts`

5. Create a folder for resources (Ex: `C:/jsRP/server`)

6. [Download `jsRP` resource base](https://github.com/FlokiTV/jsRP/archive/refs/heads/master.zip)

7. Extract `jsRP-master.zip` to `jsRP/server`

8. Run `FXServer.exe` inside `C:/jsRP/artifacts` to start FiveM server

9. Setup your txAdmin account

10. On `Deployment Type` select `Local Server Data` and put `C:/jsRP/server`

11. Finish txAdmin setup and start

### Linux

1. Download server artifacts https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/

## Configuration steps

### jsrp-db

`resources\[jsrp]\[core]\jsrp-db\server\db.js`

Configure MySQL database

```js
const sequelize = new Sequelize("database", "username", "password", {
  host: "mysql.host.com",
  dialect: "mysql",
  logging: false,
});
```

You can disable jsrp-db and jsrp-login to start without database
