

function displayLogInForm(){
    const logInForm = '<div class="section-containers log-sign-container">\
                <h2 class="form-header">Log In</h2>\
                <label class="form-label">Username</label>\
                <div class="input-div">\
                    <input type="text" class="username-log-in log-sign-input" >\
                </div>\
                <label class="form-label">Password</label>\
                <div class="input-div">\
                    <input type="password" class="password-log-in log-sign-input" >\
                </div>\
                <button type="submit" name="submit-log-in">Log In</button>\
                <div class="sign-in-question"><p>Dont have a log in?</p></div>\
            </div>';
    $('.log-sign-form').html(logInForm);
}
function handleLogInForm(){
    $('.log-sign-form').submit(function(event){
        event.preventDefault();
        const userName = $('.username-log-in').val();
        const passWord = $('.password-log-in').val();
        checkLogIn();
    });

}
function handleMoveToSignUpForm(){
    $('.log-sign-form').on('click', 'sign-in-question', function(event){

    });
}

function displaySignUpForm(){
    const logInForm = '<div class="section-containers log-sign-container">\
            <h2 class="form-header">Sign Up</h2>\
                <label class="form-label">Username</label>\
                <div class="input-div">\
                    <input type="text" class="username-log-in log-sign-input" >\
                </div>\
                <label class="form-label">Password</label>\
                <div class="input-div">\
                    <input type="password" class="passwod-log-in log-sign-input" >\
                </div>\
                <button type="submit" name="submit-log-in">Log In</button>\
                <div class="sign-in-question"><p>Dont have a log in?</p></div>\
            </div>';
    $('.log-sign-form').html(logInForm);
}
function handleSignUpForm(){

}


function checkLogIn(){
    console.log("this ran");
      $.ajax({
        method: "POST",
        url: "http://localhost:8080/",
        data: "json",
        success: function(){
            console.log("success");
        }
      });
}

function startApplication(){
    displayLogInForm();
    handleLogInForm();
}
//starts the application
$(startApplication());