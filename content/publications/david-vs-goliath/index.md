---
title: 'David vs. Goliath: A Comparative Study of Different-Sized LLMs for Code Generation in the Domain of Automotive Scenario Generation'

authors:
  - Philipp Bauerfeind
  - Amir Salarpour
  - me
  - Pedram MohajerAnsari
  - Johannes Reschke
  - Mert D. Pesé

date: '2025-01-01T00:00:00Z'
publishDate: '2025-01-01T00:00:00Z'

publication_types: ['article']

publication: '*arXiv preprint*'
publication_short: '*arXiv*'

abstract: 'Scenario simulation is central to testing autonomous driving systems. Scenic, a domain-specific language (DSL) for CARLA, enables precise and reproducible scenarios, but NL-to-Scenic generation with large language models (LLMs) suffers from scarce data, limited reproducibility, and inconsistent metrics. We introduce NL2Scenic, an open dataset and framework with 146 NL/Scenic pairs, a difficulty-stratified 30-case test split, an Example Retriever, and 14 prompting variants (ZS, FS, CoT, SP, MoT). We evaluate 13 models: four proprietary (GPT-4o, GPT-5, Claude-Sonnet-4, Gemini-2.5-pro) and nine open-source code models (Qwen2.5Coder 0.5B-32B; CodeLlama 7B/13B/34B), using text metrics (BLEU, ChrF, EDIT-SIM, CrystalBLEU) and execution metrics (compilation and generation), and compare them with an expert study (n=11). EDIT-SIM correlates best with human judgments; we also propose EDIT-COMP (F1 of EDIT-SIM and compilation) as a robust dataset-level proxy that improves ranking fidelity. GPT-4o performs best overall, while Qwen2.5Coder-14B reaches about 88 percent of its expert score on local hardware. Retrieval-augmented prompting, Few-Shot with Example Retriever (FSER), consistently boosts smaller models, and scaling shows diminishing returns beyond mid-size, with Qwen2.5Coder outperforming CodeLlama at comparable scales. NL2Scenic and EDIT-COMP offer a standardized, reproducible basis for evaluating Scenic code generation and indicate that mid-size open-source models are practical, cost-effective options for autonomous-driving scenario programming.'

tags:
  - Large Language Models
  - Code Generation
  - Autonomous Vehicles

featured: false

links:
  - type: pdf
    url: https://arxiv.org/pdf/2510.14115
---
