"use client";

import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

import Image from "next/image";

interface Props {
	[rest: string]: any;
}

export default function GoogleSignIn({ ...rest }: Props) {
	return (
		<Button onClick={() => signIn("google")} className="bg-blue-600 w-56 rounded-full mt-3 flex justify-center" {...rest}>
			<span className="flex justify-start">
				<Image src="/images/google.png" height={20} width={20} alt="gmail" className="mr-3" />
				Sign in with Gmail
			</span>
		</Button>
	);
}
