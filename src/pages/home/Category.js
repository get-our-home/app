export default function Category() {
    return (
      <div className="p-4 space-y-6">
        {/* 매물별 섹션 */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-center text-gray-500">{`<매물별>`}</h2>
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <img src="/icons/rooms.png" alt="원/투룸" className="w-16 h-16 mb-2"/>
              <span className="text-sm">원/투룸</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/officetel.png" alt="오피스텔" className="w-16 h-16 mb-2"/>
              <span className="text-sm">오피스텔</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/apt.png" alt="아파트" className="w-16 h-16 mb-2"/>
              <span className="text-sm">아파트</span>
            </div>
          </div>
        </div>
  
        {/* 계약별 섹션 */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-center text-gray-500">{`<계약별>`}</h2>
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <img src="/icons/monthly.png" alt="월세" className="w-16 h-16 mb-2"/>
              <span className="text-sm">월세</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/jeonse.png" alt="전세" className="w-16 h-16 mb-2"/>
              <span className="text-sm">전세</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  