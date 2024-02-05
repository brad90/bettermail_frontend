import React from "react";
import { Button } from "@/components/ui/button";

export default function EmailListHeader() {
	return (
		<span className="w-full text-center">
			<span className="flex w-full my-2 justify-between">
				<Button className="rounded-full bg-transparent border-solid border-2 border-black text-black py-1 px-3 hover:bg-slate-300 justify-end">+ Write</Button>
			</span>
			<h1 className="text-5xl font-bold">Imbox</h1>
		</span>
	);
}
