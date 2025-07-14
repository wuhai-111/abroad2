import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Globe, Users, TrendingUp, DollarSign, Calendar, Award, MapPin, BookOpen, GraduationCap, Heart } from 'lucide-react';

const UniversityDetail: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app, fetch based on id
  const university = {
    id: '1',
    name: '哈佛大学',
    nameEn: 'Harvard University',
    logo: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400',
    country: '美国',
    city: '马萨诸塞州剑桥市',
    ranking: 1,
    description: '哈佛大学（Harvard University）是美国最古老的高等教育机构，成立于1636年，位于马萨诸塞州剑桥市。作为常春藤盟校之一，哈佛大学在世界范围内享有崇高的学术声誉和卓越的教育质量。学校培养了8位美国总统、161位诺贝尔奖获得者、32位普利策奖获得者，以及众多各界杰出人才。哈佛大学拥有世界上最大的大学捐赠基金，为学生提供优质的教育资源和研究环境。学校的哈佛法学院、哈佛医学院、哈佛商学院等专业学院在全球范围内都享有盛誉。',
    highlights: ['常春藤盟校', '世界顶级研究型大学', '最古老的美国大学', '诺贝尔奖摇篮'],
    studentCount: 31566,
    acceptanceRate: 3.4,
    tuitionFee: '$54,002',
    establishedYear: 1636,
    languageRequirement: 'TOEFL 100+ / IELTS 7.0+',
    campusImages: [
      'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    majors: [
      {
        category: '商科',
        programs: ['工商管理', '金融学', '市场营销', '会计学', '国际商务'],
        description: '哈佛商学院是世界顶级商学院，MBA项目享誉全球'
      },
      {
        category: '法律',
        programs: ['法学博士', '国际法', '宪法学', '商法', '知识产权法'],
        description: '哈佛法学院培养了众多美国最高法院大法官和政治领袖'
      },
      {
        category: '医学',
        programs: ['临床医学', '生物医学', '公共卫生', '护理学', '牙科医学'],
        description: '哈佛医学院是世界医学教育的标杆，研究实力雄厚'
      },
      {
        category: '工程',
        programs: ['计算机科学', '电气工程', '机械工程', '生物医学工程', '环境工程'],
        description: '工程与应用科学学院在多个工程领域处于世界前沿'
      },
      {
        category: '文理',
        programs: ['经济学', '心理学', '政治学', '历史学', '英语文学'],
        description: '文理学院是哈佛的核心，提供广泛的人文和理科教育'
      }
    ],
    campusLife: {
      housing: '98%的本科生住校，宿舍系统历史悠久',
      dining: '13个餐厅提供多样化餐饮选择',
      activities: '450+学生组织和社团',
      sports: '42个校际运动队',
      library: '哈佛图书馆系统藏书超过1700万册'
    },
    admissionRequirements: {
      undergraduate: {
        gpa: '通常要求4.0/4.0',
        sat: 'SAT 1460-1580',
        act: 'ACT 33-35',
        toefl: 'TOEFL 100+',
        ielts: 'IELTS 7.0+',
        essays: '需要提交个人陈述和补充文书',
        recommendations: '需要2-3封推荐信',
        extracurricular: '需要突出的课外活动和领导经验'
      },
      graduate: {
        gpa: '通常要求3.5+/4.0',
        gre: '根据专业要求不同',
        gmat: '商学院要求GMAT 730+',
        toefl: 'TOEFL 100+',
        ielts: 'IELTS 7.0+',
        research: '需要研究经验和学术背景',
        sop: '需要详细的研究计划或个人陈述'
      }
    },
    costs: {
      tuition: '$54,002',
      room: '$11,364',
      board: '$7,025',
      fees: '$4,080',
      total: '$76,471',
      financialAid: '70%的学生获得经济援助'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8 overflow-hidden">
        {/* Campus Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-64">
          {university.campusImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Campus ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>

        {/* University Info */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start space-x-6">
              <img
                src={university.logo}
                alt={university.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{university.name}</h1>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                    世界排名 #{university.ranking}
                  </span>
                </div>
                <p className="text-lg text-gray-600 mb-2">{university.nameEn}</p>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Globe className="h-4 w-4" />
                    <span>{university.country}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{university.city}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>建校 {university.establishedYear}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Award className="h-4 w-4" />
                <span>申请咨询</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="h-4 w-4" />
                <span>收藏</span>
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {university.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-yellow-50 text-yellow-700 text-sm rounded-full"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 bg-gray-50 rounded-lg">
            <div className="text-center">
              <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">{university.studentCount.toLocaleString()}</div>
              <div className="text-sm text-gray-500">在校学生</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-green-600">{university.acceptanceRate}%</div>
              <div className="text-sm text-gray-500">录取率</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">{university.tuitionFee}</div>
              <div className="text-sm text-gray-500">学费/年</div>
            </div>
            <div className="text-center">
              <BookOpen className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">{university.majors.length}</div>
              <div className="text-sm text-gray-500">专业类别</div>
            </div>
            <div className="text-center">
              <GraduationCap className="h-6 w-6 text-red-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">TOEFL 100+</div>
              <div className="text-sm text-gray-500">语言要求</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: '学校概况' },
              { id: 'majors', label: '专业信息' },
              { id: 'admission', label: '申请要求' },
              { id: 'costs', label: '费用信息' },
              { id: 'campus', label: '校园生活' }
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
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">学校介绍</h3>
                <p className="text-gray-700 leading-relaxed">{university.description}</p>
              </div>
            </div>
          )}

          {/* Majors Tab */}
          {activeTab === 'majors' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">专业设置</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {university.majors.map((major, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{major.category}</h4>
                    <p className="text-gray-600 text-sm mb-4">{major.description}</p>
                    <div className="space-y-2">
                      {major.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full mr-2 mb-2"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Admission Tab */}
          {activeTab === 'admission' && (
            <div className="space-y-8">
              <h3 className="text-lg font-semibold">申请要求</h3>
              
              {/* Undergraduate Requirements */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">本科申请要求</h4>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">GPA要求：</span>
                          <span className="font-medium">{university.admissionRequirements.undergraduate.gpa}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">SAT成绩：</span>
                          <span className="font-medium">{university.admissionRequirements.undergraduate.sat}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">ACT成绩：</span>
                          <span className="font-medium">{university.admissionRequirements.undergraduate.act}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">TOEFL：</span>
                          <span className="font-medium">{university.admissionRequirements.undergraduate.toefl}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-600 block mb-1">申请文书：</span>
                          <span className="text-sm">{university.admissionRequirements.undergraduate.essays}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 block mb-1">推荐信：</span>
                          <span className="text-sm">{university.admissionRequirements.undergraduate.recommendations}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 block mb-1">课外活动：</span>
                          <span className="text-sm">{university.admissionRequirements.undergraduate.extracurricular}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graduate Requirements */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">研究生申请要求</h4>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">GPA要求：</span>
                          <span className="font-medium">{university.admissionRequirements.graduate.gpa}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">GRE成绩：</span>
                          <span className="font-medium">{university.admissionRequirements.graduate.gre}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">GMAT成绩：</span>
                          <span className="font-medium">{university.admissionRequirements.graduate.gmat}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">TOEFL：</span>
                          <span className="font-medium">{university.admissionRequirements.graduate.toefl}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-600 block mb-1">研究经验：</span>
                          <span className="text-sm">{university.admissionRequirements.graduate.research}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 block mb-1">个人陈述：</span>
                          <span className="text-sm">{university.admissionRequirements.graduate.sop}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Costs Tab */}
          {activeTab === 'costs' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">费用信息</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">年度费用明细</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">学费：</span>
                        <span className="font-medium">{university.costs.tuition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">住宿费：</span>
                        <span className="font-medium">{university.costs.room}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">餐费：</span>
                        <span className="font-medium">{university.costs.board}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">其他费用：</span>
                        <span className="font-medium">{university.costs.fees}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-semibold">
                        <span>总计：</span>
                        <span className="text-blue-600">{university.costs.total}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">经济援助</h4>
                    <p className="text-gray-700">{university.costs.financialAid}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Campus Life Tab */}
          {activeTab === 'campus' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">校园生活</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-3">住宿环境</h4>
                  <p className="text-gray-700">{university.campusLife.housing}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-3">餐饮服务</h4>
                  <p className="text-gray-700">{university.campusLife.dining}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-3">学生活动</h4>
                  <p className="text-gray-700">{university.campusLife.activities}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-3">体育运动</h4>
                  <p className="text-gray-700">{university.campusLife.sports}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 md:col-span-2">
                  <h4 className="font-medium text-gray-900 mb-3">图书馆资源</h4>
                  <p className="text-gray-700">{university.campusLife.library}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityDetail;