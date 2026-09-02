/* =========================================================
   ALERTEYE — JAVASCRIPT
========================================================= */


/* =========================================================
   HUD CLOCK
========================================================= */

const hudClock = document.getElementById("hud-clock");

function updateClock() {
  if (!hudClock) return;

  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  hudClock.textContent =
    `${hours}:${minutes}:${seconds}`;
}

updateClock();

setInterval(updateClock, 1000);


/* =========================================================
   HUD EVENT LOG
========================================================= */

const hudLog = document.getElementById("hud-log-line");

const events = [
  "Person entered Zone A",
  "Object detected · Zone B",
  "Movement pattern analyzed",
  "Person tracking initialized",
  "Abnormal activity scan complete",
  "Security perimeter monitored",
  "AI confidence level: 96%",
  "Threat assessment running"
];

let eventIndex = 0;

function updateEventLog() {
  if (!hudLog) return;

  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  hudLog.textContent =
    `${hours}:${minutes}:${seconds} · ${events[eventIndex]}`;

  eventIndex++;

  if (eventIndex >= events.length) {
    eventIndex = 0;
  }
}

setInterval(updateEventLog, 2600);


/* =========================================================
   AI STATUS
========================================================= */

const aiBadge = document.getElementById("ai-badge");
const hud = document.querySelector(".hud");

const aiStates = [
  {
    text: "ALERTEYE AI · ANALYZING",
    alert: false
  },
  {
    text: "ALERTEYE AI · SCANNING",
    alert: false
  },
  {
    text: "ALERTEYE AI · THREAT CHECK",
    alert: true
  },
  {
    text: "ALERTEYE AI · VERIFIED",
    alert: false
  },
  {
    text: "ALERTEYE AI · MONITORING",
    alert: false
  }
];

let aiIndex = 0;

function updateAIStatus() {
  if (!aiBadge) return;

  const state = aiStates[aiIndex];

  aiBadge.textContent = state.text;

  aiBadge.classList.toggle(
    "alert",
    state.alert
  );

  if (hud) {
    hud.classList.toggle(
      "alert-state",
      state.alert
    );
  }

  aiIndex++;

  if (aiIndex >= aiStates.length) {
    aiIndex = 0;
  }
}

setInterval(updateAIStatus, 4000);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("in");

        observer.unobserve(entry.target);

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );


revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

      const targetId =
        this.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


/* =========================================================
   INITIAL STATE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  updateClock();
  updateEventLog();
  updateAIStatus();

});