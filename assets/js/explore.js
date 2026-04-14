document.addEventListener("DOMContentLoaded", function () {
  var entries = [
    {
      keywords: ["demeter", "blockchain", "data sharing", "verification", "platform", "hyperledger", "fabric"],
      title: "DEMETER: Data Sharing and Verification Platform",
      desc: "Blockchain- and LLM-enabled platform for cross-system data exchange, origin verification, and traceable file history. Hyperledger Fabric, Go, Node.js, Next.js.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["dv", "data verification", "fingerprint", "sha-256", "registration", "did", "license"],
      title: "DV — Data Verification Module",
      desc: "SHA-256 fingerprint anchoring on-chain, provider identity binding via DID, Creative Commons license declaration, visibility control.",
      link: "/projects/#dv----data-verification",
      type: "project",
    },
    {
      keywords: ["ti", "transformation", "integrity", "lineage", "trace", "graph", "provenance"],
      title: "TI — Transformation Integrity Module",
      desc: "Tracks file lineage through processing stages. Transformation/integration declaration, recursive graph traversal, PASS/FAIL integrity check.",
      link: "/projects/#ti----transformation-integrity",
      type: "project",
    },
    {
      keywords: ["si", "sharing", "infrastructure", "access", "reuse", "license", "transfer"],
      title: "SI — Sharing Infrastructure Module",
      desc: "Access request workflow, on-chain transfer records, reuse evaluation with 7 CC license types, expiration enforcement.",
      link: "/projects/#si----sharing-infrastructure",
      type: "project",
    },
    {
      keywords: ["computer vision", "yolo", "sam", "marine", "aquaculture", "fish", "flounder", "feeding"],
      title: "AI-Based Computer Vision for Marine Production",
      desc: "YOLO for population-level feeding behavior analysis, SAM for individual fish size estimation. Applied to olive flounder and stone flounder production.",
      link: "/projects/#marine-cv",
      type: "project",
    },
    {
      keywords: ["nlq", "llm", "phi-3", "natural language", "query", "ollama", "chat"],
      title: "Natural Language Query Interface",
      desc: "15 intents, deterministic keyword routing + Phi-3 LLM fallback via Ollama. 74-case eval suite with 100% routing accuracy. Write confirmation gate.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["go", "chaincode", "smart contract", "fabric", "on-chain"],
      title: "Smart Contracts (Go Chaincode)",
      desc: "3 Go contracts with 19 exported functions: Dataset, Transform, Reuse. Immutable records on Hyperledger Fabric with 4 organizations.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["node", "express", "api", "backend", "rest"],
      title: "Backend API (Node.js / Express)",
      desc: "37 REST endpoints across 8 route modules: dv, ti, si, reuse, search, nlq, identity, share.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["next", "react", "frontend", "typescript", "web"],
      title: "Frontend (Next.js / React)",
      desc: "7 pages built with Next.js 15 App Router, TypeScript, React Flow for provenance graph visualization.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["did", "authentication", "ecdsa", "p-256", "identity", "crypto"],
      title: "DID Authentication",
      desc: "ECDSA P-256 key pair generation in browser via Web Crypto API. Challenge-response login, no passwords, no central authority.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["local agent", "watcher", "auto", "folder"],
      title: "Local File Agent",
      desc: "Watches a folder, auto-detects provenance type (origin/transformation/integration), registers files on-chain without user interaction.",
      link: "/projects/#demeter",
      type: "project",
    },
    {
      keywords: ["demeter", "blockchain", "paper", "publication", "tracking", "agricultural data"],
      title: "DEMETER: A Blockchain-Based Platform for Tracking the History of Shared Agricultural Data Files",
      desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["blockchain", "review", "data ecosystem", "cross-sectoral", "publication"],
      title: "Facilitating a Future Agricultural Data Ecosystem: A Cross-Sectoral Review",
      desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["carbon", "market", "agriculture", "stakeholder", "korea"],
      title: "Bridging carbon markets and agriculture",
      desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. (2025). Discover Agriculture, 3, 126.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["potato", "farming", "mechanization", "machinery", "korea"],
      title: "Potato Farming in the United States and South Korea",
      desc: "Kim, J.H., Lee, C.Y., Cho, Y., et al. (2024). Journal of Biosystems Engineering, 49(3), 252–269.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["sweet potato", "farming", "mechanization", "cultivation"],
      title: "Sweet Potato Farming in the USA and South Korea",
      desc: "Kim, J.H., Cho, Y., et al. (2025). Journal of Biosystems Engineering, 50(2), 210–224.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["cabbage", "chinese cabbage", "mechanization", "cultivation"],
      title: "Mechanization Status and Cultivation Pattern of Chinese Cabbage",
      desc: "Kim, J.H., Cho, Y., Hwang, I.S., et al. (2025). Journal of Biosystems Engineering.",
      link: "/publications/#papers",
      type: "publication",
    },
    {
      keywords: ["patent", "seaweed", "blockchain", "supply chain"],
      title: "Patent: Seaweed Farming Data Management via Blockchain",
      desc: "Patent Application KR10-2024-0011399, 2024.",
      link: "/publications/#patents",
      type: "publication",
    },
    {
      keywords: ["patent", "laver", "spore", "aquaculture"],
      title: "Patent: Methods for Selecting Spores from Laver Farm Devices",
      desc: "Patent KR102034354B1, 2019.",
      link: "/publications/#patents",
      type: "publication",
    },
    {
      keywords: ["experience", "university of florida", "gra", "research assistant"],
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
      keywords: ["teaching", "mentoring", "undergraduate", "course"],
      title: "Teaching & Mentoring",
      desc: "Mentor undergraduate students in data-driven agriculture. Support graduate-level courses in process design and research proposal writing.",
      link: "/experience/#teaching",
      type: "experience",
    },
    {
      keywords: ["education", "phd", "university of florida", "abe"],
      title: "Ph.D. — University of Florida",
      desc: "Agricultural and Biological Engineering. GPA: 3.95/4.0. 2022–2026.",
      link: "/education/#degrees",
      type: "education",
    },
    {
      keywords: ["education", "bs", "texas tech", "computer science", "math"],
      title: "B.S. — Texas Tech University",
      desc: "Computer Science, Minor in Mathematics. GPA: 3.8/4.0. 2018–2022.",
      link: "/education/#degrees",
      type: "education",
    },
    {
      keywords: ["python", "go", "javascript", "c++", "java", "skills", "languages"],
      title: "Technical Skills — Languages",
      desc: "Python, Go, JavaScript, C++, C, Java, R.",
      link: "/education/#skills",
      type: "education",
    },
    {
      keywords: ["docker", "aws", "azure", "cloud", "deploy"],
      title: "Technical Skills — Cloud & Tools",
      desc: "AWS, Azure, Docker, Git.",
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

  var input = document.getElementById("explore-input");
  var results = document.getElementById("explore-results");
  var chips = document.querySelectorAll(".explore-chip");

  function search(query) {
    var q = query.toLowerCase().trim();
    if (!q) {
      results.innerHTML = "";
      return;
    }

    var terms = q.split(/\s+/);
    var scored = [];

    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var score = 0;
      var allKeywords = entry.keywords.join(" ") + " " + entry.title.toLowerCase() + " " + entry.desc.toLowerCase();

      for (var j = 0; j < terms.length; j++) {
        if (allKeywords.indexOf(terms[j]) !== -1) {
          score++;
        }
      }

      if (score > 0) {
        scored.push({ entry: entry, score: score });
      }
    }

    scored.sort(function (a, b) {
      return b.score - a.score;
    });

    if (scored.length === 0) {
      results.innerHTML = '<div class="explore-empty">No results found.</div>';
      return;
    }

    var html = "";
    for (var k = 0; k < scored.length; k++) {
      var e = scored[k].entry;
      var label = typeLabels[e.type] || e.type;
      html +=
        '<a href="' + e.link + '" class="explore-result">' +
        '<span class="explore-result-type">' + label + "</span>" +
        '<span class="explore-result-title">' + e.title + "</span>" +
        '<span class="explore-result-desc">' + e.desc + "</span>" +
        "</a>";
    }
    results.innerHTML = html;
  }

  if (input) {
    input.addEventListener("input", function () {
      search(this.value);
    });
  }

  for (var i = 0; i < chips.length; i++) {
    chips[i].addEventListener("click", function () {
      var keyword = this.getAttribute("data-keyword");
      input.value = keyword;
      search(keyword);
    });
  }
});
