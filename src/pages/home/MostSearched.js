export default function MostSearched() {
    return (
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 text-center">현재 가장 많이 찾는 매물</h2>
          <div className="flex overflow-x-scroll space-x-4 pb-4">
            <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0 w-40">
              <div className="w-full h-24 bg-gray-300 mb-1 rounded-lg"></div>
              <span className="text-sm">매물 사진</span>
              <span className="text-xs text-gray-500 mt-1">가격, 매물 종류, 크기, 위치</span>
            </div>
            <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0 w-40">
              <div className="w-full h-24 bg-gray-300 mb-1 rounded-lg"></div>
              <span className="text-sm">매물 사진</span>
              <span className="text-xs text-gray-500 mt-1">가격, 매물 종류, 크기, 위치</span>
            </div>
            <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0 w-40">
              <div className="w-full h-24 bg-gray-300 mb-1 rounded-lg"></div>
              <span className="text-sm">매물 사진</span>
              <span className="text-xs text-gray-500 mt-1">가격, 매물 종류, 크기, 위치</span>
            </div>
            <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0 w-40">
              <div className="w-full h-24 bg-gray-300 mb-1 rounded-lg"></div>
              <span className="text-sm">매물 사진</span>
              <span className="text-xs text-gray-500 mt-1">가격, 매물 종류, 크기, 위치</span>
            </div>
          </div>
        </div>
      );
  }
  