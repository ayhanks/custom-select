'use strict';

/**
 * Creates a custom select box.
 * @class Select.
 * @public
 * @param {options} [options] - The options HTML Element -> <option></option>
 * @param {parent} [parent] -Parentelement, where to insert the created HTML
 * @param {config: {autofocus: boolean, disabled: boolean, multiple: boolean, required: boolean, size: boolean}} - configuartion of the custom select box
 */
class Select {
    selected;
    #parentEl;

    constructor(options, parentEl, selected, config) {
        this.options = options;
        this.#parentEl = parentEl;
        this.selected = selected;
        this.config = config;
        this.init();
    }

    init() {
        console.log('insertodom');
        this.insertToDOM();
    }

    setSelected() {}

    getSelected() {
        return this.selected;
    }

    createMarkup() {
        console.log('createmarkup');
        const selected = this.options.find(
            (option) => option.value === this.getSelected()
        );
        const otherOptions = this.options.filter(
            (option) => option.value !== this.getSelected()
        );

        return `
        <div class="custom-select" data-selected=${this.getSelected()}>
            <div>${selected.innerText}</div>
            <div class="custom-select__options">
            ${otherOptions.map((option) => {
                return `<div>${option.innerText}</div>`;
            })}
            </div>
        </div>
    `;
    }

    insertToDOM() {
        this.#parentEl.insertAdjacentHTML('afterbegin', this.createMarkup());
        this.removeComma();
    }

    removeComma() {
        const [options] = Array.from(
            document.querySelectorAll('.custom-select__options')
        );
        console.log(options.innerHTML);
        options.innerHTML.replaceAll(',', ' ');
    }

    update() {}
}

export default Select;
