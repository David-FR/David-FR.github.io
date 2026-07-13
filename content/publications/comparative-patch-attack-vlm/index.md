---
title: 'Comparative Analysis of Patch Attack on VLM-Based Autonomous Driving Architectures'

authors:
  - me
  - Pedram MohajerAnsari
  - Amir Salarpour
  - Long Cheng
  - Abolfazl Razi
  - Mert D. Pesé

date: '2026-03-09T00:00:00Z'
publishDate: '2026-03-09T00:00:00Z'

publication_types: ['paper-conference']

publication: '*2026 IEEE Intelligent Vehicles Symposium (IV)*'
publication_short: '*IEEE IV 2026*'

abstract: 'Vision-language models are emerging for autonomous driving, yet their robustness to physical adversarial attacks remains unexplored. This paper presents a systematic framework for comparative adversarial evaluation across three VLM architectures: Dolphins, OmniDrive (Omni-L), and LeapVAD. Using black-box optimization with semantic homogenization for fair comparison, we evaluate physically realizable patch attacks in CARLA simulation. Results reveal severe vulnerabilities across all architectures, sustained multi-frame failures, and critical object detection degradation. Our analysis exposes distinct architectural vulnerability patterns, demonstrating that current VLM designs inadequately address adversarial threats in safety-critical autonomous driving applications.'

tags:
  - Adversarial Attacks
  - Vision Language Models
  - Autonomous Vehicles
  - AI Security

featured: true

pull_quote: 'All three VLM driving models fail against real, printable patches: 73 to 76% attack success, sustained for 6 to 8 frames in a row. Each one fails in its own way.'

key_takeaways:
  - "Builds the first framework that puts different VLM driving models **on equal footing**. A *semantic homogenization* step translates each model's very different output into one shared space, so a single attack and one set of metrics apply to all of them."
  - "All three models (Dolphins, OmniDrive Omni-L, and LeapVAD) fail, with a **73 to 76% attack success rate**. That is 12 to 20 times higher than normal, and each failure lasts **6 to 8 frames in a row**, long enough to slip past defenses that check several frames before acting."
  - "**Each architecture fails in its own way.** The cross-attention model stops seeing pedestrians (a 71-point drop in detection), the MLP model is just as easy to fool at every distance, and the dual-process model keeps seeing objects yet still makes the wrong call. Seeing correctly and acting correctly can come apart."

links:
  - type: pdf
    url: https://arxiv.org/pdf/2603.08897
  - type: code
    url: https://github.com/David-FR/VLMsPatchAttack
  - type: doi
    url: https://doi.org/10.48550/arXiv.2603.08897
---

{{< pub-html "_styles.html" >}}
{{< pub-html "_intro.html" >}}
{{< pub-html "_scenarios.html" >}}
{{< pub-html "_methodology.html" >}}
{{< pub-html "_results.html" >}}
{{< pub-html "_footer.html" >}}
