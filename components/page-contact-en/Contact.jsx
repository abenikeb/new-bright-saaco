"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { notification } from "antd";
// import { useRouter } from "next/navigation";

function Contact() {
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

	const handleSubmit = async (e) => {
		e.preventDefault();

		// const router = useRouter();

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
			}
		} catch (error) {
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
							<h2 className="contact-title">Address</h2>
							<div className="morinfo mt-50 pb-30 bord-thin-bottom secondary-color">
								<h6 className="mb-15 section-title">Main Branch Address</h6>
								<p className="address-details">
									Gerji Mebrat Hayl, Bole Sub City, Sent Plaz 3rd Floor
								</p>

								{/* <!-- Main Branch Phone --> */}
								<div className="contact-info mt-15">
									<h6 className="contact-title">Phone</h6>
									<p>
										<a href="tel:+251913228892" className="contact-link">
											+2519 13228892
										</a>
									</p>
								</div>

								{/* <!-- Main Branch Email --> */}
								<div className="contact-info">
									<h6 className="contact-title">Email</h6>
									<p>
										<a
											href="mailto:support@brighsacco.com"
											className="contact-link">
											Support@brighsacco.com
										</a>
									</p>
								</div>
							</div>

							{/* <!-- Branch Address Section --> */}
							<div className="morinfo mt-30 pb-30 bord-thin-bottom secondary-color">
								<h6 className="mb-15 section-title">Branch Address</h6>
								<p className="address-details">
									Branch XYZ, Another Location, Addis Ababa
								</p>

								{/* <!-- Branch Phone --> */}
								<div className="contact-info mt-15">
									<h6 className="contact-title">Phone</h6>
									<p>
										<a href="tel:+251912345678" className="contact-link">
											+2519 12345678
										</a>
									</p>
								</div>

								{/* <!-- Branch Email --> */}
								<div className="contact-info">
									<h6 className="contact-title">Email</h6>
									<p>
										<a
											href="mailto:branch@brighsacco.com"
											className="contact-link">
											branch@brighsacco.com
										</a>
									</p>
								</div>
							</div>

							{/* <!-- Social Media Icons --> */}
							<div className="social-icon mt-50">
								<a href="#0">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="#0">
									<i className="fab fa-dribbble"></i>
								</a>
								<a href="#0">
									<i className="fab fa-behance"></i>
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
							<h2 className="forms-title">Member Registration</h2>
							<form className="forms" onSubmit={handleSubmit}>
								{/* Personal Information */}
								<div className="forms-row">
									<input
										type="text"
										name="firstName"
										placeholder="First Name"
										className="forms-input"
										value={formData.firstName}
										onChange={handleChange}
									/>
									<input
										type="text"
										name="middleName"
										placeholder="Middle Name"
										className="forms-input"
										value={formData.middleName}
										onChange={handleChange}
									/>
									<input
										type="text"
										name="lastName"
										placeholder="Last Name"
										className="forms-input"
										value={formData.lastName}
										onChange={handleChange}
									/>
								</div>

								{/* Gender and Birth Info */}
								<div className="forms-row">
									<div className="forms-group">
										<label>Gender</label>
										<select
											name="gender"
											className="forms-select"
											value={formData.gender}
											onChange={handleChange}>
											<option value="">Select Gender</option>
											<option value="Male">Male</option>
											<option value="Female">Female</option>
										</select>
									</div>
									<input
										type="text"
										name="placeOfBirth"
										placeholder="Place of Birth"
										className="forms-input"
										value={formData.placeOfBirth}
										onChange={handleChange}
									/>
								</div>

								<input
									type="date"
									name="birthDate"
									className="forms-input"
									value={formData.birthDate}
									onChange={handleChange}
								/>

								{/* Address */}
								<div className="forms-section">
									<h3>Address</h3>
									<div className="forms-row">
										<input
											type="text"
											name="address.city"
											placeholder="City"
											className="forms-input"
											value={formData.address.city}
											onChange={handleChange}
										/>
										<input
											type="text"
											name="address.subCity"
											placeholder="Sub City"
											className="forms-input"
											value={formData.address.subCity}
											onChange={handleChange}
										/>
										<input
											type="text"
											name="address.woroda"
											placeholder="Woroda"
											className="forms-input"
											value={formData.address.woroda}
											onChange={handleChange}
										/>
										<input
											type="text"
											name="address.houseNumber"
											placeholder="House Number"
											className="forms-input"
											value={formData.address.houseNumber}
											onChange={handleChange}
										/>
										<input
											type="text"
											name="address.phone"
											placeholder="Phone"
											className="forms-input"
											value={formData.address.phone}
											onChange={handleChange}
										/>
										<input
											type="email"
											name="address.email"
											placeholder="Email"
											className="forms-input"
											value={formData.address.email}
											onChange={handleChange}
										/>
										<input
											type="text"
											name="address.maritalStatus"
											placeholder="Marital Status"
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
									placeholder="Family Members Count"
									className="forms-input"
									value={formData.familyMembersCount}
									onChange={handleChange}
								/>
								<input
									type="text"
									name="educationLevel"
									placeholder="Education Level"
									className="forms-input"
									value={formData.educationLevel}
									onChange={handleChange}
								/>
								<select
									name="workType"
									className="forms-select"
									value={formData.workType}
									onChange={handleChange}>
									<option value="">Select Work Type</option>
									<option value="Private">Private</option>
									<option value="Governmental">Governmental</option>
								</select>

								{/* Work details */}
								<input
									type="text"
									name="workPosition"
									placeholder="Work Position"
									className="forms-input"
									value={formData.workPosition}
									onChange={handleChange}
								/>
								<input
									type="text"
									name="companyName"
									placeholder="Company Name"
									className="forms-input"
									value={formData.companyName}
									onChange={handleChange}
								/>
								<input
									type="number"
									name="monthlySalary"
									placeholder="Monthly Salary"
									className="forms-input"
									value={formData.monthlySalary}
									onChange={handleChange}
								/>
								<input
									type="number"
									name="monthlySavings"
									placeholder="Monthly Savings"
									className="forms-input"
									value={formData.monthlySavings}
									onChange={handleChange}
								/>

								{/* Additional Information */}
								<input
									type="text"
									name="infoSource"
									placeholder="How did you hear about us?"
									className="forms-input"
									value={formData.infoSource}
									onChange={handleChange}
								/>

								{/* Member information */}
								<div className="forms-section">
									<h3>Member Information</h3>
									<input
										type="text"
										name="memberInfo.name"
										placeholder="Name"
										className="forms-input"
										value={formData.memberInfo.name}
										onChange={handleChange}
									/>
									<input
										type="text"
										name="memberInfo.phone"
										placeholder="Phone"
										className="forms-input"
										value={formData.memberInfo.phone}
										onChange={handleChange}
									/>
									<input
										type="text"
										name="memberInfo.relation"
										placeholder="Relation"
										className="forms-input"
										value={formData.memberInfo.relation}
										onChange={handleChange}
									/>
								</div>

								{/* Loan Information */}
								<input
									type="text"
									name="loanTimeAssumption"
									placeholder="Assumed Time to Take Loan"
									className="forms-input"
									value={formData.loanTimeAssumption}
									onChange={handleChange}
								/>
								<textarea
									name="loanReason"
									placeholder="Reason for Loan"
									className="forms-textarea"
									value={formData.loanReason}
									onChange={handleChange}></textarea>

								<button type="submit" className="forms-submit">
									Submit
								</button>
							</form>
						</div>
						{/* <div className="full-width">
							<div className="sec-head mb-50">
								<h6 className="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
								<h3 className="text-u ls1">
									Send a <span className="fw-200">message</span>
								</h3>
							</div>
							<form
								id="contact-form"
								className="form2"
								method="post"
								action="contact.php">
								<div className="messages"></div>

								<div className="controls row">
									<div className="col-lg-6">
										<div className="form-group mb-30">
											<input
												id="form_name"
												type="text"
												name="name"
												placeholder="Name"
												required="required"
											/>
										</div>
									</div>

									<div className="col-lg-6">
										<div className="form-group mb-30">
											<input
												id="form_email"
												type="email"
												name="email"
												placeholder="Email"
												required="required"
											/>
										</div>
									</div>

									<div className="col-12">
										<div className="form-group mb-30">
											<input
												id="form_subject"
												type="text"
												name="subject"
												placeholder="Subject"
											/>
										</div>
									</div>

									<div className="col-12">
										<div className="form-group">
											<textarea
												id="form_message"
												name="message"
												placeholder="Message"
												rows="4"
												required="required"></textarea>
										</div>
										<div className="mt-30">
											<button
												type="submit"
												className="butn butn-full butn-bord radius-30 secondary-color">
												<span className="text">Let&lsquo;s Talk</span>
											</button>
										</div>
									</div>
								</div>
							</form>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
