---
title: 'From MIRAGE to CLEAR: Component-Level Explainable Anomaly Reasoning for Autonomous Vehicle Perception Systems'

authors:
  - me
  - Pedram MohajerAnsari
  - Cigdem Kokenoz
  - Amir Salarpour
  - Bing Li
  - Mert D. Pese

date: '2026-01-01T00:00:00Z'
publishDate: '2026-01-01T00:00:00Z'

publication_types: ['paper-conference']

publication: '*IEEE/IFIP International Conference on Dependable Systems and Networks (DSN 2026)*'
publication_short: '*DSN 2026*'

abstract: 'Autonomous vehicles rely on perception systems with deep neural networks for traffic sign recognition (TSR), automated lane centering (ALC), and object detection (OD). While these systems perform well under standard conditions, perception failures trigger 17% of AV disengagements, yet only 4% receive clear causal attribution, impeding safety improvements. Emerging regulations, including the EU AI Act (2024), mandate transparency and component-level accountability for safety-critical AI systems, which current anomaly detection approaches cannot provide. We present MIRAGE-CLEAR, a framework combining dataset generation with systematic reasoning analysis. MIRAGE generates semantically rich driving scenarios by integrating 48,022 real-world scenes from major AV datasets with regulatory knowledge from the Manual on Uniform Traffic Control Devices (MUTCD). CLEAR, a three-layer LLM-based reasoning pipeline, decomposes attribution into interpretable subtasks: anomaly detection, violation classification, and component attribution. CLEAR achieves 95.2% accuracy in anomaly detection and 84% attribution accuracy for direct regulatory violations targeting TSR modules. The framework provides interpretable reasoning chains satisfying regulatory transparency requirements while enabling precise failure source identification. To the best of our knowledge, CLEAR represents the first system unifying detection, attribution, explainability, and regulatory compliance for AV perception diagnostics.'

tags:
  - Explainable AI
  - Autonomous Vehicles
  - Anomaly Detection
  - Large Language Models

featured: true

links:
  - type: code
    url: https://github.com/David-FR/MIRAGE_CLEAR
---
