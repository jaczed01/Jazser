import { useState } from 'react'
import { useI18n } from '../i18n'

function Custom() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    material: '',
    color: '',
    width: '',
    length: '',
    quantity: '',
    purpose: '',
    requirements: '',
    deadline: ''
  })

  const [step, setStep] = useState(1)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('定制需求已提交，我们将在24小时内与您联系！')
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('custom.title', '订制产品')}</h1>
          <p className="text-lg text-gray-600">{t('custom.subtitle', '专业定制服务，满足您的个性化需求')}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Process Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[
              { num: 1, title: '提交需求' },
              { num: 2, title: '方案设计' },
              { num: 3, title: '样品确认' },
              { num: 4, title: '批量生产' }
            ].map((item, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    step >= item.num ? 'bg-primary-red text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {item.num}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">{item.title}</span>
                </div>
                {index < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step > item.num ? 'bg-primary-red' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Customization Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">{t('custom.title', '定制需求表单')}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">联系信息</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    公司名称
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    电话 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Product Specifications */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">产品规格</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    材质 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  >
                    <option value="">请选择</option>
                    <option value="silk">丝绸</option>
                    <option value="satin">缎面</option>
                    <option value="ribbon">丝带</option>
                    <option value="velvet">绒面</option>
                    <option value="lace">蕾丝</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    颜色 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                    placeholder="例如：红色、金色等"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    宽度 (cm)
                  </label>
                  <input
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    placeholder="例如：2、4、6"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    长度 (米)
                  </label>
                  <input
                    type="number"
                    name="length"
                    value={formData.length}
                    onChange={handleChange}
                    placeholder="例如：100、500、1000"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    数量 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    placeholder="例如：1000、5000"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    用途
                  </label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  >
                    <option value="">请选择</option>
                    <option value="gift">礼品包装</option>
                    <option value="wedding">婚庆装饰</option>
                    <option value="festival">节庆装饰</option>
                    <option value="promotion">促销活动</option>
                    <option value="other">其他</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                特殊要求
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows="4"
                placeholder="请详细描述您的定制需求，包括设计风格、特殊工艺、包装要求等..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                期望交付日期
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-red focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary-red text-white py-3 rounded-md font-semibold text-lg hover:bg-primary-darkRed transition-colors"
              >
                提交定制需求
              </button>
              <p className="text-sm text-gray-600 text-center mt-4">
                提交后，我们的专业团队将在24小时内与您联系
              </p>
            </div>
          </form>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-red-50 rounded-lg">
            <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">快速响应</h3>
            <p className="text-sm text-gray-600">24小时内响应，48小时内提供方案</p>
          </div>
          <div className="text-center p-6 bg-red-50 rounded-lg">
            <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">专业品质</h3>
            <p className="text-sm text-gray-600">严格质量控制，确保每一件产品完美</p>
          </div>
          <div className="text-center p-6 bg-red-50 rounded-lg">
            <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">合理价格</h3>
            <p className="text-sm text-gray-600">批量定制，价格更优，性价比高</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Custom





