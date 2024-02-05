import Image from "next/image";
import { GoogleSignIn } from "@/components/common";

export default function Auth() {
	return (
		<div className="w-screen h-screen flex">
			<div className="w-full h-full flex justify-center items-center flex-col">
				<h3 className="text-center">
					Sign in is secure and easy <br />
					Just use your email acccount
				</h3>
				<GoogleSignIn />
			</div>
		</div>
	);
}
