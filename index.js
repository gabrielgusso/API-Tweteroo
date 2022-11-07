import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())


const users = [
  {
    username: "bobesponja",
    avatar:
      "https://i.pinimg.com/564x/79/95/eb/7995ebe5a61d943b171d33ac7c73921b.jpg",
  }
]

const tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub",
  }
]

app.post("/sign-up", (req, res) => {
  if (!req.body.username || !req.body.avatar) {
    res.status(400).send("Todos os campos são obrigatórios")
    return
  }

  users.push(req.body)
  res.send("OK")
})

app.post("/tweets", (req, res) => {
  if (!req.body.username || !req.body.tweet) {
    res.status(400).send("Todos os campos são obrigatórios")
    return
  }

  tweets.push(req.body)
  res.send("OK")
})

app.get("/tweets", (req, res) => {
const completTweets = tweets.map((e) => {
const findAvatar = users.find((user) => user.username === e.username)
  return {
    username: e.username,
    tweet: e.tweet,
    avatar: findAvatar.avatar
  }
})
  res.send(completTweets)
})

app.listen(5000)
