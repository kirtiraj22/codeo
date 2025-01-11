import { Star } from "lucide-react";
import { Id } from "../../convex/_generated/dataModel";

function StarButton({ snippetId }: { snippetId: Id<"snippets"> }) {
	return (
		<button
			className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${true ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20" : "bg-gray-500/10 text-gray-400 hover:bg-gray-500/20"}`}
		>
			<Star
				className={`w-4 h-4 ${true ? "fill-yellow-500" : "fill-none group-hover:fill-gray-400"}`}
			/>
			<span
				className={`text-xs font-medium ${true ? "text-yellow-500" : "text-gray-400"}`}
			>
				5
			</span>
		</button>
	);
}

export default StarButton;
