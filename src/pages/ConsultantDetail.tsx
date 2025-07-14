import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Clock, Calendar, MessageCircle, Phone, Mail, Award, Users, TrendingUp, PlayCircle } from 'lucide-react';

const ConsultantDetail: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app, fetch based on id
  const consultant = {
    id: '1',
    name: '张明华',
    title: '高级留学顾问',
    location: '北京',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    introduction: '我是张明华，拥有8年留学咨询经验，专注于美国TOP30名校申请。曾在美国哥伦比亚大学获得教育学硕士学位，深度了解美国教育体系和申请流程。至今已帮助300多名学生成功获得理想院校的录取通知书，其中85%的学生进入了美国排名前50的大学。我擅长为学生制定个性化的申请方案，从选校规划到文书写作，从背景提升到面试指导，全程陪伴学生的申请之路。我始终相信，每个学生都有独特的潜力，我的使命就是帮助他们发掘并展现这些优势，最终实现留学梦想。',
    phone: '+86 138-0013-8000',
    email: 'zhangminghua@studyabroadpro.com',
    wechat: 'zhangh_study',
    experience: 8,
    successRate: 95,
    rating: 4.9,
    reviewCount: 127,
    caseCount: 300,
    specialties: ['商科', '计算机科学', '工程'],
    countries: ['美国', '加拿大'],
    services: ['选校规划', '文书润色', '面试指导', '背景提升', '签证指导'],
    tags: ['耐心负责', '文书高手', '美加双申', '名校导师'],
    education: [
      {
        school: '哥伦比亚大学',
        degree: '教育学硕士',
        major: '国际教育发展',
        year: '2014-2016'
      },
      {
        school: '北京师范大学',
        degree: '学士',
        major: '英语语言文学',
        year: '2010-2014'
      }
    ],
    workExperience: [
      {
        company: 'StudyAbroad Pro',
        position: '高级留学顾问',
        duration: '2018-至今',
        description: '负责美国TOP30院校申请指导，累计成功案例200+'
      },
      {
        company: '新东方前途出国',
        position: '留学顾问',
        duration: '2016-2018',
        description: '主要负责美国本科和研究生申请咨询'
      }
    ],
    successCases: [
      {
        id: 1,
        studentBackground: 'GPA 3.6, TOEFL 108, GRE 325',
        major: '计算机科学',
        results: ['MIT', 'Stanford', 'Carnegie Mellon'],
        story: '学生本科背景一般，通过精心的背景提升和文书包装，最终获得顶级CS项目录取',
        image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 2,
        studentBackground: 'GPA 3.8, TOEFL 112, GMAT 720',
        major: '金融',
        results: ['Wharton', 'Booth', 'Stern'],
        story: '通过突出学生的量化背景和实习经历，成功申请到顶级商学院',
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
    reviews: [
      {
        id: 1,
        studentName: '王同学',
        rating: 5,
        comment: '张老师非常专业，从选校到文书都给了很多有用的建议。最终拿到了心仪的offer！',
        date: '2024-01-15',
        school: '斯坦福大学'
      },
      {
        id: 2,
        studentName: '李同学',
        rating: 5,
        comment: '整个申请过程都很顺利，张老师很耐心，回复很及时。强烈推荐！',
        date: '2024-01-10',
        school: 'MIT'
      }
    ],
    availableSlots: [
      { date: '2024-02-15', time: '10:00-11:00', available: true },
      { date: '2024-02-15', time: '14:00-15:00', available: true },
      { date: '2024-02-16', time: '09:00-10:00', available: false },
      { date: '2024-02-16', time: '15:00-16:00', available: true },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Basic Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
            {/* Avatar and Basic Info */}
            <div className="text-center mb-6">
              <img
                src={consultant.avatar}
                alt={consultant.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{consultant.name}</h1>
              <p className="text-gray-600 mb-2">{consultant.title}</p>
              <div className="flex items-center justify-center space-x-1 mb-4">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{consultant.location}</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.floor(consultant.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{consultant.rating}</span>
                <span className="text-gray-500">({consultant.reviewCount}评价)</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">{consultant.experience}年</div>
                <div className="text-xs text-gray-500">工作经验</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-green-600">{consultant.successRate}%</div>
                <div className="text-xs text-gray-500">成功率</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-600">{consultant.caseCount}+</div>
                <div className="text-xs text-gray-500">成功案例</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-sm">{consultant.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm">{consultant.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-gray-400" />
                <span className="text-sm">微信：{consultant.wechat}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span>立即咨询</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar className="h-5 w-5" />
                <span>预约时间</span>
              </button>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <div className="text-sm font-medium text-gray-900 mb-2">标签</div>
              <div className="flex flex-wrap gap-2">
                {consultant.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Detailed Info */}
        <div className="lg:col-span-2">
          {/* Tab Navigation */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'overview', label: '基本信息' },
                  { id: 'cases', label: '成功案例' },
                  { id: 'reviews', label: '用户评价' },
                  { id: 'schedule', label: '预约时间' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Introduction */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">自我介绍</h3>
                    <p className="text-gray-700 leading-relaxed">{consultant.introduction}</p>
                  </div>

                  {/* Video Introduction */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">视频介绍</h3>
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                      <img
                        src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Video thumbnail"
                        className="w-full h-full object-cover opacity-75"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                          <PlayCircle className="h-8 w-8 text-blue-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">教育背景</h3>
                    <div className="space-y-4">
                      {consultant.education.map((edu, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                          <Award className="h-6 w-6 text-blue-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-gray-900">{edu.school}</h4>
                            <p className="text-gray-600">{edu.degree} - {edu.major}</p>
                            <p className="text-sm text-gray-500">{edu.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">工作经历</h3>
                    <div className="space-y-4">
                      {consultant.workExperience.map((work, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                          <Users className="h-6 w-6 text-green-600 mt-1" />
                          <div>
                            <h4 className="font-medium text-gray-900">{work.company}</h4>
                            <p className="text-gray-600">{work.position}</p>
                            <p className="text-sm text-gray-500 mb-2">{work.duration}</p>
                            <p className="text-sm text-gray-700">{work.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties and Services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">擅长专业</h3>
                      <div className="space-y-2">
                        {consultant.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mr-2"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">服务项目</h3>
                      <div className="space-y-2">
                        {consultant.services.map((service, index) => (
                          <span
                            key={index}
                            className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mr-2"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Cases Tab */}
              {activeTab === 'cases' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">成功案例</h3>
                  {consultant.successCases.map((case_) => (
                    <div key={case_.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={case_.image}
                          alt="Student"
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                              {case_.major}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{case_.studentBackground}</p>
                          <div className="mb-3">
                            <span className="text-sm font-medium text-gray-900">录取结果：</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {case_.results.map((result, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm"
                                >
                                  {result}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm">{case_.story}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">用户评价</h3>
                  {consultant.reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-900">{review.studentName}</span>
                            <span className="text-sm text-gray-500">录取：{review.school}</span>
                          </div>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Schedule Tab */}
              {activeTab === 'schedule' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">可预约时间</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {consultant.availableSlots.map((slot, index) => (
                      <div
                        key={index}
                        className={`p-4 border rounded-lg ${
                          slot.available
                            ? 'border-green-200 bg-green-50 hover:bg-green-100 cursor-pointer'
                            : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">{slot.date}</div>
                            <div className="text-sm text-gray-600">{slot.time}</div>
                          </div>
                          <div>
                            {slot.available ? (
                              <span className="text-green-600 text-sm">可预约</span>
                            ) : (
                              <span className="text-gray-400 text-sm">已预约</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantDetail;