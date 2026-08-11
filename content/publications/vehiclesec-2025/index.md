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

pull_quote: 'Nine LLMs can all spot a rogue road sign. Only Gemini can tell you which regulation it breaks. Detecting the problem is the easy half; explaining it is where the models split.'

key_takeaways:
  - "**Proposes a framework that, instead of just flagging *that* a driving scene is anomalous, uses an LLM to explain *why*.** Each scene is encoded in a compact **domain-specific language** and reasoned over against the **MUTCD** traffic-rule book with zero-shot chain-of-thought, using **no labeled training data**."
  - "**Introduces AutoSec-X, a dataset of 40 MUTCD-grounded driving scenarios,** balanced **20 anomalous / 20 benign**, each paired with an expert explanation that names the regulation at stake, so a model is graded on its *reasoning*, not just its yes/no verdict."
  - "**Detection saturates; explanation separates.** Across **9 LLMs**, several match on the binary call (**87.5%+**), but only the **Gemini** family pairs top detection (**92.5%**) with grounded explanations that cite the exact MUTCD section. Getting the answer right and explaining *why* turn out to be two different skills."

links:
  - type: pdf
    url: https://www.usenix.org/system/files/vehiclesec25-fernandez.pdf
  - type: code
    url: https://github.com/tigerseclab/VehicleSec25_LLM_Reasoning
---

{{< pub-html "_styles.html" >}}
{{< pub-html "_intro.html" >}}
{{< pub-html "_problem.html" >}}
{{< pub-html "_framework.html" >}}
{{< pub-html "_results.html" >}}
{{< pub-html "_footer.html" >}}
