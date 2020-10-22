const { Router } = require("express");
const router = Router();

//Ruta inicial del archivo index.pug
router.get("/", (req, res) => {
  res.render("index", { title: "Inicio" });
});

router.get("/login", (req, res) => {
  res.render("login", { error: false, title: "Login page" });
});

router.get("/signup", (req, res) => {
  res.render("singup", { error: false, title: "Sign Up page" });
});

router.post("/signin", (req, res) => {
  const user = req.body.email;
  const pass = req.body.password;
  if (user === "Profesor@gmail.com" && pass === "12345") {
    res.render("dashboard", {
      title: "Dashboard master virtual",
      datos: {
        email: user,
        alumnos: [
          "Carolina Mejía",
          "Andrés Calderón",
          "Juan Rojo",
          "Jaxon Rodriguez",
          "Luis Velazco",
          "Paulina Restrepo"
        ]
      }
    });
  } else {
    //res.render('login',  {error: true});
    res.redirect("/login");
  }
});

router.post("/register", (req, res) => {
  const name = req.body.forename;
  const id = req.body.identification;
  const user = req.body.email;
  const pass = req.body.password;
  if (name !== "" && id !== "" && user !== "" && pass !== "") {
    res.render("dashboard", {
      title: "Dashboard master virtual",
      datos: {
        email: user,
        alumnos: ["No tienes alumnos aún"]
      }
    });
  } else {
    //res.render('login',  {error: true});
    res.redirect("/signup");
  }
});
module.exports = router;
