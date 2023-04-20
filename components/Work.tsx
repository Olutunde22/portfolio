"use client";

import { getGitHubRepos } from "@/services/api";
import AnimatedDiv from "./AnimatedDiv";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function Work() {
	const [repos, setRepos] = useState([]);
	useEffect(() => {
		getUserRepos();
	}, []);

	const getUserRepos = async () => {
		const repos = await getGitHubRepos();
		setRepos(repos);
	};
	return (
		<section
			id="work"
			className="flex justify-center items-start flex-col min-h-screen max-w-5xl"
		>
			<AnimatedDiv>
				<h1 className="font-semibold mb-5 ml-1 text-blue-400 text-lg flex items-center">
					Things I&apos;ve built
					<span className="block w-28 h-[1px] ml-5 bg-gray-300"></span>
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{repos.length > 0 &&
						repos.map((repo: any) => (
							<Link key={repo.id} href={repo.html_url}>
								<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
									<a href="#">
										<Image
											className="rounded-t-lg"
											src="/coding_image.jpg"
											alt="Something"
											width={384}
											height={200}
										/>
									</a>
									<div className="p-5">
										<a href="#">
											<h5 className="mb-2 text-2xl font-bold tracking-tight capitalize text-gray-900">
												{repo.name}
											</h5>
										</a>
										<div className="text-ellipsis min-h-[100px] max-h-[100px]">
											<p className="mb-3 font-normal text-gray-700">
												{repo.description?.length > 100
													? `${repo.description.substring(0, 100)}...`
													: repo.description}
											</p>
										</div>
										<div className="flex justify-between items-center">
											<Image
												className="rounded-full"
												src={repo.owner.avatar_url}
												width={38}
												height={38}
												alt="Neil image"
											/>
											<span className="text-sm">
												Created at{" "}
												{moment(repo.created_at).format("MMMM Do YYYY")}
											</span>
										</div>
									</div>
								</div>
							</Link>
						))}
				</div>
			</AnimatedDiv>
		</section>
	);
}
