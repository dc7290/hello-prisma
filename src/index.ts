import fatify from "fastify";
import prisma from "@/lib";

const app = fatify({ logger: true, trustProxy: true });

app.get("/", async (request, reply) => {
  const post = await prisma.post.findMany();
  return { post };
});

const start = async () => {
  try {
    await app.listen(3000, "0.0.0.0");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
