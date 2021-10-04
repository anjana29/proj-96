//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDl-Jy8oOXqIKVHWr5_SKjt0dwi_jxyAcY",
      authDomain: "class-94-8f3b8.firebaseapp.com",
      databaseURL: "https://class-94-8f3b8-default-rtdb.firebaseio.com",
      projectId: "class-94-8f3b8",
      storageBucket: "class-94-8f3b8.appspot.com",
      messagingSenderId: "1097584527598",
      appId: "1:1097584527598:web:24f972619cec081be9cbff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function logout(){
          localStorage.removeItem("roomname");
          localStorage.removeItem("username");
          window.location="index.html";
    }
    function send(){
          var msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
