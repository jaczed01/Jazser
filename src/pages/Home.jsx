import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n'

function Home() {
  const { t } = useI18n()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const observerRef = useRef(null)

  // 产品图片列表（使用 encodeURI 确保特殊字符路径可用）
  const productImages = [
    '/16f9c3c1-33d6-4423-8f51-901e657c05af._CR0,86,1500,884_SX1500_.jpg',
    '/25f0164f-9f50-42ca-8ba9-ee60a50aa0a7._CR0,0,3556,2000_SX1500_.jpg',
    '/5cfea04a-dc49-4280-934d-464102601e8e._CR0,119,1500,750_SX750_SY375_.jpg',
    '/17805beb-5b2a-476c-a60f-42d70025bcaa._CR0,0,3000,1500_.jpg',
    '/1e6b95e9-7174-48d8-9ddd-5d39822cd9d5.__CR0,135,3000,1230_PT0_SX1464_V1___.jpg',
    '/2bb401a7-170b-49d9-a77e-36b2f2eb63ce._CR0,0,3000,1500_SX750_SY375_.jpg',
  ].map((p) => encodeURI(p))

  // 图片轮播自动播放
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [productImages.length])

  // 滚动动画观察器
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const heroOverlayImage = encodeURI(
    '/product/Chiffon Ribbon 1-12 inch x 30 Yard Handmade Fringe Chiffon Ivory Silk Ribbon,Cream Ribbon for Wedding Invitations, Bridal Bouquets Wrapping, Flower Arrangement Decoration/28e3ad32-2663-43f8-b1a2-7facfec43a5a._CR0,0,3556,2000_SX1500_.jpg'
  )

  return (
    <div className="bg-white">
      {/* Hero Section with Image Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${productImages[0]})`,
            opacity: 0.15
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-50/90 to-white/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in"
              style={{
                animation: 'fadeInUp 1s ease-out'
              }}
            >
              {t('hero.title', 'Jazser 杰仕丝带')}
            </h1>
            <p 
              className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto animate-fade-in"
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}
            >
              {t('hero.sub1', '专业礼品包装、儿童服装、内衣、服装等配饰生产企业')}
            </p>
            <p 
              className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto animate-fade-in"
              style={{
                animation: 'fadeInUp 1s ease-out 0.4s both'
              }}
            >
              {t('hero.sub2', "Professional Gift Packaging, Children's Wear, Underwear & Accessories Manufacturer")}
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{
                animation: 'fadeInUp 1s ease-out 0.6s both'
              }}
            >
              <Link
                to="/products"
                className="bg-primary-red text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-darkRed transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('hero.browse', '浏览产品')}
              </Link>
              <Link
                to="/custom"
                className="bg-white text-primary-red border-2 border-primary-red px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('hero.custom', '定制服务')}
              </Link>
            </div>
          </div>
        </div>

        {/* Full-width animated overlay image */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[320px] md:h-[420px] lg:h-[520px]">
            <img
              src={heroOverlayImage}
              alt="Hero Showcase"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-red/20 via-white/10 to-white/40 mix-blend-multiply animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(220,38,38,0.25),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.18),transparent_30%)] animate-slow-pan"></div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[560px] rounded-2xl overflow-hidden shadow-2xl">
            {productImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`产品展示 ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            ))}
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div 
              data-animate
              id="about-text"
              className={`transition-all duration-1000 ${
                isVisible['about-text'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.title', '关于我们')}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('about.desc1', 'Jazser 成立于2001年9月，是一家在礼品包装、儿童服装、内衣、服装等配饰生产方面具有丰富经验的独资企业。产品主要销往欧盟、美国、长三角、珠三角、台湾、香港等国内外知名品牌企业。')}</p>
                <p>{t('about.desc2', '公司专业生产：礼品包装花、内衣饰品、儿童花饰品、发饰、绒带、亚克力印花带、商标带、尼龙带、雪纱带、珠宝配件等产品，独立设计、自织、自染、自产、自销等一站式服务，可满足客户定制材料需求。')}</p>
                <p>{t('about.desc3', '公司已通过 ISO9001、OEKO-TEX100 等机构认证，100% 环保产品，所有原材料均符合欧盟环保标准，公司拥有进出口权，产品可直接销往世界各地。')}</p>
              </div>
            </div>
            <div 
              data-animate
              id="advantages"
              className={`bg-red-50 rounded-lg p-8 transition-all duration-1000 ${
                isVisible['advantages'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('advantages.title', '核心优势')}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{t('advantages.iso9001', 'ISO9001 认证')}</h4>
                    <p className="text-gray-600 text-sm">{t('advantages.iso9001Desc', '严格的质量管理体系')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{t('advantages.oeko', 'OEKO-TEX100 认证')}</h4>
                    <p className="text-gray-600 text-sm">{t('advantages.oekoDesc', '100% 环保产品，符合欧盟标准')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{t('advantages.service', '一站式服务')}</h4>
                    <p className="text-gray-600 text-sm">{t('advantages.serviceDesc', '独立设计、自织、自染、自产、自销')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{t('advantages.global', '全球销售')}</h4>
                    <p className="text-gray-600 text-sm">{t('advantages.globalDesc', '拥有进出口权，产品销往世界各地')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certificate Section */}
          <div 
            data-animate
            id="certificate"
            className={`transition-all duration-1000 ${
              isVisible['certificate'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('certificate.title', '资质证书')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                '/certificate/KudrFduvQjC01WWCrxmkKQ.jpg',
                '/certificate/lpWt0bn4Q6mxmC9v7SeXSA.jpg',
                '/certificate/v_vvIHdRS7658p_VdkIAbA.jpg',
                '/certificate/yMP03qxXQm-A-e3M415SuQ.jpg',
              ].map((cert, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={cert}
                      alt={`证书 ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/10 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories with Images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('showcase.categories', '产品类别')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: '礼品包装花', icon: '🎁', image: '/2df549a6-db25-4871-ab5c-8d14288013b8._CR0,0,3000,1500_.jpg' },
              { name: '内衣饰品', icon: '👙', image: '/376413c6-7029-4947-b131-fce05ba6efe2._CR0,0,3000,1500_SX750_SY375_.jpg' },
              { name: '儿童花饰品', icon: '👶', image: '/54fe6741-be5e-444c-b1dd-aa41f6c3b06a._CR0,0,2400,1256_SX375_SY375_.jpg' },
              { name: '发饰', icon: '💇', image: '/61f8cbed-2d15-43b1-b43c-59b37cf06897._CR0,0,3000,1500_SX750_SY375_.jpg' },
              { name: '绒带', icon: '🎀', image: '/6bd653ce-47c5-452f-b05b-d7a7f51eb67b._CR0,0,3000,1500_SX750_SY375_.jpg' },
              { name: '亚克力印花带', icon: '🌈', image: '/74326400-92a8-4ccb-9a9a-d2369a395fc2._CR0,0,3000,1500_.jpg' },
              { name: '商标带', icon: '🏷️', image: '/74767fda-d901-41de-8f8b-c8e77f30e338._CR0,0,3000,1500_SX750_SY375_.jpg' },
              { name: '尼龙带', icon: '📿', image: '/82c8870c-b3f6-4314-a824-ff2e5a9cee4b._CR0,0,3000,1500_.jpg' },
              { name: '雪纱带', icon: '❄️', image: '/8a39a9e2-ee61-4c4b-b58f-c399de278336._CR0,0,3000,1500_SX1500_.jpg' },
              { name: '珠宝配件', icon: '💎', image: '/8b7b542e-dd87-4239-b6d9-82db070a920e._CR0,0,3000,1500_SX750_SY375_.jpg' },
            ].map((category, index) => (
              <div
                key={index}
                data-animate
                id={`category-${index}`}
                className={`text-center p-6 bg-gray-50 rounded-lg hover:bg-red-50 transition-all duration-500 cursor-pointer group overflow-hidden relative ${
                  isVisible[`category-${index}`]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-red transition-colors">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('showcase.gallery', '产品图库')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '/8a2aa0ae-640f-499e-aae0-735a6fb5ca56._CR0,0,3000,1500_.jpg',
              '/8e20c96e-6899-404d-850c-a9d8923364ad._CR0,0,3000,1500_SX750_SY375_.jpg',
              '/9c7b198a-edd0-47ae-b7d2-d03a09770025._CR0,0,3000,1500_SX750_SY375_.jpg',
              '/a96c102d-4a47-4058-8dca-291c89a3c4b5._CR0,0,3000,1500_SX750_SY375_.jpg',
              '/c0f454c5-b25c-403c-890c-118c432db46a._CR0,0,3000,1500_SX750_SY375_.jpg',
              '/d4082cf1-04eb-4e1e-8ea7-f00a7473591f._CR0,0,3000,1500_SX750_SY375_.jpg',
              '/dfdd817f-9d69-4aac-b615-b9f01376ed79._CR0,0,3000,1500_SX750_SY375_.jpg',
              '/dff3375e-7ba2-4ada-bd36-3f90c3b89c11._CR0,0,3000,1500_SX1500_.jpg',
            ].map((img, index) => (
              <div
                key={index}
                data-animate
                id={`gallery-${index}`}
                className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer ${
                  isVisible[`gallery-${index}`]
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img}
                    alt={t('showcase.gallery', '产品图库') + ` ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-primary-red/0 group-hover:bg-primary-red/20 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                title: t('features.quality', '品质保证'),
                desc: t('features.qualityDesc', 'ISO9001 和 OEKO-TEX100 双重认证，100% 环保产品'),
                image: '/e40c0785-1558-42dd-8dab-522f10ea4fbb._CR0,0,3000,1500_SX750_SY375_.jpg'
              },
              {
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: t('features.products', '丰富产品'),
                desc: t('features.productsDesc', '涵盖礼品包装、服装配饰等10+产品类别'),
                image: '/f1d3884f-4775-49ff-8b23-358c31a46d74._CR0,0,1500,1500_SX375_SY375_.jpg'
              },
              {
                icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
                title: t('features.custom', '专业定制'),
                desc: t('features.customDesc', '独立设计、自织、自染、自产、自销一站式服务'),
                image: '/f4cc985f-f1dd-41ce-8e5f-a434dd0a67bd._CR0,0,3000,1500_SX750_SY375_.jpg'
              },
            ].map((feature, index) => (
              <div
                key={index}
                data-animate
                id={`feature-${index}`}
                className={`text-center group cursor-pointer transition-all duration-500 ${
                  isVisible[`feature-${index}`]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-red/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-360 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-red transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url(${productImages[2]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('timeline.title', '发展历程')}</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-red"></div>
            <div className="space-y-8">
              {[
                { key: 'item1', year: '2001' },
                { key: 'item2', year: '2005' },
                { key: 'item3', year: '2010' },
                { key: 'item4', year: '2015' },
                { key: 'item5', year: '2018' },
                { key: 'item6', year: '2020' },
                { key: 'item7', year: '2024' },
              ].map((item, index) => {
                const fallback = {
                  year: item.year,
                  title: ['公司成立', '市场拓展', '质量认证', '环保认证', '一站式服务', '全球布局', '数字化转型'][index],
                  desc: ['Jazser 成立于2001年9月，开始专业生产礼品包装、服装配饰等产品', '产品成功进入欧盟、美国等国际市场，建立稳定的海外销售网络', '通过 ISO9001 质量管理体系认证，建立严格的质量控制体系', '通过 OEKO-TEX100 认证，所有产品100%环保，符合欧盟标准', '完善独立设计、自织、自染、自产、自销的一站式服务体系', '产品销往欧盟、美国、长三角、珠三角、台湾、香港等地区', '启动线上平台，开启电商业务，拓展数字化销售渠道'][index]
                }
                const timelineItem = t(`timeline.${item.key}`, fallback)
                const displayItem = typeof timelineItem === 'object' && timelineItem.year ? timelineItem : fallback
                return (
                  <div
                    key={index}
                    data-animate
                    id={`timeline-${index}`}
                    className={`flex items-center transition-all duration-1000 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } ${
                      isVisible[`timeline-${index}`]
                        ? 'opacity-100 translate-x-0'
                        : index % 2 === 0
                        ? 'opacity-0 -translate-x-20'
                        : 'opacity-0 translate-x-20'
                    }`}
                    style={{
                      transitionDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <div className="text-primary-red font-bold text-lg mb-2">{displayItem.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{displayItem.title}</h3>
                        <p className="text-gray-600">{displayItem.desc}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-primary-red rounded-full border-4 border-white shadow-md z-10 transform hover:scale-125 transition-transform duration-300"></div>
                    <div className="w-1/2"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title', '开始您的丝带之旅')}</h2>
          <p className="text-xl mb-8">{t('cta.desc', '无论是零售采购还是批量定制，我们都能为您提供专业服务')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-primary-red px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('cta.view', '查看产品')}
            </Link>
            <Link
              to="/custom"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-primary-red transition-colors"
            >
              {t('cta.consult', '咨询定制')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

