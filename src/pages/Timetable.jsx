import { useEffect, useState } from "react";
import axios from "axios";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export default function Timetable() {
  const [selectedDay, setSelectedDay] =
    useState("Monday");

  const [timetable, setTimetable] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    fetchTimetable();
  }, []);

  const fetchTimetable = async () => {
    try {
      setLoading(true);

      // CHANGE THIS URL
      const response = await axios.get(
        "http://localhost:5000/api/timetable"
      );

      setTimetable(response.data.data);
    } catch (err) {
      console.log(err);

      setError(
        "Failed to load timetable"
      );
    } finally {
      setLoading(false);
    }
  };

  const filteredClasses =
    timetable.filter(
      (item) =>
        item.day === selectedDay
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        padding: "40px",
        color: "white",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          📅 Timetable
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "16px",
          }}
        >
          View your daily class schedule
        </p>
      </div>

      {/* DAY BUTTONS */}

      <div
        style={{
          display: "flex",
          gap: "14px",
          marginBottom: "34px",
          flexWrap: "wrap",
        }}
      >
        {days.map((day) => (
          <button
            key={day}
            onClick={() =>
              setSelectedDay(day)
            }
            style={{
              padding: "12px 22px",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",

              background:
                selectedDay === day
                  ? "linear-gradient(135deg,#06b6d4,#3b82f6)"
                  : "rgba(255,255,255,0.06)",

              color: "white",
            }}
          >
            {day}
          </button>
        ))}
      </div>

      {/* LOADING */}

      {loading && (
        <div
          style={{
            fontSize: "18px",
            color: "#94a3b8",
          }}
        >
          Loading timetable...
        </div>
      )}

      {/* ERROR */}

      {error && (
        <div
          style={{
            color: "red",
            fontSize: "16px",
          }}
        >
          {error}
        </div>
      )}

      {/* CARDS */}

      {!loading &&
        filteredClasses.map((item) => (
          <div
            key={item._id}
            style={{
              background:
                item.type === "Break"
                  ? "rgba(255,255,255,0.05)"
                  : "linear-gradient(135deg,#111827,#1e293b)",

              border:
                item.type === "Break"
                  ? "1px dashed rgba(255,255,255,0.15)"
                  : "1px solid rgba(255,255,255,0.08)",

              borderRadius: "24px",

              padding: "24px",

              marginBottom: "22px",

              display: "flex",

              justifyContent:
                "space-between",

              alignItems: "center",

              flexWrap: "wrap",
            }}
          >
            {/* LEFT */}

            <div>
              <h2
                style={{
                  fontSize: "24px",
                  marginBottom: "8px",
                  color:
                    item.type === "Break"
                      ? "#facc15"
                      : "white",
                }}
              >
                {item.subject}
              </h2>

              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "6px",
                }}
              >
                👨‍🏫 {item.faculty}
              </p>

              <p
                style={{
                  color: "#94a3b8",
                }}
              >
                📍 Room: {item.room}
              </p>
            </div>

            {/* RIGHT */}

            <div
              style={{
                textAlign: "right",
              }}
            >
              <div
                style={{
                  background:
                    "rgba(6,182,212,0.12)",

                  border:
                    "1px solid rgba(6,182,212,0.18)",

                  padding:
                    "10px 18px",

                  borderRadius: "14px",

                  color: "#22d3ee",

                  fontWeight: "600",

                  marginBottom: "10px",
                }}
              >
                {item.timeSlot}
              </div>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                }}
              >
                {item.subjectCode}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}