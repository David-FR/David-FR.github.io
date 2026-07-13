---
title: 'Understanding Adversarial Transferability in Vision-Language Models for Autonomous Driving: A Cross-Architecture Analysis'

authors:
  - me
  - Pedram MohajerAnsari
  - Amir Salarpour
  - Mert D. Pese

date: '2026-04-07T00:00:00Z'
publishDate: '2026-04-07T00:00:00Z'

publication_types: ['paper-conference']

publication: '*SAE Technical Paper 2026-01-0170, WCX SAE World Congress Experience*'
publication_short: '*SAE WCX 2026*'

abstract: 'Vision-language models (VLMs) are increasingly used in autonomous driving because they combine visual perception with language-based reasoning, supporting more interpretable decision-making, yet their robustness to physical adversarial attacks, especially whether such attacks transfer across different VLM architectures, is not well understood and poses a practical risk when attackers do not know which model a vehicle uses. We address this gap with a systematic cross-architecture study of adversarial transferability in VLM-based driving, evaluating three representative architectures (Dolphins, OmniDrive, and LeapVAD) using physically realizable patches placed on roadside infrastructure in both crosswalk and highway scenarios. Our transfer-matrix evaluation shows high cross-architecture effectiveness, with transfer rates of 73-91% (mean TR = 0.815 for crosswalk and 0.833 for highway) and sustained frame-level manipulation over 64.7-79.4% of the critical decision window even when patches are not optimized for the target model.'

tags:
  - Adversarial Attacks
  - Vision Language Models
  - Autonomous Vehicles
  - AI Security

featured: true

pull_quote: 'Adversarial patches transfer across VLM architectures at 73–91% success — an attacker needs no knowledge of which model the target vehicle runs.'

image:
  preview_only: true

key_takeaways:
  - "Adversarial patches transfer across VLM architectures with **73–91% success rate**; attackers need no knowledge of the deployed model to mount effective attacks."
  - "Introduces a **Transfer Matrix** framework revealing that CLIP-based vision encoders (Dolphins, LeapVAD) drive stronger bidirectional transferability than EVA-CLIP (OmniDrive)."
  - "Attacks persist across **64–79% of frames** throughout the critical decision window, too sustained for temporal filtering or ensemble defenses to reliably mitigate."

hugoblox:
  ids:
    doi: 10.4271/2026-01-0170

links:
  - type: pdf
    url: /files/publications/fernandez-2026-adversarial-transferability-vlm.pdf
  - type: doi
    url: https://doi.org/10.4271/2026-01-0170
---

{{< pub-html "_styles.html" >}}
{{< pub-html "_intro.html" >}}
{{< pub-html "_threat.html" >}}
{{< pub-html "_methodology.html" >}}
{{< pub-html "_results.html" >}}
{{< pub-html "_footer.html" >}}
