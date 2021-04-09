db.createUser(
    {
      user: "root",
      pwd: "rootxxx",
      roles: [
         { role: "dbOwner", db: "admin" }
      ]
    }
,
    {
        w: "majority",
        wtimeout: 5000
    }
);
db.createCollection("test");

//db.createUser({	user: "root",pwd: "rootxxx",roles:[{role: "userAdminAnyDatabase" , db:"admin"}]});