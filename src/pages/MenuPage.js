
import { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
   
        position: fixed;
        z-index: 5;
        border-radius: 30px;
        background-color: #e7e7e7;
        width: 50%;
        left: -50%;
        transition: 0.5s ease;
        &.open {
            left: 50%;
            transition: 0.5s ease;
        }
   


    `
    ;

const MenuPage = () => {

    const [isOn, setIsOn] = useState(true);

    const toggleHandler = () => {
        setIsOn(!isOn)
    }

    return (
        <>
        <ToggleContainer className={`${isOn ? "open" : ""}`}>
                <ul >
                    <li>Menu1</li>
                    <li>Menu2</li>
                    <li>Menu3</li>
                    <li>Menu4</li>
                </ul>
        </ToggleContainer>
        <div className="btn-container" onClick={toggleHandler}>보이기/숨기기</div>

        
        </>
    )
}

export default MenuPage;