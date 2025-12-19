import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productCatalog } from '../data/productCatalog'
import { useI18n } from '../i18n'

function ProductDetail() {
  const { id } = useParams()
  const product = productCatalog.find((item) => item.id === id)
  const { t } = useI18n()

  const [activeImage, setActiveImage] = useState(product?.images?.[0] || '')
  const [selectedWidth, setSelectedWidth] = useState(product?.widths?.[0] ?? '')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setActiveImage(product?.images?.[0] || '')
    setSelectedWidth(product?.widths?.[0] ?? '')
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('productDetail.notfound', '产品未找到')}</h1>
        <p className="text-gray-600 mb-6">抱歉，您访问的产品不存在或已下架。</p>
        <Link
          to="/products"
          className="bg-primary-red text-white px-6 py-3 rounded-md hover:bg-primary-darkRed transition"
        >
          {t('productDetail.back', '返回产品列表')}
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-primary-red">首页</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-primary-red">{t('nav.products', '零售产品')}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-50 rounded-lg mb-4 overflow-hidden shadow-sm">
              {activeImage ? (
                <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img) => {
                return (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-md overflow-hidden border-2 ${
                      activeImage === img ? 'border-primary-red' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={product.name} className="w-full h-full object-cover" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-sm text-primary-red mb-4">{product.category}</p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold text-primary-red">{t('productDetail.contact', '请联系询价')}</span>
              <span className="text-sm text-gray-500">宽度：{product.widths.join(' / ')}</span>
            </div>

            <div className="border border-gray-100 rounded-lg p-5 mb-6 bg-gray-50">
              <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Width Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">{t('productDetail.widths', '选择幅宽')}</label>
              <div className="flex flex-wrap gap-3">
                {product.widths.map((width) => (
                  <button
                    key={width}
                    onClick={() => setSelectedWidth(width)}
                    className={`py-2 px-4 rounded-md border-2 text-sm font-medium transition-colors ${
                      selectedWidth === width
                        ? 'border-primary-red bg-red-50 text-primary-red'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {width}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">数量</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center border border-gray-300 rounded-md py-2"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-primary-red text-white py-3 rounded-md font-semibold hover:bg-primary-darkRed transition-colors">
                {t('productDetail.buy', '立即购买')}
              </button>
              <button className="w-full border-2 border-primary-red text-primary-red py-3 rounded-md font-semibold hover:bg-red-50 transition-colors">
                {t('productDetail.cart', '加入购物车')}
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap gap-8 mb-6">
            <button className="text-lg font-semibold text-primary-red border-b-2 border-primary-red pb-2">
              {t('productDetail.desc', '产品详情')}
            </button>
            <button className="text-lg font-semibold text-gray-600 hover:text-gray-900 pb-2">
              {t('productDetail.specs', '规格参数')}
            </button>
            <button className="text-lg font-semibold text-gray-600 hover:text-gray-900 pb-2">
              {t('productDetail.review', '用户评价')}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">材料与工艺</h3>
              <p className="mb-2">{t('productDetail.material', '材质')}：{product.materials.join(' / ')}</p>
              <p className="mb-2">{t('productDetail.application', '适用场景')}：{product.applications.join('、')}</p>
              <p>{t('productDetail.colors', '可选颜色')}：{product.colors?.join('、') || '支持自定义'}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">{t('productDetail.service', '服务与支持')}</h3>
              <ul className="space-y-2">
                <li>★ 提供 OEM / ODM 定制</li>
                <li>★ 支持来样复配、快速打样</li>
                <li>★ 海内外物流联动，支持完税交付</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail


