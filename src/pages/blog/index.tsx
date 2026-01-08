import { Calendar, User, Clock, ChevronRight, Search, BookOpen, MessageSquare, Eye, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    category: string;
    imageUrl: string;
    likes: number;
    views: number;
    comments: number;
}

interface BlogCategory {
    id: string;
    name: string;
    count: number;
    color: string;
}

function Blog() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>('newest');

    // Datos de ejemplo para el blog
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Introducción a React 18 y sus nuevas características",
            excerpt: "Exploramos las novedades de React 18, incluyendo concurrent features, automatic batching y el nuevo root API.",
            content: "Contenido completo del artículo...",
            author: "Juan José",
            date: "2024-01-15",
            readTime: "8 min",
            tags: ["React", "JavaScript", "Frontend"],
            category: "frontend",
            imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: 42,
            views: 150,
            comments: 8
        },
        {
            id: 2,
            title: "TypeScript: Mejores prácticas para proyectos escalables",
            excerpt: "Guía completa de mejores prácticas y patrones para mantener código TypeScript limpio y escalable.",
            content: "Contenido completo del artículo...",
            author: "Juan José",
            date: "2024-01-10",
            readTime: "12 min",
            tags: ["TypeScript", "Buenas prácticas", "Arquitectura"],
            category: "backend",
            imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: 28,
            views: 98,
            comments: 5
        },
        {
            id: 3,
            title: "Desarrollo de PWAs con Ionic y React",
            excerpt: "Cómo crear Progressive Web Apps modernas utilizando Ionic Framework y React para experiencias nativas.",
            content: "Contenido completo del artículo...",
            author: "Juan José",
            date: "2023-12-20",
            readTime: "10 min",
            tags: ["PWA", "Ionic", "Mobile", "React"],
            category: "mobile",
            imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: 35,
            views: 120,
            comments: 12
        },
        {
            id: 4,
            title: "Optimización de rendimiento en aplicaciones React",
            excerpt: "Técnicas avanzadas para mejorar el rendimiento de aplicaciones React, memoización y lazy loading.",
            content: "Contenido completo del artículo...",
            author: "Juan José",
            date: "2023-12-05",
            readTime: "15 min",
            tags: ["React", "Performance", "Optimización"],
            category: "frontend",
            imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: 50,
            views: 200,
            comments: 15
        },
        {
            id: 5,
            title: "Implementación de autenticación con Firebase",
            excerpt: "Guía paso a paso para implementar un sistema seguro de autenticación usando Firebase Auth.",
            content: "Contenido completo del artículo...",
            author: "Juan José",
            date: "2023-11-28",
            readTime: "7 min",
            tags: ["Firebase", "Auth", "Security", "Backend"],
            category: "backend",
            imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: 31,
            views: 110,
            comments: 7
        },
        {
            id: 6,
            title: "Tailwind CSS vs CSS tradicional: ¿Cuándo usar cada uno?",
            excerpt: "Análisis comparativo entre Tailwind CSS y CSS tradicional para ayudarte a tomar la mejor decisión.",
            content: "Contenido completo del artículo...",
            author: "Juan José",
            date: "2023-11-15",
            readTime: "9 min",
            tags: ["Tailwind", "CSS", "Frontend", "Design"],
            category: "frontend",
            imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: 45,
            views: 180,
            comments: 11
        }
    ];

    const categories: BlogCategory[] = [
        { id: 'all', name: 'Todos', count: blogPosts.length, color: 'bg-gray-500' },
        { id: 'frontend', name: 'Frontend', count: blogPosts.filter(p => p.category === 'frontend').length, color: 'bg-blue-500' },
        { id: 'backend', name: 'Backend', count: blogPosts.filter(p => p.category === 'backend').length, color: 'bg-green-500' },
        { id: 'mobile', name: 'Mobile', count: blogPosts.filter(p => p.category === 'mobile').length, color: 'bg-purple-500' },
        { id: 'devops', name: 'DevOps', count: 0, color: 'bg-orange-500' },
        { id: 'tutorials', name: 'Tutoriales', count: 0, color: 'bg-pink-500' }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Personal</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
                        Comparto mis experiencias, aprendizajes y reflexiones sobre desarrollo web,
                        tecnología y mejores prácticas en programación.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{blogPosts.length}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Artículos</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {blogPosts.reduce((sum, post) => sum + post.views, 0)}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Visitas</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                            {blogPosts.reduce((sum, post) => sum + post.likes, 0)}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Likes</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                            {blogPosts.reduce((sum, post) => sum + post.comments, 0)}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Comentarios</div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        {/* Search Bar */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Buscar artículos..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                                />
                            </div>
                        </div>

                        {/* Sort Select */}
                        <div className="w-full md:w-64">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                            >
                                <option value="newest">Más recientes</option>
                                <option value="oldest">Más antiguos</option>
                                <option value="popular">Más populares</option>
                                <option value="views">Más visitados</option>
                            </select>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <span className={`w-2 h-2 rounded-full ${category.color}`}></span>
                                {category.name}
                                <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/20 dark:bg-black/20">
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Featured Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${post.category === 'frontend' ? 'bg-blue-500' :
                                        post.category === 'backend' ? 'bg-green-500' :
                                            post.category === 'mobile' ? 'bg-purple-500' : 'bg-gray-500'
                                        }`}>
                                        {categories.find(c => c.id === post.category)?.name}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <span className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        {post.author}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(post.date).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Stats and Actions */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                                            <Heart className="w-4 h-4" />
                                            {post.likes}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            {post.views}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MessageSquare className="w-4 h-4" />
                                            {post.comments}
                                        </span>
                                    </div>

                                    <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                                        Leer más
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Featured Post */}
                {filteredPosts.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-blue-500" />
                            Artículo Destacado
                        </h2>

                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-2xl p-6 md:p-8 border border-blue-200/50 dark:border-blue-500/30">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                                            {categories.find(c => c.id === filteredPosts[0].category)?.name}
                                        </span>
                                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                                            {new Date(filteredPosts[0].date).toLocaleDateString('es-ES', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                        {filteredPosts[0].title}
                                    </h3>

                                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                                        {filteredPosts[0].excerpt}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                            Leer artículo completo
                                        </button>
                                        <button className="p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                            <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                        </button>
                                    </div>
                                </div>

                                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                                    <img
                                        src={filteredPosts[0].imageUrl}
                                        alt={filteredPosts[0].title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Newsletter Subscription */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Suscríbete al Newsletter</h3>
                        <p className="text-blue-100 mb-6">
                            Recibe las últimas actualizaciones, tutoriales y recursos directamente en tu correo.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                                Suscribirse
                            </button>
                        </div>

                        <p className="text-sm text-blue-200 mt-4">
                            Sin spam. Puedes darte de baja en cualquier momento.
                        </p>
                    </div>
                </div>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <BookOpen className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            No se encontraron artículos
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Intenta con otros términos de búsqueda o selecciona una categoría diferente.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory('all');
                                setSearchQuery('');
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Ver todos los artículos
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Blog;