import Navbar from "../components/navbar/Navbar.tsx";
import ContactLinks from "../components/contact/ContactLinks.tsx";
import "../layouts/contact.css";

export function Contact() {
	return (
		<div className="contact-grid">
			<Navbar />
			<ContactLinks />
		</div>
	);
}
