let data

const menuIcon = document.getElementById('menu-icon')
const mainMenu = document.getElementById('menu')
const li = mainMenu.querySelectorAll('li')
const form = document.forms['contact-form']

menuIcon.addEventListener('click', () => mainMenu.classList.toggle('menu-active'))

function popMessage(type, message) {
    const markup = `
    <div class="popMsg ${type}">
        <img src="./img/icon.alert.svg" alt="( ! )" />
        <p class="message">${message}</p>
    </div>
    `

    document.body.insertAdjacentHTML('beforeend', markup)

    setTimeout(() => {
        document.querySelector('div.popMsg').remove()
    }, 3500)
}

form.addEventListener('submit', e => {
    e.preventDefault()
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw_gid1l0q4s8G_wvBQ8-R8QLlDy48ZL37SJfgXreRpJzZMx6ae7HUrN-0Bv-HABS9Y/exec'
    let lang = document.body.getAttribute('lang')
    let message

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        message = lang === 'id' ? 'Pesan berhasil dikirim!' : 'Message sent successfully!'
        popMessage('success', message)
        form.reset()
    })
    .catch(error => {
        message = lang === 'id' ? 'Pesan tidak berhasil dikirim!' : 'Message was not sent successfully!'
        popMessage('alert', message)
        console.error('Error!', error.message)
    })
})

function setNav(lang) {
    //NAVBAR
    const menus = document.querySelectorAll('ol li a')
    const langIcon = document.querySelector('ol li img')
    const langIconMobile = document.querySelector('img.lang')

    menus[0].innerText = data[lang].nav.item[0]
    menus[1].innerText = data[lang].nav.item[1]
    menus[2].innerText = data[lang].nav.item[2]
    menus[3].innerText = data[lang].nav.item[3]
    langIcon.setAttribute('src', `./img/${document.body.getAttribute('lang')}.png`)
    langIconMobile.setAttribute('src', `./img/${document.body.getAttribute('lang')}.png`)

    //FOOTER
    const navigationLinks = document.querySelector('div#navigationLinks')

    navigationLinks.querySelector('h4').innerText = data[lang].nav.title
    const navigationLi = navigationLinks.querySelectorAll('li')
    navigationLi[0].innerText = data[lang].nav.item[0]
    navigationLi[1].innerText = data[lang].nav.item[1]
    navigationLi[3].innerText = data[lang].nav.item[3]
}

function setHeader(lang) {
    const div = document.body.querySelector('header div')

    div.innerHTML = `
        <h1>${data[lang].greeting.h1}<span>Rahma Maulida</span></h1>
        <h3>Fresh Graduate | Web Developer | Software Developer</h3>
        <p>${data[lang].greeting.bio}</p>
        <a href="#contact"><button class="btn">${data[lang].greeting.button}</button></a>
    `
    // header.insertAdjacentElement('afterbegin', content)
}

function setAbout(lang) {
    const section = document.body.querySelector('section#about')
    const title = section.querySelector('h2')
    const desc = section.querySelector('p')

    title.innerText = data[lang].about.title
    desc.innerText = data[lang].about.desc

    const skills = section.querySelectorAll('div.skill')

    skills[0].querySelector('h3').innerText = data[lang].about.skills.title
    skills[0].querySelector('ul').innerHTML = ''
    data[lang].about.skills.item.map(item => {
        skills[0].querySelector('ul').insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    })

    skills[1].querySelector('h3').innerText = data[lang].about.softwares.title
    skills[1].querySelector('ul').innerText = ''
    data[lang].about.softwares.item.map(item => {
        skills[1].querySelector('ul').insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    })

    const certificates = section.querySelector('div.certificates')
    certificates.querySelector('h3').innerText = data[lang].about.certificates.title
    certificates.querySelector('ul').innerHTML = ''

    data[lang].about.certificates.item.map(item => {
        certificates.querySelector('ul').insertAdjacentHTML('beforeend', `<li>${item}</li>`)
    })
}

function setProjects(lang) {
    const section = document.querySelector('section#portfolio')
    const title = section.querySelector('h2')
    const cards = section.querySelector('div.cards')

    title.innerText = data[lang].projects.title
    cards.innerHTML = ''

    data[lang].projects.item.map(item => {
        const innerHTML = `
            <div class="card">
                <img src="${item.imgUrl}" alt="project-img" />
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `
        cards.insertAdjacentHTML('beforeend', innerHTML)
    })
}

function setBlog(lang) {
    const section = document.querySelector('section#blog')
    const title = section.querySelector('h2')
    const cards = section.querySelector('div.cards')

    title.innerText = data[lang].blogs.title
    cards.innerHTML = ''

    data[lang].others.item.map(item => {
        const innerHTML = `
            <div class="card">
                <img src="${item.imgUrl}" alt="article-img" />
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `
        cards.insertAdjacentHTML('beforeend', innerHTML)
    })
}

function setOthers(lang) {
    const section = document.querySelector('section#others')
    const title = section.querySelector('h2')
    const cards = section.querySelector('div.cards')

    title.innerText = data[lang].others.title
    cards.innerHTML = ''

    data[lang].others.item.map(item => {
        const innerHTML = `
            <div class="card">
                <img src="${item.imgUrl}" alt="article-img" />
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `
        cards.insertAdjacentHTML('beforeend', innerHTML)
    })
}

function setContact(lang) {
    const section = document.querySelector('section#contact')
    const title = section.querySelector('h2')
    const labels = section.querySelectorAll('label')
    const button = section.querySelector('button')

    title.innerText = data[lang].contact.title

    for (let i in labels) {
        labels[i].innerText = data[lang].contact.labels[i]
    }

    button.innerText = data[lang].contact.button
}

function setLangId() {
    if (document.body.getAttribute('lang') === 'id') {
        document.body.setAttribute('lang', 'en')
    }

    else {
        document.body.setAttribute('lang', 'id')
    }
    localStorage.setItem('lang', document.body.getAttribute('lang'))
}

function setContent(lang) {
    setNav(lang)
    setHeader(lang)
    setAbout(lang)
    setProjects(lang)
    setOthers(lang)
    setContact(lang)
}

async function init() {
    await fetch('./data.json')
        .then(res => res.json())
        .then(d => data = d)
        .catch(err => console.log(err))
    
    // const lang = localStorage.getItem('lang')

    // if (lang) {
    //     document.body.setAttribute('lang', lang)
    // }

    // else {
    //     document.body.setAttribute('lang', 'id')
        // localStorage.setItem('lang', 'id')
    // }

    localStorage.setItem('lang', 'id')

    const btnLang = document.querySelectorAll('#lang')
    btnLang.forEach(btn => {
        btn.addEventListener('click', () => {
            setLangId()
            setContent(document.body.getAttribute('lang'))
        })
    })

    const li = document.querySelectorAll('ol li')

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', () => mainMenu.classList.toggle('menu-active'))
    }

    setContent('id')
}