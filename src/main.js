import quoteImg from './images/quotes.svg';
import background from './images/background.jpeg';
import heightImg from './images/icons/height.svg';
import widthImg from './images/icons/width.svg';
import Glide from '@glidejs/glide';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images/lamps', false, /\.(png|jpe?g|svg)$/));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('shown')
        } else {
            entry.target.classList.remove('shown')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach(el => observer.observe(el))


const menu = document.getElementById('menu');
document.addEventListener('click', e => {
    if (e.target == menu || e.target.classList.contains('menu-button')) {
        menu.classList.toggle('menu-hidden');
        menu.classList.toggle('menu-shown');
    } else if (menu.classList.contains('menu-shown')) {
        menu.classList.toggle('menu-hidden');
        menu.classList.toggle('menu-shown');
    }
})

const backgroundImg = document.getElementById('background')
const quotes = document.querySelectorAll('.quote')

backgroundImg.style.background = 'url(' + background + ')';
quotes.forEach(quote => {
    quote.src = quoteImg;
});

const slideParent = document.querySelector('.glide__track > ul.flex');
const slides = [
    {
        id: 1,
        img: '/images/lamps/domo.jpeg',
        name: 'Domo',
        measurements: {
            height: 26,
            width: 35,
        },
        visible: true
    },
    {
        id: 2,
        img: '/images/lamps/iris.jpeg',
        name: 'Iris',
        measurements: {
            height: 26,
            width: 35,
        },
        visible: false
    },
    {
        id: 3,
        img: '/images/lamps/british.jpeg',
        name: 'British',
        measurements: {
            height: 23,
            width: 32
        },
        visible: false
    },
    {
        id: 4,
        img: '/images/lamps/rocío-de-miel.jpeg',
        name: 'Rocío de Miel',
        measurements: {
            height: 40,
            width: 30
        },
        visible: false
    },
    {
        id: 5,
        img: '/images/lamps/tambor.jpeg',
        name: 'Tambor',
        measurements: {
            height: 20,
            width: 34
        },
        visible: false
    },
    {
        id: 6,
        img: '/images/lamps/cupula-alta.jpeg',
        name: 'Cúpula Alta',
        measurements: {
            height: 22,
            width: 33
        },
        visible: false
    },
    {
        id: 7,
        img: '/images/lamps/cupula.jpeg',
        name: 'Cupula',
        measurements: {
            height: 16,
            width: 33
        },
        visible: false
    },
    {
        id: 8,
        img: '/images/lamps/champion.jpeg',
        name: 'Champion',
        measurements: {
            height: 48,
            width: 25
        },
        visible: false
    },
    {
        id: 9,
        img: '/images/lamps/ANCO.jpeg',
        name: 'ANCO',
        measurements: {
            height: 48,
            width: 22
        },
        visible: false
    },
    {
        id: 10,
        img: '/images/lamps/goro-simple.jpeg',
        name: 'Goro Simple',
        measurements: {
            height: 33,
            width: 41
        },
        visible: false
    },
    {
        id: 11,
        img: '/images/lamps/violin.jpeg',
        name: 'Violin',
        measurements: {
            height: 43,
            width: 25
        },
        visible: false
    }
];

slides.forEach(slide => {
    const item = document.createElement('li');
    item.classList.add('rounded-lg', 'overflow-hidden')
    slideParent.appendChild(item);

    const img = document.createElement('img');
    const filename = slide.img.split('/')[3];
    img.src = images[filename]
    item.appendChild(img);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('p-6', 'bg-[#dab284]', 'rounded-b-lg')
    item.appendChild(descriptionDiv);

    const heading = document.createElement('h3');
    heading.classList.add('text-2xl', 'sm:text-3xl', 'md:h3', 'bg-[#dab284]')
    heading.textContent = slide.name;
    descriptionDiv.appendChild(heading)

    const measurementsDiv = document.createElement('div');
    measurementsDiv.classList.add('mt-2', 'mb-4', 'flex', 'bg-[#dab284]');
    descriptionDiv.appendChild(measurementsDiv);

    const heightDiv = document.createElement('div');
    heightDiv.classList.add('height-centered', 'bg-[#dab284]');
    measurementsDiv.appendChild(heightDiv);

    const heightIcon = document.createElement('img');
    heightIcon.src = heightImg;
    heightIcon.classList.add('w-6', 'bg-[#dab284]')
    heightDiv.appendChild(heightIcon);

    const heightText = document.createElement('span');
    heightText.textContent = 'Altura: ' + slide.measurements.height;
    heightText.classList.add('ml-1', 'text-sm', 'bg-[#dab284]')
    heightDiv.appendChild(heightText);


    const widthDiv = document.createElement('div');
    widthDiv.classList.add('height-centered', 'ml-3', 'bg-[#dab284]');
    measurementsDiv.appendChild(widthDiv);

    const widthIcon = document.createElement('img');
    widthIcon.src = widthImg;
    widthIcon.classList.add('w-6', 'bg-[#dab284]')
    widthDiv.appendChild(widthIcon);

    const widthText = document.createElement('span');
    widthText.textContent = 'Anchura: ' + slide.measurements.width;
    widthText.classList.add('ml-1', 'text-sm', 'bg-[#dab284]')
    widthDiv.appendChild(widthText);


});


new Glide('.glide', {
    perView: 1,
    startAt: 0,
    gap: 100
}).mount()
import './css/style.css'