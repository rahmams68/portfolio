const data = {
    id: {
        nav: {
            title: 'Tautan',
            item: ['Tentang Saya', 'Portofolio', 'Lainnya', 'Kontak', 'Resume']
        },

        articles: {
            title: 'Artikel',
            item: [
                {
                    title: 'Tulisan',
                    url: ''
                },

                {
                    title: 'Tulisan',
                    url: ''
                }
            ]
        },

        greeting: {
            h1: 'Halo 👋, saya ',
            bio: 'Seorang fresh graduate yang antusias pada bidang IT, bersemangat untuk berkontribusi dalam lingkungan IT yang dinamis dan inovatif sambil terus belajar dan berkembang secara profesional.',
            button: 'Hubungi Saya'
        },
        
        about: {
            title: 'Tentang Saya',
            desc: 'Seorang fresh graduate lulusan D4 Teknik Informatika di Politeknik Negeri Jakarta dengan 6 bulan pengalaman internship sebagai Software Engineering. Dengan background tersebut, saya mampu menganalisis kebutuhan suatu aplikasi, melakukan desain sistem, mengembangkan aplikasi fullstack web, mendesain sistem database, serta mendesain UI/UX aplikasi. Saya familiar dengan SDLC (Software Development Life Cycle) serta proses pengujian menggunakan black-box testing.',
            skills: {
                title: 'Skill',
                item: [
                    'Analisis & Problem Solving',
                    'Komunikasi & Team Work',
                    'Familiar dengan SDLC (Agile, Scrum, Waterfall)',
                    'Pemrograman dengan HTML, CSS, JavaScript, NodeJS',
                    'Desain sistem (DFD, UML, ERD)',
                    'Desain UI/UX',
                    'Database Management System MySQL, PostgreSQL'
                ]
            },
            softwares: {
                title: 'Software',
                item: ['Visual Studio Code', 'Git & Github', 'Postman', 'Trello', 'Figma', 'Microsoft Office (Word, Excel, PowerPoint)']
            },
            certificates: {
                title: 'Sertifikat',
                item: [
                    'freeCodeCamp - JavaScript Algorithms and Data Structures Certification',
                    'Cisco Networking Academy - Networking Basics Course',
                    'Cisco Networking Academy - Introduction to Cybersecurity Course',
                    'BPPTIK - Junior Web Developer Certification'
                ]
            }
        },
        
        projects: {
            title: 'Portofolio',
            item: [
                {
                    title: 'Face Recognition App',
                    desc: 'Hasil proyek skripsi D4 Teknik Informatika di Politeknik Negeri Jakarta berupa aplikasi face recognition berbasis web sebagai pendukung sistem smart door yang dibangun secara individu melalui seluruh tahapan SDLC dengan metode waterfall menggunakan HTML, CSS, JavaScript, PostgreSQL, serta face-api.js. Aplikasi juga dilengkapi dengan fitur manajemen data user dan akses ke dalam ruangan serta pemantauan aktivitas keluar-masuk ruangan.',
                    imgUrl: './img/p1.png'
                },
    
                {
                    title: 'Aplikasi TemplateKita',
                    desc: 'Hasil proyek magang sebagai software engineer di PT. Prasimax Inovasi Teknologi berupa platform berbagi template dokumen siap pakai berbasis web yang dibangun secara individu melalui seluruh tahapan SDLC dengan metode agile menggunakan HTML, CSS, Next.js, Express.js, Quill.js, serta PostgreSQL.',
                    imgUrl: './img/p2.png'
                },
    
                {
                    title: 'SecondHand App',
                    desc: 'Hasil proyek Studi Independen kelas Fullstack Web di Binar Academy berupa aplikasi penawaran barang bekas berbasis web yang dibangun oleh tim melalui tahapan SDLC dengan metode scrum menggunakan HTML, CSS, Next.js, Node.js, dan PostgreSQL. Peran saya adalah membuat fungsi API utama (backend), serta membuat halaman info product, integrasi API, dan melakukan deployment ke Heroku (frontend).',
                    imgUrl: './img/p3.png'
                },
    
                {
                    title: 'Dokumen SRS Aplikasi OK GARDEN',
                    desc: 'Hasil proyek akhir dari mata kuliah Analisis dan Desain Berorientasi Objek berupa dokumen SRS untuk studi kasus aplikasi OK Garden berdasarkan template IEEE yang dibuat secara berkelompok. Peran saya adalah ikut serta dalam melakukan analisis dan mendesain use case diagram serta membuat activity diagram, class diagram, sequence diagram, dan use case description untuk sebagian besar fitur.',
                    imgUrl: './img/p4.png'
                },
    
                {
                    title: 'SPK Pemindahan Lokasi Sekolah Pertanian',
                    desc: 'Hasil proyek akhir dari mata kuliah Sistem Pendukung Keputusan berupa aplikasi berbasis web untuk menghasilkan rekomendasi lokasi pemindahan sekolah pertanian yang dibangun oleh tim melalui tahapan SDLC dengan metode waterfall menggunakan HTML, CSS, PHP, dan MySQL. Peran saya adalah mendesain use case dan ER diagram, mengerjakan bagian backend termasuk membuat algoritma AHP, serta melakukan integrasi database.',
                    imgUrl: './img/p5.png'
                },
    
                {
                    title: 'Pemodelan dan Desain Sistem HotelQu',
                    desc: 'Hasil proyek akhir dari mata kuliah Rekayasa Perangkat Lunak berupa laporan pemodelan dan desain sistem untuk studi kasus HotelQu yang dibuat secara berkelompok melalui tahapan analisis dan desain dari SDLC. Peran saya adalah melakukan analisis serta perancangan desain use case diagram, control flow diagram, dan data flow diagram sistem.',
                    imgUrl: './img/p6.png'
                }
            ]
        },
        
        blogs: {
            title: 'Blog',
            item: [
                {
                    title: 'Judul',
                    desc: 'Description. This article is about most used framework in software development.',
                    imgUrl: './img/img-placeholder.png',
                    url: ''
                },
    
                {
                    title: 'Judul',
                    desc: 'Description. This article is about most used framework in software development.',
                    imgUrl: './img/img-placeholder.png',
                    url: ''
                }
            ],
            button: 'Baca selengkapnya',
        },

        others: {
            title: 'Lainnya',
            item: [
                {
                    title: 'Ilustrasi Digital: Selamat Datang Maba 2021',
                    desc: 'Ilustrasi digital untuk konten Instagram UKM POTTEC (Polytechnic Table Tennis Club) Politeknik Negeri Jakarta yang dibuat menggunakan aplikasi Medibang Paint Pro dengan tujuan ikut menyambut kedatangan mahasiswa baru di Politeknik Negeri Jakarta pada tahun 2021.',
                    imgUrl: './img/o1.png',
                    url: ''
                },

                {
                    title: 'Ilustrasi Digital: Selamat Ulang Tahun',
                    desc: 'Ilustrasi digital pribadi yang dibuat menggunakan aplikasi Medibang Paint Pro untuk melatih kemampuan mewarnai digital dengan jenis watercolor.',
                    imgUrl: './img/o2.png',
                    url: ''
                },
                
                {
                    title: 'Ilustrasi Digital: Worker',
                    desc: 'Ilustrasi digital yang dibuat untuk mengikuti kontes bertema \'Worker\' pada platform ArtStreet yang dibuat menggunakan aplikasi Medibang Paint Pro.',
                    imgUrl: './img/o3.png',
                    url: ''
                }
            ]
        },

        contact: {
            title: 'Hubungi Saya',
            labels: ['Nama', 'Email', 'Pesan'],
            button: 'Kirim'
        }
    },

    en: {
        nav: {
            title: 'Links',
            item: ['About Me', 'Portfolio', 'Others', 'Contact', 'Resume']
        },

        articles: {
            title: 'Articles',
            item: [
                {
                    title: 'Article',
                    url: ''
                },

                {
                    title: 'Article',
                    url: ''
                }
            ]
        },

        greeting: {
            h1: 'Hi 👋, I\'m ',
            bio: 'A fresh graduate enthusiastic in the IT field, eager to contribute to a dynamic and innovative IT environment while continuing to learn and grow professionally.',
            button: 'Contact Me'
        },
        
        about: {
            title: 'About Me',
            desc: 'A fresh graduate in D4 Informatics Engineering at the Jakarta State Polytechnic with 6 months of internship experience as a Software Engineer. With this background, I am able to analyze the needs of an application, carry out system design, develop fullstack web applications, design database systems, and design UI/UX applications. I am familiar with SDLC (Software Development Life Cycle) and testing process using black-box testing.',
            skills: {
                title: 'Skills',
                item: [
                    'Analysis & Problem Solving',
                    'Communication & Team Work',
                    'Familiar with SDLC (Agile, Scrum, Waterfall)',
                    'Programming with HTML, CSS, JavaScript, NodeJS',
                    'System design (DFD, UML, ERD)',
                    'UI/UX Design',
                    'Database Management System MySQL, PostgreSQL',
                ]
            },
            softwares: {
                title: 'Softwares',
                item: ['Visual Studio Code', 'Git & Github', 'Postman', 'Trello', 'Figma', 'Microsoft Office (Word, Excel, PowerPoint)']
            },
            certificates: {
                title: 'Certificates',
                item: [
                    'freeCodeCamp - JavaScript Algorithms and Data Structures Certification',
                    'Cisco Networking Academy - Networking Basics Course',
                    'Cisco Networking Academy - Introduction to Cybersecurity Course',
                    'BPPTIK - Junior Web Developer Certification'
                ]
            }
        },
        
        projects: {
            title: 'Portfolio',
            item: [
                {
                    title: 'Face Recognition App',
                    desc: 'Thesis project of Informatics Engineering applied undergraduate program at Politeknik Negeri Jakarta, a web-based face recognition application to support a smart door system, which builded individually through all SDLC process with waterfall method using HTML, CSS, JavaScript, PostgreSQL, and face-api. js. This application included with user data and room access management features as well as room in-and-out monitoring features.',
                    imgUrl: './img/p1.png'
                },
    
                {
                    title: 'Aplikasi TemplateKita',
                    desc: 'Final project of Software Engineer Internship program at PT. Prasimax Inovasi Teknologi, a web-based platform for sharing ready-to-use document templates, which builded individually through all SDLC process with agile method using HTML, CSS, Next.js, Express.js, Quill.js, and PostgreSQL.',
                    imgUrl: './img/p2.png'
                },
    
                {
                    title: 'SecondHand App',
                    desc: 'Final project of Independent Study program for Fullstack Web class at Binar Academy, a web-based secondhand goods offering application, which builded in team through the SDLC process with scrum method using HTML, CSS, Next.js, Node.js, and PostgreSQL. My role was to create the main API function (backend), as well as create product info pages, API integration, and deploy to Heroku (frontend).',
                    imgUrl: './img/p3.png'
                },
    
                {
                    title: 'Dokumen SRS Aplikasi OK GARDEN',
                    desc: 'Final project of Object Oriented Analysis and Design course, an SRS document for OK Garden application case study based on an IEEE template, which created in team. My role is to participate in analyzing and designing use case diagrams as well as creating activity diagrams, class diagrams, sequence diagrams, and use case descriptions for most of the features.',
                    imgUrl: './img/p4.png'
                },
    
                {
                    title: 'SPK Pemindahan Lokasi Sekolah Pertanian',
                    desc: 'Final project of Decision Support Systems course, a web-based application to generate recommendations for agricultural school transfer locations, which builded in team through the SDLC process with waterfall method using HTML, CSS, PHP and MySQL. My role is to design use cases and ER diagrams, work on the backend including creating AHP algorithms, and carry out database integration.',
                    imgUrl: './img/p5.png'
                },
    
                {
                    title: 'Pemodelan dan Desain Sistem HotelQu',
                    desc: 'Final project of Software Engineering course, a system modeling and design report for the HotelQu case study, which created in team through the analysis and design process of SDLC. My role is to carry out analysis and design of use case diagrams, control flow diagrams, and system data flow diagrams.',
                    imgUrl: './img/p6.png'
                }
            ]
        },
        
        blogs: {
            title: 'Blog',
            item: [
                {
                    title: 'Title',
                    desc: 'Description. This article is about most used framework in software development.',
                    imgUrl: './img/img-placeholder.png',
                    url: ''
                },
    
                {
                    title: 'Title',
                    desc: 'Description. This article is about most used framework in software development.',
                    imgUrl: './img/img-placeholder.png',
                    url: ''
                }
            ],
            button: 'Read More',
        },

        others: {
            title: 'Others',
            item: [
                {
                    title: 'Digital Illustration: Welcome New Students 2021',
                    desc: 'Digital illustration for Jakarta State Polytechnic UKM POTTEC (Polytechnic Table Tennis Club) Instagram content created using Medibang Paint Pro application with the aim of welcoming the arrival of new students at Jakarta State Polytechnic in 2021.',
                    imgUrl: './img/o1.png',
                    url: ''
                },

                {
                    title: 'Digital Illustration: Happy Birthday',
                    desc: 'Personal digital illustrations created using the Medibang Paint Pro application to improve digital coloring skills with watercolor types.',
                    imgUrl: './img/o2.png',
                    url: ''
                },

                {
                    title: 'Digital Illustration: Worker',
                    desc: 'Digital illustration created using Medibang Paint Pro application to take part in the \'Worker\' themed illustration contest on the ArtStreet platform.',
                    imgUrl: './img/o3.png',
                    url: ''
                }
            ]
        },

        contact: {
            title: 'Contact Me',
            labels: ['Name', 'Email', 'Message'],
            button: 'Send'
        }
    }
}

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

    menus[0].innerText = data[lang].nav.item[0]
    menus[1].innerText = data[lang].nav.item[1]
    menus[2].innerText = data[lang].nav.item[2]
    menus[3].innerText = data[lang].nav.item[3]
    langIcon.setAttribute('src', `./img/${document.body.getAttribute('lang')}.png`)

    //FOOTER
    const articleLinks = document.querySelector('div#articleLinks')
    const navigationLinks = document.querySelector('div#navigationLinks')

    // articleLinks.querySelector('h4').innerText = data[lang].articles.title
    // articleLinks.querySelector('ul').innerHTML = ''
    // data[lang].articles.item.map(item => {
    //     articleLinks.querySelector('ul').insertAdjacentHTML('beforeend', `<li><a href="${item.url}">${item.title}</a></li>`)
    // })

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

function init() {
    // const lang = localStorage.getItem('lang')

    // if (lang) {
    //     document.body.setAttribute('lang', lang)
    // }

    // else {
    //     document.body.setAttribute('lang', 'id')
    //     localStorage.setItem('lang', 'id')
    // }

    localStorage.setItem('lang', 'id')

    const btnLang = document.getElementById('lang')
    btnLang.addEventListener('click', () => {
        setLangId()
        setContent(document.body.getAttribute('lang'))
    })

    const li = document.querySelectorAll('ol li')

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', () => mainMenu.classList.toggle('menu-active'))
    }

    setContent('id')
}