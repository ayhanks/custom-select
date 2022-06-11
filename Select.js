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

    constructor(options, parentEl, config) {
        this.options = options;
        this.#parentEl = parentEl;
        this.config = config;
        this.init();
    }

    init() {
        console.log(this.options);
        this.insertToDOM();
    }

    setSelected() {}

    getSelected() {}

    createMarkup() {
        return `
        <div class="custom-select">
            ${this.options
                .map((option) => {
                    return `
                    <div data-value="${option.value}">
                        ${option.innerText}
                    </div>
                `;
                })
                .join('')}
        </div>
    `;
    }

    insertToDOM() {
        this.#parentEl.insertAdjacentHTML('afterbegin', this.createMarkup());
    }

    update() {}
}

export default Select;
