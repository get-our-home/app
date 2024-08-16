import config from '../../config/config';
import { useState } from 'react';
import Link from 'next/link';
import RoleSelector from './RoleSelector';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('user');
  const [credentials, setCredentials] = useState({ id: '', password: '' });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      selectedRole === 'user'
        ? `${config.api.baseURL}/login/user` // 사용자일 경우 API 경로
        : `${config.api.baseURL}/login/agent`; // 공인중개사일 경우 API 경로

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('로그인 성공:', data);
        // 로그인 성공 시 처리
      } else {
        console.log('로그인 실패:', response.statusText);
        // 로그인 실패 시 처리
      }
    } catch (error) {
      console.error('로그인 중 에러 발생:', error);
    }
  };

  // 역할에 따라 회원가입 페이지 경로를 동적으로 설정
  const registerHref = selectedRole === 'user' ? '/register-user' : '/register-agent';

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg">
      {/* RoleSelector 컴포넌트를 추가 */}
      <RoleSelector selectedRole={selectedRole} onRoleChange={setSelectedRole} />

      <div className="space-y-4 px-2">
        <div className="border bg-[rgba(189,216,225,0.38)] border-[rgba(60,129,128,0.50)]">
          <input
            type="text"
            name="id"
            placeholder="ID"
            value={credentials.id}
            onChange={handleInputChange}
            className="w-full border-b border-[#3C81B7] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="PW"
              value={credentials.password}
              onChange={handleInputChange}
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <img
                src="/icons/show_pwd.png"
                alt="Show Password"
                className="h-6 w-6 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <a href="/find-password" className="text-xs text-[#3AB6D2]">
          Forgot password?
        </a>
      </div>

      <button type="submit" className="w-full bg-[#85C3D6] text-white py-2 rounded-lg mt-6">
        로그인
      </button>

      <div className="flex justify-center text-sm text-gray-500 mt-4 space-x-6">
        <Link href={registerHref}>
          회원가입
        </Link>
        <Link href="/find-id">
          아이디 찾기
        </Link>
        <Link href="/find-password">
          비밀번호 찾기
        </Link>
      </div>

      <div className="flex items-center my-6">
        <div className="border-t border-gray-300 flex-grow mr-3"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="border-t border-gray-300 flex-grow ml-3"></div>
      </div>

      <button className="w-full mt-6 shadow-none">
        <img
          src="/icons/kakao_login_medium_wide.png"
          alt="카카오 로그인"
          className="w-full h-12 object-cover"
        />
      </button>
    </form>
  );
}