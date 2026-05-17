const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6">
            <div className="w-full max-w-2xl text-center">
                
                {/* Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 md:p-14">
                    
                    {/* Top Icon */}
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 rounded-full bg-red-500/20 border border-red-400/20 flex items-center justify-center text-5xl">
                            ⚠️
                        </div>
                    </div>

                    {/* Error Code */}
                    <h1 className="text-8xl md:text-9xl font-extrabold text-white tracking-widest">
                        404
                    </h1>

                    {/* Heading */}
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                        Something Went Wrong
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-slate-300 text-lg leading-relaxed max-w-lg mx-auto">
                        The page you are trying to access might have been removed,
                        renamed, or temporarily unavailable.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        
                        {/* Back Button */}
                        <button
                            onClick={() => window.history.back()}
                            className="px-6 py-3 w-full sm:w-auto rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition duration-300"
                        >
                            ← Go Back
                        </button>

                        {/* Retry Button */}
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 w-full sm:w-auto rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium shadow-lg shadow-red-500/30 transition duration-300"
                        >
                            ↻ Retry
                        </button>

                        {/* Home Button */}
                        <a
                            href="/"
                            className="px-6 py-3 w-full sm:w-auto rounded-xl bg-white text-slate-900 hover:bg-slate-200 font-semibold transition duration-300"
                        >
                            ⌂ Home
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <p className="mt-6 text-slate-500 text-sm">
                    © 2026 Book Vibe. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;