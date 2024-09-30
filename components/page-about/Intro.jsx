import React from "react";

function Intro() {
	return (
		<section className="page-intro section-padding pb-0">
			<div className="container">
				<div className="row md-marg">
					<div className="col-lg-6">
						<div className="img md-mb80">
							<div className="row">
								<div className="col-6">
									<img src="/assets/imgs/intro/i1.jpg" alt="" />
									<div className="img-icon">
										<img src="/assets/imgs/arw0.png" alt="" />
									</div>
								</div>
								<div className="col-6 mt-40">
									<img src="/assets/imgs/intro/i2.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 valign secondary-color">
						<div className="cont">
							<h4 className="about-us-content text-bright mb-30">
								ብራይት <span className="fw-200">ኃ/የተወሰነ የገንዘብ ቁጠባ እና ብድር</span>{" "}
								መሰረታዊ ኅብረት ስራ ማኅበር በአባላት በሙሉ ፍላጎት እና ፈቃደኝነት የኅብረት ስራ ማኅበሩን
								ለማደራጀት በወጣው አዋጅ ቁጥር <span className="fw-200">985/2009</span>{" "}
								መሰረት የተመሰረተ እና ለአባላት የቁጠባ፣ የብድር፣ አነስተኛ ኢንሹራንስ አገለግሎት እንዲሁም ለአባላት
								የተለያዩ ስልጠናዎችን እዲሰጥ ታስቦ የተቋቋመ ማኅበረሰብ አቀፍ ኅብረት ስራ ማኅበር ነው::
							</h4>
							<p className="div-p">
								ልዩ ፍላጎቶችዎን ለማሟላት የተነደፉ ልዩ ልዩ አገልግሎቶችን እናቀርባለን። ተልእኳችን ደጋፊ
								ማህበረሰቡን በማሳደግ አስተማማኝ የቁጠባ መፍትሄዎችን፣ ተደራሽ ብድሮችን እና ጠቃሚ የፋይናንስ
								ምክሮችን መስጠት ነው። ለግልጽነት እና ለታማኝነት ቁርጠኝነት ከያዝን እያንዳንዱ አባል ከእኛ ጋር
								የሚያደርገው ጉዞ እምነት እና እድገት የሚታይበት መሆኑን እናረጋግጣለን።
							</p>
							<a href="/page-services" className="underline main-color mt-40">
								<span className="text">
									የእኛ አገልግሎቶች <i className="ti-arrow-top-right"></i>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro;
