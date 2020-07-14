function remoteApi(callback) {

    var response;
    var data;

    setTimeout(function(){
        response = "200 OK";
        data = "response From a remote server";
        console.log("Api call completed");
        callback(null, data, response);
    }, 500);

}

function apiCall() {

    remoteApi(function (err, data, response) {
        if (err != null) {
            console.log("something went wrong");
            return
        } else {
            console.log(data);
            console.log(response);
        }
    });
}

apiCall();
