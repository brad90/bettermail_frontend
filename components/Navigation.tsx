"use client";
import Link from "next/link";
import { Button } from "./ui/button";
export default function Navigation() {
	return (
		<div className="w-screen py-3 px-12 flex justify-between">
			<Link href="/">
				<span>Bettermail</span>
			</Link>
			<span className="flex justify-between">
				<Link href="/auth">
					<Button className="rounded-full">Sing in</Button>
				</Link>
			</span>
		</div>
	);
}
