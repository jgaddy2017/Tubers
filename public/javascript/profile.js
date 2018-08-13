let data = {
    name: 'John Smith Gaddy',
    userName:"userone",
    password: "userOne",
    blogPosts: [
        {
            userName: "Jim5",
            description: "video Two",
            youTubeUrl: "https://www.youtube.com/watch?v=S_dfq9rFWAE"
        },
        {
            userName: "Bob6",
            description: "video Three",
            youTubeUrl: "https://www.youtube.com/watch?v=fmHV0aTkLZA"
        },
        {
            userName: "Jim5",
            description: "video Four",
            youTubeUrl: "https://www.youtube.com/watch?v=4EoUz39nPMM"
        },
        {
            userName: "Me3",
            description: "video Five",
            youTubeUrl: "https://www.youtube.com/watch?v=eMEH6LG9_iQ"
        },
        {
            userName: "someOtherGuy",
            description: "video Six",
            youTubeUrl: "https://www.youtube.com/watch?v=xK23RHXXlJ4"
        }
    ],
    friends: [
      'Jim5', 'Bob6', 'Me3', 'SomeOtherGuy'
    ]
  }



let allTubers = ['asdf5', 'qwer', 'tyui76', 'rfvtgy54', 'ryuyui89'];

function loadYouTubePost(){

    let displayPosts = data.blogPosts.map(post => {

    let embedPlayer = post.youTubeUrl.replace("watch?v=", "embed/");
    return `<div class="post-container section-containers">\
                <p class="post-userName">${post.userName}</p>\
                <p class="post-description">${post.description}</p>\
                <iframe class="post-video" width="90%" height="60%"\
                    frameborder="0"\
                    src="${embedPlayer}" allowfullscreen></iframe>\
                </div>`;
    });
    $('.load-container').html(displayPosts);

}
function closingModel(){
    $('.modal-content').on('click', '.close', function(event){
        console.log("working");
        $('#myModal').css("display", "none");   
    });
}

function handleMyTubers(){
    $('.my-tubers').on('click', function(event){
        displayMyTubers();
        $('#myModal').css("display", "block");
    });
}
function handleFindTubers(){
    $('.find-tubers').on('click', function(event){
        displayFindTubers();
        $('#myModal').css("display", "block");
    });
}
function handleUploadNew(){
    $('.upload-new').on('click', function(event){
        displayUploadNew();
        $('#myModal').css("display", "block");
    });
}

function displayFindTubers(){
    const findTubers = allTubers.map(tubers => {
        return `<div class="user-box">
                    <p class="username-tag">${tubers}</p>
                    <button class="user-add-button">Add</button>
                </div>`;
    });
    $('.inner-modal').html(findTubers);
    $('.modal-title').html('Find Tubers');
}
function displayUploadNew(){
    const uploadForm = `<div>
                            <form class="upload-form">
                                <label class="form-upload-label">Description</label>
                                <input type="text" class="upload-description form-upload-input">
                                <label class="form-upload-label">Youtube Url</label>
                                <input type="text" class="upload-url form-upload-input">
                                <button type="submit" class="submit-upload">Submit upload</button>
                            </form>
                        <div>`;
    $('.inner-modal').html(uploadForm);
    $('.modal-title').html("Upload New");            
}

function displayMyTubers(){
    const myTubers = data.friends.map(friend => {
        return `<div class="user-box">
                    <p class="username-tag">${friend}</p>
                    <button class="user-remove-button">Remove</button>
                </div>`;
    });
    $('.inner-modal').html(myTubers);
    $('.modal-title').html('My Tubers');
}

function handleAddTuber(){
    $('.inner-modal').on('click', '.user-add-button', function(event){
        event.stopPropagation();
        const user = $(event.target).closest('.user-box').find('.username-tag').text();
        data.friends.push(user);
        const indexOfUser = allTubers.indexOf(user);
        allTubers.splice(indexOfUser, 1);
        $(event.target).removeClass('user-add-button').addClass('user-remove-button');
        $(event.target).text("Remove");
    });
}
function handleRemoveTuber(){
    $('.inner-modal').on('click', '.user-remove-button', function(event){
        event.stopPropagation();
        const user = $(event.target).closest('.user-box').find('.username-tag').text();
        allTubers.push(user);
        const indexOfUser = data.friends.indexOf(user);
        data.friends.splice(indexOfUser, 1);
        $(event.target).removeClass('user-remove-button').addClass('user-add-button');
        $(event.target).text("Add");
    });
}
function handleUploadForm(){
    $('#myModal').on('submit', '.upload-form', function(event){
        event.preventDefault();
        const description = $('.upload-description').val();
        const youtubeUrl = $('.upload-url').val();
        const userUpload = {
            userName: data.userName,
            description: description,
            youTubeUrl: youtubeUrl
        }
        data.blogPosts.push(userUpload);
        console.log(data.blogPosts);
        loadYouTubePost();
    });
    
}







function startProfilePage(){
    loadYouTubePost();
    handleMyTubers();
    handleFindTubers();
    handleUploadNew();
    closingModel();
    handleAddTuber();
    handleRemoveTuber();
    handleUploadForm();
}


  $(startProfilePage);