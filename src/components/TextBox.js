import styled from "styled-components";
export default function TextBox(){
    return(
        <>
        <TxtAr>
            <p className="p1">About</p>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <p className="p1">Interests</p>
            <p>Food expert. Music scholar. Coffee fanatic. Mad about Anime</p>
        </TxtAr>
        </>
    );
}

const TxtAr=styled.div`
    width: 247px;
    height: 201px;
    display: flex;
    flex-direction: column;
    .p1{
        font-size:25px;
        color:#FFFFFF;
        padding: 0;
        margin: 0;
        margin-top: 10px;
    }
    p{
        color:#FFFFFF;
        text-align: justify;
        margin: 0;
        margin-top: 5px;
    }
`;