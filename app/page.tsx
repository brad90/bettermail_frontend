"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();
	console.log(session);
	return (
		<main className="w-screen h-screen flex justify-center">
			<div className="text-center mt-48">
				<h1 className="text-8xl font-extrabold">Bettermail</h1>
				<p className="text-xl font-light leading-10">Email sucks! We tried to make it better</p>
				<Button className="rounded-lg mt-5">Try now</Button>
			</div>
		</main>
	);
}
