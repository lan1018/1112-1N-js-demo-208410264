const menu = [
    {
        id: 1,
        title: 'egg',
        category: 'breackfast',
        price: 6.5,
        img: './images/my-1.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    },
    {
        id: 2,
        title: 'green eating',
        category: 'lunch',
        price: 15.55,
        img: './images/item-2.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    },
    {
        id: 3,
        title: 'meat balls with noodles',
        category: 'dinner',
        price: 27.89,
        img: './images/item-3.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    },
    {
        id: 4,
        title: 'buttermilk pancakes',
        category: 'breackfast',
        price: 15.99,
        img: './images/item-1.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    },
    {
        id: 5,
        title: 'dinner double',
        category: 'dinner',
        price: 13.99,
        img: './images/item-2.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    },
    {
        id: 6,
        title: 'gozilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: './images/item-3.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    }
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('btn-container');

const displayMenuItem = (menu) => {
    let displayMenu = menu.map((item) => {
        return `
        <article class="menu-item">
        <img src=${item.img} alt="${item.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>
        `
    });
    console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;

    window.addEventListener('DOMContentLoaded', () => {
        displayMenuItem(menu);
    });
}