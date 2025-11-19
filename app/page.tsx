
export default async function Home() {
	return (
		<main>
			<div className="flex items-center gap-6">
				<img src="/me.jpg" alt="Avatar" className="size-16 rounded-full" />
				<div>
					<h1>Omer Alpi</h1>
					<p className="text-muted-foreground font-mono text-sm">
						ankara, turkey
					</p>
				</div>
			</div>

			<div className="mt-8">
				<div className="space-y-4">
					<p>
						I love building stuff that either solves real problems or helps me
						learn new concepts.
					</p>
				</div>
			</div>

			{/* <div className="mt-8">
				<p>Some cool projects I've worked on:</p>
				<ul className="list">
					{RESUME.projects
						.filter((project) => project.featured)
						.map((project) => (
							<li key={project.name}>
								<Link href={`/projects/${project.slug}`} className="link">
									{project.name}
								</Link>{" "}
								– {project.description}
							</li>
						))}
				</ul>
				<p>
					You can view all my projects{" "}
					<Link href="/projects" className="link">
						here
					</Link>
					.
				</p>
			</div> */}
		</main>
	);
}
