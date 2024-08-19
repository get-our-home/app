import { useState } from 'react';
import InputField from './InputField';
import config from '../../config/config';  // 서버 base URL 가져오기

export default function RegisterUserForm() {
  const [formData, setFormData] = useState({
    user_id: '',
    username: '',
    password: '',
    email: '',
    phone_number: '',
    address: '',
    signUpPath: '',
    preferredPropertyType: ''
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
  
    const url = `${config.api.baseURL}/api/users/register`;
    const body = JSON.stringify(formData);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('회원가입 성공:', data);
        alert('회원가입이 성공적으로 완료되었습니다.');
        window.history.back();
      } else {
        const errorData = await response.json(); // 서버에서 반환된 에러 응답 데이터를 확인
        console.log('회원가입 실패:', response.statusText, errorData);
        alert(`회원가입에 실패하였습니다. ${errorData.error || '다시 시도해주세요.'}`);
      }
    } catch (error) {
      console.error('회원가입 중 에러 발생:', error);
      alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="아이디"
          type="text"
          required
          name="user_id"  // 수정: formData의 키와 동일하게 설정
          value={formData.user_id}
          onChange={handleInputChange}
        />
        <InputField
          label="이름"
          type="text"
          required
          name="username"  // 수정: formData의 키와 동일하게 설정
          value={formData.username}
          onChange={handleInputChange}
        />
        <InputField
          label="비밀번호"
          type="password"
          required
          name="password"  // 수정: formData의 키와 동일하게 설정
          value={formData.password}
          onChange={handleInputChange}
        />
        <InputField
          label="전화번호"
          type="tel"
          required
          name="phone_number"  // 수정: formData의 키와 동일하게 설정
          value={formData.phone_number}
          onChange={handleInputChange}
        />
        <InputField
          label="이메일"
          type="email"
          required
          name="email"  // 수정: formData의 키와 동일하게 설정
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputField
          label="주소"
          type="text"
          required
          name="address"  // 수정: formData의 키와 동일하게 설정
          value={formData.address}
          onChange={handleInputChange}
        />

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">선택사항</label>
          <InputField
            label="가입 경로 - 지인, 광고, 검색, 기타"
            type="text"
            name="signUpPath"  // 수정: formData의 키와 동일하게 설정
            value={formData.signUpPath}
            onChange={handleInputChange}
          />
          <InputField
            label="매물 선호 타입"
            type="text"
            name="preferredPropertyType"  // 수정: formData의 키와 동일하게 설정
            value={formData.preferredPropertyType}
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
