'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Eye, ArrowRight, Filter, Search, User, MapPin, Users, Award } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        title: "Techasoft Launches Revolutionary AI Division with $2M Investment",
        image: "https://www.techasoft.com/news_upload/2023/12/1702465445.png",
        summary: "Techasoft has unveiled its new AI division focused on delivering intelligent business solutions, backed by a $2M seed investment to develop cutting-edge machine learning platforms for African businesses.",
        fullExcerpt: "The new AI division will focus on natural language processing, computer vision, and predictive analytics tailored for the African market. CEO John Adebayo stated that this move positions Techasoft as a leader in AI innovation across West Africa.",
        category: "Technology",
        date: "2023-12-15",
        readTime: "5 min read",
        views: 1240,
        author: "Sarah Johnson",
        location: "Abuja, Nigeria",
        tags: ["AI", "Investment", "Innovation"],
        link: "/news/ai-division",
        featured: true
    },
    {
        id: 2,
        title: "Strategic Expansion: New Lagos Office Opens with 50 New Jobs",
        image: "https://www.techasoft.com/news_upload/2023/04/1682586072.png",
        summary: "We are thrilled to announce the opening of our state-of-the-art 5,000 sq ft office in Lagos Victoria Island, creating 50 new tech jobs and strengthening our presence in Nigeria's tech hub.",
        fullExcerpt: "The new Lagos office features modern co-working spaces, advanced development labs, and client meeting facilities. This expansion represents a 40% increase in our workforce and demonstrates our commitment to the Nigerian tech ecosystem.",
        category: "Business",
        date: "2023-04-28",
        readTime: "3 min read",
        views: 892,
        author: "Michael Okafor",
        location: "Lagos, Nigeria",
        tags: ["Expansion", "Jobs", "Lagos"],
        link: "/news/lagos-office",
        featured: false
    },
    {
        id: 3,
        title: "Empowering 200+ Women Through Code: Tech Bootcamp Success",
        image: "https://www.techasoft.com/news_upload/2023/04/1682582643.png",
        summary: "Techasoft successfully hosted a transformative 3-day intensive bootcamp for 200+ female developers, featuring hands-on coding sessions, mentorship programs, and career guidance workshops.",
        fullExcerpt: "The bootcamp covered full-stack development, mobile app creation, and UI/UX design. 85% of participants received job placement assistance, with 60% securing internships or full-time positions within 3 months of completion.",
        category: "Community",
        date: "2023-04-20",
        readTime: "4 min read",
        views: 1156,
        author: "Fatima Abdul",
        location: "Abuja, Nigeria",
        tags: ["Women in Tech", "Education", "Community"],
        link: "/news/women-in-tech",
        featured: true
    },
    {
        id: 4,
        title: "Cybersecurity Awareness: Protecting 10,000+ Students Nationwide",
        image: "https://www.techasoft.com/news_upload/2023/02/1677079492.png",
        summary: "Our comprehensive cybersecurity awareness campaign successfully reached over 10,000 students across 75 schools in Nigeria, educating the next generation about digital safety and security best practices.",
        fullExcerpt: "The campaign included interactive workshops on password security, phishing awareness, and safe internet practices. We distributed educational materials and established ongoing partnerships with educational institutions for continued cyber literacy programs.",
        category: "Education",
        date: "2023-02-24",
        readTime: "6 min read",
        views: 734,
        author: "Dr. Ibrahim Hassan",
        location: "Multiple Cities, Nigeria",
        tags: ["Cybersecurity", "Education", "Awareness"],
        link: "/news/cyber-awareness",
        featured: false
    },
    {
        id: 5,
        title: "Partnership with Microsoft: Cloud Solutions for SMEs",
        image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=400&fit=crop",
        summary: "Techasoft announces strategic partnership with Microsoft to deliver affordable cloud solutions specifically designed for small and medium enterprises across West Africa.",
        fullExcerpt: "This partnership will enable us to offer Azure-based solutions at competitive rates, including cloud migration services, data analytics platforms, and collaborative tools tailored for African businesses.",
        category: "Partnership",
        date: "2023-01-15",
        readTime: "4 min read",
        views: 567,
        author: "Emmanuel Osei",
        location: "Accra, Ghana",
        tags: ["Microsoft", "Cloud", "SME"],
        link: "/news/microsoft-partnership",
        featured: false
    },
    {
        id: 6,
        title: "Award Recognition: Best Tech Startup in West Africa 2023",
        image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=400&fit=crop",
        summary: "Techasoft was honored with the 'Best Tech Startup in West Africa 2023' award at the African Tech Excellence Awards, recognizing our innovative solutions and community impact.",
        fullExcerpt: "The award acknowledges our contributions to digital transformation, job creation, and technology education across the region. This recognition motivates us to continue pushing boundaries in African tech innovation.",
        category: "Achievement",
        date: "2023-11-10",
        readTime: "3 min read",
        views: 1890,
        author: "Grace Mensah",
        location: "Lagos, Nigeria",
        tags: ["Award", "Recognition", "Achievement"],
        link: "/news/tech-award-2023",
        featured: true
    }
];

const categories = ["All", "Technology", "Business", "Community", "Education", "Partnership", "Achievement"];

const NewsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

    const filteredNews = newsItems.filter(item => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.summary.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFeatured = !showFeaturedOnly || item.featured;
        
        return matchesCategory && matchesSearch && matchesFeatured;
    });

    const featuredNews = newsItems.filter(item => item.featured);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                        Latest News & Updates
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Stay informed about Techasoft's latest innovations, partnerships, and community initiatives shaping the future of technology in Africa.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-12 px-6 lg:px-20 bg-white border-b">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-blue-600">50+</div>
                            <div className="text-gray-600">News Articles</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-purple-600">10K+</div>
                            <div className="text-gray-600">Students Reached</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-indigo-600">75+</div>
                            <div className="text-gray-600">Partner Schools</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-green-600">200+</div>
                            <div className="text-gray-600">Women Trained</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Featured News Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                            <Award className="mr-3 text-yellow-500" />
                            Featured Stories
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredNews.slice(0, 2).map((item) => (
                                <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    <div className="relative">
                                        <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                FEATURED
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                                            <span className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {new Date(item.date).toLocaleDateString()}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {item.readTime}
                                            </span>
                                            <span className="flex items-center">
                                                <Eye className="w-4 h-4 mr-1" />
                                                {item.views}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                        <p className="text-gray-600 mb-4">{item.fullExcerpt}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                <User className="w-4 h-4" />
                                                <span>{item.author}</span>
                                                <MapPin className="w-4 h-4 ml-2" />
                                                <span>{item.location}</span>
                                            </div>
                                            <Link href={item.link} className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex flex-col lg:flex-row gap-6 items-center">
                            {/* Search */}
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search news articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                            selectedCategory === category
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Featured Toggle */}
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={showFeaturedOnly}
                                    onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm font-medium text-gray-700">Featured Only</span>
                            </label>
                        </div>
                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((item) => (
                            <article key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative">
                                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                                            item.category === 'Technology' ? 'bg-blue-500' :
                                            item.category === 'Business' ? 'bg-green-500' :
                                            item.category === 'Community' ? 'bg-purple-500' :
                                            item.category === 'Education' ? 'bg-orange-500' :
                                            item.category === 'Partnership' ? 'bg-indigo-500' :
                                            'bg-pink-500'
                                        }`}>
                                            {item.category}
                                        </span>
                                    </div>
                                    {item.featured && (
                                        <div className="absolute top-4 right-4">
                                            <Award className="w-5 h-5 text-yellow-400 fill-current" />
                                        </div>
                                    )}
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                                        <span className="flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {new Date(item.date).toLocaleDateString()}
                                        </span>
                                        <span className="flex items-center">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {item.readTime}
                                        </span>
                                        <span className="flex items-center">
                                            <Eye className="w-3 h-3 mr-1" />
                                            {item.views}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
                                    
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                                            <User className="w-3 h-3" />
                                            <span>{item.author}</span>
                                        </div>
                                        <Link href={item.link} className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors duration-200">
                                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredNews.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 mb-4">
                                <Search className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </div>
                    )}

                    {/* Newsletter Signup */}
                    <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center">
                        <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Subscribe to our newsletter to get the latest news, updates, and insights delivered directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
                            />
                            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;