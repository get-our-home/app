import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,      // React의 Strict Mode를 활성화하여 잠재적인 문제를 감지하고 경고를 출력
    swcMinify: true,            // SWC 컴파일러를 사용하여 코드 크기를 줄이고 성능을 향상
    compiler: {
		// 프로덕션 환경에서 console.log를 제거하여 불필요한 로그 출력 방지
        removeConsole: process.env.NODE_ENV !== "development"     
    }
};

export default withPWA({
    dest: "public",         // PWA 관련 파일(서비스워커 등)이 저장될 디렉토리 지정
    register: true,         // 클라이언트 로드 시 PWA 서비스워커 자동 등록
    skipWaiting: true,      // 새로운 서비스워커가 설치되면 즉시 활성화
})(nextConfig);