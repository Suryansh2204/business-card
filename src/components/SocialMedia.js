import styled from "styled-components";
export default function SocialMedia(){
    return(
        <Wrapper>
            <a href="https://www.instagram.com/suri_paappe/" target="_blank"><i class="fa-brands fa-instagram fa-2x"></i> </a> 
            <a href="https://www.linkedin.com/in/suryansh-srivastava-3662771ab" target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i> </a> 
            <a href="https://github.com/Suryansh2204" target="_blank"><i class="fa-brands fa-github fa-2x"></i> </a> 
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