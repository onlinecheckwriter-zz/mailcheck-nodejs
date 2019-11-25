var api_lkey = "";
var enviorment = "SANDBOX";

function setToken(token) {
  api_key = token;
}

function setEnviorment(value) {
  enviorment = value;
}

function sentRequest(resource_uri, data, request_method = "POST") {
  if (enviorment == "SANDBOX" || enviorment == "") {
    base_url = "https://sandbox.onlinecheckwriter.com/api/v2";
  }
  if (enviorment == "LIVE") {
    base_url = "https://app.onlinecheckwriter.com/api/v2";
  }

  if (api_key == "") {
    return "Api token not found";
  }

  var request = require("sync-request");
  var headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + api_key
  };

  var res = request(request_method, base_url + resource_uri, {
    json: data,
    headers: headers
  });

  response = JSON.parse(res.getBody("utf8"));
  return response;
}

function getBankAccountId(data) {
  return sentRequest("/bankaccount/getid", data);
}
function createPayee(data) {
  return sentRequest("/payee/create", data);
}
function createCheck(data) {
  return sentRequest("/check/create", data);
}
function sentMail(data) {
  return sentRequest("/mail/sent", data);
}

module.exports.setToken = data => setToken(data);
module.exports.setEnviorment = data => setEnviorment(data);
module.exports.getBankAccountId = data => getBankAccountId(data);
module.exports.createPayee = data => createPayee(data);
module.exports.createCheck = data => createCheck(data);
module.exports.sentMail = data => sentMail(data);
