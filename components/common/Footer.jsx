"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Footer() {
	const [visitorCount, setVisitorCount] = useState(0);

	useEffect(() => {
		// Fetch the current visitor count
		const fetchVisitorCount = async () => {
			try {
				const response = await axios.get("https://helazbeauty.et/api/visitors");
				setVisitorCount(response.data.count);
			} catch (error) {
				console.error("Error fetching visitor count:", error);
			}
		};

		// Increment visitor count
		const incrementVisitorCount = async () => {
			try {
				await axios.post("https://helazbeauty.et/api/visitors/increment");
			} catch (error) {
				console.error("Error incrementing visitor count:", error);
			}
		};

		fetchVisitorCount();
		incrementVisitorCount();
	}, []);

	return (
		<footer className="clean-footer crev">
			<div className="container pb-40 pt-40 ontop">
				<div className="row justify-content-between">
					<div className="col-lg-2">
						<div className="logo icon-img-100 md-mb80">
							<img src="/assets/imgs/logo-light.png" alt="" />
						</div>
						<br />
						<div className="text-white">
							<div className="item text-left text-white md-mb50">
								<div className="o-hidden">
									<h3 className="stroke text-white">{visitorCount} - </h3>
								</div>
								<h6 className="p-color text-white sub-title">ደንበኞች ጎብኝተዋል</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="column md-mb50">
							<h6 className="sub-title mb-30">አድራሻ</h6>
							<h6 className="p-colors fw-400">አራት ኪሎ ንብ ባንክ 1ኛ ፎቅ</h6>
							<h6 className="mt-30 mb-15">
								<a href="#0">info@brightsacco.com</a>
							</h6>
							<a href="#0" className="underline">
								<span className="fz-22 main-color">
									+251 960401111/960111166
								</span>
							</a>
						</div>
					</div>
					<div className="col-lg-2">
						<div className="column md-mb50">
							<h6 className="sub-title mb-30">ጠቃሚ መረጃዎች</h6>
							<ul className="rest fz-14 opacity-7">
								<li className="mb-15">
									<a href="/page-about">ስለ እኛ</a>
								</li>
								<li className="mb-15">
									<a href="/page-services">አገልግሎቶች</a>
								</li>
								<li className="mb-15">
									<a href="/">ምስክርነቶች</a>
								</li>
								<li className="mb-15">
									<a href="/page-FAQ">የሚጠየቁ ጥያቄዎች</a>
								</li>
								<li>
									<a href="/page-contact">አድራሻ</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="column subscribe-minimal">
							{/* <h6 className="sub-title mb-30">Newsletter</h6> */}
							{/* <div className="form-group mb-40">
								<input type="text" name="subscrib" placeholder="Your Email" />
								<button>
									<span className="ti-location-arrow"></span>
								</button>
							</div> */}
							<ul className="rest social-icon d-flex align-items-center">
								<li className="hover-this cursor-pointer">
									<a
										href="https://www.facebook.com/BrightSaccoOfficial"
										className="hover-anim">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li className="hover-this cursor-pointer ml-10">
									<a href="https://t.me/BrightSaccoLTD" className="hover-anim">
										<i className="fab fa-telegram"></i>
									</a>
								</li>
								<li className="hover-this cursor-pointer ml-10">
									<a href="https://t.me/brightsacco" className="hover-anim">
										<i className="fab fa-telegram"></i>
									</a>
								</li>
								<li className="hover-this cursor-pointer ml-10">
									<a
										href="https://www.linkedin.com/company/104743831"
										className="hover-anim">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</li>
								<li className="hover-this cursor-pointer ml-10">
									<a href="www.tiktok.com/@brightsacco" className="hover-anim">
										<i className="fab fa-tiktok"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="pt-30 pb-30 mt-80 bord-thin-top">
					<div className="text-center">
						<p className="fz-14">
							© 2024 Bright Sacco is Proudly Powered by{" "}
							<span className="underline main-color">
								<a href="https://www.Gizuf.com" target="_blank">
									Gizuf Digital
								</a>
							</span>
						</p>
					</div>
				</div>
			</div>
			{/* <div className="circle-blur">
				<img src="/assets/imgs/patterns/blur1.png" alt="" />
			</div> */}
		</footer>
	);
}

export default Footer;
