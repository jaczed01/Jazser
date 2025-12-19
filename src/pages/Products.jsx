import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { productCatalog } from '../data/productCatalog'
import { useI18n } from '../i18n'

function Products() {
  const { t } = useI18n()
  const [selectedMaterial, setSelectedMaterial] = useState('全部')
  const [selectedApplication, setSelectedApplication] = useState('全部')
  const [searchTerm, setSearchTerm] = useState('')

  const materialOptions = useMemo(
    () => ['全部', ...new Set(productCatalog.flatMap((item) => item.materials))],
    []
  )

  const applicationOptions = useMemo(
    () => ['全部', ...new Set(productCatalog.flatMap((item) => item.applications))],
    []
  )

  const filteredProducts = useMemo(() => {
    return productCatalog.filter((product) => {
      const matchMaterial =
        selectedMaterial === '全部' || product.materials.includes(selectedMaterial)
      const matchApplication =
        selectedApplication === '全部' || product.applications.includes(selectedApplication)
      const matchKeyword =
        !searchTerm ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      return matchMaterial && matchApplication && matchKeyword
    })
  }, [selectedMaterial, selectedApplication, searchTerm])

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('products.title', '零售产品')}</h1>
          <p className="text-lg text-gray-600">{t('products.subtitle', '精选优质丝带产品，满足您的各种需求')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">{t('products.filter', '筛选条件')}</h2>
              
              {/* Keyword */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">{t('products.keyword', '关键词')}</h3>
                <input
                  type="text"
                  placeholder={t('products.keyword', '输入产品/系列名')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary-red focus:border-transparent"
                />
              </div>

              {/* Material Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">{t('products.material', '材质')}</h3>
                <div className="space-y-2">
                  {materialOptions.map((material) => (
                    <label key={material} className="flex items-center">
                      <input
                        type="radio"
                        name="material"
                        value={material}
                        checked={selectedMaterial === material}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                        className="text-primary-red focus:ring-primary-red"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {material}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Application Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">{t('products.application', '用途')}</h3>
                <div className="space-y-2">
                  {applicationOptions.map((application) => (
                    <label key={application} className="flex items-center">
                      <input
                        type="radio"
                        name="application"
                        value={application}
                        checked={selectedApplication === application}
                        onChange={(e) => setSelectedApplication(e.target.value)}
                        className="text-primary-red focus:ring-primary-red"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {application}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedMaterial('全部')
                  setSelectedApplication('全部')
                  setSearchTerm('')
                }}
                className="w-full text-sm text-primary-red hover:underline"
              >
                {t('products.clear', '清除筛选')}
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {t('products.found', '找到')} <span className="font-semibold text-gray-900">{filteredProducts.length}</span> {t('products.items', '件产品')}
              </p>
              <select className="border border-gray-300 rounded-md px-4 py-2 text-sm">
                <option>默认排序</option>
                <option>价格从低到高</option>
                <option>价格从高到低</option>
                <option>最新上架</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const thumb = product.thumbnail || product.images?.[0] || ''
                return (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
                  >
                    <div className="aspect-square bg-gray-100 relative overflow-hidden rounded-t-lg">
                      {thumb ? (
                        <img
                          src={thumb}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 right-2 bg-primary-red text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        {t('products.more', '了解更多')}
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center gap-2 flex-wrap text-xs">
                        <span className="px-2 py-1 bg-red-50 text-primary-red rounded-full">
                          {product.category}
                        </span>
                        {product.materials.slice(0, 2).map((material) => (
                          <span key={material} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                            {material}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-red transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                        {product.applications.slice(0, 3).map((application) => (
                          <span key={application} className="px-2 py-1 bg-gray-50 rounded">
                            {application}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-primary-red">
                            {t('products.inquire', '请联系询价')}
                          </p>
                          <p className="text-xs text-gray-500">宽度：{product.widths.join(' / ')}</p>
                        </div>
                        <span className="text-sm text-primary-red underline">
                          {t('products.more', '了解更多')}
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

