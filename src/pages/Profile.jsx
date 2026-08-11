function Profile() {

  return (
    <main className="profile-page">

      <header className="page-header">

        <div>

          <span className="eyebrow dark">
            YOUR ACCOUNT
          </span>

          <h1>
            Your<br />
            <em>Profile.</em>
          </h1>

        </div>

      </header>


      <section className="profile-card">

        <div className="profile-avatar">
          M
        </div>

        <div>

          <span className="eyebrow dark">
            MODEL
          </span>

          <h2>
            Model Name
          </h2>

          <p>
            model@example.com
          </p>

        </div>

      </section>


      <section className="profile-section">

        <span className="eyebrow dark">
          EVENT
        </span>

        <div className="profile-row">
          <span>Current Event</span>
          <strong>Fly Showcase</strong>
        </div>

        <div className="profile-row">
          <span>Participation</span>
          <strong>Model</strong>
        </div>

      </section>


      <section className="profile-section">

        <span className="eyebrow dark">
          SETTINGS
        </span>

        <button className="profile-action">
          Notification Settings
          <span>→</span>
        </button>

        <button className="profile-action">
          Privacy
          <span>→</span>
        </button>

        <button className="profile-action">
          Sign Out
          <span>→</span>
        </button>

      </section>

    </main>
  );
}

export default Profile;