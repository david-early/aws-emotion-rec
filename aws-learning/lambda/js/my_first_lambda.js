var AWS = require("aws-sdk");
AWS.config.update({region: 'eu-west-1'})

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config);
  }
});

var lambda = new AWS.Lambda();
var params = {
    FunctionName: 'my-function',
    Payload: JSON.stringify({"greeting": "Hello there, general kenobi"})
}

lambda.invoke(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });