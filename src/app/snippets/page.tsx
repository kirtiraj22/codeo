"use client";

import { BookOpen, Search, Tag } from "lucide-react";
import NavigationHeader from "../../components/NavigationHeader";
import SnippetsPageSkeleton from "./_components/SnippetsPageSkeleton";
import { motion } from "framer-motion";

function SnippetsPage() {
	return (
		<div className="min-h-screen bg-[#0a0a0f]">
			<NavigationHeader />
			<div className="relative max-w-7xl mx-auto px-4 py-12">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-smm text-gray-400 mb-6"
					>
						<BookOpen className="w-4 h-4" />
						Community Code Library
					</motion.div>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-6"
					>
						Discover & Share Code Snippets
					</motion.h1>
					<motion.p
						className="text-lg text-gray-400 mb-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						Explore a curated collection of code snippets from the
						community
					</motion.p>
				</div>

				<div>
					<div className="relative group">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"/>
						<div className="relative flex items-center">
							<Search className="absolute left-4 w-5 h-5 text-gray-400"/>
							<input
								type="text"
								placeholder="Search snippets by title, language, or author..."
								className="w-full pl-12 pr-4 py-4 bg-[#1e1e2e]/80 hover:bg-[#1e1e2e] text-white rounded-xl border border-[#313244] hover:border-[#414155] transition-all duration-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
							/>
						</div>
					</div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800">
                            <Tag className="w-4 h-4 text-gray-400"/>
                            <span className="text-sm text-gray-400">Languages: </span>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	);
}

export default SnippetsPage;
