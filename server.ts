import express, {Application, Request, Response} from "express";
import cors from "cors";

const app:Application = express();
const PORT = process.env.PORT ?? 8000; // Allow dynamic PORT setting (Heroku)
app.use(cors());

const gameWords = ["books", "brown", "hello", "video", "water", "anger", "racer", "paper", "maker", "cakes", "lakes", "chase", "spoon", "fluff", "tough", "typer"]

// Define GET endpoint(s)
app.get("/", (req:Request, res:Response) => {
    let solutionWord = gameWords[Math.floor(Math.random() * gameWords.length)]
    res.send({secret: solutionWord});
});

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});