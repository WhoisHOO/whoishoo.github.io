document.addEventListener("DOMContentLoaded", function () {
  // ── Hierarchical keywords ─────────────────────────────────────
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

  // ── Searchable entries ────────────────────────────────────────
  var entries = [
    {
      keywords: ["projects", "ag data infrastructure"],
      title: "DEMETER: Data Sharing and Verification Platform",
      desc: "Blockchain- and LLM-enabled platform for cross-system data exchange, origin verification, and traceable file history. Hyperledger Fabric, Go, Node.js, Next.js.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["projects", "ag data infrastructure", "dv"],
      title: "DV — Data Verification Module",
      desc: "SHA-256 fingerprint anchoring on-chain, provider identity binding via DID, Creative Commons license declaration, visibility control.",
      link: "/projects/#dv----data-verification",
      type: "project",
    },
    {
      keywords: ["projects", "ag data infrastructure", "ti"],
      title: "TI — Transformation Integrity Module",
      desc: "Tracks file lineage through processing stages. Recursive graph traversal, PASS/FAIL integrity check.",
      link: "/projects/#ti----transformation-integrity",
      type: "project",
    },
    {
      keywords: ["projects", "ag data infrastructure", "si"],
      title: "SI — Sharing Infrastructure Module",
      desc: "Access request workflow, on-chain transfer records, reuse evaluation with 7 CC license types, expiration enforcement.",
      link: "/projects/#si----sharing-infrastructure",
      type: "project",
    },
    {
      keywords: ["projects", "ag data infrastructure", "nlq"],
      title: "Natural Language Query Interface",
      desc: "15 intents, deterministic keyword routing + Phi-3 LLM fallback via Ollama. 74-case eval suite, 100% routing accuracy.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["projects", "ag data infrastructure", "smart contracts"],
      title: "Smart Contracts (Go Chaincode)",
      desc: "3 Go contracts with 19 exported functions: Dataset, Transform, Reuse. Immutable records on Hyperledger Fabric.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["projects", "ag data infrastructure", "backend api"],
      title: "Backend API (Node.js / Express)",
      desc: "37 REST endpoints across 8 route modules: dv, ti, si, reuse, search, nlq, identity, share.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["projects", "ag data infrastructure", "frontend"],
      title: "Frontend (Next.js / React)",
      desc: "7 pages built with Next.js 15 App Router, TypeScript, React Flow for provenance graph visualization.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["projects", "ag data infrastructure", "did auth"],
      title: "DID Authentication",
      desc: "ECDSA P-256 key pair generation in browser via Web Crypto API. Challenge-response login, no central authority.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["projects", "ag data infrastructure", "local agent"],
      title: "Local File Agent",
      desc: "Watches a folder, auto-detects provenance type (origin/transformation/integration), registers files on-chain.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["projects", "ai aquaculture"],
      title: "AI-Based Computer Vision for Marine Production Systems",
      desc: "YOLO for feeding behavior analysis, SAM for size estimation. Applied to olive flounder and stone flounder.",
      link: "/projects/#marine-cv",
      type: "project",
    },
    {
      keywords: ["projects", "ai aquaculture", "yolo"],
      title: "YOLO — Fish Detection & Feeding Analysis",
      desc: "Population-level movement pattern analysis, group feeding behavior detection for olive and stone flounder.",
      link: "/projects/#marine-cv",
      type: "project",
    },
    {
      keywords: ["projects", "ai aquaculture", "sam"],
      title: "SAM — Fish Size Estimation",
      desc: "Segment Anything Model for individual-level fish size estimation and growth monitoring.",
      link: "/projects/#marine-cv",
      type: "project",
    },
    {
      keywords: ["publications", "papers"],
      title: "DEMETER: A Blockchain-Based Platform for Tracking the History of Shared Agricultural Data Files",
      desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["publications", "papers"],
      title: "Facilitating a Future Agricultural Data Ecosystem: A Cross-Sectoral Review",
      desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["publications", "papers"],
      title: "Bridging carbon markets and agriculture",
      desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. (2025). Discover Agriculture, 3, 126.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["publications", "papers"],
      title: "Potato Farming in the United States and South Korea",
      desc: "Kim, J.H., Lee, C.Y., Cho, Y., et al. (2024). Journal of Biosystems Engineering, 49(3), 252–269.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["publications", "papers"],
      title: "Sweet Potato Farming in the USA and South Korea",
      desc: "Kim, J.H., Cho, Y., et al. (2025). Journal of Biosystems Engineering, 50(2), 210–224.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["publications", "papers"],
      title: "Mechanization Status and Cultivation Pattern of Chinese Cabbage",
      desc: "Kim, J.H., Cho, Y., Hwang, I.S., et al. (2025). Journal of Biosystems Engineering.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["publications", "patents"],
      title: "Patent: Seaweed Farming Data Management via Blockchain",
      desc: "Patent Application KR10-2024-0011399, 2024.",
      link: "/publications/#patents",
      type: "publication",
    },
    {
      keywords: ["publications", "patents"],
      title: "Patent: Methods for Selecting Spores from Laver Farm Devices",
      desc: "Patent KR102034354B1, 2019.",
      link: "/publications/#patents",
      type: "publication",
    },
    {
      keywords: ["experience", "uf research"],
      title: "Graduate Research Assistant — University of Florida",
      desc: "2022–2026. Data infrastructure, verification systems, backend services, smart contracts.",
      link: "/experience/#work",
      type: "experience",
    },
    {
      keywords: ["experience", "mafra"],
      title: "Researcher — Ministry of Agriculture, Food and Rural Affairs",
      desc: "2024–2026. Comparative studies on crop mechanization and digital agriculture.",
      link: "/experience/#work",
      type: "experience",
    },
    {
      keywords: ["experience", "billion21"],
      title: "Researcher — Billion21",
      desc: "2019–2022. AI and computer vision for marine production and smart aquaculture.",
      link: "/experience/#work",
      type: "experience",
    },
    {
      keywords: ["experience", "teaching"],
      title: "Teaching & Mentoring",
      desc: "Mentor undergraduate students in data-driven agriculture. Support graduate-level courses.",
      link: "/experience/#teaching",
      type: "experience",
    },
    {
      keywords: ["education", "ph.d."],
      title: "Ph.D. — University of Florida",
      desc: "Agricultural and Biological Engineering. GPA: 3.95/4.0. 2022–2026.",
      link: "/education/#degrees",
      type: "education",
    },
    {
      keywords: ["education", "b.s."],
      title: "B.S. — Texas Tech University",
      desc: "Computer Science, Minor in Mathematics. GPA: 3.8/4.0. 2018–2022.",
      link: "/education/#degrees",
      type: "education",
    },
    {
      keywords: ["education", "skills"],
      title: "Technical Skills",
      desc: "Python, Go, JavaScript, C++, Java, R · Node.js, Express, REST APIs · Hyperledger Fabric, Docker, AWS, Azure · LLM, YOLO, SAM, OpenCV.",
      link: "/education/#skills",
      type: "education",
    },
  ];

  var typeLabels = {
    project: "Project",
    publication: "Publication",
    experience: "Experience",
    education: "Education",
  };

  // ── DOM refs ──────────────────────────────────────────────────
  var topEl = document.getElementById("chip-top");
  var subEl = document.getElementById("chip-sub");
  var leafEl = document.getElementById("chip-leaf");
  var resultsEl = document.getElementById("explore-results");
  var activeTop = null;
  var activeSub = null;

  // ── Render top-level chips ────────────────────────────────────
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
      activeTop = null;
      activeSub = null;
      subEl.innerHTML = "";
      leafEl.innerHTML = "";
      resultsEl.innerHTML = "";
      syncTop();
      return;
    }

    activeTop = idx;
    activeSub = null;
    leafEl.innerHTML = "";
    resultsEl.innerHTML = "";
    syncTop();

    var node = keywordTree[idx];
    subEl.innerHTML = "";

    if (!node.children || node.children.length === 0) return;

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
      activeSub = null;
      leafEl.innerHTML = "";
      resultsEl.innerHTML = "";
      syncSub();
      return;
    }

    activeSub = subIdx;
    resultsEl.innerHTML = "";
    syncSub();

    var node = keywordTree[topIdx].children[subIdx];
    leafEl.innerHTML = "";

    if (node.children && node.children.length > 0) {
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
    var keyword = e.target.getAttribute("data-keyword");
    showResults(keyword.toLowerCase());
  }

  function syncTop() {
    var chips = topEl.querySelectorAll(".kw-chip");
    for (var i = 0; i < chips.length; i++) {
      chips[i].classList.toggle("active", parseInt(chips[i].getAttribute("data-idx"), 10) === activeTop);
    }
  }

  function syncSub() {
    var chips = subEl.querySelectorAll(".kw-chip");
    for (var i = 0; i < chips.length; i++) {
      var s = chips[i].getAttribute("data-sub");
      chips[i].classList.toggle("active", s !== null && parseInt(s, 10) === activeSub);
    }
  }

  // ── Search & display ──────────────────────────────────────────
  function showResults(query) {
    var q = query.trim();
    if (!q) { resultsEl.innerHTML = ""; return; }

    var scored = [];
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var match = false;
      for (var k = 0; k < entry.keywords.length; k++) {
        if (entry.keywords[k] === q) { match = true; break; }
      }
      if (match) scored.push(entry);
    }

    if (scored.length === 0) {
      resultsEl.innerHTML = '<div class="explore-empty">No results found.</div>';
      return;
    }

    var html = "";
    for (var m = 0; m < scored.length; m++) {
      var e = scored[m];
      var label = typeLabels[e.type] || e.type;
      html +=
        '<a href="' + e.link + '" class="explore-result">' +
        '<span class="explore-result-type">' + label + "</span>" +
        '<span class="explore-result-title">' + e.title + "</span>" +
        '<span class="explore-result-desc">' + e.desc + "</span>" +
        "</a>";
    }
    resultsEl.innerHTML = html;
  }

  // ── Init ──────────────────────────────────────────────────────
  renderTop();
});
