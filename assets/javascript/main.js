
  var config = {
    apiKey: "AIzaSyAnxU2eeqjN-8np20gEjDRa-GirKFlAawQ",
    authDomain: "datamanagement-ed57c.firebaseapp.com",
    databaseURL: "https://datamanagement-ed57c.firebaseio.com",
    projectId: "datamanagement-ed57c",
    storageBucket: "",
    messagingSenderId: "324306766735"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit").on("click", function(){
      var name1 = $("#name").val();
      var role1 = $("#role").val();
      var rate1 = $("#rate").val();
      console.log(name1);
      database.ref().push({
          name: name1,
          role: role1,
          rate: rate1
      })
  })

//   database.ref().on("click", function(snapshot){

//   })
 