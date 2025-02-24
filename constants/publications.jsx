
const conferences = [
    {
        "title": "FACT or Fiction: Can Truthful Mechanisms Eliminate Federated Free Riding?",
        "authors": [
            "M. Bosnstein",
            "A. S. Bedi",
            "A. Mohamed",
            "F. Huang"
        ],
        "tags" : ["Federated Learning",  "NeurIPS", "2024"],
        "location": "Advances  Neural Information Processg Systems (NIPS)",
        "time": " Vancouver  CA  9-15 Dec.  2024.",
        "href": "https://arxiv.org/pdf/2405.13879"
    },
    {
        "title": "Transfer Q\u22c6: Principled Decoding for LLM Alignment",
        "authors": [
            "S. Chakraborty",
            "S. Ghoshal",
            "M. Yin",
            "D. Manocha",
            "M. Wang",
            "A. S. Bedi",
            "F. Huang"
            ],
        "tags" : ["LLM Alignment",  "NeurIPS", "2024"],
        "location": "Advances  Neural Information Processg Systems (NIPS)",
        "time": " Vancouver  CA  9-15 Dec.  2024.",
        "href": "https://arxiv.org/pdf/2405.20495"
    },
    {
        "title": "When, What, and with Whom to Communicate: Enhancing RL-based Multi-Robot Navigation through Selective Communication",
        "authors": [
            "S. H. Arul",
            "A. S. Bedi",
            "D. Manocha"
        ],
        "tags" : ["Multi-Robot Navigation",  "ICRA", "2024"],
        "location": "International Conference on Intelligent Robots and Systems (IROS)",
        "time": " Abu Dhabi  UAE  2024.",
        "href": "none"
    },
    {
        "title": "LANCAR: Leveraging Language for Context-Aware Robot Locomotion in Unstructured Environments",
        "authors": [
            "C. L. Shek",
            "X. Wu",
            "W. A. Suttle",
            "C. Busart",
            "E. Zaroukian",
            "D. Manocha",
            "P. Tokekar",
            "A. S. Bedi"
        ],
        "tags" : ["Multi-Robot Navigation",  "ICRA", "2024"],       
        "location": "International Conference on Intelligent Robots and Systems (IROS)",
        "time": " Abu Dhabi  UAE  2024.",
        "href": "https://arxiv.org/pdf/2310.00481"
    },
    {
        "title": "TrustNavGPT: Trust-Driven Audio-Guided Robot Navigation under Uncertainty with Large Language Models",
        "authors": [
            "X. Sun",
            "Y. Zhang",
            "X. Tang",
            "A. S. Bedi",
            "A. Bera"
            ],
        "tags" : ["Multi-Robot Navigation",  "ICRA", "2024"],
        "location": "International Conference on Intelligent Robots and Systems (IROS)",
        "time": " Abu Dhabi  UAE  2024. [Oral]",
        "href": "none"
    },
    {
        "title": "PIPER: Primitive-Informed Preference-based Hierarchical Reinforcement Learning via Hindsight Relabeling",
        "authors": [
            "U. Singh",
            "W. A. Suttle",
            "B. M. Sadler",
            "V. P. Namboodiri",
            "A. S. Bedi"
        ],
        "tags" : ["Reinforcement Learning",  "ICML", "2024"],
        "location": "International Conference on Mache Learng (ICML)",
        "time": " Vienna  Austria  July 2024.",
        "href": "https://openreview.net/pdf/486d2e3f8b1d6cd84cc050e257c70fda5c2f6980.pdf"
    },
    {
        "title": "MaxMin-RLHF: Towards Equitable Alignment of Large Language Models with Diverse Human Preferences",
        "authors": [
            "S. Chakraborty",
            "J. Qiu",
            "H. Yuan",
            "A. Koppel",
            "F. Huang",
            "D. Manocha",
            "A. S. Bedi",
            "M. Wang"
        ],
        "tags" : ["Reinforcement Learning",  "ICML", "2024"],
        "location": "International Conference on Mache Learng (ICML)",
        "time": " Vienna  Austria  July 2024.",
        "href": "https://arxiv.org/pdf/2402.08925"
    },
    {
        "title": "On the possibilities of ai-generated text detection",
        "authors": [
            "S. Chakraborty*",
            "A. S. Bedi*",
            "S.",
            "Zhu",
            "B. An",
            "D. Manocha",
            "F. Huang"
        ],
        "tags" : ["LLM Alignment",  "ICML", "2024"],
        "location": "International Conference on Mache Learng (ICML)",
        "time": " Vienna  Austria  July 2024.",
        "href": "https://arxiv.org/pdf/2304.04736"
    },
    {
        "title": "PARL: A Unified Framework for Policy Alignment in Reinforcement Learning",
        "authors": [
            "S. Chakraborty",
            "A. S. Bedi",
            "A. Koppel",
            "D. Manocha",
            "H. Wang",
            "M. Wang",
            "F. Huang"
        ],
        "tags" : ["Reinforcement Learning",  "ICLR", "2024"],
        "location": "International Conference on Learng Representations (ICLR)",
        "time": " Vienna  Austria  May 2024.",
        "href": "https://arxiv.org/pdf/2308.02585.pdf"
    },
    {
        "title": "STEERING: Stein Information Directed Exploration for Model-Based Reinforcement Learning",
        "authors": [
            "S. Chakraborty",
            "A. S. Bedi",
            "A. Koppel",
            "M. Wang",
            "F. Huang",
            "D. Manocha"
        ],
        "tags" : ["Reinforcement Learning",  "ICML", "2024"],
        "location": "International Conference on Mache Learng (ICML)",
        "time": " Honolulu  Hawai  USA  July 2023.",
        "href": "https://arxiv.org/pdf/2301.12038.pdf"
    },
    {
        "title": "Beyond Exponentially Fast Mixing in Average-Reward Reinforcement Learning via Multi-Level Monte Carlo Actor-Critic",
        "authors": [
            "A. S. Bedi*",
            "W. Suttle*",
            "B. Patel",
            "B. Sadler",
            "A. Koppel",
            "D. Manocha"
        ],
        "tags" : ["Reinforcement Learning",  "ICML", "2024"],
        "location": "International Conference on Mache Learng (ICML)",
        "time": " Honolulu  Hawai  USA  July 2023.",
        "href": "https://arxiv.org/pdf/2301.12083.pdf"
    },
    {
        "title": "SWIFT: Rapid Decentralized Federated Learning via Wait-Free Model Communication",
        "authors": [
            "M. Bornstein",
            "T. Rabbani",
            "E. Wang",
            "A. S. Bedi",
            "F. Huang"
        ],
        "tags" : ["Federated Learning",  "ICLR", "2023"],
        "location": "International Conference on Learng Representations (ICLR)",
        "time": " Kigali  Rwanda  May 2023.",
        "href": "https://openreview.net/pdf?id=jh1nCir1R3d"
    },
    {
        "title": "Dealing with Sparse Rewards in Continuous Control Robotics via Heavy-Tailed Policy Optimization",
        "authors": [
            "S.Chakraborty",
            "A. S. Bedi",
            "K. Weerakoon",
            "P. Poddar",
            "A. Koppel",
            "P. Tokekar",
            "D. Manocha"
            ],  
        "tags" : ["Reinforcement Learning",  "ICRA", "2023"],
        "location": "International Conference on Robotics (ICRA)",
        "time": " London  UK  May 2023.",
        "href": "https://arxiv.org/search/cs?searchtype=author&query=Bedi%2C+A+S"
    },
    {
        "title": "RTAW: An Attention Inspired Reinforcement Learning Method for Multi-Robot Task Allocation in Warehouse Environments",
        "authors": [
            "A. Aggarwal",
            "A. S. Bedi",
            "D. Manocha"
            ],
                "tags" : ["Reinforcement Learning",  "ICRA", "2023"],
        "location": "International Conference on Robotics (ICRA)",
        "time": " London  UK  May 2023.",
        "href": "https://arxiv.org/search/cs?searchtype=author&query=Bedi%2C+A+S"
    },
    {
        "title": "Decentralized Multi-agent Exploration with Limited Inter-agent Communications",
        "authors": [
            "H. He",
            "A. Koppel",
            "A. S. Bedi",
            "D. Stilwell",
            "M. Farhood"
        ],
        "location": "International Conference on Robotics (ICRA)",
        "time": " London  UK  May 2023.",
        "href": "https://arxiv.org/search/cs?searchtype=author&query=Bedi%2C+A+S"
    },
    {
        "title": "Achieving Zero Constraint Violation for Constrained Reinforcement Learning via Conservative Natural Policy Gradient Primal-Dual Algorithm",
        "authors": [
            "Q. Bai",
            "A. S. Bedi",
            "V. Aggarwal"
        ],
        "location": "AAAI Conference on Artificial Intelligence",
        "time": " Washgn DC  USA  Feb 2023.",
        "href": "https://arxiv.org/search/cs?searchtype=author&query=Bai%2C+Q"
    },
    {
        "title": "Posterior Coreset Construction with Kernelized Stein Discrepancy for Model-Based Reinforcement Learning",
        "authors": [
            "S.Chakraborty",
            "A. S. Bedi",
            "A. Koppel",
            "B. Sadler",
            "F. Huang",
            "P. Tokekar",
            "D. Manocha"
        ],
        "location": "AAAI Conference on Artificial Intelligence",
        "time": " Washgn DC  USA  Feb 2023.",
        "href": "https://arxiv.org/search/cs?searchtype=author&query=Bedi%2C+A+S"
    },
    {
        "title": "Convergence Rates of Average-Reward Multi-Agent Reinforcement Learning Via Randomized Linear Programming",
        "authors": [
            "A. Koppel*",
            "A. S. Bedi*",
            "B. Ganguly",
            "V. Aggarwal"
        ],
        "location": "Proc. of the IEEE Conf. on Decision and Control (CDC)",
        "time": " Cancun  Mexico  Dec. 2022.",
        "href": "none"
    },
    {
        "title": "HTRON: Efficient Outdoor Navigation with Sparse Rewards via Heavy Tailed Adaptive Reinforce Algorithm",
        "authors": [
            "K. Weerakoon",
            "S. Chakraborty",
            "N. Karapetyan",
            "A. J. Sathyamoorthy",
            "A. S. Bedi",
            "D. Manocha"
        ],
        "location": "Proc. of the Conference on Robotic Learng (CoRL)",
        "time": " Aukland  New Zeland  2022.",
        "href": "https://openreview.net/pdf?id=uPWhEXjyvoo"
    },
    {
        "title": "Fast Distributed Beamforming without Receiver Feedback",
        "authors": [
            "K. Chakrabarti",
            "A. S. Bedi",
            "F. T. Dagefu",
            "J. N. Twigg",
            "N. Chopra"
        ],
        "location": "Proc. of the 56th Asilomar Conf. on Signals",
        "time": " Systems  and Computers  Pacific Grove  CA  Nov. 2022.",
        "href": "none"
    },
    {
        "title": "Distributed Riemannian Optimization with Lazy Communication for Collaborative Geometric Estimation",
        "authors": [
            "Y. Tian",
            "A. S. Bedi",
            "A. Koppel",
            "M. C. Fullana",
            "D. Rosen",
            "J. How"
        ],
        "location": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
        "time": " Kyo  Japan  Oct. 2022.",
        "href": "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9981256"
    },
    {
        "title": "DC-MRTA: Decentralized Multi-Robot Task Allocation and Navigation in Complex Environments",
        "authors": [
            "A. Agrawal",
            "S. H. Arul",
            "A. S. Bedi",
            "D. Manocha"
        ],
        "location": "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
        "time": " Kyo  Japan  Oct. 2022.",
        "href": "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9981353"
    },
    {
        "title": "FedNew: A Communication-Efficient and Privacy-Preserving Newton-Type Method for Federated Learning",
        "authors": [
            "A. Elgabli",
            "C. B. Issaid",
            "A. S. Bedi",
            "K. Rajawat",
            "M. Bennis",
            "V. Aggarwal"
        ],
        "location": "International Conference on Mache Learng (ICML)",
        "time": " Baltimore  USA  July 2022.",
        "href": "https://arxiv.org/search/cs?searchtype=author&query=Bedi%2C+A+S"
    },
    {
        "title": "On the Hidden Biases of Policy Mirror Ascent in Continuous Action Spaces",
        "authors": [
            "A. S. Bedi",
            "S. Chakraborty",
            "A Parayil",
            "B. Sadler",
            "P. Tokekar",
            "A. Koppel"
        ],
        "location": "International Conference on Mache Learng (ICML)",
        "time": " Baltimore  USA  July 2022.",
        "href": "https://arxiv.org/search/cs?searchtype=author&query=Bedi%2C+A+S"
    },
    {
        "title": "Achieving Zero Constraint Violation for Constrained Reinforcement Learning via Primal-Dual Approach",
        "authors": [
            "Q. Bai",
            "A. S. Bedi",
            "M. Agarwal",
            "A. Koppel",
            "V. Aggarwal"
        ],
        "location": "AAAI Conference on Artificial Intelligence",
        "time": " Vancouver  Canada  Feb 2022.",
        "href": "https://arxiv.org/search/cs?searchtype=author&query=Bai%2C+Q"
    },
    {
        "title": "MARL with General Utilities via Decentralized Shadow Reward Actor-Critic",
        "authors": [
            "J. Zhang",
            "A. S. Bedi",
            "M. Wang",
            "A. Koppel"
        ],
        "location": "AAAI Conference on Artificial Intelligence",
        "time": " Vancouver  Canada  Feb 2022.",
        "href": "https://arxiv.org/pdf/2106.00543.pdf"
    },
    {
        "title": "Energy-Efficient and Federated Meta-Learning via Projected Stochastic Gradient Ascent",
        "authors": [
            "A. Elgabli",
            "C. B. Issaid",
            "A. S. Bedi",
            "M. Bennis",
            "V. Aggarwal"
        ],
        "location": "Proc. of IEEE Globecom",
        "time": " Madrid  Spa  Dec. 2021.",
        "href": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9685127"
    },
    {
        "title": "Randomized Linear Programming for Tabular Average-Cost Multi-agent Reinforcement Learning",
        "authors": [
            "A. Koppel",
            "A. S. Bedi",
            "B. Ganguly",
            "V. Aggarwal"
        ],
        "location": "Proc. 55th Asilomar Conf. on Signals",
        "time": " Systems  and Computers  Pacific Grove  CA  Nov. 2021.",
        "href": "https://arxiv.org/pdf/2110.12929.pdf"
    },
    {
        "title": "Intermittent Communications in Decentralized Shadow Reward Actor-Critic",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "M. Wang",
            "J. Zhang"
        ],
        "location": "Proc. of the IEEE Conf. on Decision and Control (CDC)",
        "time": " Nice  France  Dec. 2021.",
        "href": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9682939"
    },
    {
        "title": "Wasserstein-Splitting Gaussian Process Regression\nfor Heterogeneous Online Bayesian Inference",
        "authors": [
            "M. E. Kepler",
            "A. Koppel",
            "A. S. Bedi",
            "D. J. Stilwell"
        ],
        "location": "IROS",
        "time": " 2021.",
        "href": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9636357"
    },
    {
        "title": "On the Convergence Theory of Online Bayesian Nonparametric Estimators with Adaptive Hyperparameters",
        "authors": [
            "A. Koppel",
            "A. S. Bedi",
            "V. Krishnamurthy"
        ],
        "location": "ICASSP",
        "time": " 2021.",
        "href": "https://ieeexplore.ieee.org/document/9414378"
    },
    {
        "title": "Variational Policy Gradient Method for Reinforcement Learning with General Utilities",
        "authors": [
            "J. Zhang",
            "A. Koppel",
            "A. S. Bedi",
            "C. Szepesvari",
            "M. Wang"
        ],
        "location": "Advances  Neural Information Processg Systems (NIPS)",
        "time": " Vancouver  CA  6-12 Dec.  2020. [Spotlight (Top 4% of  papers)\n]",
        "href": "https://arxiv.org/search/cs?searchtype=author&query=Szepesvari%2C+C"
    },
    {
        "title": "Joint Position and Beamforming Control via Alternating Nonlinear Least-Squares with a Hierarchical Gamma Prior",
        "authors": [
            "A. Parayil",
            "A. S. Bedi",
            "A. Koppel"
        ],
        "location": "American Control Conference (ACC)",
        "time": " 2021.",
        "href": "https://koppel.netlify.app/assets/papers/c_2021_parayil_etal_a.pdf"
    },
    {
        "title": "Beyond Cumulative Returns via Reinforcement Learning over State-Action Occupancy Measures",
        "authors": [
            "J Zhang*",
            "A. S. Bedi*",
            "M. Wang",
            "A. Koppel"
        ],
        "location": "American Control Conference (ACC)",
        "time": " 2021.",
        "href": "https://arxiv.org/abs/2002.12475"
    },
    {
        "title": "Conservative Stochastic Optimization: O(T^(-1/2)) Optimality Gap with Zero Constraint Violation",
        "authors": [
            "Z Akhtar",
            "A. S. Bedi",
            "K. Rajawat"
        ],
        "location": "American Control Conference (ACC)",
        "time": " 2021.",
        "href": "https://arxiv.org/abs/2008.05758"
    },
    {
        "title": "Conservative Multi-agent Online Kernel Learning in Heterogeneous Networks",
        "authors": [
            "H. Pradhan",
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat"
        ],
        "location": "Proc. 54th Asilomar Conf. on Signals",
        "time": " Systems  and Computers  Pacific Grove  CA  Nov. 2020.",
        "href": "none"
    },
    {
        "title": "Asynchronous and Parallel Distributed Pose Graph Optimization",
        "authors": [
            "Y. Tian",
            "A. Koppel",
            "A. S. Bedi",
            "J. How"
        ],
        "location": "International Conference on Intelligent Robots and Systems (IROS)",
        "time": " Las Vegas  NV  USA  Oct. 2020.",
        "href": "https://arxiv.org/abs/2003.03281"
    },
    {
        "title": "Efficient Large-Scale Gaussian Process Bandits by Believing only Informative Actions",
        "authors": [
            "A. S. Bedi",
            "D. Peddireddy",
            "V. Aggarwal",
            "A. Koppel"
        ],
        "location": "Learng for Dynamics and Control (L4DC)",
        "time": " University of California  Berkeley  CA   June 2020.",
        "href": "none"
    },
    {
        "title": "A Projection Operator to Balance Consistency and Complexity in Importance Sampling",
        "authors": [
            "A. Koppel*",
            "A. S. Bedi*",
            "B. M. Sadler",
            "V. Elvira"
        ],
        "location": "NeurIPS Symposium on Advances  Approximate Bayesian Inference ( appear)",
        "time": " Vancouver  CA  Dec. 14  2019. [*Equal contribution]",
        "href": "none"
    },
    {
        "title": "Projection Free Dynamic Online Learning",
        "authors": [
            "Deepak Kalhan",
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat",
            "A. Gupta",
            "A. Banerjee"
        ],
        "location": "Proc. Int. Conf. Acoustics Speech Signal Process (ICASSP)",
        "time": " Barcelona  Spa  May 4-8  2020 ().",
        "href": "none"
    },
    {
        "title": "Q-GADMM: Quantized Group ADMM for Communication Efficient Decentralized Machine Learning",
        "authors": [
            "A. Elgabli",
            "J. Park",
            "A. S. Bedi",
            "M. Bennis",
            "V. Aggarwal"
        ],
        "location": "Proc. Int. Conf. Acoustics Speech Signal Process (ICASSP)",
        "time": " Barcelona  Spa  May 4-8  2020 ().",
        "href": "https://arxiv.org/pdf/1910.10453.pdf"
    },
    {
        "title": "Nonparametric Dynamic Online Learning",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat",
            "Brian M. Sadler"
        ],
        "location": "IEEE American Control Conference (ACC)",
        "time": " Denver  CO  USA  Jul. 1-3  2020.",
        "href": "none"
    },
    {
        "title": "Approximate Shannon Sampling in Importance Sampling",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "B. M. Sadler",
            "V. Elvira"
        ],
        "location": "Proc. 53rd Asilomar Conf. on Signals",
        "time": " Systems  and Computers  Pacific Grove  CA  Nov. 2019.",
        "href": "none"
    },
    {
        "title": "Nonstationary Nonparametric Optimization: Online Kernel Learning against Dynamic Comparators",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat"
        ],
        "location": "Intl. Conf. on Contuous Optimization (ICCOPT)",
        "time": " Berl  Germany  Aug. 2019.",
        "href": "none"
    },
    {
        "title": "Compressed Online Non-parametric Learning",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat"
        ],
        "location": "Learng for Dynamics and Control (L4DC)",
        "time": " MIT  Cambridge  MA  USA  May. 2019.",
        "href": "none"
    },
    {
        "title": "Online Learning over Time-varying Graphs via Proximal Gradient Descent",
        "authors": [
            "R. Dixit",
            "A. S. Bedi",
            "K. Rajawat"
        ],
        "location": "Proc. of the IEEE Conf. on Decision and Control (CDC)",
        "time": " Nice  France  Dec. 2019.",
        "href": "none"
    },
    {
        "title": "Controlling the Bias-Variance Tradeoff via Coherent Risk for Robust Learning with Kernels",
        "authors": [
            "A. Koppel",
            "A. S. Bedi",
            "K. Rajawat"
        ],
        "location": "IEEE American Control Conference (ACC)",
        "time": " Philadelphia  PA  Jul. 10-12  2019.",
        "href": "https://ieeexplore.ieee.org/document/8814879"
    },
    {
        "title": "On Socially Optimal Traffic Flow in the Presence of Random Users",
        "authors": [
            "A. Chopra",
            "D. S. Kalhan",
            "A. S. Bedi",
            "Abhishek K. Gupta",
            "K. Rajawat"
        ],
        "location": "IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS)",
        "time": " Indore  India  Dec. 16-19  2018.",
        "href": "none"
    },
    {
        "title": "Exact Nonparametric Decentralized Online Optimization",
        "authors": [
            "H. Pradhan",
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat"
        ],
        "location": "Proc. IEEE Global Conference on Signal and Information Processg (GlobalSIP)",
        "time": " Anaheim  California  USA  Nov. 2018.",
        "href": "https://ieeexplore.ieee.org/document/8646689"
    },
    {
        "title": "Time Varying Optimization via Inexact Proximal Online Gradient Descent",
        "authors": [
            "R. Dixit",
            "A. S. Bedi",
            "R. Tripathi",
            "K. Rajawat"
        ],
        "location": "Proc. 52nd Asilomar Conf. on Signals",
        "time": " Systems  and Computers  Pacific Grove  CA  Nov. 2018.",
        "href": "https://ieeexplore.ieee.org/document/8645323"
    },
    {
        "title": "Decentralized Asynchronous Stochastic Gradient Descent: Convergence Rate Analysis",
        "authors": [
            "A. S. Bedi",
            "H. Pradhan",
            "K. Rajawat"
        ],
        "location": "Proc. of the Intl. Conf. on Signal Processg and Communications (SPCOM)",
        "time": " Bangalore  India  July 2018.",
        "href": "https://ieeexplore.ieee.org/document/8724408"
    },
    {
        "title": "Asynchronous Saddle Point Method: Interference Management Through Pricing",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat"
        ],
        "location": "Proc. IEEE Conference on Decision and Control (CDC)",
        "time": " Dec. 17-19  2018.",
        "href": "https://ieeexplore.ieee.org/document/8619362"
    },
    {
        "title": "Adversarial Multi-Agent Target Tracking with Inexact Online Gradient Descent",
        "authors": [
            "A. S. Bedi",
            "P. Sarma",
            "K. Rajawat"
        ],
        "location": "Proc. Int. Conf. Acoustics Speech Signal Process (ICASSP)",
        "time": " Calgary  Canada  Apr. 15-20  2018.",
        "href": "https://ieeexplore.ieee.org/document/8461346"
    },
    {
        "title": "Wireless Network Optimization via Stochastic Sub-gradient Descent: Rate Analysis",
        "authors": [
            "A. S. Bedi",
            "K. Rajawat"
        ],
        "location": "Proc. of the IEEE Intl. Conf. on Wireless Communications and Networkg Conference (WCNC)",
        "time": " Barcelona  Spa  Apr. 2018.",
        "href": "https://ieeexplore.ieee.org/abstract/document/8377002"
    },
    {
        "title": "An Online Approach to D2D Trajectory Utility Maximization Problem",
        "authors": [
            "A. S. Bedi",
            "K. Rajawat",
            "M. Coupechoux"
        ],
        "location": "Proc. of the IEEE Intl. Conf. on Computer Communications (INFOCOM)",
        "time": " Honolulu  HI  USA  Apr. 2018.",
        "href": "https://ieeexplore.ieee.org/abstract/document/8485855"
    },
    {
        "title": "Beyond Consensus and Synchrony in Decentralized Online Optimization using Saddle Point Method",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat"
        ],
        "location": "Proc. of the 51st Asilomar Conf. on Signals",
        "time": " Systems  and Computers  Pacific Grove  CA  Nov. 2017. [Asilomar Best Student Paper Falist].",
        "href": "http://home.iitk.ac.in/~ketan/papers/asilomar17.pdf"
    },
    {
        "title": "Asynchronous Resource Allocation in Distributed Heterogeneous Networks",
        "authors": [
            "A. S. Bedi",
            "K. Rajawat"
        ],
        "location": "Proc. of the IEEE ICC",
        "time": " Paris  France  May 2017.",
        "href": "https://arxiv.org/pdf/1702.08290.pdf"
    },
    {
        "title": "BER-Optimized Robust Precoder design for MIMO-OFDM systems with Insufficient CP",
        "authors": [
            "J. Akhtar",
            "A. S. Bedi",
            "K. Rajawat",
            "A. K. Jagannatham"
        ],
        "location": "Proc. of IEEE Globecom",
        "time": " Washgn  DC USA  Dec. 2016.",
        "href": "http://ieeexplore.ieee.org/document/7841628/"
    },
    {
        "title": "Online Load Scheduling Under Price and Demand Uncertainty in Smart Grid",
        "authors": [
            "A. S. Bedi",
            "K. Rajawat"
        ],
        "location": "Proc. of the Intl. Conf. on Signal Processg and Communications (SPCOM)",
        "time": " Bangalore  India. June 2016.",
        "href": "http://ieeexplore.ieee.org/document/7746655/"
    }
]

const journals = [
    {
        "title": "FedBC: Calibrating Global and Local Models via Federated Learning Beyond Consensus",
        "authors": [
            "A. S. Bedi*",
            "C. Fan*",
            "A. Koppel",
            "A. K. Sahu",
            "B. M. Sadler",
            "F. Huang",
            "D. Manocha"
        ],
        "location": "May",
        "time": " 2022.",
        "href": "https://arxiv.org/pdf/2206.10815.pdf"
    },
    {
        "title": "Convergence Rates of Average-Reward Multi-agent Reinforcement Learning via Randomized Linear Programming",
        "authors": [
            "A. Koppel*",
            "A. S. Bedi*",
            "B. Ganguly",
            "V. Aggarwal"
        ],
        "location": "IEEE Transactions on Networkg",
        "time": " Mar 2022.",
        "href": "https://arxiv.org/search/math?searchtype=author&query=Koppel%2C+A"
    },
    {
        "title": "Nonstationary Nonparametric Online Learning: Balancing Dynamic Regret and Model Parsimony",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat",
            "Brian M. Sadler"
        ],
        "location": "IEEE Transactions on Signal Processg ()",
        "time": " Aug. 2019.",
        "href": "https://arxiv.org/abs/1909.05442"
    },
    {
        "title": "On the Sample Complexity and Metastability of Heavy-tailed Policy Search in Continuous Control",
        "authors": [
            "A. S. Bedi",
            "A. Parayil",
            "J. Zhang",
            "M. Wang",
            "A. Koppel"
        ],
        "location": "Journal of Mache Learng Research (JMLR)",
        "time": " Jan 2024.",
        "href": "https://arxiv.org/pdf/2106.08414.pdf"
    },
    {
        "title": "Efficient Gaussian Process Bandits by Believing only Informative Actions",
        "authors": [
            "A. S. Bedi",
            "D. Peddireddy",
            "V. Aggarwal",
            "A. Koppel"
        ],
        "location": "IEEE Transactions on Artificial Intelligence (TAI)",
        "time": " Sep. 2023.",
        "href": "https://arxiv.org/pdf/2003.10550.pdf"
    },
    {
        "title": "Achieving Zero Constraint Violation for Constrained Reinforcement Learning via Primal-Dual Approach",
        "authors": [
            "Q. Bai",
            "A. S. Bedi",
            "M. Agarwal",
            "A. Koppel",
            "V. Aggarwal"
        ],
        "location": "Journal of Artificial Intelligence Research (JAIR)",
        "time": " Nov  2023.",
        "href": "https://arxiv.org/search/cs?searchtype=author&query=Bai%2C+Q"
    },
    {
        "title": "Projection-Free Algorithm for Stochastic Bi-level Optimization",
        "authors": [
            "Z. Akhtar",
            "A. S. Bedi",
            "S. T. Thomdapu",
            "K. Rajawat"
        ],
        "location": "IEEE Transactions on Signal Processg (TSP)",
        "time": " Nov. 2022.",
        "href": "https://arxiv.org/search/math?searchtype=author&query=Akhtar%2C+Z"
    },
    {
        "title": "Escaping Saddle Points with the Successive Convex Approximation Algorithm",
        "authors": [
            "A. S. Bedi",
            "K. Rajawat",
            "V. Aggarwal",
            "A. Koppel"
        ],
        "location": "IEEE Transactions on Signal Processg (TSP)",
        "time": " Nov. 2021.",
        "href": "https://arxiv.org/pdf/1903.01932.pdf"
    },
    {
        "title": "Approximate Shannon Sampling in Importance Sampling: Nearly Consistent Finite Particle Estimates",
        "authors": [
            "A. Koppel*",
            "A. S. Bedi*",
            "B. M. Sadler",
            "V. Elvira"
        ],
        "location": "IEEE Transactions on Signal Processg (TSP)",
        "time": " Sep. 2021.",
        "href": "https://arxiv.org/abs/1909.10279"
    },
    {
        "title": "Cautious Reinforcement Learning via Distributional Risk in the Dual Domain",
        "authors": [
            "J. Zhang*",
            "A. S. Bedi*",
            "M. Wang",
            "A. Koppel"
        ],
        "location": "IEEE Journal on Selected Areas  Information Theory (JSAIT)",
        "time": " vol. 2  no. 2  pp. 611-626  June 2021.",
        "href": "https://arxiv.org/pdf/2002.12475.pdf"
    },
    {
        "title": "Conservative Stochastic Optimization with Expectation Constraints",
        "authors": [
            "Z. Akhtar",
            "A. S. Bedi",
            "K. Rajawat"
        ],
        "location": "IEEE Transactions on Signal Processg (TSP)",
        "time": " vol. 69  pp. 3190-3205  May 2021.",
        "href": "https://arxiv.org/abs/2008.05758"
    },
    {
        "title": "Adaptive Kernel Learning in Heterogeneous Networks",
        "authors": [
            "H. Pradhan",
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat"
        ],
        "location": "IEEE Transactions on Signal and Information Processg (TSIPN)",
        "time": " Feb. 2021.",
        "href": "https://arxiv.org/pdf/1908.00510.pdf"
    },
    {
        "title": "Dynamic Online Learning via Frank-Wolfe Algorithm",
        "authors": [
            "Deepak Kalhan",
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat",
            "H. Hassani",
            "A. Gupta",
            "A. Banerjee"
        ],
        "location": "IEEE Transactions on Signal Processg (TSP)",
        "time": " Dec. 2020.",
        "href": "https://koppel.netlify.com/assets/papers/2019_kalhan_etal.pdf"
    },
    {
        "title": "Online Learning over Dynamic Graphs via Distributed Proximal Gradient Algorithm",
        "authors": [
            "R. Dixit",
            "A. S. Bedi",
            "K. Rajawat"
        ],
        "location": "IEEE Transactions on Aumatic Control (TAC)",
        "time": " Nov. 2021.",
        "href": "https://arxiv.org/abs/1905.07018"
    },
    {
        "title": "Q-GADMM: Quantized Group ADMM for Communication Efficient Decentralized Machine Learning",
        "authors": [
            "A. Elgabli",
            "J. Park",
            "A. S. Bedi",
            "Chaouki Ben Issaid",
            "M. Bennis",
            "V. Aggarwal"
        ],
        "location": "IEEE Transaction on Communications (TCOM)",
        "time": " Sep. 2020.",
        "href": "none"
    },
    {
        "title": "Asynchronous and Parallel Distributed Pose Graph Optimization",
        "authors": [
            "Y. Tian",
            "A. Koppel",
            "A. S. Bedi",
            "J. How"
        ],
        "location": "IEEE Robotics and Aumation Letters (RAL)",
        "time": " Feb. 2020. [2020 Honorable Mention from IEEE Robotics and Aumation Letters\n]",
        "href": "https://arxiv.org/abs/2003.03281"
    },
    {
        "title": "GADMM: Fast and Communication Efficient Framework for Distributed Machine Learning",
        "authors": [
            "A. Elgabli",
            "J. Park",
            "A. S. Bedi",
            "M. Bennis",
            "V. Aggarwal"
        ],
        "location": "Journal of Mache Learng and Research (JMLR)",
        "time": " Mar.  2020.",
        "href": "https://arxiv.org/pdf/1909.00047.pdf"
    },
    {
        "title": "Optimally Compressed Nonparametric Online Learning",
        "authors": [
            "A. Koppel",
            "A. S. Bedi",
            "K",
            "Rajawat",
            "B. M. Sadler"
        ],
        "location": "IEEE Signal Processg Magaze - Special Issue on Distributed",
        "time": " Streamg Mache Learng (SPM)  May 2020.",
        "href": "https://arxiv.org/pdf/1909.11555.pdf"
    },
    {
        "title": "Online Trajectory Optimization Using Inexact Gradient Feedback for Time-Varying Environments",
        "authors": [
            "M. Krishna",
            "A. S. Bedi",
            "K. Rajawat",
            "M. Coupechoux"
        ],
        "location": "IEEE Transactions on Signal Processg (TSP)",
        "time": " July. 2020.",
        "href": "https://arxiv.org/pdf/2001.00685.pdf"
    },
    {
        "title": "Nonparametric Compositional Stochastic Optimization for Risk-Sensitive Kernel Learning",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat",
            "Panchajanya Sanyal"
        ],
        "location": "IEEE Transactions on Signal Processg (TSP)",
        "time": " Dec. 2020.",
        "href": "https://arxiv.org/pdf/1902.06011.pdf"
    },
    {
        "title": "Asynchronous Online Learning in Multi-Agent Systems with Proximity Constraints",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat"
        ],
        "location": "IEEE Transactions on Signal and Information Processg over Networks (TSIPN)",
        "time": " vol. 5  no. 3  pp. 479-494  Sept. 2019.",
        "href": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8656546"
    },
    {
        "title": "Online Learning with Inexact Proximal Online Gradient Descent Algorithms",
        "authors": [
            "R. Dixit",
            "A. S. Bedi",
            "R. Tripathi",
            "K. Rajawat"
        ],
        "location": "IEEE Transactions on Signal Processg (TSP)",
        "time": " vol. 67  no. 5  pp. 1338-1352  Mar. 2019.",
        "href": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8598992"
    },
    {
        "title": "Asynchronous Saddle Point Algorithm for Stochastic Optimization in Heterogeneous Networks",
        "authors": [
            "A. S. Bedi",
            "A. Koppel",
            "K. Rajawat"
        ],
        "location": "IEEE Transactions on Signal Processg (TSP)",
        "time": " vol. 67  no. 7  pp. 1742-1757  Apr. 2019.",
        "href": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8624463"
    },
    {
        "title": "Asynchronous Incremental Stochastic Dual Descent Algorithm for Network Resource Allocation",
        "authors": [
            "A. S. Bedi",
            "K. Rajawat"
        ],
        "location": "IEEE Transactions on Signal Processg (TSP)",
        "time": " vol. 66  no. 9  pp. 2229-2244  May 1  2018.",
        "href": "http://ieeexplore.ieee.org/document/8295129/"
    },
    {
        "title": "Online Algorithms for Storage Utilization under Real-Time Pricing in Smart Grid",
        "authors": [
            "A. S. Bedi",
            "P V Aditya Prasad",
            "Md. Waseem Ahmad",
            "Swapnil Shinde",
            "Ketan Rajawat",
            "Sandeep Anand"
        ],
        "location": "International Journal of Electrical Power and Energy Systems (JEPES)",
        "time": " vol 101  Mar. 2018.",
        "href": "https://www.sciencedirect.com/science/article/pii/S0142061517319919"
    },
    {
        "title": "Tracking Moving Agents via Inexact Online Gradient Descent Algorithm",
        "authors": [
            "A. S. Bedi",
            "P. Sarma",
            "K. Rajawat"
        ],
        "location": "IEEE Journal of Selected Topics  Signal Processg - Special issue on Mache Learng for Cognition  Radio Communications and Radar (JSTSP)",
        "time": " vol. 12  no. 1  pp. 202-217  Feb. 2018..",
        "href": "http://ieeexplore.ieee.org/document/8268092/"
    },
    {
        "title": "Network Resource Allocation via Stochastic Subgradient Descent: Convergence Rate",
        "authors": [
            "A. S. Bedi",
            "K. Rajawat"
        ],
        "location": "IEEE Transactions on Communications (TCOM)",
        "time": " vol. 66  no. 5  pp. 2107-2121  May 2018.",
        "href": "http://ieeexplore.ieee.org/document/8255626/"
    },
    {
        "title": "BER-Optimized Precoders for OFDM systems with Insufficient Cyclic Prefix",
        "authors": [
            "A. S. Bedi",
            "J. Akhtar",
            "K. Rajawat",
            "A. K. Jagannatham"
        ],
        "location": "IEEE Communication Letters",
        "time": " vol. 20  no. 2  pp 280-283  Feb. 2016.",
        "href": "http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7348680"
    }
]



export {conferences, journals};