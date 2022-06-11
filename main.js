import Select from './Select.js';

[...document.querySelectorAll('.custom-select')].forEach((select) => {
    console.dir(select);
    const [selectedOption] = select.selectedOptions;
    console.log(selectedOption);
    const options = [...select.options];
    const parentElement = select.parentElement;
    const config = {
        autofocus: select.autofocus,
        disabled: select.disabled,
        multiple: select.multiple,
        required: select.required,
        size: select.size,
    };

    const selectBox = new Select(options, parentElement, config);
});
