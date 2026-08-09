const rsvpResultContainer = document.querySelector("#rsvp-result");
const rsvpForm = document.querySelector("#rsvp-form");

rsvpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(rsvpForm);

  try {
    const response = await fetch(`/rsvp`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const htmlData = await response.text();
    rsvpResultContainer.innerHTML = htmlData;
  } catch (error) {
    console.error(error);
  }
});
