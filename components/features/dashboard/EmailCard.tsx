import Avatar from "@/components/common/Avatar";
import { Email } from "@/types";

interface Props {
	email: Email;
}

export default function EmailCard({ email }: Props) {
	return (
		<a className="w-full flex p-4 items-center justify-between cursor-pointer hover:bg-slate-50 rounded-lg">
			<span className="flex w-full items-center">
				<Avatar user={{ avatar_url: "", initials: "JJ" }} />
				<div className="flex flex-col px-2 ml-2">
					<span className="font-normal">{email.header}</span>
					<span className="text-slate-400">{email.body}</span>
				</div>
			</span>
			<span className="text-slate-400 w-1/6 text-right">Sep 13</span>
		</a>
	);
}
