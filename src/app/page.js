const HomePage = dynamic(
	() => {
	  return import("@/components/home/homePage");
	},
	{ ssr: false }
  );
import dynamic from "next/dynamic";
import React from "react";
export default function Home() {
	return (
		<React.Fragment>
			<HomePage />
		</React.Fragment>
	);
}
