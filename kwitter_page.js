var firebaseConfig = {
      apiKey: "AIzaSyAvw8ga4H2gbUUVFfvxIaOpdKde31BHJq0",
      authDomain: "kwitter--web-app.firebaseapp.com",
      databaseURL: "https://kwitter--web-app-default-rtdb.firebaseio.com",
      projectId: "kwitter--web-app",
      storageBucket: "kwitter--web-app.appspot.com",
      messagingSenderId: "140618419729",
      appId: "1:140618419729:web:bec01778959c2677782bb0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user name");
room_name = localStorage.getItem("room name");

function send() {
      msg = document.getElementById("Message").value;
      firebase.database().ref(room_name).push({
            Name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("Message").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                       
                        //End code
                  }
            });
      });
}
getData();

