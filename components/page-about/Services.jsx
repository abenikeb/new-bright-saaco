import React from "react";

function Services() {
	return (
		<section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd">
			<div className="container ontop">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<br />
						<div>
							{/* <span className="sub-title main-color mb-5">አጠቃላይ እይታ</span> */}
							<h3 className="fw-600 fz-50 text-u d-rotate wow">
								<span className="rotate-text">
									ተልዕኳችን እና <span className="fw-200">ርዕያችን</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto vi-more">
							<a
								href="/page-services"
								className="butn butn-sm butn-bord radius-30">
								<span>ሁሉንም ይመልከቱ</span>
							</a>
							<span className="icon ti-arrow-top-right"></span>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="row md-marg align-items-end">
						<div className="col-lg-4">
							<div>
								<span className="num">01</span>
								<div>
									{/* <span className="sub-title main-color mb-10">ተልዕኮ</span> */}
									<h2 className="main-color">ተልዕኮ</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="text md-mb80">
								<p>
									በሰለጠነ እና በስነምግባር በታነፀ የሰው ሃይል እና በዘመናዊ ቴክኖሎጂ በመታገዝ ለህብረተሰቡ
									በፋይናንስ አጠቃቀም ተከታታይ ስልጠና በመስጠት ዘላቂነት ያለው ሁሉን አቀፍ የፋይናንስ ተቋም
									በመገንባት ምቹ፣ ተደራሽ እና ቀልጣፋ የፋይናስ አገልግሎት በመስጠት የአባላትን ፍላጎት ማሟላት
									ነው፡፡
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="img fit-img">
								<img src="/assets/imgs/serv-img/1.jpg" alt="" />
								<a href="/page-services-details">
									<span className="ti-arrow-top-right"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="row md-marg align-items-end">
						<div className="col-lg-4">
							<div>
								<span className="num">02</span>
								<div>
									{/* <span className="sub-title main-color mb-10">ርዕያችን</span> */}
									<h2>
										<span className="fw-200">ርዕያችን</span>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="text md-mb80">
								<p>በ2030 ዓ.ም ሁሉም አባላት መካከለኛ ገቢ ያላቸው እና ስራ ፈጣሪ ሁነው ማየት፡፡</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="img fit-img">
								<img src="/assets/imgs/serv-img/2.jpg" alt="" />
								<a href="/page-services-details">
									<span className="ti-arrow-top-right"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="item pb-0">
					<div className="row md-marg align-items-end">
						<div className="col-lg-4">
							<div>
								<span className="num">03</span>
								<div>
									{/* <span className="sub-title main-color mb-10">ዓላማዎቻችን</span> */}
									<h2>
										<span className="fw-200">ዓላማዎቻችን</span>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="text md-mb80">
								<p>
									ለህብረተሰቡ የፋይናንስ ትምህርትና ስልጠና በመስጠት የፋይናንስ አጠቃቀም ንቃተ ህሊና በማሻሻል
									አባላትን በስፋት ማፍራት፣  የአባላትን ፍላጎት መሰረት ያደረገ የተለያዩ የቁጠባ አገልግሎቶች
									በማስፋፋት ቁጠባን በስፋት ማሰባሰብ፣  የአባላትን እና ደንበኞችን ፍላጎት መሰረት ያደረገ
									የተለያዩ የብድር አገልግሎቶችን በማስፋፋት የብድር አገልግሎትን በብዛት፣ በጥራት እና በተመጣጣኝ
									ዋጋ ለአባላት በማቅረብ የኢንቨስትመንት አቅም ለማሳደግ፣
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="img fit-img">
								<img src="/assets/imgs/serv-img/3.jpg" alt="" />
								<a href="/page-services-details">
									<span className="ti-arrow-top-right"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
