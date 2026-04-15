document.addEventListener("DOMContentLoaded", function () {
  var keywordTree = [
    {
      label: "Projects",
      children: [
        {
          label: "Ag Data Infrastructure",
          children: ["DV", "TI", "SI", "Smart Contracts", "Backend API", "Frontend", "NLQ", "DID Auth", "Local Agent"],
        },
        {
          label: "AI Aquaculture",
          children: ["YOLO", "SAM"],
        },
      ],
    },
    {
      label: "Publications",
      children: [
        { label: "Papers" },
        { label: "Patents" },
        { label: "Presentations" },
        { label: "Lectures" },
        { label: "Grants" },
      ],
    },
    {
      label: "Experience",
      children: [
        { label: "UF Research" },
        { label: "MAFRA" },
        { label: "Billion21" },
        { label: "Teaching" },
      ],
    },
    {
      label: "Education",
      children: [
        { label: "Ph.D." },
        { label: "B.S." },
        { label: "Skills" },
      ],
    },
  ];

  var entries = [
    { keywords: ["projects", "ag data infrastructure"], title: "DEMETER: Data Sharing and Verification Platform", desc: "Blockchain- and LLM-enabled platform for cross-system data exchange, origin verification, and traceable file history.", link: "#demeter", type: "project" },
    { keywords: ["projects", "ag data infrastructure", "dv"], title: "DV — Data Verification Module", desc: "SHA-256 fingerprint anchoring on-chain, provider identity binding via DID, Creative Commons license declaration.", link: "#dv", type: "project" },
    { keywords: ["projects", "ag data infrastructure", "ti"], title: "TI — Transformation Integrity Module", desc: "Tracks file lineage through processing stages. Recursive graph traversal, PASS/FAIL integrity check.", link: "#ti", type: "project" },
    { keywords: ["projects", "ag data infrastructure", "si"], title: "SI — Sharing Infrastructure Module", desc: "Access request workflow, on-chain transfer records, reuse evaluation with 7 CC license types.", link: "#si", type: "project" },
    { keywords: ["projects", "ag data infrastructure", "nlq"], title: "Natural Language Query Interface", desc: "15 intents, deterministic keyword routing + Phi-3 LLM fallback via Ollama. 100% routing accuracy.", link: "#demeter", type: "project" },
    { keywords: ["projects", "ag data infrastructure", "smart contracts"], title: "Smart Contracts (Go Chaincode)", desc: "3 Go contracts with 19 exported functions: Dataset, Transform, Reuse.", link: "#demeter", type: "project" },
    { keywords: ["projects", "ag data infrastructure", "backend api"], title: "Backend API (Node.js / Express)", desc: "37 REST endpoints across 8 route modules.", link: "#demeter", type: "project" },
    { keywords: ["projects", "ag data infrastructure", "frontend"], title: "Frontend (Next.js / React)", desc: "7 pages built with Next.js 15 App Router, TypeScript, React Flow.", link: "#demeter", type: "project" },
    { keywords: ["projects", "ag data infrastructure", "did auth"], title: "DID Authentication", desc: "ECDSA P-256 key pair, Web Crypto API, challenge-response login.", link: "#demeter", type: "project" },
    { keywords: ["projects", "ag data infrastructure", "local agent"], title: "Local File Agent", desc: "Auto-detects provenance type, registers files on-chain.", link: "#demeter", type: "project" },
    { keywords: ["projects", "ai aquaculture"], title: "AI Aquaculture System", desc: "Computer vision for marine fish production. YOLO feeding analysis, SAM size estimation.", link: "#aquaculture", type: "project" },
    { keywords: ["projects", "ai aquaculture", "yolo"], title: "YOLO — Fish Detection & Feeding Analysis", desc: "Population-level movement pattern analysis for olive and stone flounder.", link: "#aquaculture", type: "project" },
    { keywords: ["projects", "ai aquaculture", "sam"], title: "SAM — Fish Size Estimation", desc: "Segment Anything Model for individual-level size estimation and growth monitoring.", link: "#aquaculture", type: "project" },
    { keywords: ["publications", "papers"], title: "DEMETER: A Blockchain-Based Platform for Tracking the History of Shared Agricultural Data Files", desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.", link: "#papers", type: "publication" },
    { keywords: ["publications", "papers"], title: "Facilitating a Future Agricultural Data Ecosystem", desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.", link: "#papers", type: "publication" },
    { keywords: ["publications", "papers"], title: "Bridging carbon markets and agriculture", desc: "Cho, Y., et al. (2025). Discover Agriculture, 3, 126.", link: "#papers", type: "publication" },
    { keywords: ["publications", "patents"], title: "Seaweed Farming Data Management via Blockchain", desc: "Patent Application KR10-2024-0011399, 2024.", link: "#patents", type: "publication" },
    { keywords: ["publications", "patents"], title: "Methods for Selecting Spores from Laver Farm Devices", desc: "Patent KR102034354B1, 2019.", link: "#patents", type: "publication" },
    { keywords: ["publications", "presentations"], title: "Conference Presentations", desc: "7 presentations at ASABE, CIGR, KSAM, and AI in Agriculture conferences (2023–2025).", link: "#presentations", type: "publication" },
    { keywords: ["publications", "lectures"], title: "Invited Lectures & Seminars", desc: "10 invited talks at universities and government institutions in South Korea (2024–2025).", link: "#lectures", type: "publication" },
    { keywords: ["publications", "grants"], title: "Grants & Awards", desc: "8 grants and fellowships from UF, MAFRA, CIGR (2022–2025).", link: "#grants", type: "publication" },
    { keywords: ["experience", "uf research"], title: "Graduate Research Assistant — University of Florida", desc: "2022–2026. Data infrastructure, verification systems, backend services.", link: "#experience", type: "experience" },
    { keywords: ["experience", "mafra"], title: "Researcher — Ministry of Agriculture, Food and Rural Affairs", desc: "2024–2026. Crop mechanization and digital agriculture.", link: "#experience", type: "experience" },
    { keywords: ["experience", "billion21"], title: "Researcher — Billion21", desc: "2019–2022. AI and computer vision for marine production.", link: "#experience", type: "experience" },
    { keywords: ["experience", "teaching"], title: "Teaching & Mentoring", desc: "Mentor undergraduates. Support graduate-level courses.", link: "#experience", type: "experience" },
    { keywords: ["education", "ph.d."], title: "Ph.D. — University of Florida", desc: "Agricultural and Biological Engineering. GPA: 3.95/4.0. 2022–2026.", link: "#education", type: "education" },
    { keywords: ["education", "b.s."], title: "B.S. — Texas Tech University", desc: "Computer Science, Minor in Mathematics. GPA: 3.8/4.0. 2018–2022.", link: "#education", type: "education" },
    { keywords: ["education", "skills"], title: "Technical Skills", desc: "Python, Go, JavaScript, C++ · Node.js, Express · Hyperledger Fabric, Docker, AWS · YOLO, SAM, LLM.", link: "#skills", type: "education" },
  ];

  var typeLabels = { project: "Project", publication: "Publication", experience: "Experience", education: "Education" };

  var topEl = document.getElementById("chip-top");
  var subEl = document.getElementById("chip-sub");
  var leafEl = document.getElementById("chip-leaf");
  var resultsEl = document.getElementById("explore-results");
  var activeTop = null;
  var activeSub = null;

  function renderTop() {
    topEl.innerHTML = "";
    for (var i = 0; i < keywordTree.length; i++) {
      var btn = document.createElement("button");
      btn.className = "kw-chip";
      btn.textContent = keywordTree[i].label;
      btn.setAttribute("data-idx", String(i));
      btn.addEventListener("click", onTopClick);
      topEl.appendChild(btn);
    }
  }

  function onTopClick(e) {
    var idx = parseInt(e.target.getAttribute("data-idx"), 10);
    if (activeTop === idx) {
      activeTop = null; activeSub = null;
      subEl.innerHTML = ""; leafEl.innerHTML = ""; resultsEl.innerHTML = "";
      syncTop(); return;
    }
    activeTop = idx; activeSub = null;
    leafEl.innerHTML = ""; resultsEl.innerHTML = "";
    syncTop();
    var node = keywordTree[idx];
    subEl.innerHTML = "";
    if (!node.children) return;
    for (var j = 0; j < node.children.length; j++) {
      var child = node.children[j];
      var btn = document.createElement("button");
      btn.className = "kw-chip sub";
      btn.textContent = child.label;
      btn.setAttribute("data-top", String(idx));
      btn.setAttribute("data-sub", String(j));
      if (child.children && child.children.length > 0) {
        btn.addEventListener("click", onSubClick);
      } else {
        btn.setAttribute("data-keyword", child.label);
        btn.addEventListener("click", onLeafClick);
      }
      subEl.appendChild(btn);
    }
  }

  function onSubClick(e) {
    var topIdx = parseInt(e.target.getAttribute("data-top"), 10);
    var subIdx = parseInt(e.target.getAttribute("data-sub"), 10);
    if (activeSub === subIdx) {
      activeSub = null; leafEl.innerHTML = ""; resultsEl.innerHTML = "";
      syncSub(); return;
    }
    activeSub = subIdx; resultsEl.innerHTML = "";
    syncSub();
    var node = keywordTree[topIdx].children[subIdx];
    leafEl.innerHTML = "";
    if (node.children) {
      for (var k = 0; k < node.children.length; k++) {
        var label = typeof node.children[k] === "string" ? node.children[k] : node.children[k].label;
        var btn = document.createElement("button");
        btn.className = "kw-chip leaf";
        btn.textContent = label;
        btn.setAttribute("data-keyword", label);
        btn.addEventListener("click", onLeafClick);
        leafEl.appendChild(btn);
      }
    }
  }

  function onLeafClick(e) {
    showResults(e.target.getAttribute("data-keyword").toLowerCase());
  }

  function syncTop() {
    var chips = topEl.querySelectorAll(".kw-chip");
    for (var i = 0; i < chips.length; i++)
      chips[i].classList.toggle("active", parseInt(chips[i].getAttribute("data-idx"), 10) === activeTop);
  }

  function syncSub() {
    var chips = subEl.querySelectorAll(".kw-chip");
    for (var i = 0; i < chips.length; i++) {
      var s = chips[i].getAttribute("data-sub");
      chips[i].classList.toggle("active", s !== null && parseInt(s, 10) === activeSub);
    }
  }

  function showResults(query) {
    var q = query.trim();
    if (!q) { resultsEl.innerHTML = ""; return; }
    var matched = [];
    for (var i = 0; i < entries.length; i++) {
      for (var k = 0; k < entries[i].keywords.length; k++) {
        if (entries[i].keywords[k] === q) { matched.push(entries[i]); break; }
      }
    }
    if (matched.length === 0) { resultsEl.innerHTML = ""; return; }
    var html = "";
    for (var m = 0; m < matched.length; m++) {
      var e = matched[m];
      html += '<a href="' + e.link + '" class="explore-result">' +
        '<span class="explore-result-type">' + (typeLabels[e.type] || e.type) + '</span>' +
        '<span class="explore-result-title">' + e.title + '</span>' +
        '<span class="explore-result-desc">' + e.desc + '</span></a>';
    }
    resultsEl.innerHTML = html;
  }

  renderTop();
});
