---
title: 'WIP: From Detection to Explanation: Using LLMs for Adversarial Scenario Analysis in Vehicles'

authors:
  - me
  - Pedram MohajerAnsari
  - Cigdem Kokenoz
  - Amir Salarpour
  - Bing Li
  - Mert D. Pese

date: '2025-08-01T00:00:00Z'
publishDate: '2025-08-01T00:00:00Z'

publication_types: ['paper-conference']

publication: '*3rd USENIX Symposium on Vehicle Security and Privacy (VehicleSec 2025)*'
publication_short: '*VehicleSec 2025*'

abstract: 'We propose a framework that leverages Large Language Models (LLMs) for adversarial scenario analysis in Autonomous Vehicles (AVs), generating interpretable explanations for anomalies and bridging the gap between detection and semantic understanding. Conventional Deep Neural Networks (DNNs) lack robustness against adversarial perception attacks and provide limited interpretability. To address these limitations, our method uses LLMs to process structured vehicular data encoded in a Domain-Specific Language (DSL), incorporating the Manual on Uniform Traffic Control Devices (MUTCD) as a formal knowledge base. Leveraging zero-shot chain-of-thought (CoT) prompting, the framework distinguishes benign sensor errors from adversarial manipulations through stepwise reasoning. We introduce AutoSec-X, a dataset of 40 MUTCD-based driving scenarios, to evaluate LLM architectures, demonstrating that larger models (e.g., Gemini) exhibit superior domain-specific reasoning, often citing relevant MUTCD sections. Results validate the effectiveness of CoT-augmented LLMs for semantic anomaly analysis in AVs without labeled training data. Future work will extend AutoSec-X and investigate multimodal inputs.'

tags:
  - Explainable AI
  - Autonomous Vehicles
  - Large Language Models
  - AI Security

featured: true

links:
  - type: pdf
    url: https://www.usenix.org/system/files/vehiclesec25-fernandez.pdf
  - type: code
    url: https://github.com/tigerseclab/VehicleSec25_LLM_Reasoning
---
