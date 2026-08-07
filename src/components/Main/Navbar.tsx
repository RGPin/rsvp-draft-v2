export const Navbar = () => {
  return (
    <div class="nav-container">
      <div class="nav-actions">
        <button id="toggle-music-btn">Mute</button>
        <button>Dark</button>
      </div>
      <nav class="nav-bar">
        <button class="nav-toggle" aria-label="Toggle navigation">
          ☰
        </button>
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a href="#countdown">Countdown</a>
          </li>
          <li class="nav-item">
            <a href="#timeline">Timeline</a>
          </li>
          <li class="nav-item">
            <a href="#event-details">Event Details</a>
          </li>
          <li class="nav-item">
            <a href="#sponsors">Sponsors</a>
          </li>
          <li class="nav-item">
            <a href="#entourage">Entourage</a>
          </li>
          <li class="nav-item">
            <a href="#gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a href="#love-messages">Love Messages</a>
          </li>
          <li class="nav-item">
            <a href="#rsvp">RSVP</a>
          </li>
          <li class="nav-item">
            <a href="#attire-motif">Attire & Motif</a>
          </li>
          <li class="nav-item">
            <a href="#gift-guide">Gift Guide</a>
          </li>
          <li class="nav-item">
            <a href="#extra-info">Extra Info</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
