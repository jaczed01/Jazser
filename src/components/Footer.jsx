import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'

function Footer() {
  const { t } = useI18n()
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.svg?v=2" 
                alt="Jazser Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-bold">{t('footer.company', '杰仕丝带')}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t(
                'footer.tagline',
                '成立于2001年，专业礼品包装、服装配饰生产企业。ISO9001、OEKO-TEX100认证，100%环保产品。'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  公司介绍
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  零售产品
                </Link>
              </li>
              <li>
                <Link to="/custom" className="text-gray-400 hover:text-white transition-colors">
                  订制产品
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact', '联系我们')}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>电话：400-XXX-XXXX</li>
              <li>邮箱：info@jazser.com</li>
              <li>地址：{t('footer.address', '广东省东莞市虎门镇')}</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.follow', '关注我们')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">微信</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.042-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.305-8.691-6.305zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.179c0-.651.52-1.18 1.162-1.18zm6.673 3.036c-1.693.077-3.637.708-5.157 1.93-1.52 1.22-2.368 2.89-1.932 4.76.422 1.815 2.01 3.366 4.048 3.87 1.256.314 2.617.314 3.756 0a.722.722 0 0 1 .591.082l1.588.928c.018.092.044.184.044.277 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l.39-1.48a.59.59 0 0 1 .212-.665c1.832-1.347 3.002-3.338 3.002-5.55 0-2.426-2.069-4.47-4.993-4.303zm-3.678 3.402c.52 0 .942.428.942.956a.95.95 0 0 1-.942.955.95.95 0 0 1-.942-.955c0-.528.422-.956.942-.956zm3.678 0c.52 0 .942.428.942.956a.95.95 0 0 1-.942.955.95.95 0 0 1-.942-.955c0-.528.422-.956.942-.956z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 {t('footer.company', '杰仕丝带')}. {t('footer.rights', '保留所有权利.')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

