import { Email } from "@/types";
import EmailCard from "./EmailCard";
import UnreadHeader from "./UnreadHeader";
import EmailListHeader from "./EmailListHeader";
import { Button } from "@/components/ui/button";

interface Props {
	emails: [Email];
	width?: number;
}

export default function EmailCardList({ emails, width }: Props) {
	console.log(width);
	return (
		<div className="w-full h-lvh rounded-lg mx-40 p-8 shadow-lg">
			<EmailListHeader />
			<UnreadHeader />
			{emails.map((email) => (
				<EmailCard email={email} key={email.header} />
			))}
		</div>
	);
}

EmailCardList.defaultProps = {
	width: 500,
};
