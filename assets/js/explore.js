document.addEventListener("DOMContentLoaded", function () {
  var keywordTree = [
    {
      label: "Projects",
      children: [
        {
          label: "Data Infrastructure",
          children: ["DEMETER", "NLQ/LLM", "Scalable Traceability", "SI", "TI", "DV", "Seaweed Blockchain", "Ag Machinery", "Carbon Markets"],
        },
        {
          label: "Applied AI",
          children: ["AI Aquaculture", "Laver Spores", "Citrus CV", "Bio Modeling", "Food Engineering", "SmartAg"],
        },
      ],
    },
    {
      label: "Publications",
      children: [
        { label: "Papers" },
        { label: "Patents" },
        { label: "Presentations" },
      ],
    },
    {
      label: "Teaching",
      children: [
        { label: "Supervised Teaching" },
        { label: "Invited Lectures" },
        { label: "PUSH4IT" },
        { label: "Mentoring" },
        { label: "Blog" },
      ],
    },
    {
      label: "Experience",
      children: [
        { label: "UF Research" },
        { label: "MAFRA" },
        { label: "Billion21" },
        { label: "Global BioAg" },
        { label: "Texas Tech" },
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
    // Data Infrastructure
    { keywords: ["projects", "data infrastructure", "demeter"], title: "DEMETER: Data Sharing and Verification Platform", desc: "General-purpose blockchain platform for cross-system data exchange, origin verification, and traceable file history.", link: "#demeter", type: "project" },
    { keywords: ["projects", "data infrastructure", "nlq/llm"], title: "Natural Language Query Interface", desc: "Phi-3 LLM via Ollama. 15 intents, deterministic routing, 100% accuracy.", link: "#demeter", type: "project" },
    { keywords: ["projects", "data infrastructure", "scalable traceability"], title: "Scalable Blockchain-Based Traceability", desc: "DV-TI applied to citrus drone imagery. Dynamic hashing ID, IPFS integration.", link: "#projects", type: "project" },
    { keywords: ["projects", "data infrastructure", "si"], title: "SI — Source Integration", desc: "Governs how files move between organizations. Access workflow, reuse evaluation, license enforcement.", link: "#si", type: "project" },
    { keywords: ["projects", "data infrastructure", "ti"], title: "TI — Transformation Integrity", desc: "Determines declared input and operation for transformed files without contacting producer.", link: "#ti", type: "project" },
    { keywords: ["projects", "data infrastructure", "dv"], title: "DV — File Origin Verification", desc: "File origin verification and transfer tracing across multiple parties.", link: "#dv", type: "project" },
    { keywords: ["projects", "data infrastructure", "seaweed blockchain"], title: "Blockchain-Based Seaweed Supply Chain Tracking", desc: "Blockchain data management for seaweed farming. Patent KR10-2024-0011399.", link: "#projects", type: "project" },
    { keywords: ["projects", "data infrastructure", "ag machinery"], title: "Agricultural Machinery Data Analysis", desc: "Mechanization patterns US vs. South Korea. 3 papers in J. Biosystems Engineering.", link: "#projects", type: "project" },
    { keywords: ["projects", "data infrastructure", "carbon markets"], title: "Carbon Markets & Agricultural Data Sharing", desc: "Why data sharing perspective is needed. Discover Agriculture, 2025.", link: "#projects", type: "project" },
    // Applied AI
    { keywords: ["projects", "applied ai", "ai aquaculture"], title: "AI Aquaculture System", desc: "YOLO feeding analysis, SAM size estimation for marine fish production.", link: "#aquaculture", type: "project" },
    { keywords: ["projects", "applied ai", "laver spores"], title: "Laver Spore Selection System", desc: "AI-based automated spore selection for aquaculture. Patent KR102034354B1.", link: "#aquaculture", type: "project" },
    { keywords: ["projects", "applied ai", "citrus cv"], title: "Citrus Tree Trunk Segmentation", desc: "CNN-based image segmentation for agricultural imagery. PyTorch.", link: "#projects", type: "project" },
    { keywords: ["projects", "applied ai", "bio modeling"], title: "Biological Systems Modeling", desc: "3-course series: dynamic systems, agent-based modeling, advanced simulation. Certificate.", link: "#projects", type: "project" },
    { keywords: ["projects", "applied ai", "food engineering"], title: "Food & Bioprocess Engineering", desc: "Unit process operations in agro/food industries. AI and data management.", link: "#projects", type: "project" },
    { keywords: ["projects", "applied ai", "smartag"], title: "Precision Agriculture & SmartAg", desc: "GPS/GIS, remote sensing, UAV, IoT, ML for agricultural applications.", link: "#projects", type: "project" },
    // Publications
    { keywords: ["publications", "papers"], title: "DEMETER Platform Paper", desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.", link: "#papers", type: "publication" },
    { keywords: ["publications", "papers"], title: "DV — File Origin Verification Paper", desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.", link: "#papers", type: "publication" },
    { keywords: ["publications", "papers"], title: "TI — Transformation Integrity Paper", desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.", link: "#papers", type: "publication" },
    { keywords: ["publications", "papers"], title: "Cross-Sectoral Blockchain Review", desc: "Cho, Y., Yu, Z., & Ampatzidis, Y. Under review.", link: "#papers", type: "publication" },
    { keywords: ["publications", "papers"], title: "Bridging Carbon Markets and Agriculture", desc: "Cho, Y., et al. (2025). Discover Agriculture, 3, 126.", link: "#papers", type: "publication" },
    { keywords: ["publications", "patents"], title: "Seaweed Blockchain Supply Chain", desc: "Patent Application KR10-2024-0011399, 2024.", link: "#patents", type: "publication" },
    { keywords: ["publications", "patents"], title: "Laver Spore Selection", desc: "Patent KR102034354B1, 2019.", link: "#patents", type: "publication" },
    { keywords: ["publications", "presentations"], title: "Conference Presentations", desc: "7 presentations at ASABE, CIGR, KSAM, AI in Agriculture (2023–2025).", link: "#presentations", type: "publication" },
    { keywords: ["teaching", "invited lectures"], title: "Invited Lectures & Seminars", desc: "Invited talks at universities and institutions in South Korea (2024–2025).", link: "#lectures", type: "teaching" },
    // Teaching
    { keywords: ["teaching", "supervised teaching"], title: "Supervised Teaching", desc: "ABE 6933 course module (Dr. Kiker), AOM 5456 guest lecture (Dr. Yu).", link: "#teaching", type: "teaching" },
    { keywords: ["teaching", "push4it"], title: "PUSH4IT Coach", desc: "Peer coaching program, UF OASIS (2025–2026).", link: "#teaching", type: "teaching" },
    { keywords: ["teaching", "mentoring"], title: "Graduate Student Mentor", desc: "ABE Mentoring Program (2023–2024).", link: "#teaching", type: "teaching" },
    { keywords: ["teaching", "blog"], title: "Online Developer Mentoring", desc: "HOOAI Blog. 790+ posts. Coding, career guidance, grad school prep.", link: "#teaching", type: "teaching" },
    // Experience
    { keywords: ["experience", "uf research"], title: "Graduate Research Assistant — UF", desc: "2022–2026. Data infrastructure, verification systems, DEMETER.", link: "#experience", type: "experience" },
    { keywords: ["experience", "mafra"], title: "Researcher — MAFRA", desc: "2024–2026. Crop mechanization, digital agriculture.", link: "#experience", type: "experience" },
    { keywords: ["experience", "billion21"], title: "Researcher — Billion21", desc: "2019–2022. AI and computer vision for marine production.", link: "#experience", type: "experience" },
    { keywords: ["experience", "global bioag"], title: "Researcher — Global BioAg Linkages", desc: "2020–2021. AI deployment requirements for agricultural systems.", link: "#experience", type: "experience" },
    { keywords: ["experience", "texas tech"], title: "Undergraduate Research Assistant — Texas Tech", desc: "2021–2022. Computer vision and data visualization.", link: "#experience", type: "experience" },
    // Education
    { keywords: ["education", "ph.d."], title: "Ph.D. — University of Florida", desc: "Agricultural and Biological Engineering. GPA: 3.95/4.0. Certificate in Biological Systems Modeling.", link: "#education", type: "education" },
    { keywords: ["education", "b.s."], title: "B.S. — Texas Tech University", desc: "Computer Science, Minor in Mathematics. GPA: 3.8/4.0.", link: "#education", type: "education" },
    { keywords: ["education", "skills"], title: "Technical Skills", desc: "Python, Go, JavaScript, C++ · Node.js, Express · Hyperledger Fabric, Docker, AWS · YOLO, SAM, LLM.", link: "#skills", type: "education" },
  ];

  var typeLabels = { project: "Project", publication: "Publication", teaching: "Teaching", experience: "Experience", education: "Education" };

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
