# Onlinecheckwriter Check Mailing Api Nodejs Package


### Installation
```nodejs
npm i onlinecheckwriter-mailcheck --save
```

### Registration

#### Sandbox 

First, you will need to  create an account at [sandbox.onlinecheckwriter.com](https://sandbox.onlinecheckwriter.com) and obtain your Test  API Key.

Once you have created an account, you can access your API Keys from the [Developer Panel](https://sandbox.onlinecheckwriter.com/manage/developer/index).


#### Live Enviorment 

First, you will need to  create an account at [app.onlinecheckwriter.com](https://app.onlinecheckwriter.com) and obtain your Live  API Key.

Once you have created an account, you can access your API Keys from the [Developer Panel](https://app.onlinecheckwriter.com/manage/developer/index).


### Mail Type
- 1 = First Class Mail
- 2 = First Class with Tracking
- 4 = USPS Priority Mail
- 5 = USPS Express Mail
- 6 = Fedex express saver
- 11 = Fedex 2 days shipping
- 11 = Fedex Standard Overnight
- 13 = Fedex Priority Overnight


Sample Code:

```nodejs
const mailcheck = require('onlinecheckwriter-mailcheck')
mailcheck.setToken("G5LoP94QISpOvk6i072yXDFBPwSjRS01foqlYPdVdYJ7li2NRkvzuHvYIzif");
mailcheck.setEnviorment("SANDBOX");

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




```
