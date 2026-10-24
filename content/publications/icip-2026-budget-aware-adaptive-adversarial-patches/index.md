---
slug: 'budget-aware-adaptive-adversarial-patches'
title: 'Budget-Aware Adaptive Adversarial Patches for Black-Box Object Detection'

authors:
  - Pedram MohajerAnsari
  - Amir Salarpour
  - me
  - Mert D. Pesé

date: '2026-06-16T00:00:00Z'
publishDate: '2026-06-16T00:00:00Z'

publication_types: ['paper-conference']
publication: '*2026 IEEE International Conference on Image Processing (ICIP)* — Accepted'
publication_short: '*ICIP 2026*'

abstract: 'Adversarial patches pose a practical threat to modern object detectors. Prior work shows vulnerability, but three gaps limit actionable insight: (i) few score-based black-box attacks jointly optimize patch location, texture, and size under tight query budgets; (ii) success is rarely tied to the patch’s visual footprint; and (iii) evaluations often conflate EOT robustness with plain-view suppression. We present PatchBandit, a query-efficient, budget-adaptive black-box attack that couples a lightweight Contextual Thompson-Sampling placer with NES-style pixel updates, growing the patch only when progress stalls. Reporting is anchored by a strict plain-image suppression test; EOT is audited but never used as a substitute for success, and optional appearance/printability weights expose strength–visibility trade-offs. Across YOLOv5, Faster R-CNN, and YOLOS, PatchBandit achieves strong suppression on CNN-based detectors and substantial suppression on the transformer-based detector, using compact patches and exposing clear query–footprint trade-offs relative to fixed-size and heuristic baselines. A print–capture pilot further shows transfer across unseen physical objects and viewpoints.'

tags:
  - Adversarial Attacks
  - Object Detection
  - AI Security
  - Black-Box Optimization

featured: false

pull_quote: 'PatchBandit learns where to place a patch, how to change its pixels, and when to enlarge it, using only detector outputs. Its success depends on both the query budget and the space the patch occupies.'

key_takeaways_lead: 'An adversarial patch is a small pattern that can make a detector lose track of what it sees. Creating one without access to the model’s internals requires repeated queries, and simply making the patch larger can hide how expensive or conspicuous an attack is. PatchBandit adapts placement, texture, and size together, measuring success alongside those costs.'

key_takeaways:
  - "**One loop controls where, what, and how large.** Contextual Thompson sampling chooses a location, Natural Evolution Strategies updates the pixels using detector scores, and the patch grows only when progress stalls. No model weights or gradients are required."
  - "**Success is measured on the plain image.** The original top-class confidence must fall by at least **0.25** and end at **0.10 or below**. The baseline achieves **77.5%** strict suppression on YOLOv5, **89.7%** on Faster R-CNN, and **59.1%** on YOLOS; robustness across transformed views is assessed separately."
  - "**Faster growth can save queries without enlarging the typical patch.** On YOLOv5, GP5 reduces median queries from **1,079 to 529**, with nearly unchanged success (**77.5% → 77.7%**) and the same **8.32%** median image area. Other detectors show different trade-offs."

hugoblox:
  ids:
    doi: 10.48550/arXiv.2606.18318

links:
  - type: pdf
    url: https://arxiv.org/pdf/2606.18318
  - type: doi
    url: https://doi.org/10.48550/arXiv.2606.18318
---

{{< pub-html "_styles.html" >}}
{{< pub-html "_visuals.html" >}}
{{< pub-html "_intro.html" >}}
{{< pub-html "_examples.html" >}}
{{< pub-html "_method.html" >}}
{{< pub-html "_results.html" >}}
{{< pub-html "_tradeoffs.html" >}}
{{< pub-html "_footer.html" >}}
{{< pub-html "_interactions.html" >}}
