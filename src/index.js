const dragBtnsCont = ['Анализ влияния продаж сопутствующих товаров и услуг на трафик нефтепродуктов',
                    'Распределение полочного пространства по группам товаров',
                    'Повышение конкурентоспособности сети в регионе',
                    'Разработка и внедрение планограмм категорий',
                    'Обеспечение конкурентоспособной цены',
                    'Взаимодействие с поставщиками и производителями',
                    'Размещение заказа поставщик, контроль заказа и приемка',
                    'Сокращение издержек за счет работы с товарным запасом и достижения минимальных списаний',
                    'Обеспечение стандартов выкладки'];
let dragBtns = document.querySelectorAll('.drag-btn');
const dropBtnsFields = document.querySelectorAll('.drag-n-drop-field');
const examBtn = document.querySelector('.exam-btn');
const examBtnSec = document.querySelector('.e-b-s');
const resultBtn = document.querySelector('.result');

const onloadFuns = () => {
    dragBtns = document.querySelectorAll('.drag-btn');
    dragBtnsCont.sort(() => Math.random() - 0.5);
    for (let i = 0; i < dragBtnsCont.length; i++) {
        dragBtns[i].innerHTML = dragBtnsCont[i];
    }
}
window.addEventListener('load', onloadFuns);


const dragAndDrop = function () {
    let variable;
    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide');
            variable = this;
        }, 0);
    };
    const dragEnd = function () {
            this.classList.remove('hide');
    };
    const dragOver = function (evt) {
        evt.preventDefault();
    };
    const dragEnter = function () {
        this.classList.add('hovered');
    };
    const dragLeave = function () {
        this.classList.remove('hovered');
    };
    const drop = function () {
        if (this.textContent == '') {
            this.append(variable);
            variable.style.marginLeft = '12px';
            variable.style.marginTop = '7px';
        }
    };

    dragBtns.forEach(el => {
        el.addEventListener('dragstart', dragStart);
        el.addEventListener('dragend', dragEnd);
    });
    dropBtnsFields.forEach(el => {
        el.addEventListener('dragover', dragOver);
        el.addEventListener('dragenter', dragEnter);
        el.addEventListener('dragleave', dragLeave);
        el.addEventListener('drop', drop);
    });
}
dragAndDrop();

let res = [];
function resultFuns() {
    const block = document.querySelectorAll('.block-block');
    let arr1 = (block[0].textContent).split('\n                    ');
    arr1.shift();
    arr1[2] = arr1[2].substring(0, arr1[2].length - 17);
    let arr2 = (block[1].textContent).split('\n                    ');
    arr2.shift();
    arr2[2] = arr2[2].substring(0, arr2[2].length - 17);
    let arr3 = (block[2].textContent).split('\n                    ');
    arr3.shift();
    arr3[2] = arr3[2].substring(0, arr3[2].length - 17);
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== 'Распределение полочного пространства по группам товаров' &&
            arr1[i] !== 'Анализ влияния продаж сопутствующих товаров и услуг на трафик нефтепродуктов' &&
            arr1[i] !== 'Повышение конкурентоспособности сети в регионе') {
            res.push(i);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] !== 'Разработка и внедрение планограмм категорий' &&
            arr2[i] !== 'Обеспечение конкурентоспособной цены' &&
            arr2[i] !== 'Взаимодействие с поставщиками и производителями') {
            res.push(i + 3);
        }
    }
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] !== 'Размещение заказа поставщик, контроль заказа и приемка' &&
            arr3[i] !== 'Сокращение издержек за счет работы с товарным запасом и достижения минимальных списаний' &&
            arr3[i] !== 'Обеспечение стандартов выкладки') {
            res.push(i + 6);
        }
    }
    if (res.length == 0) {
        resultBtn.style.display = 'flex';
        resultBtn.innerHTML = 'Верно!';
        examBtn.style.display = 'none';
        dragBtns.forEach(el => {
            el.style.backgroundColor = '#ABCC6D';
        });
    } else {
        resultBtn.style.display = 'flex';
        resultBtn.style.width = '480px';
        resultBtn.innerHTML = 'Неверно!';
        examBtn.style.display = 'none';
        examBtnSec.style.display = 'flex';
        dragBtns = document.querySelectorAll('.drag-btn');
        for (let j = 0; j < dragBtns.length; j++) {
            dragBtns[j].style.backgroundColor = '#ABCC6D';
        }
        for (let j = 0; j < res.length; j++) {
            dragBtns[res[j]].style.backgroundColor = '#FFB4AF';
        }
    }
}
examBtn.addEventListener('click', resultFuns);

const secBlock = document.querySelector('.second-block');
examBtnSec.addEventListener('click', function () {
    location.reload();
});