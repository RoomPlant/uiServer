import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("dist"));

app.get("/*", (_, res) => {
	res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
	console.log(`App is running on http://localhost:${port}`);
});
