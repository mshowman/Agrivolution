const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-2",
    endpoint: 'dynamodb.us-east-2.amazonaws.com',

    accessKeyId: "AKIAJJVLOZWDXYXXADPA",

    secretAccessKey: "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"
});
var docClient = new AWS.DynamoDB.DocumentClient();
var deviceArray=new Array();


function getDevicesPerFarm(growareaid){

  var params = {
      TableName: "device",
      IndexName: "growareaid-index",
      KeyConditionExpression: "growareaid = :growareaid",
      ExpressionAttributeValues: {
              ":growareaid": growareaid
          }
  };
docClient.query(params,function(err,data){
  if (err) {
    console.log("readDBFailed:",err);
  }else {
    console.log("readDBSuccess",data.Items[0].devicename);
    readDevices(data);
  }
});

}

function readDevices(data){
  for (var variable in data.Items) {
    console.log(variable)
  var iotData= new AWS.IotData({endpoint:variable.devicelink});
  //add to a local array
  deviceArray.push(iotData);
  iotData.getThingShadow({thingName:variable.devicename},function(err,data){
    if (err) console.log(err, err.stack); // an error occurred
    else{
      console.log(data);
    }         // successful response
  });
  }
}


exports.handler=getDevicesPerFarm(growid);
