---
title: ''
summary: ''
date: 2022-10-24
type: landing

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ''
      button:
        text: Download CV
        url: files/cv_davidfernandez.pdf
      headings:
        about: 'About Me'
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: small
        shape: circle
  - block: selected-research
    id: selected-research
    content:
      title: Research Highlights
      papers:
        - page: /publications/sacair-2025-small-language-models-on-the-edge
          area: Agentic & Edge AI
          accent: amber
          summary: Combines small language models with agent workflows to run enterprise tasks locally.
          affiliation:
            name: BMW Group
            logo_size: small
            context: In collaboration with
            logo: media/affiliations/bmw-group.svg
            logo_dark: media/affiliations/bmw-group-white.svg
        - page: /publications/ieee-iv-2026-comparative-patch-attack-vlm
          area: VLM Security
          accent: teal
          summary: Benchmarks vision-language driving systems against physical attacks to uncover security weaknesses.
          affiliation:
            name: Clemson VIPR-GS
            context: Research through
            logo: media/affiliations/vipr-gs.png
        - page: /publications/dsn-2026-mirage-to-clear
          area: Explainable AI
          accent: blue
          summary: Uses language models to identify which vehicle perception components failed and explain why.
          affiliation:
            name: TigerSec Lab
            context: Research at
            logo: media/affiliations/tigersec-lab.webp
    design:
      spacing:
        padding: ['2rem', '0', '4rem', '0']
---
