import { useNavigate } from "react-router-dom";

function EventSelect() {
  const navigate = useNavigate();

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#FFFFFF",
        color: "#161616",
        fontFamily: '"PT Sans", Arial, sans-serif',
        padding: "0 20px 45px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
        }}
      >

        {/* =========================================
            TOP BRAND BAR
        ========================================= */}

        <div
          style={{
            height: "7px",
            width: "100%",
            background: "#81247C",
            marginBottom: "32px",
          }}
        />

        {/* =========================================
            HEADER
        ========================================= */}

        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "55px",
          }}
        >
          <div>

            <div
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "34px",
                lineHeight: "0.8",
                fontWeight: "600",
                color: "#81247C",
              }}
            >
              FLY
            </div>

            <div
              style={{
                marginTop: "8px",
                fontFamily: '"PT Sans", Arial, sans-serif',
                fontSize: "9px",
                letterSpacing: "3px",
                fontWeight: "700",
                color: "#161616",
              }}
            >
              SHOWCASE
            </div>

          </div>

          {/* GOLD MARK */}

          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "#DEB64B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#161616",
              fontSize: "20px",
            }}
          >
            ✦
          </div>

        </header>


        {/* =========================================
            HERO
        ========================================= */}

        <section
          style={{
            marginBottom: "42px",
          }}
        >

          <div
            style={{
              display: "inline-block",
              background: "#81247C",
              color: "#FFFFFF",
              padding: "7px 11px",
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "18px",
            }}
          >
            FASHION EVENT PLATFORM
          </div>


          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(48px, 14vw, 68px)",
              lineHeight: "0.86",
              fontWeight: "500",
              margin: 0,
              color: "#161616",
            }}
          >
            Where fashion
            <br />
            <em
              style={{
                color: "#81247C",
              }}
            >
              comes alive.
            </em>
          </h1>


          <p
            style={{
              marginTop: "24px",
              maxWidth: "420px",
              color: "#777777",
              fontSize: "13px",
              lineHeight: "1.7",
            }}
          >
            Your backstage home for fashion shows,
            schedules, lookbooks, runway calls and
            everything happening behind the scenes.
          </p>

        </section>


        {/* =========================================
            UPCOMING EVENTS
        ========================================= */}

        <section>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >

            <span
              style={{
                fontSize: "9px",
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#161616",
              }}
            >
              UPCOMING EVENTS
            </span>

            <span
              style={{
                fontSize: "9px",
                color: "#81247C",
                fontWeight: "700",
              }}
            >
              01 EVENT
            </span>

          </div>


          {/* =========================================
              FLY SHOWCASE CARD
          ========================================= */}

          <button
            onClick={() => navigate("/login")}
            style={{
              width: "100%",
              border: "none",
              background: "#161616",
              color: "#FFFFFF",
              padding: "28px",
              textAlign: "left",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >

            {/* PURPLE SIDE BAR */}

            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "7px",
                height: "100%",
                background: "#81247C",
              }}
            />


            <div
              style={{
                paddingLeft: "8px",
              }}
            >

              {/* EVENT LABEL */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "32px",
                }}
              >

                <span
                  style={{
                    background: "#81247C",
                    color: "#FFFFFF",
                    padding: "6px 9px",
                    fontSize: "7px",
                    letterSpacing: "1.5px",
                    fontWeight: "700",
                  }}
                >
                  FEATURED EVENT
                </span>

                <span
                  style={{
                    fontSize: "8px",
                    color: "#AAAAAA",
                    letterSpacing: "1px",
                  }}
                >
                  2026
                </span>

              </div>


              {/* TITLE */}

              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "46px",
                  fontWeight: "500",
                  lineHeight: "0.82",
                  margin: 0,
                }}
              >
                Fly
                <br />
                Showcase
              </h2>


              {/* GOLD LINE */}

              <div
                style={{
                  width: "55px",
                  height: "2px",
                  background: "#DEB64B",
                  margin: "22px 0",
                }}
              />


              {/* TAGLINE */}

              <p
                style={{
                  margin: 0,
                  color: "#FFFFFF",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontWeight: "700",
                }}
              >
                FIRST LOVE YOURSELF
              </p>


              {/* BOTTOM */}

              <div
                style={{
                  marginTop: "35px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >

                <span
                  style={{
                    color: "#AAAAAA",
                    fontSize: "8px",
                    letterSpacing: "1.5px",
                  }}
                >
                  ENTER EVENT
                </span>

                <span
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#DEB64B",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#161616",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  →
                </span>

              </div>

            </div>

          </button>

        </section>


        {/* =========================================
            FUTURE FASHION WEEKS
        ========================================= */}

        <section
          style={{
            marginTop: "42px",
          }}
        >

          <div
            style={{
              fontSize: "9px",
              letterSpacing: "2px",
              fontWeight: "700",
              color: "#81247C",
              marginBottom: "14px",
            }}
          >
            THE FUTURE OF FASHION
          </div>


          <div
            style={{
              background: "#81247C",
              color: "#FFFFFF",
              padding: "26px",
              position: "relative",
              overflow: "hidden",
            }}
          >

            {/* GOLD DECORATION */}

            <div
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                border: "1px solid #DEB64B",
                borderRadius: "50%",
                right: "-35px",
                top: "-35px",
              }}
            />

            <div
              style={{
                position: "relative",
              }}
            >

              <div
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "31px",
                  lineHeight: "0.95",
                }}
              >
                More fashion weeks
                <br />
                <em>coming soon.</em>
              </div>


              <p
                style={{
                  margin: "18px 0",
                  color: "#FFFFFF",
                  opacity: 0.85,
                  fontSize: "11px",
                  lineHeight: "1.6",
                }}
              >
                Milan. Los Angeles. New York. Paris.
                <br />
                Discover future opportunities through FLY.
              </p>


              <button
                onClick={() => navigate("/login")}
                style={{
                  border: "1px solid #DEB64B",
                  background: "#DEB64B",
                  color: "#161616",
                  padding: "12px 16px",
                  fontSize: "8px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                }}
              >
                EXPLORE OPPORTUNITIES →
              </button>

            </div>

          </div>

        </section>


        {/* =========================================
            FOOTER
        ========================================= */}

        <footer
          style={{
            textAlign: "center",
            marginTop: "55px",
            color: "#777777",
            fontSize: "8px",
            letterSpacing: "2px",
          }}
        >

          <span
            style={{
              color: "#81247C",
              fontWeight: "700",
            }}
          >
            FLY
          </span>

          {" "}• FIRST LOVE YOURSELF

        </footer>

      </div>
    </main>
  );
}

export default EventSelect;