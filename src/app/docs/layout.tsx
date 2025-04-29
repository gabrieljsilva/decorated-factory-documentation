import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			tree={source.pageTree}
			{...baseOptions}
			githubUrl={"https://github.com/gabrieljsilva/decorated-factory"}
		>
			{children}
		</DocsLayout>
	);
}
