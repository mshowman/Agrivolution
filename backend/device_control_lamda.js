var AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-2",
    endpoint: 'dynamodb.us-east-2.amazonaws.com',

    accessKeyId: "AKIAJJVLOZWDXYXXADPA",

    secretAccessKey: "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
        topic: 'execute_business_rule',
        payload: "",
};

exports.handler = async (event, context, callback) => {
    var iotdata = new AWS.IotData({endpoint:event.endpoint});

    var businessRule=getBusinessRuleForFarm(event.farmid,event.growArea);

    //TODO compare data to buiness rule
    if(businessRule !== null){

    if(event.value>businessRule.maximum){
        params.payload=businessRule.maximum;


    }else if(event.value<businessRule.minimum){
         params.payload=businessRule.minimum;
    }else{
        params= null;
    }

    if(params!== null){
     iotdata.publish(params, function(err, data){
        if(err){
            console.log(err, err.stack);
        }
        else{
            console.log("success.....");
        }
    });
}
} else{
    console.log("Not data to Compare");
}

    return event ;
};

function getBusinessRuleForFarm(farmid,growArea){
    var table="businessRule";

    var params={
      TableName: table,
      Key: {
          "farmid" : farmid,
          "growArea": growArea
}
    };

   docClient.get(params,function(err,data){
  if (err) {
    console.log("failed To get Business rules");
    return null;
  }else {
      console.log(data);
    return data;
  }
});


}
