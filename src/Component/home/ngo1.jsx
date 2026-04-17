import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "../../firebase"; // <-- we'll set this up
import { collection, addDoc } from "firebase/firestore";

export default function BookSession() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "Married",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), formData);
      alert("✅ Your request has been submitted successfully!");
      setFormData({ name: "", email: "", status: "Married", message: "" });
    } catch (error) {
      console.error("Error adding booking: ", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Book a Counseling Session
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            At Look Up Love, we provide confidential counseling and emotional
            support for individuals and couples. Whether you are navigating
            marriage challenges, recovering from divorce, entering a new
            relationship, or preparing for a healthy partnership, our team is
            here to guide and support you.
          </p>

          <p className="mt-4 text-gray-400">
            Fill out the form and a member of our counseling team will contact
            you shortly to schedule your session.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-2 w-full border border-gray-700 rounded-md px-4 py-3 bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#6a1b1b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-2 w-full border border-gray-700 rounded-md px-4 py-3 bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#6a1b1b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Relationship Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-2 w-full border border-gray-700 rounded-md px-4 py-3 bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#6a1b1b]"
            >
              <option>Married</option>
              <option>Single</option>
              <option>Divorced</option>
              <option>New Relationship</option>
              <option>Widow/Widower</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us briefly how we can support you"
              className="mt-2 w-full border border-gray-700 rounded-md px-4 py-3 bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#6a1b1b]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6a1b1b] hover:bg-[#571515] text-white py-3 rounded-md font-semibold transition"
          >
            Request Counseling Session
          </button>
        </motion.form>
      </div>
    </section>
  );
}
