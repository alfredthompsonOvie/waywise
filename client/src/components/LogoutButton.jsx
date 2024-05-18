import { useQueryClient } from '@tanstack/react-query'

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { CiLogout } from 'react-icons/ci';
import Button from './Button';

function LogoutButton() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { logout } = useAuth();



  const handleLogout = async () => {
    queryClient.clear();

    logout();
    navigate("/");

  };

  return (
    <Button onClick={handleLogout}>
      <CiLogout /> <span>Logout</span>
    </Button>
  );
}

export default LogoutButton;
