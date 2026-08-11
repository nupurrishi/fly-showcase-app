import { useState } from "react";

function Lookbook() {

  const [selectedLook, setSelectedLook] = useState(null);

  const looks = [
    {
      number: "01",
      designer: "Designer One",
      model: "Model One",
      description: "Structured evening silhouette",
    },
    {
      number: "02",
      designer: "Designer One",
      model: "Model Two",
      description: "Modern editorial look",
    },
    {
      number: "03",
      designer: "Designer Two",
      model: "Model One",
      description: "Statement runway ensemble",
    },
    {
      number: "04",
      designer: "Designer Two",
      model: "Model Three",
      description: "Contemporary couture look",
    },
  ];

  return (
    <main className="lookbook-page">

      <header className="page-header">

        <div>

          <span className="eyebrow dark">
            FLY SHOWCASE
          </span>

          <h1>
            The<br />
            <em>Lookbook.</em>
          </h1>

        </div>

        <button className="header-icon">
          +
        </button>

      </header>


      <section className="lookbook-intro">

        <span className="eyebrow dark">
          FIRST LOVE YOURSELF
        </span>

        <p>
          Explore the looks created for
          this season's runway.
        </p>

      </section>


      <div className="look-filter">

        <button className="filter-active">
          ALL
        </button>

        <button>
          MY LOOKS
        </button>

        <button>
          DESIGNERS
        </button>

      </div>


      <section className="lookbook-grid">

        {looks.map((look) => (

          <button
            className="lookbook-item"
            key={look.number}
            onClick={() => setSelectedLook(look)}
          >

            <div className="look-image">

              <span>
                LOOK
              </span>

              <strong>
                {look.number}
              </strong>

            </div>


            <div className="lookbook-info">

              <div>

                <span>
                  {look.designer}
                </span>

                <h3>
                  Look #{look.number}
                </h3>

              </div>

              <span>
                →
              </span>

            </div>

          </button>

        ))}

      </section>


      {selectedLook && (

        <div className="modal-overlay">

          <div className="look-modal">

            <button
              className="modal-close"
              onClick={() => setSelectedLook(null)}
            >
              ×
            </button>

            <div className="modal-look-image">

              LOOK {selectedLook.number}

            </div>

            <span className="eyebrow dark">
              {selectedLook.designer}
            </span>

            <h2>
              Look #{selectedLook.number}
            </h2>

            <p>
              {selectedLook.description}
            </p>

            <div className="look-assignment">

              <span>
                ASSIGNED MODEL
              </span>

              <strong>
                {selectedLook.model}
              </strong>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Lookbook;