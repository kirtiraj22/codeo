"use client";
import StarButton from "@/components/StarButton";
import { Snippet } from "@/types";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SnippetCard({ snippet }: { snippet: Snippet }) {
	return (
		<motion.div>
			<Link href={`/snippets/${snippet._id}`}>
				<div>
					<div>
						<div className="flex items-center gap-3">
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur  opacity-20 group-hover:opacity-30 transition-all duration-500" aria-hidden="true"/>
								<div className="relative p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500">
									<Image
										src={`/${snippet.language}.png`}
										alt={`/${snippet.language} logo`}
										className="w-6 h-6 object-contain relative z-10"
										width={24}
										height={24}
									/>
								</div>
							</div>
							<div className="space-y-1">
								<span className="border border-white px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-medium">{snippet.language}</span>
								<div className="flex items-center gap-2 text-xs text-gray-500">
									<Clock className="size-3" />
									{new Date(
										snippet._creationTime
									).toLocaleDateString()}
								</div>
							</div>
						</div>
                        <div>
                            <StarButton snippetId={snippet._id}/>
                        </div>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}

export default SnippetCard;
