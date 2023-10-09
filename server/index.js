import express from "express";
import colors from "colors"


const app = express();

const port = process.env.PORT || 5001

app.use(express.json());
app.use(colors());
app.use(
    express.urlencoded({
        extended: true;
    })
)


app.listen(port, () => {
    console.log('Server is running.'.bgGreen, port);



});