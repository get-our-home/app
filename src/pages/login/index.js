import { useState } from 'react';
import Header from './Header';
import RoleSelector from './RoleSelector';
import LoginForm from './LoginForm';

export default function Login() {
  const [selectedRole, setSelectedRole] = useState('user');

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-14">
      <Header />
      <LoginForm />
    </div>
  );
}
