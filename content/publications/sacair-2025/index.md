---
title: 'Small Language Models on the Edge for Real-World Agentic Systems in Industry'

authors:
  - Edward B. Duffy
  - me
  - Alta de Waal
  - Mert D. Pesé

date: '2025-12-01T00:00:00Z'
publishDate: '2025-12-01T00:00:00Z'

publication_types: ['paper-conference']

publication: '*Southern African Conference for Artificial Intelligence Research (SACAIR 2025)*'
publication_short: '*SACAIR 2025*'

abstract: 'Large Language Models face significant deployment challenges in enterprise environments, including high computational costs, data privacy concerns, and network dependencies. This paper presents a framework for deploying Small Language Models (SLMs) with fewer than 7 billion parameters on edge devices, using agentic architectures to overcome capacity limitations. We introduce three key contributions: (1) a multi-agent benchmarking framework employing role-based evaluation to reduce bias, (2) a three-phase task planning pipeline that decomposes planning into subtask identification, dependency reasoning, and schema-constrained generation, and (3) real-world implementations achieving 3-4x latency improvements over cloud services. Our evaluation demonstrates that models like Phi-4 achieve CEFR C1-level translation quality and 0.883 G-Eval summarization scores on commodity hardware. Through WebLLM browser-based inference and local hosting, we show that SLMs effectively serve enterprise needs in privacy-sensitive, bandwidth-constrained, or air-gapped environments, representing a viable alternative prioritizing data sovereignty and cost efficiency.'

tags:
  - Edge AI
  - Small Language Models
  - Industry AI

featured: false

pull_quote: 'Small models on ordinary hardware, graded by two rival AI examiners that have to agree, reach advanced C1-level translation and answer 3 to 4 times faster than the cloud, without a byte of data leaving the device.'

key_takeaways_lead: 'Large language models are expensive to run, they send private data to the cloud, and stop working the moment the network does. This paper asks whether small models, under 7 billion parameters and running on ordinary hardware, can perform enterprise work if you give them the right support to plan and check their own work. We show that careful small models such as Phi-4 reach advanced language ability while answering several times faster than a cloud call and keeping every prompt on the device.'

key_takeaways:
  - "**A grading method that resists a single judge's bias.** Each small model is examined like a language student, then scored by **two frontier models cast as rival instructors** (GPT-4 and Claude) that must discuss and agree on one CEFR grade. Role-play makes them careful; forcing consensus curbs the bias of any single judge."
  - "**Planning split into three narrow steps a small model can actually follow.** Rather than plan in one shot, the pipeline separates **subtask identification, dependency reasoning, and schema-constrained output**, so the model reasons first and only fills a rigid JSON structure last, exactly where small models tend to slip."
  - "**Advanced results on commodity hardware, several times faster than the cloud.** Across seven open models under 7B parameters, **Phi-4** reached **C1-level** translation and a **0.883** G-Eval summarization score, while local and in-browser (WebLLM) hosting answered **3 to 4 times faster** than a cloud API, with no data leaving the device."

links:
  - type: pdf
    url: https://www.researchgate.net/profile/Alta-De-Waal/publication/398318643_Small_Language_Models_on_the_Edge_for_Real-World_Agentic_Systems_in_Industry/links/69313ccc7e61d05b530bb267/Small-Language-Models-on-the-Edge-for-Real-World-Agentic-Systems-in-Industry.pdf
  - type: code
    url: https://github.com/David-FR/SACAIR_Appendix
---

{{< pub-html "_styles.html" >}}
{{< pub-html "_intro.html" >}}
{{< pub-html "_benchmark.html" >}}
{{< pub-html "_planning.html" >}}
{{< pub-html "_results.html" >}}
{{< pub-html "_footer.html" >}}
