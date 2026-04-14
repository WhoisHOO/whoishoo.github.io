document.addEventListener("DOMContentLoaded", function () {
  // ── Hierarchical keyword map ──────────────────────────────────
  var keywordTree = [
    {
      label: "Projects",
      children: ["DEMETER", "Computer Vision", "NLQ", "Smart Contracts", "Backend API", "Frontend", "DID Auth", "Local Agent"],
    },
    {
      label: "DEMETER",
      children: ["DV", "TI", "SI", "Blockchain", "Hyperledger Fabric"],
    },
    {
      label: "Tech Stack",
      children: ["Go", "Node.js", "Python", "React", "LLM", "Docker", "AWS"],
    },
    {
      label: "Publications",
      children: ["Papers", "Patents"],
    },
    {
      label: "Experience",
      children: ["UF Research", "MAFRA", "Billion21", "Teaching"],
    },
    {
      label: "Education",
      children: ["Ph.D.", "B.S.", "Skills"],
    },
  ];

  // ── Searchable entries ────────────────────────────────────────
  var entries = [
    {
      keywords: ["demeter", "blockchain", "data sharing", "verification", "platform", "hyperledger", "fabric", "projects"],
      title: "DEMETER: Data Sharing and Verification Platform",
      desc: "Blockchain- and LLM-enabled platform for cross-system data exchange, origin verification, and traceable file history. Hyperledger Fabric, Go, Node.js, Next.js.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["dv", "data verification", "fingerprint", "sha-256", "registration", "did", "license", "demeter", "projects"],
      title: "DV — Data Verification Module",
      desc: "SHA-256 fingerprint anchoring on-chain, provider identity binding via DID, Creative Commons license declaration, visibility control.",
      link: "/projects/#dv----data-verification",
      type: "project",
    },
    {
      keywords: ["ti", "transformation", "integrity", "lineage", "trace", "graph", "provenance", "demeter", "projects"],
      title: "TI — Transformation Integrity Module",
      desc: "Tracks file lineage through processing stages. Transformation/integration declaration, recursive graph traversal, PASS/FAIL integrity check.",
      link: "/projects/#ti----transformation-integrity",
      type: "project",
    },
    {
      keywords: ["si", "sharing", "infrastructure", "access", "reuse", "license", "transfer", "demeter", "projects"],
      title: "SI — Sharing Infrastructure Module",
      desc: "Access request workflow, on-chain transfer records, reuse evaluation with 7 CC license types, expiration enforcement.",
      link: "/projects/#si----sharing-infrastructure",
      type: "project",
    },
    {
      keywords: ["computer vision", "yolo", "sam", "marine", "aquaculture", "fish", "flounder", "feeding", "projects"],
      title: "AI-Based Computer Vision for Marine Production",
      desc: "YOLO for population-level feeding behavior analysis, SAM for individual fish size estimation. Applied to olive flounder and stone flounder production.",
      link: "/projects/#marine-cv",
      type: "project",
    },
    {
      keywords: ["nlq", "llm", "phi-3", "natural language", "query", "ollama", "chat", "demeter", "projects"],
      title: "Natural Language Query Interface",
      desc: "15 intents, deterministic keyword routing + Phi-3 LLM fallback via Ollama. 74-case eval suite with 100% routing accuracy. Write confirmation gate.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["go", "chaincode", "smart contracts", "fabric", "on-chain", "demeter", "projects", "tech stack"],
      title: "Smart Contracts (Go Chaincode)",
      desc: "3 Go contracts with 19 exported functions: Dataset, Transform, Reuse. Immutable records on Hyperledger Fabric with 4 organizations.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["node.js", "node", "express", "api", "backend api", "rest", "demeter", "projects", "tech stack"],
      title: "Backend API (Node.js / Express)",
      desc: "37 REST endpoints across 8 route modules: dv, ti, si, reuse, search, nlq, identity, share.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["next", "react", "frontend", "typescript", "web", "demeter", "projects", "tech stack"],
      title: "Frontend (Next.js / React)",
      desc: "7 pages built with Next.js 15 App Router, TypeScript, React Flow for provenance graph visualization.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["did", "did auth", "authentication", "ecdsa", "p-256", "identity", "crypto", "demeter", "projects"],
      title: "DID Authentication",
      desc: "ECDSA P-256 key pair generation in browser via Web Crypto API. Challenge-response login, no passwords, no central authority.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["local agent", "watcher", "auto", "folder", "demeter", "projects"],
      title: "Local File Agent",
      desc: "Watches a folder, auto-detects provenance type (origin/transformation/integration), registers files on-chain without user interaction.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["demeter", "blockchain", "papers", "publications", "tracking", "agricultural data"],
      title: "DEMETER: A Blockchain-Based Platform for Tracking the History of Shared Agricultural Data Files",
      desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["blockchain", "review", "data ecosystem", "cross-sectoral", "publications", "papers"],
      title: "Facilitating a Future Agricultural Data Ecosystem: A Cross-Sectoral Review",
      desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["carbon", "market", "agriculture", "stakeholder", "korea", "publications", "papers"],
      title: "Bridging carbon markets and agriculture",
      desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. (2025). Discover Agriculture, 3, 126.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["potato", "farming", "mechanization", "machinery", "korea", "publications", "papers"],
      title: "Potato Farming in the United States and South Korea",
      desc: "Kim, J.H., Lee, C.Y., Cho, Y., et al. (2024). Journal of Biosystems Engineering, 49(3), 252–269.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["sweet potato", "farming", "mechanization", "cultivation", "publications", "papers"],
      title: "Sweet Potato Farming in the USA and South Korea",
      desc: "Kim, J.H., Cho, Y., et al. (2025). Journal of Biosystems Engineering, 50(2), 210–224.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["cabbage", "chinese cabbage", "mechanization", "cultivation", "publications", "papers"],
      title: "Mechanization Status and Cultivation Pattern of Chinese Cabbage",
      desc: "Kim, J.H., Cho, Y., Hwang, I.S., et al. (2025). Journal of Biosystems Engineering.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["patents", "seaweed", "blockchain", "supply chain", "publications"],
      title: "Patent: Seaweed Farming Data Management via Blockchain",
      desc: "Patent Application KR10-2024-0011399, 2024.",
      link: "/publications/#patents",
      type: "publication",
    },
    {
      keywords: ["patents", "laver", "spore", "aquaculture", "publications"],
      title: "Patent: Methods for Selecting Spores from Laver Farm Devices",
      desc: "Patent KR102034354B1, 2019.",
      link: "/publications/#patents",
      type: "publication",
    },
    {
      keywords: ["experience", "uf research", "university of florida", "gra", "research assistant"],
      title: "Graduate Research Assistant — University of Florida",
      desc: "2022–2026. Data infrastructure, verification systems, backend services, smart contracts.",
      link: "/experience/#work",
      type: "experience",
    },
    {
      keywords: ["experience", "mafra", "ministry", "agriculture", "korea", "policy"],
      title: "Researcher — Ministry of Agriculture, Food and Rural Affairs",
      desc: "2024–2026. Comparative studies on crop mechanization and digital agriculture.",
      link: "/experience/#work",
      type: "experience",
    },
    {
      keywords: ["experience", "billion21", "aquaculture", "computer vision"],
      title: "Researcher — Billion21",
      desc: "2019–2022. AI and computer vision for marine production and smart aquaculture.",
      link: "/experience/#work",
      type: "experience",
    },
    {
      keywords: ["teaching", "mentoring", "undergraduate", "course", "experience"],
      title: "Teaching & Mentoring",
      desc: "Mentor undergraduate students in data-driven agriculture. Support graduate-level courses in process design and research proposal writing.",
      link: "/experience/#teaching",
      type: "experience",
    },
    {
      keywords: ["education", "ph.d.", "university of florida", "abe", "degrees"],
      title: "Ph.D. — University of Florida",
      desc: "Agricultural and Biological Engineering. GPA: 3.95/4.0. 2022–2026.",
      link: "/education/#degrees",
      type: "education",
    },
    {
      keywords: ["education", "b.s.", "texas tech", "computer science", "math", "degrees"],
      title: "B.S. — Texas Tech University",
      desc: "Computer Science, Minor in Mathematics. GPA: 3.8/4.0. 2018–2022.",
      link: "/education/#degrees",
      type: "education",
    },
    {
      keywords: ["python", "go", "javascript", "c++", "java", "skills", "languages", "education", "tech stack"],
      title: "Technical Skills — Languages",
      desc: "Python, Go, JavaScript, C++, C, Java, R.",
      link: "/education/#skills",
      type: "education",
    },
    {
      keywords: ["docker", "aws", "azure", "cloud", "deploy", "skills", "education", "tech stack"],
      title: "Technical Skills — Cloud & Tools",
      desc: "AWS, Azure, Docker, Git.",
      link: "/education/#skills",
      type: "education",
    },
    {
      keywords: ["node.js", "express", "rest", "backend", "skills", "tech stack"],
      title: "Technical Skills — Backend & APIs",
      desc: "Node.js, Express, REST APIs.",
      link: "/education/#skills",
      type: "education",
    },
    {
      keywords: ["blockchain", "hyperledger fabric", "hyperledger", "fabric", "couchdb", "firebase", "distributed", "skills", "tech stack"],
      title: "Technical Skills — Distributed Systems",
      desc: "Hyperledger Fabric, Blockchain, CouchDB, Firebase.",
      link: "/education/#skills",
      type: "education",
    },
    {
      keywords: ["llm", "yolo", "sam", "opencv", "ai", "vision", "skills", "tech stack"],
      title: "Technical Skills — AI & Vision",
      desc: "LLM Integration, YOLO, SAM, OpenCV.",
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
  var messages = document.getElementById("chat-messages");
  var input = document.getElementById("chat-input");
  var sendBtn = document.getElementById("chat-send");
  var topChips = document.getElementById("chip-group-top");
  var subChips = document.getElementById("chip-group-sub");
  var activeTop = null;

  // ── Render top-level chips ────────────────────────────────────
  function renderTopChips() {
    topChips.innerHTML = "";
    for (var i = 0; i < keywordTree.length; i++) {
      var btn = document.createElement("button");
      btn.className = "kw-chip";
      btn.textContent = keywordTree[i].label;
      btn.setAttribute("data-idx", i);
      btn.addEventListener("click", onTopChipClick);
      topChips.appendChild(btn);
    }
  }

  function onTopChipClick(e) {
    var idx = parseInt(e.target.getAttribute("data-idx"), 10);
    var node = keywordTree[idx];

    // Toggle: clicking same chip again collapses sub-chips
    if (activeTop === idx) {
      activeTop = null;
      subChips.innerHTML = "";
      updateActiveState();
      return;
    }

    activeTop = idx;
    updateActiveState();

    // Render sub-chips
    subChips.innerHTML = "";
    if (node.children && node.children.length > 0) {
      for (var j = 0; j < node.children.length; j++) {
        var sub = document.createElement("button");
        sub.className = "kw-chip sub";
        sub.textContent = node.children[j];
        sub.setAttribute("data-keyword", node.children[j]);
        sub.addEventListener("click", onSubChipClick);
        subChips.appendChild(sub);
      }
    }
  }

  function onSubChipClick(e) {
    var keyword = e.target.getAttribute("data-keyword");
    submitQuery(keyword);
  }

  function updateActiveState() {
    var chips = topChips.querySelectorAll(".kw-chip");
    for (var i = 0; i < chips.length; i++) {
      if (parseInt(chips[i].getAttribute("data-idx"), 10) === activeTop) {
        chips[i].classList.add("active");
      } else {
        chips[i].classList.remove("active");
      }
    }
  }

  // ── Search logic ──────────────────────────────────────────────
  function search(query) {
    var q = query.toLowerCase().trim();
    if (!q) return [];

    var terms = q.split(/\s+/);
    var scored = [];

    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var score = 0;
      var haystack = entry.keywords.join(" ") + " " + entry.title.toLowerCase() + " " + entry.desc.toLowerCase();

      for (var j = 0; j < terms.length; j++) {
        if (haystack.indexOf(terms[j]) !== -1) {
          score++;
        }
      }
      // Bonus for exact keyword match
      for (var k = 0; k < entry.keywords.length; k++) {
        if (entry.keywords[k] === q) {
          score += 3;
          break;
        }
      }

      if (score > 0) {
        scored.push({ entry: entry, score: score });
      }
    }

    scored.sort(function (a, b) {
      return b.score - a.score;
    });

    return scored;
  }

  // ── Chat message helpers ──────────────────────────────────────
  function addUserMsg(text) {
    var div = document.createElement("div");
    div.className = "chat-msg user";
    div.innerHTML =
      '<div class="chat-avatar">?</div>' +
      '<div class="chat-bubble"><p>' + escapeHtml(text) + "</p></div>";
    messages.appendChild(div);
    scrollToBottom();
  }

  function addBotMsg(html) {
    var div = document.createElement("div");
    div.className = "chat-msg bot";
    div.innerHTML =
      '<div class="chat-avatar">Y</div>' +
      '<div class="chat-bubble">' + html + "</div>";
    messages.appendChild(div);
    scrollToBottom();
  }

  function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  function escapeHtml(str) {
    var d = document.createElement("div");
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
  }

  // ── Build result cards HTML ───────────────────────────────────
  function buildResultsHtml(scored) {
    if (scored.length === 0) {
      return "<p>I couldn't find anything matching that. Try a different keyword or pick a topic above.</p>";
    }

    var count = Math.min(scored.length, 6);
    var summary = "Here's what I found (" + scored.length + " result" + (scored.length > 1 ? "s" : "") + "):";
    var html = "<p>" + summary + "</p><div class='result-cards'>";

    for (var i = 0; i < count; i++) {
      var e = scored[i].entry;
      var label = typeLabels[e.type] || e.type;
      html +=
        '<a href="' + e.link + '" class="result-card">' +
        '<span class="result-card-type">' + label + "</span>" +
        '<span class="result-card-title">' + e.title + "</span>" +
        '<span class="result-card-desc">' + e.desc + "</span>" +
        "</a>";
    }

    html += "</div>";
    if (scored.length > count) {
      html += '<p style="font-size:0.75rem;color:var(--global-text-color-light,#888);margin-top:0.3rem;">Showing top ' + count + " of " + scored.length + " results. Try a more specific keyword to narrow down.</p>";
    }
    return html;
  }

  // ── Submit a query ────────────────────────────────────────────
  function submitQuery(query) {
    var q = query.trim();
    if (!q) return;

    addUserMsg(q);
    input.value = "";

    var results = search(q);
    var html = buildResultsHtml(results);
    addBotMsg(html);
  }

  // ── Event listeners ───────────────────────────────────────────
  if (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        submitQuery(input.value);
      }
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", function () {
      submitQuery(input.value);
    });
  }

  // ── Init ──────────────────────────────────────────────────────
  renderTopChips();
});
