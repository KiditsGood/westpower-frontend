class slideToggle {
    constructor(target, duration = 200) {
        this._target = target
        this._duration = duration
    }
    show() {
        const el = this._target;

        if (el.classList.contains('collapsing') || el.classList.contains('collapse_show')) {
            return;
        }

        el.classList.remove('collapse');

        const height = el.offsetHeight;

        el.style['height'] = 0;
        el.style['overflow'] = 'hidden';
        el.style['transition'] = `height ${this._duration}ms ease`;
        el.classList.add('collapsing');
        el.offsetHeight;
        el.style['height'] = `${height}px`;

        window.setTimeout(() => {
            el.classList.remove('collapsing');
            el.classList.add('collapse');
            el.classList.add('collapse_show');
            el.style['height'] = '';
            el.style['transition'] = '';
            el.style['overflow'] = '';
        }, this._duration);
    }
    hide() {
        const el = this._target;

        if (el.classList.contains('collapsing') || !el.classList.contains('collapse_show')) {
            return;
        }

        el.style['height'] = `${el.offsetHeight}px`;
        el.offsetHeight;
        el.style['height'] = 0;
        el.style['overflow'] = 'hidden';
        el.style['transition'] = `height ${this._duration}ms ease`;
        el.classList.remove('collapse');
        el.classList.remove('collapse_show');
        el.classList.add('collapsing');

        window.setTimeout(() => {
            el.classList.remove('collapsing');
            el.classList.add('collapse');

            el.style['height'] = '';
            el.style['transition'] = '';
            el.style['overflow'] = '';
        }, this._duration);
    }
    toggle() {
        this._target.classList.contains('collapse_show') ? this.hide() : this.show();
    }
}

document.querySelectorAll('.shops__check').forEach(el => {
    el.onclick = function () {
        if (this.lastElementChild.getAttribute('src') == ''){
            this.lastElementChild.setAttribute('src', 'img/check.svg')

            if (this.parentElement.classList.contains('shops--item')) {
                this.parentElement.classList.add('checked--border')
            }
            else {
                this.parentElement.classList.add('checked')
            }
        }
        else {
            this.lastElementChild.setAttribute('src', '')

            if (this.parentElement.classList.contains('shops--item')) {
                this.parentElement.classList.remove('checked--border')
            }
            else {
                this.parentElement.classList.remove('checked')
            }
        }
    }
})

document.querySelector('.content__list-button').onclick = function () {
    if (this.lastElementChild.classList.contains('arrow--rotate')) {
        this.lastElementChild.classList.remove('arrow--rotate')
    }
    else {
        this.lastElementChild.classList.add('arrow--rotate')
    }

    collapse.toggle()
}

document.querySelectorAll('.input--change').forEach(el => {
    el.onclick = function () {
        if (this.lastElementChild.classList.contains('edit')) {
            this.lastElementChild.classList.remove('edit')
            this.lastElementChild.classList.add('save')

            this.lastElementChild.innerHTML = 'сохранить'

            this.firstElementChild.setAttribute('src', 'img/save.svg')

            this.previousElementSibling.removeAttribute('disabled')
        }
        else {
            this.lastElementChild.classList.add('edit')
            this.lastElementChild.classList.remove('save')

            this.lastElementChild.innerHTML = 'изменить'

            this.firstElementChild.setAttribute('src', 'img/edit.svg')

            this.previousElementSibling.setAttribute('disabled', '')
        }
    }
})

const el = document.querySelector('.collapse')
const collapse = new slideToggle(el)