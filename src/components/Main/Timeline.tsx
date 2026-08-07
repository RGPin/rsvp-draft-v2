export const Timeline = () => {
  return (
    <section class="timeline" id="timeline">
      <div class="timeline-container">
        <h2 class="timeline-header">Wedding Timeline</h2>
        <p class="timeline-subheader">Program Timetable</p>
        <hr class="timeline-divider" />
        <ol class="timeline-list">
          <li class="timeline-article">
            <div class="article-icon" aria-hidden="true">
              <span>:(</span>
            </div>
            <div class="timeline-item">
              <time class="timeline-time" datetime="12:00">
                12:00 PM
              </time>
              <h3 class="timeline-event">Starting Event</h3>
              <p class="timeline-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda repellendus laborum veritatis dignissimos dolores
                unde!
              </p>
            </div>
          </li>
          <li class="timeline-article">
            <div class="article-icon" aria-hidden="true">
              <span>:|</span>
            </div>
            <div class="timeline-item">
              <time class="timeline-time" datetime="15:00">
                3:00 PM
              </time>
              <h3 class="timeline-event">Middle Event</h3>
              <p class="timeline-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                corporis amet nulla id expedita inventore fugit numquam dicta
                eius unde.
              </p>
            </div>
          </li>
          <li class="timeline-article">
            <div class="article-icon" aria-hidden="true">
              <span>:)</span>
            </div>
            <div class="timeline-item">
              <time class="timeline-time" datetime="17:00">
                5:00 PM
              </time>
              <h3 class="timeline-event">Ending Event</h3>
              <p class="timeline-details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quasi explicabo dolore numquam?
              </p>
            </div>
          </li>
          <li class="timeline-article">
            <div class="article-icon" aria-hidden="true">
              <span>:D</span>
            </div>
            <div class="timeline-item">
              <time class="timeline-time" datetime="21:00">
                9:00 PM
              </time>
              <h3 class="timeline-event">Main Event</h3>
              <p class="timeline-details">Inuman time</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};
