//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBP7Y9jI-WExsrLmjS3gjMa-KBCr7S_bBY",
      authDomain: "kwitter-40595.firebaseapp.com",
      databaseURL: "https://kwitter-40595-default-rtdb.firebaseio.com",
      projectId: "kwitter-40595",
      storageBucket: "kwitter-40595.appspot.com",
      messagingSenderId: "52533284735",
      appId: "1:52533284735:web:27f94422e0bffc1d49944a"
    };
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name : user_name , message : msg , like : 0
        }) ;
        document.getElementById("msg").value = "" ;
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
