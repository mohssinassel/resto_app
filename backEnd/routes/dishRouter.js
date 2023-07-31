const dishesController = require("../controllers/dishesController");
  
const router = require("express").Router();

// router.post("/login", login);
// router.post("/register", register);
// router.get("/allusers/:id", getAllUsers);
// router.post("/setavatar/:id", setAvatar);
// router.get("/logout/:id", logOut);

// make this file so i can use it with authRoutes(router) in index.js
const dishRoutes = (mainrouter) => {
    mainrouter.use('/dish', router);
};

module.exports = dishRoutes;
  