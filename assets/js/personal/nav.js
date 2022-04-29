(function() { // IIFE

    let navMenu = $('#menu .links')
    let socialLinks = $('#footer .inner .socials')

    // Dummy array with objects containing nav menu info
    const dummyNavMenu = [
        {
            name: 'Home',
            href: 'index.html',
            alt: 'Home'
        },
        {
            name: 'Contact',
            href: 'index.html#contact',
            alt: 'Contact'
        }
    ]

    // Dummy array with objects containing footer social links info
    const dummyFooterSocials = [
        {
            name: 'Github',
            href: 'https://github.com/vladadev',
            alt: 'Github projects',
            fafa: 'fa-github'
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/vladimir-mijajlovic-a0235818b/',
            alt: 'LinkedIn profile',
            fafa: 'fa-linkedin-in'
        }
    ]
    
    printNavMenu(dummyNavMenu, navMenu)
    printSocialLinks(dummyFooterSocials, socialLinks)


    // Nav menu
    function printNavMenu(menu, printHere) {

        let html = ''
        for (const prop in menu) {

            html += navMenuHtml(menu[prop])
        }
        $(printHere).html(html)
    }

    function navMenuHtml(info) {
        return `
            <li><a href="${info.href}" alt="${info.alt}">${info.name}</a></li>
        `
    }

    // Footer social links
    function printSocialLinks(menu, printHere) {
        let html = ''
        for (const prop in menu) {

            html += socialLinksHtml(menu[prop])
        }
        $(printHere).html(html)
    }

    function socialLinksHtml(info) {
        return `
            <li><a href="${info.href}" alt="${info.alt}" class="icon brands alt ${info.fafa}"><span class="label">${info.name}</span></a></li>
        `
    }

})()