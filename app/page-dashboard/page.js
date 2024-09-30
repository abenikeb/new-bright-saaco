"use client";
import "./../globals.css";
import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";
import Header from "@/components/page-contact/Header";
import Contact from "@/components/page-contact/Contact";
import Map from "@/components/page-contact/Map";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
	const [users, setUsers] = useState([]);

	// Fetch user data from API
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get(
					"https://helazbeauty.et/api/member-registration"
				);
				setUsers(response.data.data);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUsers();
	}, []);

	return (
		<body>
			<div className="dashboard-container">
				<h1 className="dashboard-title">Admin Dashboard</h1>
				<table className="user-table">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Address</th>
						</tr>
					</thead>
					<tbody>
						{users?.map((user, index) => (
							<tr key={user.id}>
								<td>{index + 1}</td>
								<td>
									{user.first_name} {user.middle_name} {user.last_name}
								</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>
									{user.city}, {user.sub_city}, {user.woroda},{" "}
									{user.house_number}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Script
				src="/assets/js/ScrollTrigger.min.js"
				strategy="beforeInteractive"
			/>
			<Script
				src="/assets/js/ScrollSmoother.min.js"
				strategy="beforeInteractive"
			/>
			<Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/TweenMax.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/charming.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/countdown.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/gsap.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/splitting.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/isotope.pkgd.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"></Script>
			{/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}
			<Script src="/assets/js/scripts.js"></Script>{" "}
		</body>
	);
}
