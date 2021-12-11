(function() { // IIFE

    // Dummy array with objects containing project info
    const dummyProjects = [
        {
            title: 'FreshShop',
            description: 'FreshShop is online clothes store. You are able to search products, pick one and add it to cart. The main accent of this project is on Admin pannel where admins have complete control over the website.',
            src: 'images/.jpg',
            hrefs: {
                href: 'landing.html',
                hrefGit: 'https://github.com/vladadev/freshshop',
                hrefLive: '',
            },
            alts: {
                alt: 'Project #1',
                altGit: 'Check project #1',
            },
            author: '',
            projInfo: 'Project will be hosted and available live soon! In meantime you can check project on my github repository!',
            exists: true
        },
        {
            title: 'Calculator Calcy',
            description: 'Simple calculator made with Vanilla JS.',
            src: 'images/.jpg',
            hrefs: {
                href: 'http://calcy.space/',
                hrefGit: 'https://github.com/vladadev/calculator',
                hrefLive: 'http://calcy.space/'
            },
            alts: {
                alt: 'Project #2',
                altGit: 'Check project #2',
            },
            author: '',
            projInfo: '',
            exists: true
        },
        {
            title: 'My Project #3',
            description: 'Space for my next project',
            src: 'images/.jpg',
            hrefs: {
                href: 'landing.html',
                hrefGit: '',
                hrefLive: '',
            },
            alts: {
                alt: 'Project #3',
                altGit: 'Check project #3',
            },
            author: '',
            projInfo: 'TBD',
            exists: true
        },
        {
            title: 'My Project #4',
            description: 'Space for my next project',
            src: 'images/.jpg',
            hrefs: {
                href: 'landing.html',
                hrefGit: '',
                hrefLive: '',
            },
            alts: {
                alt: 'Project #4',
                altGit: 'Check project #4',
            },
            author: '',
            projInfo: 'TBD',
            exists: false
        },
        {
            title: 'My Project #5',
            description: 'Space for my next project',
            src: 'images/.jpg',
            hrefs: {
                href: 'landing.html',
                hrefGit: '',
                hrefLive: '',
            },
            alts: {
                alt: 'Project #5',
                altGit: 'Check project #5',
            },
            author: '',
            projInfo: 'TBD',
            exists: false
        },
        {
            title: 'My Project #6',
            description: 'Space for my next project',
            src: 'images/.jpg',
            hrefs: {
                href: 'landing.html',
                hrefGit: '',
                hrefLive: '',
            },
            alts: {
                alt: 'Project #6',
                altGit: 'Check project #6',
            },
            author: '',
            projInfo: 'TBD',
            exists: false
        }
    ]

    // Returning true if node element exists within the page
    function isInPage(pageNode) {

        // Returns true if node exists
        return (pageNode === document.body) ? false : document.body.contains(pageNode);
    }

    // ** NOTE:
    // Here i had to use Vanilla JS selectors, because jQuery ones would not work in this case
    let homePageNode = document.querySelector('#main .homeProjects')
    let authorPageNode = document.querySelector('#main .slider')

    printProjects(dummyProjects, homePageNode, authorPageNode)

    // Printing projects
    function printProjects(projects, homePageNode, authorPageNode) {

        // In both 'if' statements if 'isInPage' fn returns true we print stuff in specified node element
        if(isInPage(homePageNode)) {

            let html = ''
            for (const prop in projects) {

                html += projectsHomeHtml(projects[prop])
            }
            $(homePageNode).html(html)
        }

        if(isInPage(authorPageNode)) {

            let html = ''
            for (const prop in projects) {

                html += projectsAuthorHtml(projects[prop])
            }
            $(authorPageNode).html(html)
        }
    }

    // Returning html code that should be displayed on home page
    function projectsHomeHtml(info) {
        return `
            <article>
                <span class="image">
                    <img src="${info.src}" alt="${info.alts.alt}" />
                </span>
                <header class="major">
                    <h3><a href="${info.hrefs.hrefLive}" class="link">${info.title}</a></h3>
                    <p class="description">${info.description}</p>

                    <div class="projectInfo">
                        ${projectExist(info)}
                    </div>
                    <i class="projInfo">${info.projInfo}</i>
                </header>
            </article>
        `
    }

    // Fn that returns project info buttons depending on their exist obj. property
    function projectExist(project) {

        // Projects that are live and ready for showcase
        if(project.exists) {

            let projectInfoHtml = ``

            if(project.hrefs.hrefGit === '') {

                projectInfoHtml += `
                    <li><a href="${project.hrefs.hrefGit}" class="icon brands alt fa-github fafa-disabled" alt="${project.alts.altGit}"><span class="label">GitHub</span></a></li>
                `
            } else {

                projectInfoHtml += `
                    <li><a href="${project.hrefs.hrefGit}" class="icon brands alt fa-github" target="_blank" alt="${project.alts.altGit}"><span class="label">GitHub</span></a></li>
                `
            }

            if(project.hrefs.hrefLive === '') {

                projectInfoHtml += `
                    <li><a href="${project.hrefs.hrefLive}" class="button primary small disabled" target="_blank">Live project</a></li>
                `
            } else {

                projectInfoHtml += `
                    <li><a href="${project.hrefs.hrefLive}" class="button primary small" target="_blank">Live project</a></li>
                `
            }

            return projectInfoHtml
        }
        
        // Non existant projects, that needs to be hosted and prepared for showcase, so we disable their github and live project buttons.
        return `
            <li><a href="${project.hrefs.hrefGit}" class="icon brands alt fa-github fafa-disabled" alt="${project.alts.altGit}"><span class="label">GitHub</span></a></li>
            <li><a href="${project.hrefs.hrefLive}" class="button primary small disabled" target="_blank">Live project</a></li>
        `
    }

    // Returning html code that should be displayed on author page
    function projectsAuthorHtml(info) {
        return `
        <div class="inner slides authorSlides">
        <header class="major">
            <h2>${info.title}</h2>
        </header>
        <p>${info.description}</p>
        <ul class="actions">
            <li><a href="index.html#one" alt=${info.alts.alt} class="button next">Checkout my projects again! :)</a></li>
        </ul>
    </div>
        `
    }
})()