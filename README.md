# EcommerseBackendApi
#npm install 
#for postman
*router.get("/", homeController.allProduct);
*router.post("/addProduct",homeController.addProduct);
*router.delete("/:id/delete", homeController.deleteProduct);

*router.post("/login", usersController.login);
*router.post("/register", usersController.register);

router.post("/:id/addInCart", passport.authenticate("jwt", { session: false }), usersController.addInCart);


