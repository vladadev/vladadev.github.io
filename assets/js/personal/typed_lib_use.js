// Using typed.js library
(function() { // IIFE
    
    let landingPageNode = document.querySelector('.landingAutoInput')
    let aboutPageNode = document.querySelector('.aboutAutoInput')

    // If node exists than we start using typed.js
    if(isInPage(landingPageNode)) {

        typedReusable([
            'Vladimir Mijajlović',
            'Web Developer',
        ], 100, 100, true, '.landingAutoInput')
    }
    if(isInPage(aboutPageNode)) {

        typedReusable([
            'Author'
        ], 100, 100, false, '.aboutAutoInput')
    }

    // I'm gonna use this file inside multiple html files
    // so i have to check if specific node exists in the current DOM
    function isInPage(node) {

        // Returns true if node exists
        return (node === document.body) ? false : document.body.contains(node);
    }

    /* ***********************
        Function 'typedReusable' accepts 5 parametters:
        1. Array of strings that you want to loop over.
        2. Type Speed in miliseconds.
        3. Back Speed in miliseconds.
        4. True if you want it to repeat constantly or false otherwise.
        5. Element node where you want to display strings. E.g. '.element'.
    */
            /*
                If we want to make this function more adjustable
                just make it accept only two parameteres 
                from which first one is already existing (array of strings), 
                and second one would be new array where we can add as much properties as we want
                than repeat concept of adding those new arr elements to obj properties in function expression
            */
    function typedReusable([...strings], typeSpeed, backSpeed, loop, element) {

        let options = {
            strings: [],
            typeSpeed,
            backSpeed,
            loop
        }

        // Going through strings arr that we got from outside
        for(let i = 0; i < strings.length; i++) {

            // Adding every element of that array to our 'strings' property of 'options' object
            options.strings.push(strings[i])
        }
        
        let typed = new Typed(element, options)

    }

})()