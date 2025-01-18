"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import SnippetLoadingSkeleton from "./_components/SnippetLoadingSkeleton";

function SnippetDetailPage() {
	const { id: snippetId } = useParams();
	const snippet = useQuery(api.snippets.getSnippetById, {
		snippetId: snippetId as Id<"snippets">
	});
    

    if(true){
        return <SnippetLoadingSkeleton />
    }

	// return <div>snippet id : {snippetId}</div>;
}

export default SnippetDetailPage;
