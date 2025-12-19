import React, { createContext, useContext, useMemo, useState } from 'react'

const I18nContext = createContext({
  lang: 'zh',
  t: (key, fallback) => fallback ?? key,
  toggle: () => {},
  setLang: () => {},
})

const translations = {
  zh: {
    nav: {
      intro: '公司介绍',
      products: '零售丝带',
      custom: '订制丝带',
      swimwear: '泳衣配饰',
      underwear: '内衣配饰',
      contact: '在线咨询',
      lang: '中文',
      langLabel: '切换语言',
    },
    hero: {
      title: 'Jazser 杰仕丝带',
      sub1: '专业礼品包装、儿童服装、内衣、服装等配饰生产企业',
      sub2: '成立于2001年，拥有ISO9001和OEKO-TEX100认证，100%环保产品',
      browse: '浏览产品',
      custom: '定制服务',
    },
    showcase: {
      gallery: '产品图库',
      categories: '产品类别',
    },
    timeline: {
      title: '发展历程',
      item1: { year: '2001', title: '公司成立', desc: 'Jazser 成立于2001年9月，开始专业生产礼品包装、服装配饰等产品' },
      item2: { year: '2005', title: '市场拓展', desc: '产品成功进入欧盟、美国等国际市场，建立稳定的海外销售网络' },
      item3: { year: '2010', title: '质量认证', desc: '通过 ISO9001 质量管理体系认证，建立严格的质量控制体系' },
      item4: { year: '2015', title: '环保认证', desc: '通过 OEKO-TEX100 认证，所有产品100%环保，符合欧盟标准' },
      item5: { year: '2018', title: '一站式服务', desc: '完善独立设计、自织、自染、自产、自销的一站式服务体系' },
      item6: { year: '2020', title: '全球布局', desc: '产品销往欧盟、美国、长三角、珠三角、台湾、香港等地区' },
      item7: { year: '2024', title: '数字化转型', desc: '启动线上平台，开启电商业务，拓展数字化销售渠道' },
    },
    cta: {
      title: '开始您的丝带之旅',
      desc: '无论是零售采购还是批量定制，我们都能为您提供专业服务',
      view: '查看产品',
      consult: '咨询定制',
    },
    products: {
      title: '零售产品',
      subtitle: '精选优质丝带产品，满足您的各种需求',
      filter: '筛选条件',
      keyword: '关键词',
      material: '材质',
      application: '用途',
      clear: '清除筛选',
      found: '找到',
      items: '件产品',
      inquire: '请联系询价',
      more: '了解更多',
    },
    productDetail: {
      back: '返回产品列表',
      notfound: '产品未找到',
      desc: '产品详情',
      specs: '规格参数',
      review: '用户评价',
      widths: '选择幅宽',
      qty: '数量',
      buy: '立即购买',
      cart: '加入购物车',
      material: '材质',
      application: '适用场景',
      colors: '可选颜色',
      service: '服务与支持',
      contact: '请联系询价',
    },
    custom: {
      title: '订制产品',
      subtitle: '专业定制服务，满足您的个性化需求',
      submit: '提交定制需求',
      promise: '提交后，我们的专业团队将在24小时内与您联系',
    },
    footer: {
      contact: '联系我们',
      follow: '关注我们',
      address: '广东省东莞市虎门镇',
      rights: '保留所有权利.',
      company: '杰仕丝带',
      tagline:
        '成立于2001年，专业礼品包装、服装配饰生产企业。ISO9001、OEKO-TEX100认证，100%环保产品。',
    },
    about: {
      title: '关于我们',
      desc1: 'Jazser 成立于2001年9月，是一家在礼品包装、儿童服装、内衣、服装等配饰生产方面具有丰富经验的独资企业。产品主要销往欧盟、美国、长三角、珠三角、台湾、香港等国内外知名品牌企业。',
      desc2: '公司专业生产：礼品包装花、内衣饰品、儿童花饰品、发饰、绒带、亚克力印花带、商标带、尼龙带、雪纱带、珠宝配件等产品，独立设计、自织、自染、自产、自销等一站式服务，可满足客户定制材料需求。',
      desc3: '公司已通过 ISO9001、OEKO-TEX100 等机构认证，100% 环保产品，所有原材料均符合欧盟环保标准，公司拥有进出口权，产品可直接销往世界各地。',
    },
    advantages: {
      title: '核心优势',
      iso9001: 'ISO9001 认证',
      iso9001Desc: '严格的质量管理体系',
      oeko: 'OEKO-TEX100 认证',
      oekoDesc: '100% 环保产品，符合欧盟标准',
      service: '一站式服务',
      serviceDesc: '独立设计、自织、自染、自产、自销',
      global: '全球销售',
      globalDesc: '拥有进出口权，产品销往世界各地',
    },
    certificate: {
      title: '资质证书',
    },
    features: {
      quality: '品质保证',
      qualityDesc: 'ISO9001 和 OEKO-TEX100 双重认证，100% 环保产品',
      products: '丰富产品',
      productsDesc: '涵盖礼品包装、服装配饰等10+产品类别',
      custom: '专业定制',
      customDesc: '独立设计、自织、自染、自产、自销一站式服务',
    },
  },
  en: {
    nav: {
      intro: 'About',
      products: 'Retail Ribbon',
      custom: 'Custom Ribbon',
      swimwear: 'Swimwear Accessories',
      underwear: 'Lingerie Accessories',
      contact: 'Contact',
      lang: 'EN',
      langLabel: 'Language',
    },
    hero: {
      title: 'Jazser Ribbon',
      sub1: 'Manufacturer for gift packaging, kids wear, underwear & apparel accessories',
      sub2: "Professional Gift Packaging, Children's Wear & Accessories Manufacturer",
      browse: 'Browse Products',
      custom: 'Custom Service',
    },
    showcase: {
      gallery: 'Gallery',
      categories: 'Categories',
    },
    timeline: {
      title: 'Milestones',
      item1: { year: '2001', title: 'Company Founded', desc: 'Jazser was founded in September 2001, starting professional production of gift packaging and apparel accessories' },
      item2: { year: '2005', title: 'Market Expansion', desc: 'Products successfully entered international markets including EU and USA, establishing stable overseas sales network' },
      item3: { year: '2010', title: 'Quality Certification', desc: 'Obtained ISO9001 quality management system certification, established strict quality control system' },
      item4: { year: '2015', title: 'Eco Certification', desc: 'Obtained OEKO-TEX100 certification, all products are 100% eco-friendly, compliant with EU standards' },
      item5: { year: '2018', title: 'One-Stop Service', desc: 'Perfected one-stop service system including independent design, self-weaving, self-dyeing, self-production, and self-sales' },
      item6: { year: '2020', title: 'Global Layout', desc: 'Products sold to EU, USA, Yangtze River Delta, Pearl River Delta, Taiwan, Hong Kong and other regions' },
      item7: { year: '2024', title: 'Digital Transformation', desc: 'Launched online platform, started e-commerce business, expanded digital sales channels' },
    },
    cta: {
      title: 'Start Your Ribbon Journey',
      desc: 'Retail or bulk custom, we provide professional service',
      view: 'View Products',
      consult: 'Custom Inquiry',
    },
    products: {
      title: 'Retail Products',
      subtitle: 'Selected ribbons for diverse needs',
      filter: 'Filters',
      keyword: 'Keyword',
      material: 'Material',
      application: 'Application',
      clear: 'Clear Filters',
      found: 'Found',
      items: 'items',
      inquire: 'Contact for pricing',
      more: 'Learn more',
    },
    productDetail: {
      back: 'Back to products',
      notfound: 'Product not found',
      desc: 'Details',
      specs: 'Specs',
      review: 'Reviews',
      widths: 'Width',
      qty: 'Quantity',
      buy: 'Buy now',
      cart: 'Add to cart',
      material: 'Materials',
      application: 'Applications',
      colors: 'Colors',
      service: 'Service & Support',
      contact: 'Contact for pricing',
    },
    custom: {
      title: 'Custom Products',
      subtitle: 'Tailored service for your needs',
      submit: 'Submit Request',
      promise: 'We will contact you within 24 hours',
    },
    footer: {
      contact: 'Contact Us',
      follow: 'Follow Us',
      address: 'Humen Town, Dongguan, Guangdong, China',
      rights: 'All rights reserved.',
      company: 'Jazser Ribbon',
      tagline:
        'Founded in 2001, certified by ISO9001 and OEKO-TEX100, eco-friendly ribbon manufacturer.',
    },
    about: {
      title: 'About Us',
      desc1: 'Jazser was founded in September 2001 as a sole proprietorship with extensive experience in producing accessories for gift packaging, children\'s wear, underwear, and apparel. Products are mainly sold to well-known brand companies in the EU, USA, Yangtze River Delta, Pearl River Delta, Taiwan, Hong Kong, and other domestic and international markets.',
      desc2: 'The company specializes in producing: gift packaging flowers, underwear accessories, children\'s flower accessories, hair accessories, ribbon, acrylic printed ribbon, label ribbon, nylon ribbon, chiffon ribbon, jewelry accessories, etc. We provide one-stop services including independent design, self-weaving, self-dyeing, self-production, and self-sales, meeting customers\' custom material needs.',
      desc3: 'The company has passed ISO9001, OEKO-TEX100 and other certifications. 100% eco-friendly products, all raw materials comply with EU environmental standards. The company has import and export rights, and products can be directly sold worldwide.',
    },
    advantages: {
      title: 'Core Advantages',
      iso9001: 'ISO9001 Certification',
      iso9001Desc: 'Strict quality management system',
      oeko: 'OEKO-TEX100 Certification',
      oekoDesc: '100% eco-friendly products, compliant with EU standards',
      service: 'One-Stop Service',
      serviceDesc: 'Independent design, self-weaving, self-dyeing, self-production, self-sales',
      global: 'Global Sales',
      globalDesc: 'Import and export rights, products sold worldwide',
    },
    certificate: {
      title: 'Certificates',
    },
    features: {
      quality: 'Quality Assurance',
      qualityDesc: 'ISO9001 and OEKO-TEX100 dual certification, 100% eco-friendly products',
      products: 'Rich Products',
      productsDesc: 'Covering 10+ product categories including gift packaging and apparel accessories',
      custom: 'Professional Customization',
      customDesc: 'One-stop service: independent design, self-weaving, self-dyeing, self-production, self-sales',
    },
  },
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('zh')

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === 'zh' ? 'en' : 'zh')),
      t: (key, fallback) => {
        const parts = key.split('.')
        let cur = translations[lang]
        for (const p of parts) {
          cur = cur?.[p]
        }
        return cur ?? fallback ?? key
      },
    }),
    [lang]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)



