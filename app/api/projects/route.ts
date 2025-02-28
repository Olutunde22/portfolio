import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const projects = [
		{
			id: "1",
			url: "https://qrdispute.ubagroup.com:8088/",
			imageUrl:
				"https://res.cloudinary.com/dixvcadud/image/upload/v1713853712/UBA_scan_to_resolve.png",
			name: "UBA - Complaint Portal",
			description:
				"The ‘Scan to Resolve complaint’ portal is a QR-code-based portal conceptualised by the bank to proffer timely solutions to customers’ challenges without them having to visit the bank or branch.",
			created_at: "Apr 2024",
		},
		{
			id: "3",
			url: "https://app.spursmb.com/",
			imageUrl:
				"https://res.cloudinary.com/dixvcadud/image/upload/v1713854769/spur.png",
			name: "Spur SMB",
			description:
				"Spur uses artificial intelligence and feedback from our small business community to make smart suggestions for relevant software, savings, tips, and trainings for your small business. The more that Spur learns about your business, the more personalized Spur’s support becomes.",
			created_at: "September 2023",
		},
		{
			id: "4",
			url: "https://www.teldev.org/",
			imageUrl:
				"https://res.cloudinary.com/dixvcadud/image/upload/v1713856063/teldev.png",
			name: "TelDev",
			description:
				"TelDev is a technology-based organization with the goal of creating a system where technology and solutions to tech-related difficulties are no longer out of reach and can be supplied to you with ease.",
			created_at: "February 2023",
		},
		{
			id: "5",
			url: "https://vaulthill.ai/",
			imageUrl:
				"https://res.cloudinary.com/dixvcadud/image/upload/v1740733405/vaulthill.png",
			name: "Vault Hill",
			description: "The future of digital interactions.",
			created_at: "December 2023",
		},
		{
			id: "6",
			url: "https://tredbase.com/",
			imageUrl:
				"https://res.cloudinary.com/dixvcadud/image/upload/v1740733818/tredbase.png",
			name: "Tredbase",
			description:
				"Simplify school payments with a system designed for convenience and efficiency. Make managing and tracking fees effortless, giving both schools and parents a stress-free experience",
			created_at: "September 2024",
		},
		{
			id: "7",
			url: "https://member.stlfng.com/",
			imageUrl:
				"https://res.cloudinary.com/dixvcadud/image/upload/v1740734091/stflng.png",
			name: "STLFNG",
			description: "Manage loans and repayment effectively",
			created_at: "June 2024",
		},
	];
	return NextResponse.json(projects);
}
