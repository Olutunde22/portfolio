import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const projects = [
    {
      id: '1',
      url: 'https://qrdispute.ubagroup.com:8088/',
      imageUrl: 'https://res.cloudinary.com/dixvcadud/image/upload/v1713853712/UBA_scan_to_resolve.png',
      name: 'UBA - Complaint Portal',
      description: "The ‘Scan to Resolve complaint’ portal is a QR-code-based portal conceptualised by the bank to proffer timely solutions to customers’ challenges without them having to visit the bank or branch.",
      created_at: 'Apr 2024'
    },
    {
      id:'2',
      url: 'https://minkajobs.com/',
      imageUrl:'https://res.cloudinary.com/dixvcadud/image/upload/v1713855449/minka.png',
      name: 'Minka Health',
      description: 'Minka Health is a progressive startup operating at the intersection of healthcare, education, and staffing. We are dedicated to addressing the pressing issue of labor shortages in the healthcare sector. Our platform serves as a conduit, connecting healthcare professionals with the institutions that need them most',
      created_at: 'November 2023'
    },
    {
      id: '3',
      url: 'https://app.spursmb.com/',
      imageUrl: 'https://res.cloudinary.com/dixvcadud/image/upload/v1713854769/spur.png',
      name: 'Spur SMB',
      description: "Spur uses artificial intelligence and feedback from our small business community to make smart suggestions for relevant software, savings, tips, and trainings for your small business. The more that Spur learns about your business, the more personalized Spur’s support becomes.",
      created_at: 'September 2023'
    },
    {
      id: '4',
      url: 'https://www.teldev.org/',
      imageUrl: 'https://res.cloudinary.com/dixvcadud/image/upload/v1713856063/teldev.png',
      name: 'TelDev',
      description: 'TelDev is a technology-based organization with the goal of creating a system where technology and solutions to tech-related difficulties are no longer out of reach and can be supplied to you with ease.',
      created_at: 'February 2023'
    }
  ]
  return NextResponse.json(projects);
}