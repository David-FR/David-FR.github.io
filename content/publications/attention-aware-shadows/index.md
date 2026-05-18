---
title: 'Attention-Aware Temporal Adversarial Shadows on Traffic Sign Sequences'

authors:
  - Pedram MohajerAnsari
  - Amir Salarpour
  - me
  - Cigdem Kokenoz
  - Bing Li
  - Mert D. Pesé

date: '2025-06-01T00:00:00Z'
publishDate: '2025-06-01T00:00:00Z'

publication_types: ['paper-conference']

publication: '*IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW 2025)*, pp. 3600--3608'
publication_short: '*CVPR Workshops 2025*'

abstract: 'We present a framework for black-box adversarial attacks on traffic signs using dynamic, temporally coherent shadows. Unlike prior work that focuses on single-image attacks or relies on conspicuous physical artifacts, our method operates over entire image sequences, mimicking realistic scenarios where a traffic sign is observed from varying distances. We design a non-differentiable shadow generator that casts a single fixed-shape, fixed-opacity shadow whose spatial scale evolves over time to simulate natural environmental shading. A genetic algorithm is used to optimize shadow geometry and opacity, guided by a dual loss that jointly maximizes classification error and visual attention disruption. Attention perturbation is measured using DINO ViT attention maps between clean and shadowed frames. Evaluated on the GTSRB dataset, our method achieves a sequence-level attack success rate (SL-ASR) — defined as the percentage of sequences where at least τ out of T frames are misclassified — ranging from 52.3% to 87.5%, depending on the threshold and shadow type. Furthermore, incorporating attention supervision yields consistent SL-ASR gains of 11–18% over purely classification-based attack.'

tags:
  - Adversarial Attacks
  - Computer Vision
  - Traffic Sign Recognition

featured: false

links:
  - type: pdf
    url: https://openaccess.thecvf.com/content/CVPR2025W/AdvML/papers/MohajerAnsari_Attention-Aware_Temporal_Adversarial_Shadows_on_Traffic_Sign_Sequences_CVPRW_2025_paper.pdf
  - type: code
    url: https://github.com/pedram-mohajer/ShadowSeq
  - type: doi
    url: https://doi.org/10.1109/CVPRW67362.2025.00344
---
