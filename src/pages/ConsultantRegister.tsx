import React, { useState } from 'react';
import { Upload, User, Mail, Phone, MapPin, Award, Users, FileText } from 'lucide-react';

const ConsultantRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      title: '',
      avatar: null as File | null
    },
    professional: {
      experience: '',
      education: '',
      specialties: [] as string[],
      countries: [] as string[],
      services: [] as string[],
      languages: [] as string[]
    },
    description: {
      introduction: '',
      achievements: '',
      philosophy: ''
    },
    verification: {
      resume: null as File | null,
      certificates: [] as File[],
      portfolio: null as File | null
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const specialtyOptions = ['商科', '计算机科学', '工程', '医学', '法律', '艺术设计', '教育', '心理学', '建筑', '传媒'];
  const countryOptions = ['美国', '英国', '加拿大', '澳大利亚', '新加坡', '香港', '德国', '法国', '荷兰', '日本'];
  const serviceOptions = ['选校规划', '文书润色', '面试指导', '背景提升', '签证指导', '语言培训', '奖学金申请', '职业规划'];
  const languageOptions = ['中文', '英语', '法语', '德语', '西班牙语', '日语', '韩语'];

  const handleInputChange = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section: string, field: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = prev[section as keyof typeof prev][field as keyof typeof prev[typeof section]] as string[];
      const newArray = checked 
        ? [...currentArray, value]
        : currentArray.filter(item => item !== value);
      
      return {
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev],
          [field]: newArray
        }
      };
    });
  };

  const handleFileChange = (section: string, field: string, files: FileList | null) => {
    if (files) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev],
          [field]: field === 'certificates' ? Array.from(files) : files[0]
        }
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">顾问入驻申请</h1>
        <p className="text-gray-600">加入我们的专业顾问团队，帮助更多学生实现留学梦想</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
              {step < 4 && (
                <div
                  className={`flex-1 h-1 mx-4 ${
                    step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>基本信息</span>
          <span>专业背景</span>
          <span>个人介绍</span>
          <span>资质认证</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">基本信息</h2>
            
            {/* Avatar Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                头像照片
              </label>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  {formData.personalInfo.avatar ? (
                    <img
                      src={URL.createObjectURL(formData.personalInfo.avatar)}
                      alt="Avatar"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Upload className="h-4 w-4 inline mr-2" />
                  上传头像
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange('personalInfo', 'avatar', e.target.files)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.personalInfo.name}
                  onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  职业头衔 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.personalInfo.title}
                  onChange={(e) => handleInputChange('personalInfo', 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="如：高级留学顾问"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  邮箱地址 *
                </label>
                <input
                  type="email"
                  required
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  联系电话 *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+86 138-0000-0000"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  所在地区 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.personalInfo.location}
                  onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="如：北京市朝阳区"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Professional Background */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">专业背景</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  工作经验 *
                </label>
                <select
                  required
                  value={formData.professional.experience}
                  onChange={(e) => handleInputChange('professional', 'experience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">请选择工作经验</option>
                  <option value="1-2年">1-2年</option>
                  <option value="3-5年">3-5年</option>
                  <option value="5-8年">5-8年</option>
                  <option value="8年以上">8年以上</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  最高学历 *
                </label>
                <select
                  required
                  value={formData.professional.education}
                  onChange={(e) => handleInputChange('professional', 'education', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">请选择最高学历</option>
                  <option value="学士">学士</option>
                  <option value="硕士">硕士</option>
                  <option value="博士">博士</option>
                </select>
              </div>
            </div>

            {/* Specialties */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                擅长专业 * (可多选)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {specialtyOptions.map((specialty) => (
                  <label key={specialty} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.professional.specialties.includes(specialty)}
                      onChange={(e) => handleArrayChange('professional', 'specialties', specialty, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{specialty}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                擅长国家/地区 * (可多选)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {countryOptions.map((country) => (
                  <label key={country} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.professional.countries.includes(country)}
                      onChange={(e) => handleArrayChange('professional', 'countries', country, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{country}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                提供服务 * (可多选)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.professional.services.includes(service)}
                      onChange={(e) => handleArrayChange('professional', 'services', service, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                掌握语言 * (可多选)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {languageOptions.map((language) => (
                  <label key={language} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.professional.languages.includes(language)}
                      onChange={(e) => handleArrayChange('professional', 'languages', language, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{language}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Personal Description */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">个人介绍</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                自我介绍 * (300-500字)
              </label>
              <textarea
                required
                rows={6}
                value={formData.description.introduction}
                onChange={(e) => handleInputChange('description', 'introduction', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请详细介绍您的教育背景、工作经验、专业优势等..."
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.description.introduction.length}/500
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                主要成就
              </label>
              <textarea
                rows={4}
                value={formData.description.achievements}
                onChange={(e) => handleInputChange('description', 'achievements', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请介绍您的主要成就，如成功案例数量、获得奖项等..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                服务理念
              </label>
              <textarea
                rows={4}
                value={formData.description.philosophy}
                onChange={(e) => handleInputChange('description', 'philosophy', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请分享您的服务理念和对留学咨询的理解..."
              />
            </div>
          </div>
        )}

        {/* Step 4: Verification */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">资质认证</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                个人简历 * (PDF格式)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <div className="text-sm text-gray-600 mb-2">
                  {formData.verification.resume ? formData.verification.resume.name : '点击上传或拖拽文件至此处'}
                </div>
                <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  选择文件
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange('verification', 'resume', e.target.files)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                相关证书 (可选，支持多个文件)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Award className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <div className="text-sm text-gray-600 mb-2">
                  {formData.verification.certificates.length > 0 
                    ? `已选择 ${formData.verification.certificates.length} 个文件`
                    : '上传学历证书、资格证书等相关证明'}
                </div>
                <label className="cursor-pointer bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  选择文件
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange('verification', 'certificates', e.target.files)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                作品集/案例展示 (可选)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <div className="text-sm text-gray-600 mb-2">
                  {formData.verification.portfolio ? formData.verification.portfolio.name : '上传您的成功案例或作品集'}
                </div>
                <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  选择文件
                  <input
                    type="file"
                    accept=".pdf,.ppt,.pptx"
                    onChange={(e) => handleFileChange('verification', 'portfolio', e.target.files)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg transition-colors ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            上一步
          </button>
          
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              下一步
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              提交申请
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ConsultantRegister;