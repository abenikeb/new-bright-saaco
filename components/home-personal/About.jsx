import React from "react";

function About() {
	return (
		<section className="about-author section-padding">
			<div className="container with-pad">
				<div className="row lg-marg">
					<div className="col-lg-5 valign">
						<div className="profile-img">
							<div className="img">
								<img src="/assets/imgs/header/p2222.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-7 valign">
						<div className="cont">
							<h6 className="sub-titles main-color mb-30">
								ስለ <span className="secondary-color">እኛ</span>{" "}
							</h6>
							<div className="text secondary-color">
								{/* <h4 className="mb-30">
									I&apos;m{" "}
									<span className="fw-200">
										Creative Director and UI-UX Designer
									</span>{" "}
									from Sydney, Australia, working in web development and print
									media.
								</h4> */}
								<h4 className="about-us-content text-bright mb-30">
									ብራይት <span className="fw-200">ኃ/የተወሰነ የገንዘብ ቁጠባ እና ብድር</span>{" "}
									መሰረታዊ ኅብረት ስራ ማኅበር በአባላት በሙሉ ፍላጎት እና ፈቃደኝነት የኅብረት ስራ ማኅበሩን
									ለማደራጀት በወጣው አዋጅ ቁጥር <span className="fw-200">985/2009</span>{" "}
									መሰረት የተመሰረተ እና ለአባላት የቁጠባ፣ የብድር፣ አነስተኛ ኢንሹራንስ አገለግሎት እንዲሁም
									ለአባላት የተለያዩ ስልጠናዎችን እዲሰጥ ታስቦ የተቋቋመ ማኅበረሰብ አቀፍ ኅብረት ስራ ማኅበር
									ነው::
								</h4>
								<p className="div-p">
									ልዩ ፍላጎቶችዎን ለማሟላት የተነደፉ ልዩ ልዩ አገልግሎቶችን እናቀርባለን። ተልእኳችን ደጋፊ
									ማህበረሰቡን በማሳደግ አስተማማኝ የቁጠባ መፍትሄዎችን፣ ተደራሽ ብድሮችን እና ጠቃሚ የፋይናንስ
									ምክሮችን መስጠት ነው። ለግልጽነት እና ለታማኝነት ቁርጠኝነት ከያዝን እያንዳንዱ አባል ከእኛ ጋር
									የሚያደርገው ጉዞ እምነት እና እድገት የሚታይበት መሆኑን እናረጋግጣለን።
								</p>
								<div className="numbers mt-50">
									<div className="row lg-marg">
										<div className="col-md-6">
											<div className="item bord-thin-top bord-thin-right pt-30 d-flex align-items-end mt-20">
												<div>
													<h3 className="fw-300 mb-10">100%</h3>
													<h6 className="p-color sub-title">የደንበኞች እርካታ</h6>
												</div>
												<div className="ml-auto">
													<div className="icon-img-40">
														<img src="/assets/imgs/favicon.ico" alt="" />
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="item bord-thin-top bord-thin-right pt-30 d-flex align-items-end mt-20">
												<div>
													<h3 className="fw-300 mb-10">100+</h3>
													<h6 className="p-color sub-title">ፕሮጀክቶች ተጠናቀዋል</h6>
												</div>
												<div className="ml-auto">
													<div className="icon-img-40">
														<img src="/assets/imgs/favicon.ico" alt="" />
													</div>
												</div>
											</div>
										</div>
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

export default About;
