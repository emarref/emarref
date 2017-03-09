export default class Modal {
    constructor(el) {
        this.el = el;
    }

    hide() {
        this.el.addClass('hidden');
    }

    show() {
        this.el.removeClass('hidden');
        $('input', this.el)[0].focus();
    }
}