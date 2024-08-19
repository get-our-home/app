import MenuItem from './MenuItem';

export default function MenuList() {
  const menuItems = [
    { title: '고객센터', link: '/customer-service' },
    { title: '허위매물 신고', link: '/report-fake' },
    { title: '자주 묻는 질문', link: '/faq' },
    { title: '이벤트', link: '/events' },
    { title: '부동산 관련 정보', link: '/real-estate-info' },
    { title: '광고/제휴 문의', link: '/ads-partnership' },
  ];

  return (
    <div className="w-full max-w-md space-y-4">
      {menuItems.map((item, index) => (
        <MenuItem key={index} title={item.title} link={item.link} />
      ))}
    </div>
  );
}
