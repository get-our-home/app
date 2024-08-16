import { useState } from 'react';
import Header from './Header';
import InputField from './InputField';
import config from '../../config/config';  // 서버 base URL 가져오기

export default function RegisterUser() {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    phone: '',
    email: '',
    address: '',
    referral: '',
    preferredType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${config.api.baseURL}/register/user`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('회원가입 성공:', data);
        // 회원가입 성공 시 처리
      } else {
        console.log('회원가입 실패:', response.statusText);
        // 회원가입 실패 시 처리
      }
    } catch (error) {
      console.error('회원가입 중 에러 발생:', error);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg">
      <Header title="사용자 회원가입" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="아이디"
          type="text"
          required
          name="id"
          value={formData.id}
          onChange={handleInputChange}
        />
        <InputField
          label="비밀번호"
          type="password"
          required
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <InputField
          label="전화번호"
          type="tel"
          required
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <InputField
          label="이메일"
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputField
          label="주소"
          type="text"
          required
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">선택사항</label>
          <InputField
            label="가입 경로 - 지인, 광고, 검색, 기타"
            type="text"
            name="referral"
            value={formData.referral}
            onChange={handleInputChange}
          />
          <InputField
            label="매물 선호 타입"
            type="text"
            name="preferredType"
            value={formData.preferredType}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#85C3D6] text-white py-2 rounded-lg mt-6"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
