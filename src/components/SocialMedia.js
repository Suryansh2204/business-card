import styled from "styled-components";
export default function SocialMedia(){
    return(
        <Wrapper>
            <a href={process.env.IG_LINK} target="_blank"><i className="fa-brands fa-instagram fa-2x"></i> </a> 
            <a href={process.env.lINKEDIN_LINK} target="_blank"><i className="fa-brands fa-linkedin fa-2x"></i> </a> 
            <a href={process.env.GITHUB_LINK} target="_blank"><i className="fa-brands fa-github fa-2x"></i> </a> 
        </Wrapper>
    );
}

const Wrapper=styled.div`
    display: flex;
    align-items: center;
    i{
        text-decoration: none;
        padding: 10px;
        color: white;
    }
    i:hover{
        cursor: pointer;
    }
`;
