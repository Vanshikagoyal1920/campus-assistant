import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Clock, MapPin } from "lucide-react";
import axios from "axios";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today =
  DAYS[new Date().getDay() - 1] || "Monday";

export default function Timetable() {
  const [activeDay, setActiveDay] = useState(today);
  const [timetableData, setTimetableData] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH DATA FROM BACKEND
  useEffect(() => {
    fetchTimetable();
  }, []);

  const fetchTimetable = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/timetable"
      );

      setTimetableData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching timetable:", error);
      setLoading(false);
    }
  };

  // FILTER DATA BY DAY
  const daySlots = timetableData.filter(
    (item) => item.day === activeDay
  );

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0c0f14",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          marginLeft: 220,
          padding: "40px 48px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#60a5fa",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Dynamic Timetable
          </p>

          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 32,
              fontWeight: 400,
              color: "#f0f2f5",
            }}
          >
            Class Timetable
          </h1>

          <p
            style={{
              fontSize: 14,
              color: "#4a5260",
              marginTop: 4,
            }}
          >
            Live timetable from backend
          </p>
        </div>

        {/* Day Tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          {DAYS.map((day) => {
            const isActive = day === activeDay;

            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                style={{
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: isActive
                    ? "1px solid rgba(96,165,250,0.35)"
                    : "1px solid rgba(255,255,255,0.08)",
                  background: isActive
                    ? "rgba(96,165,250,0.1)"
                    : "transparent",
                  color: isActive
                    ? "#60a5fa"
                    : "#8892a0",
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Loading */}
        {loading ? (
          <p style={{ color: "#8892a0" }}>
            Loading timetable...
          </p>
        ) : daySlots.length === 0 ? (
          <p style={{ color: "#8892a0" }}>
            No lectures found for {activeDay}
          </p>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {daySlots.map((slot) => (
              <div
                key={slot._id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr auto",
                  gap: 20,
                  alignItems: "center",
                  background: "#131720",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 14,
                  padding: "18px 22px",
                }}
              >
                {/* Time */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      color: "#60a5fa",
                      fontSize: 13,
                      marginBottom: 6,
                    }}
                  >
                    <Clock size={14} />

                    {slot.startTime} - {slot.endTime}
                  </div>

                  <span
                    style={{
                      fontSize: 11,
                      color:
                        slot.type === "Lab"
                          ? "#f59e0b"
                          : "#4ade80",
                    }}
                  >
                    {slot.type}
                  </span>
                </div>

                {/* Subject */}
                <div>
                  <h3
                    style={{
                      color: "#f0f2f5",
                      fontSize: 16,
                      marginBottom: 4,
                    }}
                  >
                    {slot.subject}
                  </h3>

                  <p
                    style={{
                      color: "#8892a0",
                      fontSize: 13,
                    }}
                  >
                    {slot.subjectCode}
                  </p>

                  <p
                    style={{
                      color: "#4a5260",
                      fontSize: 12,
                      marginTop: 4,
                    }}
                  >
                    Faculty: {slot.faculty}
                  </p>
                </div>

                {/* Room */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 14px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border:
                      "1px solid rgba(255,255,255,0.08)",
                    color: "#8892a0",
                    fontSize: 13,
                  }}
                >
                  <MapPin size={14} />
                  {slot.room}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}