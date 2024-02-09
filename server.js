const express = require("express");
const authorRoute = require("./routes/authors.route");
const logger = require("./logger");

const app = express();
const PORT = 5500;

app.use(express.json());
app.use(logger);

app.use("/authors", authorRoute);

app.get("/", (req, res) => {
	res.send({ message: "Hello World" });
});

app.all("*", (req, res) => {
	res.status(404).send({ message: "Page not found!" });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
