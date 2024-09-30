"use client";
import React from "react";

function FAQS() {
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
		<section className="page-faqs section-padding pb-0 position-re">
			<br />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div>
							<div className="sec-head mb-50">
								<h6 className="sub-title main-color mb-15">
									ወደ ተደጋጋሚ ጥያቄዎች ክፍላችን እንኳን በደህና መጡ!
								</h6>
								<h3 className="secondary-color">
									ደንበኞች ተደጋጋሚ የሚጠይቋቸው
									<br /> ጥያዌወች እና መለሶቻቸው
								</h3>
							</div>
							<div className="accordion bord secondary-color">
								<div className="item active wow fadeInUp" data-wow-delay=".1s">
									<div onClick={openAccordion} className="title">
										<h6>አባል ለመሆን ምን ምን ያስፈልጋል ? </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											የብራይት ኃ/የተ/የገንዘብ ቁጠባ እና ብድር መሰረታዊ ህብረት ስራ ማህበር አባል ለመሆን
											የቀበሌ መታወቂያ፣ ፓስፖርት ወይም የታደሰ መንጃ ፈቃድ መያዝ እና 15 ሸር መግዛት (የ 1
											ሸር ዋጋ 100 ብር ነው) ፣1000 ብር መመዝገቢያ፣ 400 መደበኛ ቁጠባ፡፡
										</p>
									</div>
								</div>

								<div
									className="item wow fadeInUp secondary-color"
									data-wow-delay=".3s">
									<div onClick={openAccordion} className="title">
										<h6>የምን የምን የብድር አይነቶች አሏችሁ? </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											የፍጆታ ብድር፣ የንግድ ብድር፣ የቤት ግዥ፣ መስሪያ እና ማደሻ ብድር፣ የመኪና ግዥ ብድር፣
											ልዩ የአጭር ጊዜ ብድር፣ የሊዝ ፋይናንስ ብድር፣ወለድ አልባ ብድር፣ የደመወዝ ብድር፣
											የባለሙያዎች ብድር ናቸው፡፡
										</p>
									</div>
								</div>

								<div
									className="item wow fadeInUp secondary-color"
									data-wow-delay=".3s">
									<div onClick={openAccordion} className="title">
										<h6>ብድር ለመበደር ምን ያስፈልጋል? </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											በፈቃደኝነት ላይ የተመሰረተ አባል መሆን፣ መታወቂያ (የቀበሌ፣ መንጃ ፈቃድ፣ የመንግሥት
											ሠራተኛ፣ የታወቀ የግል ድርጅት ወያም ፓስፖርት)፣ የጋብቻ ማስረጃ (ያገባ ወይም ያላገባ) ፣
											ተመጣጣኝ ዋስትና - የተሸከርካሪ መኪና፣ ቋሚ ንብረት (መኖሪያ ቤት ወይም የንግድ ቤት)፣
											የቦንድ እና አክሲዮን ድርሻ፣ ሶስት ወር እና ከዚያ በላይ በተከታታይ የቆጠበ/ች፣ የብድሩን
											25% መደበኛ ቁጠባ የቆጠበ/ች፣ 10% ዕጣ የገዛ::
										</p>
									</div>
								</div>

								<div
									className="item wow fadeInUp secondary-color"
									data-wow-delay=".3s">
									<div onClick={openAccordion} className="title">
										<h6>የወለድ መጠናችሁ ስንት ነው? </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">የወለድ መጠናችን 15.5% ነው፡፡</p>
									</div>
								</div>

								<div
									className="item wow fadeInUp secondary-color"
									data-wow-delay=".3s">
									<div onClick={openAccordion} className="title">
										<h6>ከሌሎች ህብረት ስራ ማህበራት በምን ተለያላችሁ? </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											የወለድ አልባ ፋይናንስ በመሰጠታችን፣ በ 3 ወር ብቻ በማበደራችን፣ ተመጣጣኝ የብድር ወለድ
											ማስከፈላችን::
										</p>
									</div>
								</div>

								<div
									className="item wow fadeInUp secondary-color"
									data-wow-delay=".3s">
									<div onClick={openAccordion} className="title">
										<h6> የብድሩ ጣሪያ እና የመመለሻ ጊዜው ምን ያህል ነው? </h6>
										<span className="ico ti-plus"></span>
									</div>
									<div className="accordion-info">
										<p className="secondary-color">
											የፍጆታ ብድር በውስጡ ብዙ የብድር አይነቶችን የሚያካትት ሲሆን ከነሱም መካከል የትምህርት
											፣የህክምና ፣የቤት ዕቃ ማሟያ ፣የግብር ክፍያ ፣የማህበራዊ አገልግሎት (ሰርግ፣ ልደት፣
											ምርቃት) እና የጉዞ/የጉብኝት ብድር ያካትታለ፡፡ የብደሩ ጣሪያ እና መመለሻ ጊዜው፡-
											120,000.00 የብድር መጠን በ30 ወራቶች ተመላሽ ይሆናል:: ለ200,000.00 የብድር
											መጠን በ36 ወራቶች ተመላሽ ይሆናል:: የንግድ ብድር፡- በውስጡ ለከተማ ግብርና ፣
											ለአነስተኛ ንግድ ስራ፣ ለአገልግሎት ስራ፣ ለማኑፋክቸሪንግ ስራ፣ ለኮንስትራክሽን ስራ
											የሚሉትን ያካትታል፡፡ የብደሩ ጣሪያ እና መመለሻ ጊዜው፡- 1,000,000.00 የብድር መጠን
											በ24 ወራቶች ተመላሽ ይሆናል:: 1,500,000.00 የብድር መጠን 30 ወራቶች ተመላሽ
											ይሆናል:: 2,000,000.00 የብድር መጠን 36 ወራቶች ተመላሽ ይሆናል::
											2,000,000.00 የብድር መጠን 42 ወራቶች ተመላሽ ይሆናል:: የቤት ግዥ፣ መስሪያ እና
											ማደሻ ብድር፡- የቤት ግዥ፣ መስሪያ እና ማደሻ ብድር አይነቶችን ያካትታል፡፡ የብደሩ ጣሪያ
											እና መመለሻ ጊዜው፡- 3,000,000.00 በ60 ወራቶች ተመላሽ ይሆናል::
											5,000,000.00 በ84 ወራቶች ተመላሽ ይሆናል:: 1,000,000.00 በ60 ወራቶች
											ተመላሽ ይሆናል:: የመኪና ግዥ ብድር፡- የቤት መኪና ወይንም የንግድ መኪና (የታክሲ፣
											የሕዝብ አገልግሎት፣ የደረቅ እና የፈሳሽ ጭነት ያካትታል፡፡ የብደሩ ጣሪያ እና መመለሻ
											ጊዜው፡- 1,500,000.00 በ36 ወራቶች ተመላሽ ይሆናል::
										</p>
									</div>
								</div>
							</div>
						</div>
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</div>
				</div>
			</div>
			<div className="img1">
				<img src="/assets/imgs/arw14.jpg" alt="" />
			</div>
			<div className="img2">
				<img src="/assets/imgs/arw3.jpg" alt="" />
			</div>
			<div className="img3">
				<img src="/assets/imgs/arw13.jpg" alt="" />
			</div>
		</section>
	);
}

export default FAQS;
