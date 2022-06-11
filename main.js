import Select from "./Select.js";

[...document.querySelectorAll(".custom-select")].forEach(select => {
    const config = {
        autofocus: select.autofocus,
        disabled: select.disabled,
        multiple: select.multiple,
        required: select.required,
        size: select.size,
    }

    const selectBox = new Select(config, select.options)
})