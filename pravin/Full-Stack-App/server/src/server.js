import app from "./app.js";
import Database from "./DB/Database.js";

const { PORT, URI } = process.env;

app.get("/", (req, res) => {
  res.send("Pravin chaudhary");
});

const Server = async (URI) => {
  try {
    await Database(URI);
     app.listen(PORT, () => {
      console.log(`⚙  Server is Running... At Port : ${PORT}`);
    });
  } catch (error) {
    console.log("Server Connection Error : ", error);
    process.exit(1);
  }
};

if(URI){
    Server(URI)
}else{
    console.log("Please Define Envirement Veriable ?")
}
