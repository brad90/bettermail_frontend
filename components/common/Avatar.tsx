import { User } from "@/types";
import Image from "next/image";

interface Props {
	user: User;
	height?: number;
}

export default function Avatar({ user, height }: Props) {
	return (
		<div className={`flex justify-center items-center w-[30px] h-[30px]`}>
			<div className={`rounded-full w-full h-full bg-rose-200 flex justify-center items-center `}>
				{user.avatar_url ? <Image src="https://i.pravatar.cc/300" alt="user-avater" /> : <span>{user.initials}</span>}
			</div>
		</div>
	);
}

Avatar.defaultProps = {
	height: 50,
};
