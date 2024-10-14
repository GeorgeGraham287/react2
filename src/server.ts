import express from "express";
import cors from "cors";
import flags from "./util/flags";

type Flag = {
  orientation: "horizontal" | "vertical";
  colors: string[];
  ratios: number[];
};

const app = express();

app.use(cors());

app.get("/flags/:flag", (req, res) => {
  const flag = flags[req.params.flag as keyof typeof flags] as Flag;
  res.send(flag);
});

app.get("/flags", (req, res) => {
  res.send(Object.keys(flags));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
