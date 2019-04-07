(function() {
	
	//initialize firebase

	const config = {
		    apiKey: "AIzaSyAb5Sttnf12dzqWINrvk0ta0kNaA9p9Knc",
		    authDomain: "haven-347a1.firebaseapp.com",
		    databaseURL: "https://haven-347a1.firebaseio.com",
		    projectId: "haven-347a1",
		    storageBucket: "haven-347a1.appspot.com",
		    messagingSenderId: "302635703016",
		  };

		  firebase.initializeApp(config);

		  //Get elements
		  const txtEmail = document.getElementById('txtEmail');
		  const txtPassword = document.getElementById('txtPassword');
		  const btnLogin = document.getElementById('btnLogin');
		  const btnSignUp = document.getElementById('btnSignUp');
		  const btnLogout = document.getElementById('btnLogout');

		  //Add login event
		  btnLogin.addEventListener('click', e=> {
 
		  	const email = txtEmail.value;
		  	const pass = txtPassword.value;
		  	const auth = firebase.auth();

		  	const promise = auth.signInWithEmailAndPassword(email,pass);
			if(promise.catch( e=> alert(e.message)))
			{
				// promise.catch( e=> alert(e.message));
			}
			else{
				alert("You have successfully logged in!")
			}
		  });

		  //Add signup event
		  btnSignUp.addEventListener('click', e=>{
		  	// TODO: Check 4 real emails
		  	const email = txtEmail.value;
		  	const pass = txtPassword.value;
		  	const auth = firebase.auth();

		  	const promise = auth.createUserWithEmailAndPassword(email,pass)
		  	if(promise.catch( e=> alert(e.message))){
				// promise.catch( e=> alert(e.message));
			  }
			else{
				alert("You have successfully signed up")
			}
		  });

		  btnLogout.addEventListener('click', e=> {
			  firebase.auth().signOut();
			  alert("You have successfully logged out!")
		  });

		  // Add a realtime listener
		  firebase.auth().onAuthStateChanged(firebaseUser => {
		  	if(firebaseUser){
		  		console.log(firebaseUser);
				btnLogout.classList.remove('hide');
		  	} else {
		  		console.log('not logged in');
		  		btnLogout.classList.add('hide');
		  	}

		  });

}());