import { dbConnect } from "./dbConnect.js";

export function getAllCars(req, res) {
  //connect to db
  const db = dbConnect();
  // get all docs from cars collection
  db.collection("cars")
    .get()
    .then((collection) => {
      // reshape collecton to array
      const cars = collection.docs.map((doc) => doc.data());
      //send array to respone
      res.send(cars);
    })
    .catch((err) => res.status(500).send(err));
}
