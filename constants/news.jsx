export const newsData = [
    {
        id: 1,
        date: "Dec 2024",
        title: "2 Papers accepted at NeurIPS 2024",
        description: "Our team's research on  inference time alignment  has been accepted at NeurIPS 2024.",
        category: "Publication",
        href: null
    },
    {
        id: 2,
        date: "Dec 2024",
        title: "Talk at University of Waterloo:  Tuning Free (Inference Time) Alignment of Large Language Models",
        description: "Traditional fine-tuning of foundation models is computationally heavy, involving updates to billions of parameters. A promising alternative, alignment via decoding, adjusts the response distribution directly without model updates to maximize a target reward r, thus providing a lightweight and adaptable framework for alignment. However, principled decoding methods rely on oracle access to an optimal Q-function (Q*), which is often unavailable in practice. We propose Transfer Q*, which implicitly estimates the optimal value function for a target reward through a baseline model aligned with a baseline reward rBL (which can be different from the target reward). Our approach significantly reduces the sub-optimality gap observed in prior SoTA methods and demonstrates superior empirical performance across key metrics such as coherence, diversity, and quality in extensive tests on several synthetic and real datasets.",
        category: "Talk",
        href : "https://uwaterloo.ca/artificial-intelligence-institute/events/amrit-singh-bedi-tuning-free-inference-time-alignment-large"
    },
    
];
