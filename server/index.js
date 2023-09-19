const express = require("express");
require("./database/connect");
const ToDo = require("./model/todo");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/addtodo", async (req, resp) => {
  let data = await ToDo(req.body);
  let result = await data.save();
  resp.send(result);
});

app.get("/addtodo", async (req, resp) => {
  let data = await ToDo.find({});
  if (data.length > 0) {
    resp.send(data);
  } else {
    resp.send({ result: "no todo available" });
  }
});

app.put("/addtodo/:id", async (req, resp) => {
  let data = await ToDo.updateOne({ _id: req.params.id }, { $set: req.body });
  resp.send(data);
});

app.delete("/addtodo/:id", async (req, resp) => {
  let data = await ToDo.deleteOne({ _id: req.params.id });
  resp.send(data);
});

app.get("/addtodo/:id", async (req, resp) => {
  let data = await ToDo.findOne({ _id: req.params.id });
  if (data.length > 0) {
    resp.send(data);
  } else {
    resp.send({ result: "no todo available" });
  }
});

app.listen(port, () => console.log(`app listening on port ${port}`));
