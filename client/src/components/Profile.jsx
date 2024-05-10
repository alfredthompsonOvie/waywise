import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

const StyledProfile = styled.section`
  display: flex;
  align-items: center;
  gap: 1em;
  /* position: absolute;
  right: 1em; */
  background-color: #242f49;
  background-color: var(--background);
  padding: .2em 0.5em;
  border-radius: 9em;
  /* border-radius: .4em; */
  /* margin-top: 1em; */
`
const ProfileContent = styled.section`
  display: flex;
  align-items: center;
  gap: .5em;

  p{
    font-size: 1rem;
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

function Profile() {
  const { user } = useAuth();
  // console.log("Profile", user)
  // const userName = user?.name.split(' ')[0]
  const userName = "jack"

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   logout();

  //   navigate("/");
  // }
  return (
    <StyledProfile>
      <ProfileContent>
        <StyledImg src="/avatar.jpg" alt="avatar" />
        <p> <span>welcome </span>{ userName }</p>
      </ProfileContent>
    </StyledProfile>
  )
}

export default Profile
