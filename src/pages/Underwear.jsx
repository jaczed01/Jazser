import { useI18n } from '../i18n'

function Underwear() {
  const { t } = useI18n()

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">内衣配饰</h1>
          <p className="text-lg text-gray-600">专业内衣配饰产品，为您的内衣系列提供完美搭配</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <div className="text-center py-12">
            <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">内衣配饰产品展示</h3>
            <p className="mt-2 text-gray-600">产品详情即将上线，敬请期待</p>
            <p className="mt-4 text-sm text-gray-500">如需了解详情，请联系我们的客服团队</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Underwear



