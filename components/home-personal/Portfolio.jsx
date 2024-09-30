"use client";
import React, { useEffect } from "react";

function Portfolio() {
	function Playing() {
		gsap.registerPlugin(ScrollTrigger);

		const cards = document.querySelectorAll(".cards .card-item");
		let stickDistance = 0;

		const firstCardST = ScrollTrigger.create({
			trigger: cards[0],
			start: "center center",
		});

		const lastCardST = ScrollTrigger.create({
			trigger: cards[cards.length - 1],
			start: "bottom bottom",
		});

		cards.forEach((card, index) => {
			const scale = 1 - (cards.length - index) * 0.025;
			const scaleDown = gsap.to(card, {
				scale: scale,
				transformOrigin: "50% " + (lastCardST.start + stickDistance),
			});

			ScrollTrigger.create({
				trigger: card,
				start: "center center",
				end: () => lastCardST.start + stickDistance,
				pin: true,
				pinSpacing: false,
				ease: "none",
				animation: scaleDown,
				toggleActions: "restart none none reverse",
			});
		});
	}
	useEffect(() => {
		Playing();

		// Clean up function
		return () => {
			// Dispose GSAP ScrollTrigger instances
			ScrollTrigger.getAll().forEach((instance) => instance.kill());
		};
	}, []);
	return (
		<section className="work-card section-paddings pb-0">
			<div className="container">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<div>
							<span className="sub-title main-color mb-5">ተመራጭ የሚያደርጉን</span>
							<h3 className="fw-600 fz-50 text-u d-rotate wow">
								<span className="rotate-text secondary-color">
									ዋና ዋና <span className="fw-200">ተግባራቶቻችን</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto vi-more">
							<a
								href="/portfolio-grid"
								className="butn butn-sm butn-bord-2nd radius-30 secondary-color">
								<span>ሁሉንም ይመልከቱ</span>
							</a>
							<span className="icon ti-arrow-top-right"></span>
						</div>
					</div>
				</div>
				<div className="cards">
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												የመኪና
											</a>
											<a href="/portfolio-grid" className="tag">
												ቁጠባ
											</a>
										</div>
										<h4>የመኪና ቁጠባ</h4>
									</div>
									<div>
										<p>
											አባላት የመኪና ብድር ለመውሰድ በቅድሚያ ከሶስት ወራት ለማያንስ ጊዜ ገደብ ውስጥ የብድሩን
											ከ25 አስከ 40 በመቶ ቅድመ መቆጠብ ይጠበቅባቸዋል፡፡
										</p>
										<a href="/page-services" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/3.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>

					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												መደበኛ
											</a>
											<a href="/portfolio-grid" className="tag">
												ቁጠባ
											</a>
										</div>
										<h4>መደበኛ ቁጠባ</h4>
									</div>
									<br />
									<div>
										<p>
											የማህበሩ አባል የሆኑ ግለሰቦች በመደበኛነት የሚቆጥቡት ገንዘብ ሲሆን መጠኑም በወር ብር
											400.00፣ በሳምንት ብር 200.00፣ በቀን ብር 50.00 ሲሆን፡፡ የወለድ መጠኑ በዓመት
											7.5% በመቶ ይሆናል፡፡ መደበኛ ቁጠባ አባሉ ከማህበሩ እስካልተሰናበተ ድረስ ወጪ ሆኖ
											ሊከፈል አይችልም፡፡ ሆኖም ያለዋስትና የብድር ፎርማሊቲዎችን በሟሟላት 95% በመቶ የቁጠባ
											እና የዕጣ መጠኑን በብድር ወስዶ ወለዱን ሊጠቀምበት ይችላል፡፡
										</p>
										<a href="/page-services" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/6.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												የቤት
											</a>
											<a href="/portfolio-grid" className="tag">
												ቁጠባ
											</a>
										</div>
										<h4>የቤት ቁጠባ</h4>
									</div>
									<br />
									<div>
										<p>
											አባላት የቤት ብድር ለመውሰድ በቅድሚያ ከሶስት ወራት ለማያንስ ጊዜ ገደብ ውስጥ የብድሩን
											ከ25 አስከ 40 በመቶ ቅድመ መቆጠብ ይጠበቅባቸዋል፡፡
										</p>
										<a href="/page-services" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/4.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>

					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												ለቤት ግዥ
											</a>
											<a href="/portfolio-grid" className="tag">
												ማደሻ
											</a>
										</div>
										<h4> ለቤት ግዥ፣ መስሪያና ማደሻ የሚሰጥ ብድር</h4>
									</div>
									<br />
									<div>
										<p>
											ህብረት ስራ ማህበራችን የአባሎቻችንን የቤት ፍላጎት ለማሟላት በዋናነት የምንሰራ ሲሆን
											የመኖሪያ ቤት ግዥና መስሪያ ብርድር፣ የንግድ ቤት ግዥና መስሪያን የሚያካትት ሲሆን በልዩነት
											የኮንዶሚኒዬም ግንባታ ማስጨረሻ የብድር አቅርቦት መጀመራችን ከሌላው ልዬ ያደርገናል፡፡
										</p>
										<a href="/page-services" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/5.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												የልጆች
											</a>
											<a href="/portfolio-grid" className="tag">
												ቁጠባ
											</a>
										</div>
										<h4>የልጆች ቁጠባ</h4>
									</div>
									<br />
									<div>
										<p>
											እድሜያቸው ከ18 አመት በታች የሆኑ ህፃናት በማህበራችን ቆጣቢ መሆን ይችላሉ፡፡ ህፃናት
											ማህበራችን ላይ ቁጠባ ሲጀምሩ መመዝገቢያ አያስፈልጋቸውም፡፡ የህፃናት ቁጠባ ህብረት ስራ እና
											የቁጠባ ባህልን ለህፃናት ማስለመድ በመሆኑ የቁጠባ መጠኑ ከ100.00 ይጀምራል፡፡ ህፃናት
											ማህበራችን ላይ እየቆጠቡ ቆይተው እድሜያቸው 18 አመት ሲሞላ ያለ መመዝገቢያ ክፍያ ሌሎችን
											መስፈርት ካሟሉ ማህበሩ ላይ ዕጣ በመግዛት አባል ይሆናሉ፡፡ ማህበሩ ላይ ህፃናት የሚቆጥቡት
											የአባላትም አባል ያልሆኑም ወላጆች ልጆች መሆን ይችላሉ፡፡ ህፃናት ለቆጠቡት ቁጠባ ወለድ
											ያገኛሉ መጠኑ 8.5 በመቶ ይሆናል፡፡ የቁጠባ ወለድ በቁጠባ ላይ የሚደመር እንጂ በየጊዜው
											የሚከፈል አይደለም፡፡ የልጆች ቁጠባ ሂሳብ ከወላጆች ጋር በጣምራ የሚከፈት ሂሳብ በፈለጉት
											ጊዜ ወጭ ማድረግ የሚችሉበት በስማቸው ብቻ የሚከፈት ቁጠባ እድሜያቸው 18 ሲሆን ብቻ ወጭ
											ማድረግ እንዲችሉበት የሂሳብ አርዕስት ከፍተው ማስቀመጥ ይችላሉ፡፡
										</p>
										<a href="/page-services" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/2.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
