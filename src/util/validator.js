function validatorUrl(userInput){
    let validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(userInput)
    return validUrl
}


export default validatorUrl