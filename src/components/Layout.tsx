import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, GraduationCap, UserPlus, Search } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">StudyAbroad Pro</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/consultants"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/consultant') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <User className="h-4 w-4" />
                <span>顾问列表</span>
              </Link>
              <Link
                to="/universities"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/universit') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                <span>院校库</span>
              </Link>
              <Link
                to="/register"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/register') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <UserPlus className="h-4 w-4" />
                <span>顾问注册</span>
              </Link>
            </nav>

            {/* Search Button */}
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">StudyAbroad Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                专业的留学顾问平台，为您的留学之路提供最优质的服务。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">服务</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/consultants" className="hover:text-white transition-colors">顾问咨询</Link></li>
                <li><Link to="/universities" className="hover:text-white transition-colors">院校查询</Link></li>
                <li><Link to="/register" className="hover:text-white transition-colors">顾问入驻</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">热门国家</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">美国</a></li>
                <li><a href="#" className="hover:text-white transition-colors">英国</a></li>
                <li><a href="#" className="hover:text-white transition-colors">加拿大</a></li>
                <li><a href="#" className="hover:text-white transition-colors">澳大利亚</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">联系我们</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>电话：400-123-4567</li>
                <li>邮箱：info@studyabroadpro.com</li>
                <li>地址：北京市朝阳区xxx大厦</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 StudyAbroad Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;