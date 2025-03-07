import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {

  const { db } = await connectToDatabase();

  var reply = {}
  reply.userreply = JSON.parse(req.body);
  reply.userdata = {}
  reply.userdata.cookie = req.headers.cookie
  reply.userdata.userAgent = req.headers['user-agent']
  reply.userdata.contentType = req.headers['content-type']
  reply.userdata.lenguage = req.headers['accept-language']

  const mercado = await db
  .collection("estudio_mercado")
  .insertOne(reply)

  console.log(reply);

  function random() {
    return Math.random().toString(36).substr(2); // Eliminar `0.`
  };

  function token() {
    return random() + random() + random() + random() + random(); // Para hacer el token más largo
  };

  var value = req.headers.cookie === undefined? 'Bearer ' + token(): req.headers.cookie
  res.status(200).json({
    success: true,
    token: value,
  });
}