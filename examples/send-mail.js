const mailcheck = require('onlinecheckwriter-mailcheck')
var bank_account_data = {account_number: "99999", routing_number: "111111111" }
var payee_data = {
    "name": "Alison Gambala"
    ,"address_line_1": "95113 mark street rod"
    ,"address_line_2": ""
    ,"address_city":"Sanjose"
    ,"address_state":"CA"
    ,"address_zip":"95113"
    ,"email":"email@test.com"
    ,"phone":"900244400"
}
 
mailcheck.setToken("G5LoP94QISpOvk6i072yXDFBPwSjRS01foqlYPdVdYJ7li2NRkvzuHvYIzif");
mailcheck.setEnviorment("SANDBOX");
 
bank_account = mailcheck.getBankAccountId(bank_account_data)
payee        = mailcheck.createPayee(payee_data);
 
var check_data ={
    "amount": "500"
    ,"memo": "First, Test check using API"
    ,"note": ""
    ,"bank_account":bank_account.id
    ,"to":payee.id
}
 
check = mailcheck.createCheck(check_data);
 
mail_data = {
    "id": check.id,
    "mail_type": 4
}
 
sent_mail = mailcheck.sentMail(mail_data);
 
console.log(sent_mail);
 