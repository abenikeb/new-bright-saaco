"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { notification } from "antd";
// import { useRouter } from "next/navigation";

function Contact() {
	// const router = useRouter();
	const [termsAccepted, setTermsAccepted] = useState(false); // Terms & Conditions state
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false); // Loading state

	const [formData, setFormData] = useState({
		firstName: "",
		middleName: "",
		lastName: "",
		gender: "",
		placeOfBirth: "",
		birthDate: "",
		address: {
			city: "",
			subCity: "",
			woroda: "",
			houseNumber: "",
			phone: "",
			email: "",
			maritalStatus: "",
		},
		familyMembersCount: "",
		educationLevel: "",
		workType: "",
		workPosition: "",
		companyName: "",
		monthlySalary: "",
		monthlySavings: "",
		infoSource: "",
		memberInfo: {
			name: "",
			phone: "",
			relation: "",
			address: {
				city: "",
				subCity: "",
				woroda: "",
				houseNumber: "",
				phone: "",
				email: "",
			},
		},
		loanTimeAssumption: "",
		loanReason: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		const keys = name.split("."); // Split the name by '.' to handle nested fields

		if (keys.length === 1) {
			// Handle top-level fields
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		} else {
			// Handle nested fields like address or memberInfo
			setFormData((prevData) => {
				let updatedData = { ...prevData };

				// Traverse the keys and update the nested object
				let nested = updatedData;
				for (let i = 0; i < keys.length - 1; i++) {
					nested = nested[keys[i]];
				}
				nested[keys[keys.length - 1]] = value;

				return updatedData;
			});
		}
	};

	const handleCheckboxChange = (e) => {
		setTermsAccepted(e.target.checked);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await axios.post(
				"https://helazbeauty.et/api/member-registration",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.status === 200) {
				setLoading(false); // Remove loading after submission
				notification.success({
					message: "Success",
					description: "Form submitted successfully",
				});
				// Route to the contact page
				// router.push("/page-contact");
			} else {
				notification.error({
					message: "Error",
					description: "Error submitting form",
				});
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			notification.error({
				message: "Error",
				description: "There was an error submitting the form",
			});
		}
	};

	return (
		<section className="contact section-padding">
			<div className="container">
				<div className="row">
					{/* Address */}
					<div className="col-lg-4">
						<div className="sec-head info-box full-width md-mb80">
							{/* <!-- Main Branch Section --> */}
							<h2 className="contact-title">አድራሻ</h2>
							<div className="morinfo mt-50 pb-30 bord-thin-bottom secondary-color">
								<h6 className="mb-15 section-title">ዋና ቅርንጫፍ አድራሻ</h6>
								<p className="address-details">አራት ኪሎ ንብ ባንክ 1ኛ ፎቅ</p>

								{/* <!-- Main Branch Phone --> */}
								<div className="contact-info mt-15">
									<h6 className="contact-title">ስልክ</h6>
									<p>
										<a href="tel:+251913228892" className="contact-link">
											+251 960401111/960111166
										</a>
									</p>
								</div>

								{/* <!-- Main Branch Email --> */}
								<div className="contact-info">
									<h6 className="contact-title">ኢሜይል</h6>
									<p>
										<a
											href="mailto:support@brighsacco.com"
											className="contact-link">
											info@brightsacco.com
										</a>
									</p>
								</div>
							</div>

							{/* <!-- Branch Address Section --> */}
							{/* <div className="morinfo mt-30 pb-30 bord-thin-bottom secondary-color">
								<h6 className="mb-15 section-title">የቅርንጫፍ አድራሻ</h6>
								<p className="address-details">ቅርንጫፍ Bole፣ ሌላ ቦታ፣ አዲስ አበባ</p>

								
								<div className="contact-info mt-15">
									<h6 className="contact-title">ስልክ</h6>
									<p>
										<a href="tel:+251912345678" className="contact-link">
											+2519 12345678
										</a>
									</p>
								</div>

								
								<div className="contact-info">
									<h6 className="contact-title">ኢሜይል</h6>
									<p>
										<a
											href="mailto:branch@brighsacco.com"
											className="contact-link">
											branch@brighsacco.com
										</a>
									</p>
								</div>
							</div> */}

							{/* <!-- Social Media Icons --> */}
							<div className="social-icon mt-50">
								<a href="https://www.facebook.com/BrightSaccoOfficial">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="https://t.me/BrightSaccoLTD">
									<i className="fab fa-telegram"></i>
								</a>
								<a href="https://t.me/brightsacco">
									<i className="fab fa-telegram"></i>
								</a>
								<a href="#0">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>

					{/* Form Field */}
					<div className="col-lg-7 offset-lg-1">
						<div className="forms-container">
							<h2 className="forms-title">የአባልነት ማመልከቻ ፎርም</h2>

							<form className="forms" onSubmit={handleSubmit}>
								{/* Personal Information */}
								<h3>የአባላት የግል መረጃ</h3>
								<div className="forms-row">
									<input
										type="text"
										name="firstName"
										placeholder="ስም"
										className="forms-input"
										value={formData.firstName}
										onChange={handleChange}
										required
									/>
									<input
										type="text"
										name="middleName"
										placeholder="የአባት ስም"
										className="forms-input"
										value={formData.middleName}
										onChange={handleChange}
									/>
									<input
										type="text"
										name="lastName"
										placeholder="የአያት ስም"
										className="forms-input"
										value={formData.lastName}
										onChange={handleChange}
									/>
								</div>

								{/* Gender and Birth Info */}
								<div className="forms-row">
									<div className="forms-group">
										{/* <label className="secondary-color">ጾታ</label> */}
										<select
											name="gender"
											className="forms-select"
											value={formData.gender}
											onChange={handleChange}>
											<option value="">ጾታን ይምረጡ</option>
											<option value="Male">ወንድ</option>
											<option value="Female">ሴት</option>
										</select>
									</div>
									<input
										type="text"
										name="placeOfBirth"
										placeholder="የትውልድ ቦታ"
										className="forms-input"
										value={formData.placeOfBirth}
										onChange={handleChange}
									/>
								</div>

								<label className="secondary-color">የትውልድ ቀን</label>
								<input
									type="date"
									name="birthDate"
									className="forms-input"
									placeholder="የትውልድ ቀን"
									value={formData.birthDate}
									onChange={handleChange}
								/>

								{/* Address */}
								<div className="forms-section">
									<h3>አድራሻ</h3>
									<div className="forms-row">
										<input
											type="text"
											name="address.city"
											placeholder="ከተማ"
											className="forms-input"
											value={formData.address.city}
											onChange={handleChange}
										/>
										<input
											type="text"
											name="address.subCity"
											placeholder="ክፍለ ከተማ"
											className="forms-input"
											value={formData.address.subCity}
											onChange={handleChange}
										/>
										<input
											type="text"
											name="address.woroda"
											placeholder="ወረዳ"
											className="forms-input"
											value={formData.address.woroda}
											onChange={handleChange}
										/>
										<input
											type="text"
											name="address.houseNumber"
											placeholder="የቤት ቁጥር"
											className="forms-input"
											value={formData.address.houseNumber}
											onChange={handleChange}
										/>
										<input
											type="text"
											name="address.phone"
											placeholder="ስልክ"
											className="forms-input"
											value={formData.address.phone}
											onChange={handleChange}
										/>
										<input
											type="email"
											name="address.email"
											placeholder="ኢሜይል"
											className="forms-input"
											value={formData.address.email}
											onChange={handleChange}
											email
											required
										/>
										<input
											type="text"
											name="address.maritalStatus"
											placeholder="የጋብቻ ሁኔታ"
											className="forms-input"
											value={formData.address.maritalStatus}
											onChange={handleChange}
										/>
									</div>
								</div>

								{/* Other fields */}
								<input
									type="number"
									name="familyMembersCount"
									placeholder="የቤተሰብ አባላት ብዛት"
									className="forms-input"
									value={formData.familyMembersCount}
									onChange={handleChange}
								/>
								<input
									type="text"
									name="educationLevel"
									placeholder="የትምህርት ደረጃ"
									className="forms-input"
									value={formData.educationLevel}
									onChange={handleChange}
								/>

								<input
									type="text"
									name="companyName"
									placeholder="የኩባንያ ስም"
									className="forms-input"
									value={formData.companyName}
									onChange={handleChange}
								/>
								<select
									name="workType"
									className="forms-select"
									value={formData.workType}
									onChange={handleChange}>
									<option value="">የሥራ ዓይነትን ይምረጡ</option>
									<option value="Private">የግል</option>
									<option value="Governmental">መንግሥታዊ</option>
								</select>

								{/* Work details */}
								<input
									type="text"
									name="workPosition"
									placeholder="የሥራ ድርሻ"
									className="forms-input"
									value={formData.workPosition}
									onChange={handleChange}
								/>

								<input
									type="number"
									name="monthlySalary"
									placeholder="ወርሃዊ ደሞዝ"
									className="forms-input"
									value={formData.monthlySalary}
									onChange={handleChange}
								/>

								{/* Additional Information */}
								<input
									type="number"
									name="monthlySavings"
									placeholder="በየወሩ መቆጠብ የሚፈልጉት"
									className="forms-input"
									value={formData.monthlySavings}
									onChange={handleChange}
								/>

								<input
									type="text"
									name="infoSource"
									placeholder="እንዴት ስለእኛ ሰማህ"
									className="forms-input"
									value={formData.infoSource}
									onChange={handleChange}
								/>

								{/* Member information */}
								<div className="forms-section">
									<h3>የማህበሩ አባል የሆነ</h3>
									<input
										type="text"
										name="memberInfo.name"
										placeholder="ስም"
										className="forms-input"
										value={formData.memberInfo.name}
										onChange={handleChange}
									/>
									<input
										type="text"
										name="memberInfo.phone"
										placeholder="ስልክ"
										className="forms-input"
										value={formData.memberInfo.phone}
										onChange={handleChange}
									/>
									<input
										type="text"
										name="memberInfo.relation"
										placeholder="ግንኙነት/ዝምድና"
										className="forms-input"
										value={formData.memberInfo.relation}
										onChange={handleChange}
									/>
								</div>

								{/* Loan Information */}
								<input
									type="text"
									name="loanTimeAssumption"
									placeholder="ብድር ለመውሰድ የታሰበበት ጊዜ"
									className="forms-input"
									value={formData.loanTimeAssumption}
									onChange={handleChange}
								/>
								<textarea
									name="loanReason"
									placeholder="ብድር የተፈለገበት ምክንያት"
									className="forms-textarea"
									value={formData.loanReason}
									onChange={handleChange}></textarea>

								{/* Terms & Conditions checkbox */}
								<div className="terms">
									<input
										type="checkbox"
										id="terms"
										checked={termsAccepted}
										onChange={handleCheckboxChange}
									/>
									<label htmlFor="terms" className="terms-label">
										በውሎች እና ሁኔታዎች
										<a href="/terms" target="_blank" className="terms-link">
											{" "}
											እስማማለሁ።
										</a>
										.
									</label>
								</div>

								<button
									type="submit"
									className="submit-btn"
									disabled={!termsAccepted || loading}>
									{loading ? <span className="spinner"></span> : "አስገባ"}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
