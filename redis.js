const redis = require("redis");
const dotenv = require("dotenv");
dotenv.config();

const redisClient = () => {
  return redis.createClient({
    url: process.env.redis_url,
  });
};

const client = redisClient();
client.on("error", (err) => {
  console.log(err);
});
client.on("connect", () => {
  console.log("Connected to redis");
});
client.on("end", () => {
  console.log("redis connection ended");
});
client.on("SIGQUIT", () => {
  console.log("quit");
  client.quit();
});

module.exports = client;
