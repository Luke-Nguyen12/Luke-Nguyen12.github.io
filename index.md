---
layout: default
title: Luke Nguyen's Personal Portfolio
---

<section class="section" id="about">
  <h2 class="section__title">About</h2>
  <div class="about-wall">
    <p>{insert text}</p>
    <p>{insert text}</p>
    <p>{insert text}</p>
  </div>
</section>

<section class="section" id="experience">
  <h2 class="section__title">Experience</h2>
  <div class="grid">
    <article class="card">
      <div class="card__meta">Jan 2025 — Current · Santa Barbara, CA</div>
      <h3 class="card__title">Professional Event Chair · Sigma Eta Pi</h3>
      <p class="card__body">
        Led and organized professional networking events, workshops, and speaker sessions, increasing member engagement by 30% and fostering valuable industry connections.
        Collaborated with executive board members to plan and execute monthly events, ensuring seamless coordination and enhancing the overall fraternity experience.
      </p>
      <ul class="tags" aria-label="Skills used">
        <li class="tag">Leadership</li>
        <li class="tag">Event Ops</li>
        <li class="tag">Stakeholders</li>
      </ul>
    </article>

    <article class="card">
      <div class="card__meta">May 2025 — Current · Santa Barbara, CA</div>
      <h3 class="card__title">External Vice President · Vietnamese Student Association at UCSB</h3>
      <p class="card__body">
        Managed a $20,000+ budget and coordinated logistics for a sold-out cultural showcase of 800+ attendees, overseeing a cross-functional team of 100+ performers and staff.
        Led performances and engaged with 100+ participants, boosting team confidence and ensuring smooth event execution.
        Fostered collaboration with mentors and faculty to create a positive, inclusive atmosphere for cultural events and general meetings.
        Served as a liaison representing UCSB in the Union of Vietnamese Student Associations of Southern California.
      </p>
      <ul class="tags" aria-label="Skills used">
        <li class="tag">Budgeting</li>
        <li class="tag">Logistics</li>
        <li class="tag">Public Speaking</li>
        <li class="tag">Team Leadership</li>
      </ul>
    </article>
  </div>
</section>

<section class="section" id="projects">
  <h2 class="section__title">Technical Projects</h2>
  <div class="grid">
    <article class="card">
      <div class="card__meta">May 2025 — Jun 2025 · Santa Barbara, CA</div>
      <h3 class="card__title">Browsing Wrapped</h3>
      <p class="card__body">
        Developed a full-stack web app using Flask and SQLite to visualize Google Chrome search trends with dynamic Chart.js analytics.
        Designed a modern, card-based UI for first/last searches of the year with clean responsive HTML/CSS.
        Reached 300+ users in one month and iterated from user feedback.
      </p>
      <ul class="tags" aria-label="Tech stack">
        <li class="tag">Flask</li>
        <li class="tag">SQLite</li>
        <li class="tag">Chart.js</li>
        <li class="tag">HTML/CSS</li>
      </ul>
    </article>

    <article class="card">
      <div class="card__meta">Jan 2026 · Santa Barbara, CA</div>
      <h3 class="card__title">Automated Document Redaction</h3>
      <p class="card__body">
        Engineered a cloud-native platform using Node.js and AWS Lambda to detect and mask sensitive PII in uploaded documents.
        Reduced processing time by 24% via asynchronous triggers and optimized regex patterns for PII detection.
      </p>
      <ul class="tags" aria-label="Tech stack">
        <li class="tag">Node.js</li>
        <li class="tag">AWS Lambda</li>
        <li class="tag">Regex</li>
      </ul>
    </article>

    <article class="card">
      <div class="card__meta">May 2025 — Jun 2025 · Santa Barbara, CA</div>
      <h3 class="card__title">AirPod Exercising Optimization</h3>
      <p class="card__body">
        Built a system using wearable IMU and heart-rate data from AirPods Pro (3rd gen) for real-time performance diagnostics and anomaly detection.
        Developed an agentic AI in Python to parse health data and produce natural-language insights.
        Engineered a C++ backend with memory-efficient data structures for real-time vector transforms and zero-leak high-frequency streaming.
      </p>
      <ul class="tags" aria-label="Tech stack">
        <li class="tag">Python</li>
        <li class="tag">C++</li>
        <li class="tag">Time Series</li>
        <li class="tag">Sensors</li>
      </ul>
    </article>

    <article class="card">
      <div class="card__meta">May 2025 — Jun 2025 · Santa Barbara, CA</div>
      <h3 class="card__title">3D Perception &amp; LiDAR Mapping for Autonomous Systems</h3>
      <p class="card__body">
        Designed a spatial mapping pipeline to process high-density LiDAR point clouds for object segmentation and environment reconstruction.
        Built Python tooling to filter raw LiDAR data, extract geometric features, and transform unstructured points into indexed 3D surfaces for AutoCAD modeling.
        Implemented a hybrid storage strategy for multi-GB datasets using NAS for low-latency rendering and AWS S3 for cloud-based versions.
      </p>
      <ul class="tags" aria-label="Tech stack">
        <li class="tag">Python</li>
        <li class="tag">Computer Vision</li>
        <li class="tag">LiDAR</li>
        <li class="tag">AWS S3</li>
      </ul>
    </article>

    <article class="card">
      <div class="card__meta">Sep 2025 — Jan 2026 · Santa Barbara, CA</div>
      <h3 class="card__title">Automated MOSFET Parameter Extraction</h3>
      <p class="card__body">
        Built a characterization test bench with programmable DC sweeps and high-precision current sensing to measure \(I_D\) across \(V_{GS}\) and \(V_{DS}\).
        Developed a C++ data processing engine applying saturation/triode MOSFET models to extract threshold and conduction parameters from measured data.
        Improved stability using source degeneration resistors to prevent thermal runaway during high-power sweeps and calibrated with lab instrumentation.
      </p>
      <ul class="tags" aria-label="Tech stack">
        <li class="tag">C++</li>
        <li class="tag">Hardware</li>
        <li class="tag">Data Processing</li>
      </ul>
    </article>
  </div>
  <div class="cta-row">
    <a class="button-link" href="{{ '/projects/' | relative_url }}">View full project archive</a>
  </div>
</section>

<section class="section" id="education">
  <h2 class="section__title">Education</h2>
  <article class="card">
    <div class="card__meta">{insert dates} · Santa Barbara, CA</div>
    <h3 class="card__title">University of California, Santa Barbara</h3>
    <p class="card__subtitle">B.S. Computer Engineering · {insert details}</p>
    <p class="card__body">{insert text}</p>
  </article>
</section>