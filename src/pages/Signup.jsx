import { useState } from "react";
import { User, Mail, Lock, GraduationCap } from "lucide-react";

export default function Signup() {
  const [formData, setFormData] = useState({
    rollNo: "",
    password: "",
    semester: "",
    branch: "",
    section: "",
    programLeader: "",
    collegeEmail: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    // Later connect backend here
    alert("Signup Successful 🚀");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0c0f14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#131720",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 0 50px rgba(74,222,128,0.08)",
        }}
      >
        {/* Heading */}
        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "36px",
              color: "#f0f2f5",
              fontFamily: "'Instrument Serif', serif",
              marginBottom: "10px",
            }}
          >
            Student Signup
          </h1>

          <p style={{ color: "#8892a0", fontSize: "14px" }}>
            Create your Campus AI account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {/* Roll No */}
          <InputField
            icon={<User size={18} />}
            placeholder="Roll Number"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
          />

          {/* Email */}
          <InputField
            icon={<Mail size={18} />}
            placeholder="College Email"
            name="collegeEmail"
            value={formData.collegeEmail}
            onChange={handleChange}
            type="email"
          />

          {/* Password */}
          <InputField
            icon={<Lock size={18} />}
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />

          {/* Semester */}
          <InputField
            icon={<GraduationCap size={18} />}
            placeholder="Semester (1-8)"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            type="number"
          />

          {/* Branch */}
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            style={selectStyle}
            required
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
          </select>

          {/* Section */}
          <InputField
            placeholder="Section"
            name="section"
            value={formData.section}
            onChange={handleChange}
          />

          {/* Program Leader */}
          <InputField
            placeholder="Program Leader Name"
            name="programLeader"
            value={formData.programLeader}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              background: "#4ade80",
              color: "#0c0f14",
              border: "none",
              padding: "14px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "10px",
              transition: "0.2s",
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

/* Reusable Input */
function InputField({
  icon,
  placeholder,
  name,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#0f141c",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "14px",
      }}
    >
      <div style={{ color: "#4ade80" }}>{icon}</div>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          color: "#f0f2f5",
          fontSize: "14px",
        }}
      />
    </div>
  );
}

const selectStyle = {
  background: "#0f141c",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  padding: "14px",
  color: "#f0f2f5",
  fontSize: "14px",
  outline: "none",
};