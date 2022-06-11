import Select from './Select.js';

const customSelects = [...document.querySelectorAll('.custom-select')];

customSelects.forEach((select) => {
    const [selectedOption] = select.selectedOptions;
    const options = [...select.options];
    const parentElement = select.parentElement;

    const config = {
        autofocus: select.autofocus,
        disabled: select.disabled,
        multiple: select.multiple,
        required: select.required,
        size: select.size,
    };

    const selectBox = new Select(
        options,
        parentElement,
        selectedOption.value,
        config
    );
});
