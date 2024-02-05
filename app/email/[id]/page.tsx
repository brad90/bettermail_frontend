import EmailBody from "@/components/features/Email/EmailBody";
import EmailHeader from "@/components/features/Email/EmailHeader";

export default function Email() {
	return (
		<div className="w-full h-lvh rounded-lg mx-40 p-8 shadow-lg">
			<EmailHeader />
			<EmailBody />
		</div>
	);
}
