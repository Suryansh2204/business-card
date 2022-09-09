import styled from "styled-components";
export default function EmailButton(){
    return(
        <Button href="mailto:suripape1234@gmail.com" target="_blank" ><i class="fa-solid fa-envelope"></i> Email</Button>
    );
}

const Button=styled.a`
    text-decoration: none;
    width: 247px;
    height: 34px;
    background-color: #FFFFFF;
    border-radius: 6px;
    padding:9px, 13px, 9px, 11px;
    color: black;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    i{
        margin-right: 10px;
    }
    &:hover{
        cursor: pointer;
    }
`;