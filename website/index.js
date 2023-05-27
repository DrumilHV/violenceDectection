//jshint esversion:6

//getting all the packages and requiring them in the app
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require('lodash');

const mongoose = require("mongoose");
mongoose.set('strictQuery', true)

//connecting the mongodb server local as of now 
// mongoose.connect("mongodb://localhost:27017/posts", { useNewUrlParser: true });
// mongoose.connect("mongodb+srv://drumil:test-123@cluster0.uozmspq.mongodb.net/blogs?retryWrites=true&w=majority", { useNewUrlParser: true });
url = "mongodb+srv://drumilhved:UeehFzfxWB2aQ8IE@aimodel.kic8on4.mongodb.net/?retryWrites=true&w=majority"
db = mongoose.connect(url, { useNewUrlParser: true });
// some more setting up of the requred variables

const app = express();
var posts = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// starting of the app varialbes 
// const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
// const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
// const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// Setting up the post Schema of the mongoose server
// const CctvData = new mongoose.Schema({
  
// });
//making the modle which will help us cerate new post variable 

// const Post = mongoose.model('post', PostSchema);

// //making consnt for carrig the id of the created post 
// app.post("/", function (req, res) {
//   // pushing the newly made post to the posts Array which will render the 

//   const post = new Post({
//     postBody: req.body.description,
//     postTitle: req.body.title
//   });
//   if(post.postTitle != ""){
//     post.save();
//     posts.push(post);
//     res.redirect("/");
//   }else{
//     res.send("<h1>Plese add a title for the post!!</h1>");
//   }
// });

// app.get("/about", function (req, res) {
//   res.render("about", { aboutContentEjs: aboutContent });
// });
// app.get("/contact", function (req, res) {
//   res.render("contact", { contactContentEjs: contactContent });
// });
// app.get("/compose", function (req, res) {

//   res.render("compose", {});

// });

// // Populating the array posts by fetching the data from the database
// Post.find({}, function (err, postArryFromDB) {
//   if (err) {
//     console.log(err);
//   } else {
//     posts = postArryFromDB;
//   }
// });
// app.get("/", function (req, res) {

//   res.render("home", { homeStartingContentEjs: homeStartingContent, postsArray: posts });
//   // db.getCollection('Posts').updateMany({postTitle: ""},{$set: {postTitle: "Post Title do not exist now."}});
//   Post.updateMany({postTitle: ""},{$set: {postTitle: "The post title don't exist"}});
// });
// //Finding the post 
// app.get("/post/:topic/:id", function (req, res) {
//   console.log(req.params.topic);
//   // const requestedId = req.body.requestId;
//   // console.log(requestedId);
//   Post.findById({_id: req.params. id},function(err,post){
//     if(err){
//       console.log(err);
//     }else{
//       res.render("post", { postPageBody: post.postBody, postPageTitle: post.postTitle });
//     }
//   })
//   // posts.forEach(function (post) {
//   //   if (lodash.lowerCase(post.postTitle) === lodash.lowerCase(req.params.topic)) {

//   //     res.render("post", { postPageBody: post.postBody, postPageTitle: post.postTitle });

//   //   } else {
//   //     // res.send("<h1> The page you are trying to find is not found. error 404.</h1> ");
//   //   }
//   // });
// });
securityData = []
mongoose.connection.on('open',function(err,db){
    if(err){return console.log(err)}
    var collection = mongoose.connection.collection('sample');

    collection.find({},function(err,dataArray){
      if (err) {
        console.log(err);
      } else {
        console.log(dataArray)
        securityData = dataArray;
      }
    })
})


console.log(securityData)


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {

  console.log("Server started on ",port,"!");

});
