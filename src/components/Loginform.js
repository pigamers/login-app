import styled from "styled-components";

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 20px;
    justify-content: center;
    width: 50%;

    @media (max-width: 576px) {
      flex-direction: column;
      justify-content: space-between;
      width: 70%;
    }
`;

const LoginInput = styled.input`
    padding: 15px;
    margin-bottom: 25px;
    width: 60%;
    border: 1px solid #808080;
    border-radius: 5px;

    @media (max-width: 576px) {
        width: 100%;
        margin-bottom: 50;
    }
`;

const LoginButton = styled.button`
    padding: 12px;
    background-color: #000;
    color: #fff;
    margin-bottom: 10px;
    width: 40%;
    border: 1px solid #000;
    border-radius: 5px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background-color: #808080;
        color: #000;
    }

    @media (max-width: 576px) {
        width: 50%;
        margin-bottom: 0;
        font-size: 20px;
    }
`;

const Loginform = () => {
    return (
        <LoginForm>
            <h1>👋 Enter details</h1>
            <LoginInput placeholder="Email" />
            <LoginInput placeholder="Password" />
            <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
    );
};

export default Loginform;