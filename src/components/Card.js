import styled from "styled-components";
import EmailButton from "./EmailButton";
import SocialMedia from "./SocialMedia";
import TextBox from "./TextBox";
export default function Card(){
    return(
        <Wrapper>
            
            <Image src='./Suryansh.jpg'></Image>

            <BusinessCard>
                <p className="name">Suryansh Srivastava</p>
                <p className="title">Full-Stack Developer</p>
                <EmailButton/>
                <TextBox/>
            </BusinessCard>
            
            <Footer>
                <SocialMedia/>
            </Footer>
        
        </Wrapper>
    );
}
const BusinessCard=styled.div`
    width: 317px;
    height: 399px;
    background-color: #1A1B21;
    border-radius: 10px 10px 0px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .name{
        color: white;
        font-size: 30px;
        margin: 0;
        margin-top: 20px;
    }
    .title{
        color: #F3BF99;
        margin: 0px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
`;

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:8px ;
`;

const Image=styled.img`
    width: 317px;
    height: 300px;
    border-radius:10px 10px 0px 0px;
`;

const Footer=styled.div`
    width: 317px;
    height: 64px;
    background-color: #161619;
    border-radius:0px 0px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`; 
