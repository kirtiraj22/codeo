"use client";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { RotateCcwIcon, ShareIcon, TypeIcon } from "lucide-react";
import Image from "next/image";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function EditorPanel() {
	const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
	const { language, theme, fontSize, editor, setFontSize, setEditor } =
		useCodeEditorStore();

	const handleFontSizeChange = (newSize: number) => {
		const size = Math.min(Math.max(newSize, 12), 24);
		setFontSize(size);
		localStorage.setItem("editor-font-size", size.toString());
	};

	return (
		<div className="relative">
			<div className="relative bg-[#121212a]/90 backdrop-blur rounded-xl border border-white/[0.05] p-6">
				<div className="flex items-center justify-between mb-4 border border-cyan-400">
					<div className="flex items-center gap-3">
						<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1e1e2e] ring-1 ring-white/5">
							<Image
								src={"/" + language + ".png"}
								alt="language logo"
								width={24}
								height={24}
							/>
						</div>
						<div>
							<h2 className="text-sm font-medium text-white">
								Code Editor
							</h2>
							<p className="text-xs text-gray-300/60">
								Write and execute your code
							</p>
						</div>
					</div>
					<div className="flex items-center gap-3 border border-red-400">
						<div className="flex items-center gap-3 px-3 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-white/5">
							<TypeIcon className="size-4 text-gray-400" />
							<div className="flex items-center gap-3">
								<input
									type="range"
									min="12"
									max="24"
									value={fontSize}
									onChange={(e) =>
										handleFontSizeChange(
											parseInt(e.target.value)
										)
									}
									className="w-20 h-1 bg-gray-600 rounded-lg cursor-pointer"
								/>
								<span className="text-sm font-medium text-gray-400 min-w-[2rem] text-center">
									{fontSize}
								</span>
							</div>
						</div>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className="p-2 bg-[#1e1e2e] hover:bg-[#2a2a3a] rounded-lg ring-1 ring-white/5 transition-colors"
							aria-label="Reset to default code"
						>
							<RotateCcwIcon className="size-4 text-gray-400" />
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 opacity-90 hover:opacity-100 transition-opacity"
						>
							<ShareIcon className="size-4 text-white" />
							<span className="text-sm font-medium text-white">
								Share
							</span>
						</motion.button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditorPanel;
