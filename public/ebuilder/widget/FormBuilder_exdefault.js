export default function WGCheckBox({target,initState}){

    this.elemt= target;

    this.state = initState;
    this.setState = (nextState)=>{
        this.state = {...this.state, ...nextState};
        console.log("this state", this.state);
    }

    this.render =() => {
        this.elemt.html( $(`
            <input type="checkbox" name="fd1_chk" checked><label>체크테스트</label></input>
        `) )    
    }

    this.render();
}
