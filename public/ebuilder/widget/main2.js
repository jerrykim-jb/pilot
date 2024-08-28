import WECheckBox from './FormBuilder_exdefault.js';

$("#btnCheckbox").click(e=>{

    let chk1 = new WECheckBox({target: $("#form-preview"), state: {}});

    chk1.setState({ background: '#000'});
});
    


