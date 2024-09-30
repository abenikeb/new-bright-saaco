import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";
import Clients from "@/components/common/Clients";
import Services2 from "@/components/home-digital-agency/Services";
import Services from "@/components/home-personal/Services";
import Intro2 from "@/components/home-digital-agency/Intro2";
import Testimonials from "@/components/home-digital-agency/Testimonials";
import Blog from "@/components/home-digital-agency/Blog";
import Header from "@/components/page-services/Header";
import Numbers from "@/components/page-services/Numbers";

export const metadata = {
	title: "Bright Sacco",
	icons: {
		icon: "/assets/imgs/favicon.ico",
		shortcut: "/assets/imgs/favicon.ico",
		other: generateStylesheetObject([
			"/assets/css/plugins.css",
			"/assets/css/style.css",
			"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
			"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
		]),
	},
};

export default function Home() {
	return (
		<body>
			{/* <LoadingScreen /> */}
			<Cursor />
			<ProgressScroll />
			<Lines />
			<Navbar />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main className="main-bg o-hidden">
						<Header />
						{/* <Services2 /> */}
						<div className="container service-conatiner">
							<div className="sec-head mb-80">
								<div className="row">
									<div className="col-lg-8">
										<div className="text secondary-color">
											<h6 className="title-bord mb-30 secondary-color">
												አገልግሎቶቻችን
											</h6>
											<h5 className="about-us-content text-bright mb-30">
												ከአባላት የመመዝገቢያ ክፍያ 1000.00፣ 1 ዕጣ 100.00 ብር የሆነ ለአዲስ አባል
												ዝቅተኛ 15 ዕጣ መሸጥ እና አባት{" "}
												<span className="fw-200">
													በየወሩ ቢያንስ አንድ ዕጣ እንዲገዙ ማድረግ፡፡
												</span>{" "}
												የተለያዩ ቁጠባ፣ አረቦን፣ የአገልግሎት ገቢ፣ ልዩ ልዩ ገቢዎችን እና በቸክ የሚንቀሳቀስ
												ተንቀሳቃሽ ሂሳብ መሰብሰብ፤ የቁጠባ እና ዕጣ ምጥጥን መስራት፣ ለአባላት የተለያዩ
												አይነቶች ብድር መስጠት እና ከነወለዱ መሰብሰብ፣ ስልጠና መስጠት፡፡ የሸሪዓ ህግን መሰረት
												ያደረገ ወለድ አልባ የፋይናንስ አገልግሎት መስጠት፡፡ ለአባላት በጥሬ ገንዘብ ወይም
												የአይነት ብድር ማበደርና ከነወለዱ በውሉ መሰረት መሰብሰብ፡፡ ለአባላት የቁጠባ ወለድ
												ማስላት እና ማሳወቅ መደበኛ ቁጠባው ላይ ማስቀመጥ፡፡ እንዲሁም ለአባላት የተለያዩ ወለድ
												አልባ አገልግሎቶችን መስጠት የኅብረት ሥራ ማህበሩን ሂሳብ በየአመቱ መዝጋትና ማስመርመር፣
												ትርፍ ክፍፍል መስጠት ወይም ወደ እያንዳንዱ አባል ዕጣ መጠን መሰረት ተጨማሪ ዕጣ
												እንዲገዙና ካፒታላቸውን ማሳደግ፣ የዕጣ ሰርተፊኬት መስጠት፡፡
											</h5>
											<p className="div-p">
												የኅብረት ሥራ ማህበሩ ቋሚ እና ተንቀሳቃሽ ንብረት እንዲሁም ሂሳብ ሰነድ ተሟልቶ ስራ ላይ
												እንዲውል ማድረግ፡፡ ለአባላት፣ ለደንበኞች፣ ለአመራር አካላት ቅጥር ሰራተኞች የተለያዩ
												ስልጠናዎች፣ የምክር አገልግሎት እና ሙያዊ ድጋፎች መስጠት፡፡ በተጨማሪም የተለያዩ
												አነስተኛ የመድህን ዋስትና ሽፋን (ለምሳሌ የብድር፣ የቁጠባ፣ የጤና እና ሌሎች)
												አገልግሎት መስጠት፡፡ በወቅቱ ያልተሰበሰበ ብድር ላይ ያልተሰበሰበውን ወለድ ያህል ቅጣት
												አስልቶ መቀበል፡፡ ሌሎች አግባብነት ያላቸውን ተመሳሳይ ተግባራት ማከናወን፤ ከተለያዩ
												የገንዘብ ተቋማት ብድር መበደር፣ የአስተዳድሩልኝ ገንዘብ መቀበል እና ማስተዳደር እና
												የኮር ባንኪንግ አገልግሎት መስጠት፡፡
											</p>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="img md-mb50">
											<img src="/assets/imgs/arw9.png" alt="" />
										</div>
										<br></br>
										<div className="img md-mb50">
											<img src="/assets/imgs/arw10.png" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<Services />
						<Intro2 />
						{/* <Blog /> */}
						{/* <Numbers /> */}
						{/* <Testimonials /> */}
						{/* <Clients />
						<Blog /> */}
						{/* <Marq2 /> */}
					</main>
					<Footer />
				</div>
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

			<Script src="/assets/js/scripts.js"></Script>
		</body>
	);
}
