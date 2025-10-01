"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
	code: string;
	language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
	const { resolvedTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const currentStyle = isMounted && resolvedTheme === "dark" ? vscDarkPlus : oneLight;

	return (
		<SyntaxHighlighter
			language={language}
			style={currentStyle}
			showLineNumbers={false}
			customStyle={{
				fontSize: "0.875rem",
				padding: "1rem",
				borderRadius: "0.5rem",
				maxWidth: "100%",
			}}
		>
			{code}
		</SyntaxHighlighter>
	);
}
