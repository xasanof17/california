import styled from "styled-components";

export const Idea = styled.section`
margin-bottom: 75px;
`;

export const IdeaTop = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 55px;
`;

export const IdeaTitle = styled.h2``;

export const IdeaTxt = styled.p``;

export const IdeaContent = styled.div`
margin-bottom: 70px;
@media (max-width:768px) {
    display: flex;
    align-items: center;
}

`;

export const IdeaCard = styled.div`
@media (max-width:768px) {
margin-bottom: 10px;
}`;

export const IdeaImg = styled.img`
width: 100%;
`;

export const IdeaCardTxt = styled.p`
font-weight: 400;
font-size: 24px;
line-height: 30px;
color: var(--black);
margin-bottom: 30px;
@media (max-width:768px) {
    font-size: 20px;
}
`;

export const IdeaBtn = styled.div`
display: block;
text-align: center;
`;

export const IdeaLink = styled.a`
font-weight: 400;
font-size: 24px;
line-height: 29px;
color: var(--black);
cursor: pointer;
svg{
font-size: 28px;
}
`;
