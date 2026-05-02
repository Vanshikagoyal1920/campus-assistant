import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const SCHEDULE = {
  Monday: [
    {
      time: "9:00–10:00",
      subject: "Data Structures",
      room: "B204",
      faculty: "Dr. Sharma",
      type: "Theory",
    },

    {
      time: "11:00–12:00",
      subject: "DBMS",
      room: "A101",
      faculty: "Dr. Gupta",
      type: "Theory",
    },

    {
      time: "2:00–4:00",
      subject: "OS Lab",
      room: "Lab-3",
      faculty: "Mr. Verma",
      type: "Lab",
    },
  ],

  Tuesday: [
    {
      time: "9:00–10:00",
      subject: "Computer Networks",
      room: "B101",
      faculty: "Dr. Khan",
      type: "Theory",
    },

    {
      time: "3:00–4:00",
      subject: "Maths IV",
      room: "C105",
      faculty: "Dr. Jain",
      type: "Theory",
    },
  ],
};

export default function Timetable() {
  const [activeDay, setActiveDay] =
    useState("Monday");

  const slots =
    SCHEDULE[activeDay] || [];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0b1020",
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
        {/* HEADER */}

        <div style={{ marginBottom: 28 }}>
          <p
            style={{
              color: "#38bdf8",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Academic Schedule
          </p>

          <h1
            style={{
              fontSize: 40,
              color: "#f8fafc",
              marginBottom: 12,
            }}
          >
            Class Timetable
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.7,
            }}
          >
            B.Tech CSE · Semester 6 ·
            ABES Engineering College
          </p>
        </div>

        {/* AI INSIGHT */}

        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(56,189,248,0.14), rgba(129,140,248,0.1))",

            border:
              "1px solid rgba(56,189,248,0.14)",

            borderRadius: 20,

            padding: "24px",

            marginBottom: 30,

            display: "flex",
            justifyContent:
              "space-between",

            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#38bdf8",
                fontSize: 12,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              AI Schedule Insight
            </p>

            <h3
              style={{
                color: "#f8fafc",
                fontSize: 24,
                marginBottom: 8,
              }}
            >
              You have 3 classes today
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: 1.6,
              }}
            >
              Operating Systems Lab starts
              in 45 minutes at Lab-3.
            </p>
          </div>

          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#38bdf8,#818cf8)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkles
              size={26}
              color="white"
            />
          </div>
        </div>

        {/* DAY BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 30,
          }}
        >
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() =>
                setActiveDay(day)
              }

              style={{
                padding: "10px 18px",

                borderRadius: 999,

                border:
                  activeDay === day
                    ? "1px solid rgba(56,189,248,0.28)"
                    : "1px solid rgba(255,255,255,0.08)",

                background:
                  activeDay === day
                    ? "rgba(56,189,248,0.12)"
                    : "transparent",

                color:
                  activeDay === day
                    ? "#38bdf8"
                    : "#cbd5e1",

                cursor: "pointer",
              }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* SLOTS */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {slots.map((slot, index) => (
            <div
              key={index}
              style={{
                background: "#111827",

                border:
                  "1px solid rgba(255,255,255,0.06)",

                borderRadius: 20,

                padding: "22px",

                display: "grid",

                gridTemplateColumns:
                  "180px 1fr auto",

                alignItems: "center",

                gap: 20,
              }}
            >
              {/* TIME */}

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,

                    color: "#38bdf8",

                    marginBottom: 8,
                  }}
                >
                  <Clock size={15} />

                  {slot.time}
                </div>

                <span
                  style={{
                    background:
                      slot.type === "Lab"
                        ? "rgba(244,114,182,0.12)"
                        : "rgba(129,140,248,0.12)",

                    color:
                      slot.type === "Lab"
                        ? "#f472b6"
                        : "#818cf8",

                    padding: "4px 8px",

                    borderRadius: 6,

                    fontSize: 11,
                  }}
                >
                  {slot.type}
                </span>
              </div>

              {/* SUBJECT */}

              <div>
                <h2
                  style={{
                    color: "#f8fafc",
                    fontSize: 22,
                    marginBottom: 8,
                  }}
                >
                  {slot.subject}
                </h2>

                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: 14,
                  }}
                >
                  {slot.faculty}
                </p>
              </div>

              {/* ROOM */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,

                  background:
                    "rgba(255,255,255,0.04)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  padding: "10px 14px",

                  borderRadius: 12,

                  color: "#cbd5e1",
                }}
              >
                <MapPin size={15} />
                {slot.room}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}