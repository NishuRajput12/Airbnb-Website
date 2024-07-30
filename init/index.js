const mongoose = require("mongoose");
const initData =require("./data2.js");
const Listing = require("../models/listing.js");


const Mongo_URL="mongodb://127.0.0.1:27017/wanderlusts";

main()
.then(()=>{
  console.log("connected to Data base");
})
.catch((err) => {
  console.log(err)
});

async function main(){
  await mongoose.connect(Mongo_URL);
}
const initDB = async () => {
  await Listing.deleteMany({});
  initData.data =initData.data.map((obj)=>
    ({...obj,owner:"668f6dc94b5017344d797a3e"}));
  initData.data = initData.data.map((obj) => ({ ...obj, geometry: { type: 'Point', coordinates: [ 77.209006, 28.613895 ] },}))
   console.log("data was initialized");
   await Listing.insertMany(initData.data);
  
};
initDB();

