"use client";

import EmailCardList from "@/components/features/dashboard/EmailCardList";
import { useEffect } from "react";

const PLACEHOLDER_EMAILS = [
	{
		header: "This is the email header",
		body: "Hey there, just wanted to let you know that I am writing an email.",
		date: "2024/12/01",
		from: {
			initials: "JJ",
			avatar_url: "",
		},
	},
	{
		header: "This is the email header",
		body: "Hey there, just wanted to let you know that I am writing an email.",
		date: "2024/12/01",
		from: {
			initials: "JJ",
			avatar_url: "",
		},
	},
	{
		header: "This is the email header",
		body: "Hey there, just wanted to let you know that I am writing an email.",
		date: "2024/12/01",
		from: {
			initials: "JJ",
			avatar_url: "",
		},
	},
	{
		header: "This is the email header",
		body: "Hey there, just wanted to let you know that I am writing an email.",
		date: "2024/12/01",
		from: {
			initials: "JJ",
			avatar_url: "",
		},
	},
	{
		header: "This is the email header",
		body: "Hey there, just wanted to let you know that I am writing an email.",
		date: "2024/12/01",
		from: {
			initials: "JJ",
			avatar_url: "",
		},
	},
];

export default function Dashboard() {
	useEffect(() => {
		console.log("Fetch");
		try {
		} catch (err) {
			console.log(err);
		}
	}, []);
	return (
		<div className="w-screen h-full flex justify-center">
			<EmailCardList emails={PLACEHOLDER_EMAILS} width={500} />
		</div>
	);
}
