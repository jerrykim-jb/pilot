export const FormBuilder = {

formElements : []
,

addInput(label, type = 'text') {
    this.formElements.push({ type: 'input', label, inputType: type });
    this.renderPreview();
}
,
addCheckbox(label) {
    this.formElements.push({ type: 'checkbox', label });
    this.renderPreview();
}
,
addRadio(label, options) {
    this.formElements.push({ type: 'radio', label, options });
    this.renderPreview();
}
,
addSelect(label, options) {
    this.formElements.push({ type: 'select', label, options });
    this.renderPreview();
}
,
addTable(columns) {
    this.formElements.push({ type: 'table', columns });
    this.renderPreview();
}
,
addCalculatedField(label, formula) {
    this.formElements.push({ type: 'calculated', label, formula });
    this.renderPreview();
}
,
renderPreview() {
    const preview = document.getElementById('form-preview');
    preview.innerHTML = '';

    this.formElements.forEach(element => {
        let elem;

        switch (element.type) {
            case 'input':
                elem = document.createElement('div');
                elem.innerHTML = `<label>${element.label}: <input type="${element.inputType}" /></label>`;
                break;
            case 'checkbox':
                elem = document.createElement('div');
                elem.innerHTML = `<label><input type="checkbox" /> ${element.label}</label>`;
                break;
            case 'radio':
                elem = document.createElement('div');
                elem.innerHTML = `<label>${element.label}</label>`;
                element.options.forEach(option => {
                    elem.innerHTML += `<label><input type="radio" name="${element.label}" /> ${option}</label>`;
                });
                break;
            case 'select':
                elem = document.createElement('div');
                elem.innerHTML = `<label>${element.label}</label>`;
                const select = document.createElement('select');
                element.options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option;
                    opt.innerHTML = option;
                    select.appendChild(opt);
                });
                elem.appendChild(select);
                break;
            case 'table':
                elem = document.createElement('table');
                const headerRow = document.createElement('tr');
                element.columns.forEach(col => {
                    const th = document.createElement('th');
                    th.innerHTML = col;
                    headerRow.appendChild(th);
                });
                elem.appendChild(headerRow);
                break;
            case 'calculated':
                elem = document.createElement('div');
                elem.innerHTML = `<label>${element.label}: <input type="text" disabled value="${this.evaluateFormula(element.formula)}" /></label>`;
                break;
            default:
                elem = document.createElement('div');
        }

        preview.appendChild(elem);
    });
}
,
evaluateFormula(formula) {
    // 간단한 계산식을 평가합니다 (단순한 연산만)
    try {
        return eval(formula);
    } catch {
        return 'Error';
    }
}
}
