export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center space-y-8 max-w-4xl px-6">
        {/* Main Hello World Text */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Welcome to your first Next.js application! This is a simple Hello World page built with modern web technologies.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Next.js 15</h3>
            <p className="text-gray-600 text-sm">
              Built with the latest Next.js framework for optimal performance and developer experience.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tailwind CSS</h3>
            <p className="text-gray-600 text-sm">
              Styled with Tailwind CSS for rapid UI development and beautiful, responsive designs.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-green-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">TypeScript</h3>
            <p className="text-gray-600 text-sm">
              Enhanced with TypeScript for better code quality, type safety, and developer productivity.
            </p>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This Hello World page demonstrates the power of modern web development. 
            You can now start building amazing applications with this solid foundation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
              Start Building
            </div>
            <div className="bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
              View Documentation
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Built with ❤️ using Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}