(function() { // IIFE

    let submitButton = document.querySelector('input[name="submit"]')
    let resetButton = document.querySelector('input[name="reset"]')

    let isNameErrorVisible = document.getElementById('nameError')
    let isEmailErrorVisible = document.getElementById('emailError')
    let isTitleErrorVisible = document.getElementById('titleError')
    let isPhoneNumberErrorVisible = document.getElementById('phoneNumberError')
    let isMessageErrorVisible = document.getElementById('messageError')
    let isDemoHumanErrorVisible = document.getElementById('demoHumanError')

            // Line 13 is for submitting form to server.
            // If the form is good, it's gonna be submitted. 
            // Since we are using only JS here, i'm gonna comment it for now.
            // document.getElementById('contactForm').addEventListener('submit', validateForm)

    // Setting event listeners for form submit and clear
    submitButton.addEventListener('click', validateForm)

    // Clearing whole form
    resetButton.addEventListener('click', function() {
        
        // Clearing input values
        document.querySelector('.name').value = ''
        document.querySelector('.email').value = ''
        document.querySelector('.title').value = ''
        document.querySelector('.phoneNumber').value = ''
        document.querySelector('.message').value = ''

        // Clearing displayed errors
        isNameErrorVisible.style.display = 'none'
        isEmailErrorVisible.style.display = 'none'
        isTitleErrorVisible.style.display = 'none'
        isPhoneNumberErrorVisible.style.display = 'none'
        isMessageErrorVisible.style.display = 'none'
        isDemoHumanErrorVisible.style.display = 'none'

    })
    
    // Main form validation function
    // Triggers on click event
    function validateForm(event) {

        // Preventing form from submitting
        // event.preventDefault()

        showHideErrorMsg(
            validateName(), 
            validateEmail(), 
            validateTitle(), 
            validatePhoneNumber(), 
            validateMessage(), 
            validateDemoHuman(), 
            event
        )
        
    }

    // Function for displaying error elements, according to validate functions output
    // If validate functions return 'false' than we show specific error message, otherwise we hide it
    function showHideErrorMsg(isNameGood, isEmailGood, isTitleGood, isPhoneNumberGood, isMessageGood, isCbGood, event) {
        
        // Array for putting 'dummy' error messages that are not displayed anywhere
        // but used just as check if there are any errors
        let errArr = []

        // Name bool check
        if(!isNameGood) {

            isNameErrorVisible.style.display = 'flex'
            errArr.push('Name err')
        } else {

            isNameErrorVisible.style.display = 'none'
        }

        // E-mail bool check
        if(!isEmailGood) {

            isEmailErrorVisible.style.display = 'flex'
            errArr.push('Email err')
        } else {

            isEmailErrorVisible.style.display = 'none'
        }

        // Title bool check
        if(!isTitleGood) {

            isTitleErrorVisible.style.display = 'flex'
            errArr.push('Title err')
        } else {

            isTitleErrorVisible.style.display = 'none'
        }

        // Phone Number bool check
        if(!isPhoneNumberGood) {

            isPhoneNumberErrorVisible.style.display = 'flex'
            errArr.push('Phone number err')
        } else {

            isPhoneNumberErrorVisible.style.display = 'none'
        }

        // Message bool check
        if(!isMessageGood) {
            
            isMessageErrorVisible.style.display = 'flex'
            errArr.push('Message err')
        } else {
            
            isMessageErrorVisible.style.display = 'none' 
        }

        // Cb bool check
        if(!isCbGood) {

            isDemoHumanErrorVisible.style.display = 'flex'
            errArr.push('Human demo err')
        } else {

            isDemoHumanErrorVisible.style.display = 'none'
        }

        // With this if we are checking if we should let form be submitted
        // For now we are gonna prevent submitting
        if(errArr.length > 0) event.preventDefault()
        
        // For form submission just uncomment line 134 and comment out line 133
        event.preventDefault()
        // return true

    }

    // Name validation
    function validateName() {

        let contactName = document.querySelector('.name')
        let regex = /^([A-Z])\w+?/
        let errorParagraph = document.querySelector('.nameErrorTxt')
        const testRegex = regex.test(contactName.value)

        // Checking if name input is empty
        if(contactName.value === '') {

            errorParagraph.innerHTML = 'Let me know who you are!'
            return false
        }

        // If "testRegex" return false, that reg. exp. do not match with user input
        // So we are gonna throw error
        if(!testRegex) {

            errorParagraph.innerHTML = 'First letter needs to be capitalized!'
            return false
        }

        return true
    }

    // E-mail validation
    function validateEmail() {

        let contactEmail = document.querySelector('.email')
        let regex = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/
        let errorParagraph = document.querySelector('.emailErrorTxt')
        const testRegex = regex.test(contactEmail.value)

        // Checking if email input is empty
        if(contactEmail.value === "") {

            errorParagraph.innerHTML = 'Write down your e-mail address so i could reply to you!'
            return false
        }

        // If "testRegex" return false, that reg. exp. do not match with user input
        // So we are gonna throw error
        if(!testRegex) {

            errorParagraph.innerHTML = 'Wrong e-mail format. E.g. "example1@domain.com"!'
            return false
        }

        return true
    }

    // Title validation
    function validateTitle() {

        let contactTitle = document.querySelector('.title')
        let regex = /^([A-Z])\w+?/
        let errorParagraph = document.querySelector('.titleErrorTxt')
        const testRegex = regex.test(contactTitle.value)

        // Checking if title input is empty
        if(contactTitle.value === '') {

            errorParagraph.innerHTML = 'You skipped title. Write simple and short one!'
            return false
        }

        // If "testRegex" return false, that reg. exp. do not match with user input
        // So we are gonna throw error
        if(!testRegex) {

            errorParagraph.innerHTML = 'Please capitalize your first letter, just to make it look more formal!'
            return false
        }

        return true
    }

    // Phone number validation
    function validatePhoneNumber() {

        let contactPhoneNumber = document.querySelector('.phoneNumber')
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        let errorParagraph = document.querySelector('.phoneNumberErrorTxt')
        const testRegex = regex.test(contactPhoneNumber.value)

        // Checking if phone number input is empty
        if(contactPhoneNumber.value === '') {

            errorParagraph.innerHTML = 'Enter your phone number!'
            return false
        }

        // If "testRegex" return false, that reg. exp. do not match with user input
        // So we are gonna throw error
        if(!testRegex) {

            errorParagraph.innerHTML = 'Wrong phone number format. E.g. "+31636363634" or "1234567890"!'
            return false
        }

        return true
    }

    // Message validation
    function validateMessage() {

        var contactMessage = document.querySelector('.message')
        let errorParagraph = document.querySelector('.messageErrorTxt')

        // Checking if message is empty
        if(contactMessage.value === "") {

            errorParagraph.innerHTML = 'Come on, tell me at least something! What is on your mind?'
            return false
        }

        // If message has 10 or less characters than we throw error
        if(contactMessage.value.length < 10) {

            errorParagraph.innerHTML = 'Tell me a little bit more... ,at least 10 characters!'
            return false
        }

        return true
    }

    function validateDemoHuman() {
        var humanDemo = document.querySelector('.demoHuman')
        let errorParagraph = document.querySelector('.demoHumanErrorTxt')

        if(!humanDemo.checked) {
            
            // error 
            errorParagraph.innerHTML = 'Human check!'
            return false
        }

        return true
    }
})()