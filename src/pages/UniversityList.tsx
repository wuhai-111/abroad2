import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Users, TrendingUp, DollarSign, Calendar, Globe, Award } from 'lucide-react';

interface University {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  country: string;
  ranking: number;
  description: string;
  highlights: string[];
  studentCount: number;
  acceptanceRate: number;
  tuitionFee: string;
  establishedYear: number;
  majors: string[];
  languageRequirement: string;
}

const UniversityList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('全部');
  const [selectedMajor, setSelectedMajor] = useState('全部');

  const universities: University[] = [
    {
      id: '1',
      name: '哈佛大学',
      nameEn: 'Harvard University',
      logo: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: '美国',
      ranking: 1,
      description: '哈佛大学是美国最古老的高等教育机构，培养了8位美国总统和众多诺贝尔奖获得者。',
      highlights: ['常春藤盟校', '世界顶级研究型大学', '最古老的美国大学'],
      studentCount: 31566,
      acceptanceRate: 3.4,
      tuitionFee: '$54,002',
      establishedYear: 1636,
      majors: ['商科', '法律', '医学', '工程', '文理'],
      languageRequirement: 'TOEFL 100+ / IELTS 7.0+'
    },
    {
      id: '2',
      name: '剑桥大学',
      nameEn: 'University of Cambridge',
      logo: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: '英国',
      ranking: 2,
      description: '剑桥大学是英语世界中第二古老的大学，以其学术卓越和科研成果闻名于世。',
      highlights: ['G5超级精英大学', '牛津剑桥', '世界顶级学府'],
      studentCount: 24450,
      acceptanceRate: 21,
      tuitionFee: '£33,972',
      establishedYear: 1209,
      majors: ['数学', '物理', '计算机科学', '工程', '医学'],
      languageRequirement: 'IELTS 7.5+ / TOEFL 110+'
    },
    {
      id: '3',
      name: '多伦多大学',
      nameEn: 'University of Toronto',
      logo: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: '加拿大',
      ranking: 18,
      description: '多伦多大学是加拿大顶尖的公立研究型大学，在医学、工程、商科等领域享有盛誉。',
      highlights: ['加拿大顶级大学', '公立研究型大学', '医博类排名第一'],
      studentCount: 97000,
      acceptanceRate: 43,
      tuitionFee: 'CAD $58,160',
      establishedYear: 1827,
      majors: ['医学', '工程', '商科', '计算机科学', '人文'],
      languageRequirement: 'IELTS 6.5+ / TOEFL 100+'
    },
    {
      id: '4',
      name: '墨尔本大学',
      nameEn: 'University of Melbourne',
      logo: 'https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: '澳大利亚',
      ranking: 14,
      description: '墨尔本大学是澳大利亚八大名校之一，在教学和科研方面均处于世界领先地位。',
      highlights: ['澳洲八大名校', '世界百强大学', '研究实力雄厚'],
      studentCount: 51961,
      acceptanceRate: 70,
      tuitionFee: 'AUD $45,824',
      establishedYear: 1853,
      majors: ['医学', '法律', '商科', '工程', '艺术'],
      languageRequirement: 'IELTS 6.5+ / TOEFL 79+'
    },
    {
      id: '5',
      name: '新加坡国立大学',
      nameEn: 'National University of Singapore',
      logo: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: '新加坡',
      ranking: 8,
      description: '新加坡国立大学是新加坡历史最悠久且最具声望的大学，亚洲顶尖学府之一。',
      highlights: ['亚洲顶级大学', '世界知名学府', '多元文化环境'],
      studentCount: 37500,
      acceptanceRate: 5,
      tuitionFee: 'SGD $37,550',
      establishedYear: 1905,
      majors: ['工程', '商科', '计算机科学', '医学', '法律'],
      languageRequirement: 'IELTS 6.5+ / TOEFL 90+'
    },
    {
      id: '6',
      name: '香港大学',
      nameEn: 'The University of Hong Kong',
      logo: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: '香港',
      ranking: 26,
      description: '香港大学是香港历史最悠久的大学，享有"亚洲常春藤"的美誉。',
      highlights: ['港校之首', '亚洲常春藤', '国际化程度高'],
      studentCount: 31844,
      acceptanceRate: 10,
      tuitionFee: 'HKD $171,000',
      establishedYear: 1911,
      majors: ['医学', '商科', '法律', '工程', '文理'],
      languageRequirement: 'IELTS 6.5+ / TOEFL 93+'
    }
  ];

  const countries = ['全部', '美国', '英国', '加拿大', '澳大利亚', '新加坡', '香港'];
  const majors = ['全部', '商科', '工程', '计算机科学', '医学', '法律', '文理', '艺术'];

  const filteredUniversities = universities.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.majors.some(major => major.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCountry = selectedCountry === '全部' || university.country === selectedCountry;
    const matchesMajor = selectedMajor === '全部' || university.majors.includes(selectedMajor);
    
    return matchesSearch && matchesCountry && matchesMajor;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">全球院校库</h1>
        <p className="text-gray-600">探索世界顶级大学，找到最适合您的留学目标</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="搜索学校名称或专业..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Country Filter */}
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>

          {/* Major Filter */}
          <select
            value={selectedMajor}
            onChange={(e) => setSelectedMajor(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {majors.map(major => (
              <option key={major} value={major}>{major}</option>
            ))}
          </select>

          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Filter className="h-4 w-4" />
            <span>高级筛选</span>
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">找到 {filteredUniversities.length} 所符合条件的院校</p>
      </div>

      {/* University Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredUniversities.map((university) => (
          <div key={university.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={university.logo}
                  alt={university.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{university.name}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                      #{university.ranking}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{university.nameEn}</p>
                  <div className="flex items-center space-x-1">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{university.country}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4">{university.description}</p>

              {/* Highlights */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {university.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Users className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">{university.studentCount.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">在校生</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <div className="text-sm font-medium text-green-600">{university.acceptanceRate}%</div>
                  <div className="text-xs text-gray-500">录取率</div>
                </div>
                <div className="text-center">
                  <DollarSign className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">{university.tuitionFee}</div>
                  <div className="text-xs text-gray-500">学费/年</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">{university.establishedYear}</div>
                  <div className="text-xs text-gray-500">建校年份</div>
                </div>
              </div>

              {/* Majors */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">热门专业：</div>
                <div className="flex flex-wrap gap-1">
                  {university.majors.slice(0, 5).map((major, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {major}
                    </span>
                  ))}
                  {university.majors.length > 5 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{university.majors.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Language Requirement */}
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-1">语言要求：</div>
                <span className="text-sm text-gray-900">{university.languageRequirement}</span>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <Link
                  to={`/university/${university.id}`}
                  className="flex-1 flex items-center justify-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Award className="h-4 w-4" />
                  <span>查看详情</span>
                </Link>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  收藏
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <nav className="flex space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
            上一页
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-md">1</button>
          <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">2</button>
          <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">3</button>
          <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
            下一页
          </button>
        </nav>
      </div>
    </div>
  );
};

export default UniversityList;