import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";

const StyledProfile = styled.section`
  display: flex;
  align-items: center;
  gap: 1em;
  position: absolute;
  right: 1em;
  background-color: #242f49;
  padding: .2em 0.5em;
  border-radius: 9em;
  z-index: 10;
`
const ProfileContent = styled.section`
  display: flex;
  align-items: center;
  gap: .5em;

  p{
    font-size: .8rem;
    font-style: italic;
  }
`

const StyledImg = styled.img`
  width: 3em;
  height: 3em;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #384358;
`
const Button = styled.button`
  background-color: #052659;
  color: #fbe4d8;
  font-size: 1rem;
  border: none;
  border-radius: 4em;
  padding: 0.5em 1em;
`

function Profile() {
  const { logout } = useAuth();
  const handleClick = () => {
    logout();
  }
  return (
    <StyledProfile>
      <ProfileContent>
        <StyledImg src="/avatar.jpg" alt="avatar" />
        <p> <span>welcome </span>Jack</p>
      </ProfileContent>
      <Button onClick={handleClick}>Logout</Button>
    </StyledProfile>
  )
}

export default Profile
