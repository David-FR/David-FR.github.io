---
title: 'SASA: Sequence-Aware Shadow Attacks via Attention Alignment for Traffic Sign Recognition'

authors:
  - Amir Salarpour
  - Pedram MohajerAnsari
  - me
  - Mert D. Pese

date: '2025-06-01T00:00:00Z'
publishDate: '2025-06-01T00:00:00Z'

publication_types: ['paper-conference']

publication: '*6th Workshop on Adversarial Machine Learning on Computer Vision: Safety of Vision-Language Agents (AdvML@CVPR)*'
publication_short: '*AdvML@CVPR 2025*'

abstract: 'We propose SASA (Sequence-Aware Shadow Attack), a black-box adversarial framework that uses physically realistic, differentiable shadow patterns to deceive traffic sign recognition systems. Unlike prior image-based attacks, SASA targets video sequences by generating smooth, temporally consistent shadows that remain visually plausible and imperceptible to humans. Guided by attention maps from frozen vision transformers, SASA aligns shadow placement with semantically salient regions without querying the target model. Evaluated on the GTSRB dataset, SASA reduces classification accuracy by up to 86% and sequence-level accuracy by over 90% on black-box models, including CNNs and ViTs.'

tags:
  - Adversarial Attacks
  - AI Security
  - Computer Vision
  - Traffic Sign Recognition

featured: false

pull_quote: 'One physically plausible shadow, placed where a frozen vision transformer looks and held steady across all thirty frames, cuts traffic-sign accuracy by up to 86 points, without ever querying the model it fools.'

key_takeaways_lead: 'A car does not see a traffic sign once; it sees it across a stream of frames as it drives closer. Most attacks fool a single still image with pixel noise that flickers and gets filtered out before it matters. This paper casts a single, physically plausible shadow, the kind a pole or a cloud would throw, and holds it steady across the whole clip. It places that shadow exactly where a frozen vision transformer is looking, and it never once queries the model it is trying to fool. The result is a strict black-box attack that transfers across very different classifiers and drops accuracy far more than per-frame scores would suggest.'

key_takeaways:
  - "**A shadow attack for video, not single frames, that never touches the target.** SASA optimizes **one shared shadow mask** applied identically across all 30 frames, guided only by **frozen DINO and DeiT attention maps**. It uses no weights, gradients, or predictions from the model it attacks, yet transfers across CNNs, STNs, EfficientNet, and ViTs."
  - "**Three physically grounded shadow shapes, all differentiable.** A differentiable generator casts **Blob** (clouds, tree cover), **Strip** (poles, signposts), and **Side** (barriers, parked cars) shadows from a handful of geometric parameters, darkening only the luminance channel in CIELAB so the result stays plausible. The elongated **StripShadow** guided by **DeiT** is the strongest across every architecture."
  - "**Sequential recognition is far more fragile than frame scores suggest.** By aligning the shadow to the model's most salient pixels, SASA drops frame accuracy by up to **86 points on ViT** and over **60 on EfficientNet**, and sequence-level accuracy (seq@50) by over **90 points**. Attention maps confirm the shadow displaces *where* the model looks, not just how the pixels appear."

links:
  - type: pdf
    url: /files/publications/fernandez-2025-sasa-shadow-attacks.pdf
---

{{< pub-html "_styles.html" >}}
{{< pub-html "_intro.html" >}}
{{< pub-html "_pipeline.html" >}}
{{< pub-html "_shadows.html" >}}
{{< pub-html "_results.html" >}}
{{< pub-html "_footer.html" >}}
