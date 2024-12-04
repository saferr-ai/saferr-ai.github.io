
const conferences  = [
    
        {
            "title": "FACT or Fiction: Can Truthful Mechanisms Eliminate Federated Free Riding?",
            "authors": ["M. Bosnstein", "A. S. Bedi", "A. Mohamed", "F. Huang"],
            "conference": "Advances in Neural Information Processing Systems (NIPS)",
            "time": "9 December, 2024",
            "keywords": ["Federated Learning", "Fact"]
        },
        {
            "title": "Transfer Q⋆: Principled Decoding for LLM Alignment",
            "authors": ["S. Chakraborty", "S. Ghoshal", "M. Yin", "D. Manocha", "M. Wang", "A. S. Bedi", "F. Huang"],
            "conference": "Advances in Neural Information Processing Systems (NIPS)",
            "time": "9 December, 2024",
            "keywords": ["Alignment", "Generative AI", "Training-free"]
        },
        {
            "title": "When, What, and with Whom to Communicate: Enhancing RL-based Multi-Robot Navigation through Selective Communication",
            "authors": ["S. H. Arul", "A. S. Bedi", "D. Manocha"],
            "conference": "International Conference on Intelligent Robots and Systems (IROS)",
            "time": "2024",
            "keywords": ["Multi-Robot Navigation", "Selective Communication"]
        },
        {
            "title": "LANCAR: Leveraging Language for Context-Aware Robot Locomotion in Unstructured Environments",
            "authors": ["C. L. Shek", "X. Wu", "W. A. Suttle", "C. Busart", "E. Zaroukian", "D. Manocha", "P. Tokekar", "A. S. Bedi"],
            "conference": "International Conference on Intelligent Robots and Systems (IROS)",
            "time": "2024",
            "keywords": ["Language", "Context-Aware Robotics"]
        },
        {
            "title": "TrustNavGPT: Trust-Driven Audio-Guided Robot Navigation under Uncertainty with Large Language Models",
            "authors": ["X. Sun", "Y. Zhang", "X. Tang", "A. S. Bedi", "A. Bera"],
            "conference": "International Conference on Intelligent Robots and Systems (IROS)",
            "time": "2024",
            "keywords": ["Trust", "Robot Navigation", "Language Models"]
        },
        {
            "title": "Global Optimality without Mixing Time Oracles in Average-reward RL via Multi-level Actor-Critic",
            "authors": ["B. Patel", "W.A. Suttle", "A. Koppel", "V. Aggarwal", "B. M. Sadler", "D. Manocha", "A. S. Bedi"],
            "conference": "International Conference on Machine Learning (ICML)",
            "time": "July 2024",
            "keywords": ["Reinforcement Learning", "Actor-Critic"]
        },
        {
            "title": "PIPER: Primitive-Informed Preference-based Hierarchical Reinforcement Learning via Hindsight Relabeling",
            "authors": ["U. Singh", "W. A. Suttle", "B. M. Sadler", "V. P. Namboodiri", "A. S. Bedi"],
            "conference": "International Conference on Machine Learning (ICML)",
            "time": "July 2024",
            "keywords": ["Hierarchical Reinforcement Learning", "Hindsight Relabeling"]
        },
        {
            "title": "MaxMin-RLHF: Towards Equitable Alignment of Large Language Models with Diverse Human Preferences",
            "authors": ["S. Chakraborty", "J. Qiu", "H. Yuan", "A. Koppel", "F. Huang", "D. Manocha", "A. S. Bedi", "M. Wang"],
            "conference": "International Conference on Machine Learning (ICML)",
            "time": "July 2024",
            "keywords": ["Language Models", "Human Alignment"]
        },
        {
            "title": "On the Possibilities of AI-Generated Text Detection",
            "authors": ["S. Chakraborty", "A. S. Bedi", "S. Zhu", "B. An", "D. Manocha", "F. Huang"],
            "conference": "International Conference on Machine Learning (ICML)",
            "time": "July 2024",
            "keywords": ["AI Text Detection"]
        },
        {
            "title": "Closing the Gap: Achieving Global Convergence (Last Iterate) of Actor-Critic under Markovian Sampling with Neural Network Parametrization",
            "authors": ["M. Gaur", "A. S. Bedi", "D. Wang", "V. Aggarwal"],
            "conference": "International Conference on Machine Learning (ICML)",
            "time": "July 2024",
            "keywords": ["Global Convergence", "Actor-Critic"]
        },
        {
            "title": "PARL: A Unified Framework for Policy Alignment in Reinforcement Learning",
            "authors": ["S. Chakraborty", "A. S. Bedi", "A. Koppel", "D. Manocha", "H. Wang", "M. Wang", "F. Huang"],
            "conference": "International Conference on Learning Representations (ICLR)",
            "time": "May 2024",
            "keywords": ["Policy Alignment", "Reinforcement Learning"]
        },
        {
            "title": "iPLAN: Intent-Aware Planning in Heterogeneous Traffic via Distributed Multi-Agent Reinforcement Learning",
            "authors": ["X. Wu", "R. Chandra", "T. Guan", "A. S. Bedi", "D. Manocha"],
            "conference": "Conference on Robotic Learning (CORL)",
            "time": "November 2023",
            "keywords": ["Multi-Agent Systems", "Reinforcement Learning"]
        },
        {
            "title": "Bi-Level Nonstationary Kernels for Online Gaussian Process Regression",
            "authors": ["H. J. He", "A. Koppel", "A. S. Bedi", "M. Farhood", "D. J. Stilwell"],
            "conference": "IEEE 19th International Conference on Automation Science and Engineering (CASE)",
            "time": "2023",
            "keywords": ["Gaussian Process Regression", "Nonstationary Kernels"]
        },
        {
            "title": "STEERING: Stein Information Directed Exploration for Model-Based Reinforcement Learning",
            "authors": ["S. Chakraborty", "A. S. Bedi", "A. Koppel", "M. Wang", "F. Huang", "D. Manocha"],
            "conference": "International Conference on Machine Learning (ICML)",
            "time": "July 2023",
            "keywords": ["Model-Based Reinforcement Learning", "Exploration"]
        },
        {
            "title": "Beyond Exponentially Fast Mixing in Average-Reward Reinforcement Learning via Multi-Level Monte Carlo Actor-Critic",
            "authors": ["A. S. Bedi", "W. Suttle", "B. Patel", "B. Sadler", "A. Koppel", "D. Manocha"],
            "conference": "International Conference on Machine Learning (ICML)",
            "time": "July 2023",
            "keywords": ["Reinforcement Learning", "Monte Carlo Methods"]
        },
        {
            "title": "SWIFT: Rapid Decentralized Federated Learning via Wait-Free Model Communication",
            "authors": ["M. Bornstein", "T. Rabbani", "E. Wang", "A. S. Bedi", "F. Huang"],
            "conference": "International Conference on Learning Representations (ICLR)",
            "time": "May 2023",
            "keywords": ["Federated Learning", "Decentralized Communication"]
        },
        {
            "title": "Dealing with Sparse Rewards in Continuous Control Robotics via Heavy-Tailed Policy Optimization",
            "authors": ["S. Chakraborty", "A. S. Bedi", "K. Weerakoon", "P. Poddar", "A. Koppel", "P. Tokekar", "D. Manocha"],
            "conference": "International Conference on Robotics and Automation (ICRA)",
            "time": "May 2023",
            "keywords": ["Sparse Rewards", "Policy Optimization"]
        },
        {
            "title": "RTAW: An Attention Inspired Reinforcement Learning Method for Multi-Robot Task Allocation in Warehouse Environments",
            "authors": ["A. Aggarwal", "A. S. Bedi", "D. Manocha"],
            "conference": "International Conference on Robotics and Automation (ICRA)",
            "time": "May 2023",
            "keywords": ["Reinforcement Learning", "Task Allocation"]
        },
        {
            "title": "Decentralized Multi-Agent Exploration with Limited Inter-agent Communications",
            "authors": ["H. He", "A. Koppel", "A. S. Bedi", "D. Stilwell", "M. Farhood"],
            "conference": "International Conference on Robotics and Automation (ICRA)",
            "time": "May 2023",
            "keywords": ["Multi-Agent Systems", "Decentralized Communication"]
        },
        {
            "title": "Achieving Zero Constraint Violation for Constrained Reinforcement Learning via Conservative Natural Policy Gradient Primal-Dual Algorithm",
            "authors": ["Q. Bai", "A. S. Bedi", "V. Aggarwal"],
            "conference": "AAAI Conference on Artificial Intelligence",
            "time": "February 2023",
            "keywords": ["Constrained Reinforcement Learning", "Policy Gradient"]
        },
        {
            "title": "Posterior Coreset Construction with Kernelized Stein Discrepancy for Model-Based Reinforcement Learning",
            "authors": ["S. Chakraborty", "A. S. Bedi", "A. Koppel", "B. Sadler", "F. Huang", "P. Tokekar", "D. Manocha"],
            "conference": "AAAI Conference on Artificial Intelligence",
            "time": "February 2023",
            "keywords": ["Reinforcement Learning", "Kernel Methods"]
        },
        {
            "title": "Convergence Rates of Average-Reward Multi-Agent Reinforcement Learning via Randomized Linear Programming",
            "authors": ["A. Koppel", "A. S. Bedi", "B. Ganguly", "V. Aggarwal"],
            "conference": "IEEE Conference on Decision and Control (CDC)",
            "time": "December 2022",
            "keywords": ["Multi-Agent Reinforcement Learning", "Linear Programming"]
        },
        {
            "title": "iPLAN: Intent-Aware Planning in Heterogeneous Traffic via Distributed Multi-Agent Reinforcement Learning",
            "authors": ["X. Wu", "R. Chandra", "T. Guan", "A. S. Bedi", "D. Manocha"],
            "conference": "Conference on Robotic Learning (CoRL)",
            "time": "November 2022",
            "keywords": ["Multi-Agent Systems", "Intent-Aware Planning"]
        },
        {
            "title": "HTRON: Efficient Outdoor Navigation with Sparse Rewards via Heavy Tailed Adaptive Reinforce Algorithm",
            "authors": ["K. Weerakoon", "S. Chakraborty", "N. Karapetyan", "A. J. Sathyamoorthy", "A. S. Bedi", "D. Manocha"],
            "conference": "Conference on Robotic Learning (CoRL)",
            "time": "November 2022",
            "keywords": ["Outdoor Navigation", "Sparse Rewards"]
        },
        {
            "title": "Fast Distributed Beamforming without Receiver Feedback",
            "authors": ["K. Chakrabarti", "A. S. Bedi", "F. T. Dagefu", "J. N. Twigg", "N. Chopra"],
            "conference": "Asilomar Conference on Signals, Systems, and Computers",
            "time": "November 2022",
            "keywords": ["Beamforming", "Distributed Systems"]
        },
        {
            "title": "Distributed Riemannian Optimization with Lazy Communication for Collaborative Geometric Estimation",
            "authors": ["Y. Tian", "A. S. Bedi", "A. Koppel", "M. C. Fullana", "D. Rosen", "J. How"],
            "conference": "International Conference on Intelligent Robots and Systems (IROS)",
            "time": "October 2022",
            "keywords": ["Riemannian Optimization", "Collaborative Estimation"]
        }
    ]



export {conferences};