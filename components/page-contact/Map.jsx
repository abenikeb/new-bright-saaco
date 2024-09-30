import React from "react";

function Map() {
	return (
		// <div className="google-map">
		// 	<iframe
		// 		id="gmap_canvas"
		// 		src="https://maps.google.com/maps?q=hollwood&t=&z=11&ie=UTF8&iwloc=&output=embed"></iframe>
		// </div>
		<div className="google-map">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.3296573522707!2d38.7612969!3d9.0336625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858a71adbd11%3A0xd356b3a553b934c3!2sNib%20International%20Bank%20-%20Arat%20Kilo%20Branch!5e0!3m2!1sen!2set!4v1727701812901!5m2!1sen!2set"
				width="600"
				height="450"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"></iframe>
			{/* <iframe
				id="gmap_canvas"
				src="https://maps.google.com/maps?q=8.9990,38.7630&z=15&ie=UTF8&output=embed"
				width="600"
				height="450"
				allowfullscreen=""
				loading="lazy"></iframe> */}
		</div>
	);
}

export default Map;
