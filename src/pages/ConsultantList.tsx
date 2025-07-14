import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, MapPin, MessageCircle, Eye, Clock } from 'lucide-react';

interface Consultant {
  id: string;
  name: string;
  title: string;
  location: string;
  avatar: string;
  introduction: string;
  experience: number;
  successRate: number;
  rating: number;
  reviewCount: number;
  specialties: string[];
  countries: string[];
  services: string[];
  tags: string[];
}

const ConsultantList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('全部');
  const [selectedSpecialty, setSelectedSpecialty] = useState('全部');

  const consultants: Consultant[] = [
    {
      id: '1',
      name: '张明华',
      title: '高级留学顾问',
      location: '北京',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      introduction: '专注美国TOP30名校申请，累计帮助300+学生获得心仪offer',
      experience: 8,
      successRate: 95,
      rating: 4.9,
      reviewCount: 127,
      specialties: ['商科', '计算机科学', '工程'],
      countries: ['美国', '加拿大'],
      services: ['选校规划', '文书润色', '面试指导'],
      tags: ['耐心负责', '文书高手', '美加双申']
    },
    {
      id: '2',
      name: '李雅婷',
      title: '英联邦留学专家',
      location: '上海',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      introduction: '专业英国G5精英大学申请，成功率业内领先',
      experience: 6,
      successRate: 92,
      rating: 4.8,
      reviewCount: 89,
      specialties: ['金融', '法律', '医学'],
      countries: ['英国', '澳大利亚'],
      services: ['选校规划', '签证指导', '背景提升'],
      tags: ['专业权威', '英联邦专家', '高效沟通']
    },
    {
      id: '3',
      name: '王子轩',
      title: '艺术留学顾问',
      location: '广州',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      introduction: '艺术设计类专业申请专家，作品集指导经验丰富',
      experience: 5,
      successRate: 88,
      rating: 4.7,
      reviewCount: 64,
      specialties: ['艺术设计', '建筑', '传媒'],
      countries: ['美国', '英国', '意大利'],
      services: ['作品集指导', '文书润色', '院校选择'],
      tags: ['创意思维', '作品集专家', '艺术名校']
    }
  ];

  const countries = ['全部', '美国', '英国', '加拿大', '澳大利亚', '新加坡', '香港'];
  const specialties = ['全部', '商科', '计算机科学', '工程', '艺术设计', '金融', '法律', '医学'];

  const filteredConsultants = consultants.filter(consultant => {
    const matchesSearch = consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consultant.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCountry = selectedCountry === '全部' || consultant.countries.includes(selectedCountry);
    const matchesSpecialty = selectedSpecialty === '全部' || consultant.specialties.includes(selectedSpecialty);
    
    return matchesSearch && matchesCountry && matchesSpecialty;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">专业留学顾问</h1>
        <p className="text-gray-600">找到最适合您的留学顾问，开启您的留学之旅</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="搜索顾问姓名或专业..."
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

          {/* Specialty Filter */}
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
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
        <p className="text-gray-600">找到 {filteredConsultants.length} 位符合条件的顾问</p>
      </div>

      {/* Consultant Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredConsultants.map((consultant) => (
          <div key={consultant.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={consultant.avatar}
                  alt={consultant.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{consultant.name}</h3>
                  <p className="text-sm text-gray-600">{consultant.title}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{consultant.location}</span>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <p className="text-gray-700 text-sm mb-4">{consultant.introduction}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">{consultant.experience}年</div>
                  <div className="text-xs text-gray-500">工作经验</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-600">{consultant.successRate}%</div>
                  <div className="text-xs text-gray-500">成功率</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-lg font-semibold text-gray-900">{consultant.rating}</span>
                  </div>
                  <div className="text-xs text-gray-500">{consultant.reviewCount}评价</div>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">擅长专业：</div>
                <div className="flex flex-wrap gap-1">
                  {consultant.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Countries */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-2">擅长国家：</div>
                <div className="flex flex-wrap gap-1">
                  {consultant.countries.map((country, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-1">
                  {consultant.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>立即联系</span>
                </button>
                <Link
                  to={`/consultant/${consultant.id}`}
                  className="flex-1 flex items-center justify-center space-x-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Eye className="h-4 w-4" />
                  <span>查看详情</span>
                </Link>
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

export default ConsultantList;