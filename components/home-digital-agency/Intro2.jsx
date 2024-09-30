"use client";
import React from "react";

function Intro2() {
	function openAccordion(event) {
		document.querySelectorAll(".accordion-info").forEach((element) => {
			element.classList.remove("active");
			element.style.maxHeight = 0;
			element.parentElement.classList.remove("active");
		});
		event.currentTarget.parentElement.classList.add("active");
		event.currentTarget.nextElementSibling.style.maxHeight = "300px";
		event.currentTarget.nextElementSibling.classList.add("active");
	}
	return (
		<section className="intro-accord">
			<div className="container ontop">
				<div className="row xlg-marg">
					<div className="col-lg-6">
						<div className="img md-mb50">
							<img src="/assets/imgs/arw2.png" alt="" />
						</div>
						<div className="img md-mb50">
							<img src="/assets/imgs/arw3.jpg" alt="" />
						</div>
					</div>
					<div className="col-lg-6 valign">
						<div>
							<div className="sec-head mb-50">
								<h6 className="sub-title main-color mb-15">ስለብድር አሰጣጥ</h6>
								<h3 className="secondary-color">
									ህብረት ስራ ማህበሩ የብድር ገንዘብ የሚሰጠው ለአባሉና እንደ አስፈላጊነቱ ለአቻ ማህበራት ብቻ
									ይሆናል፡፡
								</h3>
							</div>
							<div className="accordion bord secondary-color">
								<div className="item active wow fadeInUp" data-wow-delay=".1s">
									<div onClick={openAccordion} className="title">
										<h6 className="secondary-color">
											የኅ/ስ/ማ/ የብድር ዓይነቶች፣ የፍጆታ ብድር
										</h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											የፍጆታ ብድር በውስጡ የተለያዬ የብድር አገልግት አይነቶችን የያዘ ሲሆን የሚከተሉትን
											በዋናነት እናስተናግዳለን፡፡ ለትምህርት የሚሰጥ ብድር፣ ለህክምና የሚሰጥ ብድር፣ ለቤት ዕቃ
											ማሟያ ፣ የግብር ክፍያ ፣ ማህበራዊ አገልግሎት ( ሰርግ፣ ልደት፣ምርቃት…)፣ የተለያዩ
											ቦታዎችን ለመጎብኘት የሚሰጥ የጉዞ ብድር እና መሰሎች፡፡
										</p>
									</div>
								</div>

								<div className="item active wow fadeInUp" data-wow-delay=".1s">
									<div onClick={openAccordion} className="title">
										<h6 className="secondary-color">ለንግድ ሥራ የሚሰጥ ብድር፡፡</h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											በንግድ ስራ ላይ ለተሰማሩ አባላቶቻችን እንደየ ፍላጎታቸው እና የቁጠባ መጠናቸው የተለያዬ
											የብድር አገልግሎቶችን የምንሰጥ ሲሆን በዋናነት ለከተማ ግብርና ስራ የሚሰጥ ብድር፣
											ለአነስተኛ ንግድ ስራ የሚሰጥ ብድር፣ ለአገልግሎት ስራ የሚሰጥ ብድር፣ ለማኑፋክቸሪንግ ስራ
											የሚሰጥ ብድር፣ለኮንስትራክሽን ስራ የሚሰጥ ብድር ያካትታል፡፡
										</p>
									</div>
								</div>

								<div className="item active wow fadeInUp" data-wow-delay=".1s">
									<div onClick={openAccordion} className="title">
										<h6 className="secondary-color">
											ለቤት ግዥ፣ መስሪያና ማደሻ የሚሰጥ ብድር
										</h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											ህብረት ስራ ማህበራችን የአባሎቻችንን የቤት ፍላጎት ለማሟላት በዋናነት የምንሰራ ሲሆን
											የመኖሪያ ቤት ግዥና መስሪያ ብርድር፣ የንግድ ቤት ግዥና መስሪያን የሚያካትት ሲሆን በልዩነት
											የኮንዶሚኒዬም ግንባታ ማስጨረሻ የብድር አቅርቦት መጀመራችን ከሌላው ልዬ ያደርገናል፡፡
										</p>
									</div>
								</div>

								<div className="item active wow fadeInUp" data-wow-delay=".1s">
									<div onClick={openAccordion} className="title">
										<h6 className="secondary-color">የ መኪና ግዥ የሚሰጥ ብድር</h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											ህብረት ስራ ማህበራችን ከተመረተ 25 (ሀያ አምስት) ዓመታት ድረሰ የአገልግሎት ዘመን
											ያላቸውን መኪናዎችን ጨምሮ የተለያዬ የመኪና ግዥ ብድርን ያመቻቸ ሲሆን በዋናነት የቤት
											መኪና፣ የንግድ መኪና፣ የታክሲ አገልግሎት፣ የህዝብ ማመላለሻ፣ የደረቅ ጭነት፣ የፈሳሽ ጭነት
											ያካትታል፡፡
										</p>
									</div>
								</div>

								<div className="item active wow fadeInUp" data-wow-delay=".1s">
									<div onClick={openAccordion} className="title">
										<h6 className="secondary-color">ልዩ የአጭር ጊዜ ብድር</h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											የአባላቶቻችንን የተለያዬ የአጭር ጊዜ ፍላጎቶች ለማሟላት የታሰብ ልዬ የአጭር ጊዜ የብድር
											አገልግሎት አይነት ያካተተን ሲሆን በዋናነት የሊዝ ፋይናንስ ብድር፣ ወለድ አልባ የብድር
											አገልግሎቶች፣ የደመወዝ ብድር፣ የሹፌሮችን እና ረዳቶች ብድርን ይሰጣል፡፡ በተጨማሪም
											የባለሙያዎች ብድር(መምህራን፣ ፀጥታ አካላት፣ የህክምና ባለሙያዎች…)
										</p>
									</div>
								</div>
								<div className="item active wow fadeInUp" data-wow-delay=".1s">
									<div onClick={openAccordion} className="title">
										<h6 className="secondary-color">ወለድ አልባ ቁጠባ </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											ወለድ አልባ ቁጠባ ማለት ከእምነት ጋር በተያያዘ ወይም በሌላ ምክንያት (ገንዘባቸውን
											በአስተማማኝ ቦታ እንዲቀመጥላቸው በሚፈልጉ ወይም በሌላ ሁኔታ) ደንበኞች ያለምንም የወለድ
											ክፍያ በፋይናንስ ተቋማት የሚያስቀምጡት ወይም የሚቆጥቡት የቁጠባ ዓይነት ነው፡፡ በወለድ
											አልባ የፋይናንስ አገልግሎት የተለያዩ የቁጠባ አገልግሎቶች ይሰጣሉ፡፡ እነዚህ ወለድ አልባ
											የቁጠባ አገልግሎቶች የሸሪዓ ህግን መሰረት አድርጎ የሚሰጡ ሲሆን የሚከተሉት የቁጠባ አይነቶች
											አሉ፡፡
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro2;
