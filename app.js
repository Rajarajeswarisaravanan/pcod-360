function show(id) {
  document.querySelectorAll("body > div").forEach(d => d.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* SIGNUP */
function signup() {
  const user = {
    name: name.value,
    username: username.value,
    mobile: mobile.value,
    password: password.value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registered successfully 🌸");
  show("login");
}

/* LOGIN */
function login() {
  const stored = JSON.parse(localStorage.getItem("user"));
  if (!stored) return alert("Please sign up first");

  if (loginUser.value === stored.username && loginPass.value === stored.password) {
    localStorage.setItem("logged", "true");
    dashUser.innerText = stored.username;
    show("dashboard");
  } else {
    alert("Invalid credentials");
  }
}

/* LOGOUT */
function logout() {
  localStorage.removeItem("logged");
  show("login");
}

/* DATA COLLECTION */
function saveCycle() {
  localStorage.setItem("cycle", JSON.stringify({
    last: lastPeriod.value,
    length: cycleLength.value
  }));
  alert("Cycle data saved 🩸");
}

function saveSymptoms() {
  const s = [];
  document.querySelectorAll("#symptoms input:checked").forEach(c => s.push(c.value));
  localStorage.setItem("symptoms", JSON.stringify(s));
  alert("Symptoms saved 🤍");
}
function loadHistory() {
  const cycle = JSON.parse(localStorage.getItem("cycle"));
  const symptoms = JSON.parse(localStorage.getItem("symptoms"));
  const lifestyle = JSON.parse(localStorage.getItem("lifestyle"));

  let html = "";

  if (cycle) {
    html += `
      <h4>🩸 Cycle</h4>
      Last Period: ${cycle.last || "N/A"}<br>
      Cycle Length: ${cycle.length || "N/A"} days<br><br>
    `;
  }

  if (symptoms && symptoms.length) {
    html += `
      <h4>🤕 Symptoms</h4>
      ${symptoms.join(", ")}<br><br>
    `;
  }

  if (lifestyle) {
    html += `
      <h4>🌿 Lifestyle</h4>
      Activity: ${lifestyle.activity}<br>
      Stress: ${lifestyle.stress}<br>
    `;
  }

  if (!html) {
    html = "No data recorded yet 🌸";
  }

  document.getElementById("historyContent").innerHTML = html;
}


function saveLifestyle() {
  localStorage.setItem("lifestyle", JSON.stringify({
    activity: activity.value,
    stress: stress.value
  }));
  alert("Lifestyle saved 🌿");
}