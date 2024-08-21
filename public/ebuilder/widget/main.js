import { FormBuilder } from './FormBuilder_fntype.js';

document.addEventListener('DOMContentLoaded', () => {
    //const formBuilder = new FormBuilder();
    const formBuilder = FormBuilder;

    // 필요한 버튼들을 추가합니다.
    const builderDiv = document.getElementById('form-builder');

    const inputButton = document.createElement('button');
    inputButton.innerText = '텍스트 입력 추가';
    inputButton.onclick = () => formBuilder.addInput('텍스트 입력');

    const checkboxButton = document.createElement('button');
    checkboxButton.innerText = '체크박스 추가';
    checkboxButton.onclick = () => formBuilder.addCheckbox('체크박스');

    const radioButton = document.createElement('button');
    radioButton.innerText = '라디오 버튼 추가';
    radioButton.onclick = () => formBuilder.addRadio('라디오', ['옵션 1', '옵션 2']);

    const selectButton = document.createElement('button');
    selectButton.innerText = '셀렉트 박스 추가';
    selectButton.onclick = () => formBuilder.addSelect('셀렉트 박스', ['옵션 1', '옵션 2']);

    const tableButton = document.createElement('button');
    tableButton.innerText = '표 추가';
    tableButton.onclick = () => formBuilder.addTable(['열 1', '열 2']);

    const calcButton = document.createElement('button');
    calcButton.innerText = '계산 필드 추가';
    calcButton.onclick = () => formBuilder.addCalculatedField('계산 필드', '2 + 3 * 4');

    builderDiv.appendChild(inputButton);
    builderDiv.appendChild(checkboxButton);
    builderDiv.appendChild(radioButton);
    builderDiv.appendChild(selectButton);
    builderDiv.appendChild(tableButton);
    builderDiv.appendChild(calcButton);
});
