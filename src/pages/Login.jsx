import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    rollNo: "",
    password: "",
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

    // Backend API integration later

    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#050816",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* LEFT SECTION */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src="/hero.png"
          alt="campus"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(40%)",
          }}
        />

        {/* Overlay Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "14px",
                marginBottom: "40px",
              }}
            >
              <Sparkles size={16} />
              Agentic AI Platform
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: "90px",
                lineHeight: "0.95",
                color: "white",
                fontWeight: "700",
                marginBottom: "30px",
              }}
            >
              Campus
              <br />
              Assistant
            </h1>

            {/* Description */}
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "20px",
                lineHeight: "1.8",
                maxWidth: "620px",
              }}
            >
              AI-powered campus companion for timetable
              management, academics, placements, navigation,
              and real-time student assistance.
            </p>
          </div>

          {/* Bottom Stats */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            {[
              { number: "24/7", label: "AI Support" },
              { number: "12K+", label: "Students" },
              { number: "4", label: "AI Agents" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "28px",
                  borderRadius: "24px",
                  minWidth: "150px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h2
                  style={{
                    color: "white",
                    fontSize: "42px",
                    marginBottom: "10px",
                  }}
                >
                  {item.number}
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "16px",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top, #07152f 0%, #020617 70%)",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "520px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "28px",
              background:
                "linear-gradient(135deg,#06b6d4,#8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "40px",
              boxShadow: "0 0 50px rgba(59,130,246,0.3)",
            }}
          >
            <Sparkles size={42} color="white" />
          </div>

          {/* Heading */}
          <h1
            style={{
              color: "white",
              fontSize: "72px",
              lineHeight: "1",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Welcome Back 👋
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "22px",
              marginBottom: "50px",
            }}
          >
            Continue to your AI-powered campus workspace.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Roll Number */}
            <input
              type="text"
              placeholder="Enter Roll Number"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            {/* Login Button */}
            <button
              type="submit"
              style={{
                height: "78px",
                borderRadius: "24px",
                border: "none",
                background:
                  "linear-gradient(90deg,#06b6d4,#3b82f6)",
                color: "white",
                fontSize: "28px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                marginTop: "10px",
                boxShadow: "0 0 40px rgba(59,130,246,0.25)",
              }}
            >
              Continue to Dashboard
              <ArrowRight size={28} />
            </button>

            {/* Signup Link */}
            <p
              style={{
                textAlign: "center",
                marginTop: "18px",
                color: "rgba(255,255,255,0.65)",
                fontSize: "18px",
              }}
            >
              Not registered yet?{" "}

              <Link
                to="/signup"
                style={{
                  color: "#38bdf8",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Sign Up
              </Link>
            </p>

            {/* Footer */}
            <p
              style={{
                textAlign: "center",
                color: "rgba(255,255,255,0.3)",
                fontSize: "15px",
                marginTop: "10px",
              }}
            >
              Secure AI-powered campus management platform
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  height: "78px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  padding: "0 28px",
  color: "white",
  fontSize: "22px",
  outline: "none",
  backdropFilter: "blur(10px)",
};