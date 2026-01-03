// Mock data for Nidhi Srivastava's Executive GRC Portfolio

export const profileData = {
  name: "Nidhi Srivastava",
  title: "Senior GRC Architect & Cybersecurity Leader",
  subtitle: "CISO-Track Executive | AI Governance Pioneer | Audit Automation Expert",
  summary: "Global award-winning GRC leader with 18+ years driving enterprise security, compliance, and risk management for Fortune 500 clients. Proven track record delivering $60M+ in business impact through strategic governance, audit automation, and AI risk frameworks.",
  yearsExperience: "18+",
  location: "Global | USA",
  email: "nidhi.srivastava@example.com",
  linkedin: "linkedin.com/in/nidhi-srivastava",
  github: "github.com/nidhi-srivastava"
};

export const keyMetrics = [
  { label: "Compliance Improvement", value: "95%", icon: "shield-check" },
  { label: "Automation Efficiency", value: "70%", icon: "zap" },
  { label: "Business Impact", value: "$60M+", icon: "trending-up" },
  { label: "Risk Reduction", value: "40%", icon: "lock" }
];

export const coreDomains = [
  {
    id: 1,
    title: "GRC & Audit Automation",
    description: "Enterprise-scale governance frameworks, internal audit programs, and compliance automation reducing manual effort by 70%.",
    icon: "clipboard-check",
    frameworks: ["ISO 27001", "ISO 27005", "NIST CSF", "CIS v8.1"]
  },
  {
    id: 2,
    title: "AI Governance & Model Risk",
    description: "NIST AI RMF implementation, Responsible AI policies, model risk management, and ethical AI frameworks.",
    icon: "brain",
    frameworks: ["NIST AI RMF", "ISO 42001", "OWASP Top 10 LLM", "Responsible AI"]
  },
  {
    id: 3,
    title: "Cloud & IAM Security",
    description: "Multi-cloud security architecture across AWS, Azure, and GCP with 90% compliance maturity in access management.",
    icon: "cloud",
    frameworks: ["AWS Security", "Azure Security", "GCP Security", "IAM Best Practices"]
  },
  {
    id: 4,
    title: "Data Center Transformation",
    description: "Led $60-70M infrastructure modernization programs achieving 70% operational efficiency and $50M+ revenue enablement.",
    icon: "server",
    frameworks: ["ITIL", "Infrastructure Design", "Migration Strategy", "DR/Backup"]
  },
  {
    id: 5,
    title: "Compliance & Audit Readiness",
    description: "PCI DSS, SOC 1/2, ISO 27001 programs achieving zero non-conformities and protecting $25M+ in contracts.",
    icon: "file-check",
    frameworks: ["PCI DSS", "SOC 1/2", "ISO 27001", "ITGC"]
  },
  {
    id: 6,
    title: "Pre-Sales & Advisory",
    description: "Strategic pre-sales engagements translating business requirements into solutions, supporting $70M+ in revenue growth.",
    icon: "briefcase",
    frameworks: ["Solution Architecture", "Risk Assessment", "Delivery Models", "Executive Briefings"]
  }
];

export const projects = [
  {
    id: 1,
    title: "AI Governance Framework Implementation",
    category: "AI Risk & Model Governance",
    company: "Libra Software Group",
    duration: "2025",
    description: "Designed and operationalized enterprise-wide AI governance framework mapped to NIST AI RMF, establishing Responsible AI policies covering ethical use, data annotation standards, and model security controls.",
    businessProblem: "Growing AI adoption without standardized governance created compliance gaps and model risk exposure across the organization.",
    outcomes: [
      "40% reduction in model-related compliance findings",
      "Established RBAC, immutable logging, and version lineage controls",
      "60% improvement in organizational AI literacy",
      "Created dataset provenance tracking and fairness assessment frameworks"
    ],
    frameworks: ["NIST AI RMF", "ISO 42001", "OWASP Top 10 LLM", "Responsible AI Principles"],
    technologies: ["Python", "MLOps", "Model Monitoring", "Audit Logging"],
    impact: "$20M in cost avoidance"
  },
  {
    id: 2,
    title: "AWS Audit & Compliance Automation",
    category: "Audit Automation",
    company: "Libra Software Group",
    duration: "2025",
    description: "Planned and executed end-to-end automation of AWS audit and compliance processes, embedding risk governance into KPIs, timelines, and delivery workflows.",
    businessProblem: "Manual audit processes consumed excessive resources and delayed compliance validation across cloud infrastructure.",
    outcomes: [
      "70% reduction in manual audit effort",
      "25% improvement in audit readiness KPIs",
      "Automated evidence collection and control validation",
      "Real-time compliance dashboards for executive visibility"
    ],
    frameworks: ["ISO 27005", "AWS Well-Architected", "CIS AWS Foundations"],
    technologies: ["AWS Config", "Lambda", "Python", "CloudWatch", "Security Hub"],
    impact: "$5M annual operational savings"
  },
  {
    id: 3,
    title: "Multi-Cloud Security Control Uplift",
    category: "Cloud Security Architecture",
    company: "Libra Software Group",
    duration: "2024-2025",
    description: "Served as Global GRC Program Lead for cloud security controls across Azure, Google Cloud, and AWS, managing design, validation, and testing across 18 business units in Canada and USA.",
    businessProblem: "Inconsistent security controls across multi-cloud environments created audit gaps and increased risk exposure for $100M+ operations.",
    outcomes: [
      "90% compliance maturity in Access Management and Backup/DR",
      "25% reduction in audit delays",
      "$20M in cost avoidance and uptime assurance",
      "Standardized security controls across 18 business units"
    ],
    frameworks: ["ISO 27001", "NIST CSF", "CIS Controls", "Cloud Security Alliance"],
    technologies: ["Azure Security Center", "AWS Security Hub", "GCP Security Command Center"],
    impact: "$100M+ revenue protection"
  },
  {
    id: 4,
    title: "Enterprise IAM & Access Governance",
    category: "Identity & Access Management",
    company: "Libra Software Group & Deutsche Bank",
    duration: "2021-2025",
    description: "Directed enterprise-wide control uplift and remediation programs for Access Management, including Active Directory closure audits and privileged access management.",
    businessProblem: "Access governance gaps and excessive privileges created security vulnerabilities and audit findings across global operations.",
    outcomes: [
      "90% compliance maturity in access management",
      "30% reduction in access-related risks",
      "70% reduction in access escalation risks",
      "95% compliance in privileged access management"
    ],
    frameworks: ["ISO 27001", "NIST", "RBAC", "Least Privilege Principles"],
    technologies: ["Active Directory", "IAM Tools", "PAM Solutions", "SIEM"],
    impact: "$30M in control uplift programs"
  },
  {
    id: 5,
    title: "Data Center Transformation Program",
    category: "Infrastructure Modernization",
    company: "MasterCard Technologies & Infosys",
    duration: "2018-2021",
    description: "Program-managed global Data Center Transformation initiatives valued at $60-70M, overseeing end-to-end delivery, governance, and infrastructure design across APAC, EMEA, and USA regions.",
    businessProblem: "Legacy data center infrastructure limited scalability, increased operational costs, and hindered digital transformation initiatives.",
    outcomes: [
      "70% operational efficiency improvement",
      "$50M+ revenue enablement",
      "20% cost reduction with $50M net profit",
      "Seamless multi-phase migration with zero business disruption"
    ],
    frameworks: ["ITIL", "Infrastructure Best Practices", "Migration Frameworks"],
    technologies: ["Virtualization", "Cloud Migration", "Network Architecture", "DR Solutions"],
    impact: "$60-70M program value"
  },
  {
    id: 6,
    title: "PCI DSS & SOC Compliance Programs",
    category: "Compliance Frameworks",
    company: "Infosys & Wipro",
    duration: "2014-2020",
    description: "Orchestrated PCI DSS, SOC 1, and SOC 2 compliance programs achieving zero non-conformities and safeguarding enterprise client contracts valued at $25M+.",
    businessProblem: "Regulatory compliance requirements threatened contract renewals and created audit exposure for payment processing environments.",
    outcomes: [
      "Zero non-conformities in PCI DSS and SOC audits",
      "$25M+ in protected client contracts",
      "20% cost reduction in compliance operations",
      "$60M revenue growth enabled through compliance certification"
    ],
    frameworks: ["PCI DSS", "SOC 1", "SOC 2", "ISO 27001"],
    technologies: ["Payment Security", "Encryption", "Network Segmentation", "Logging & Monitoring"],
    impact: "$25M+ contract protection"
  },
  {
    id: 7,
    title: "Enterprise Risk & Vulnerability Management",
    category: "Risk Management",
    company: "Deutsche Bank",
    duration: "2021-2024",
    description: "Directed enterprise-wide risk remediation and vulnerability management initiatives, identifying and prioritizing critical vulnerabilities across enterprise systems.",
    businessProblem: "Fragmented vulnerability management resulted in delayed remediation and increased security incidents across $25M+ operations.",
    outcomes: [
      "40% reduction in critical risks",
      "30% reduction in security incidents",
      "50% reduction in high-risk anomalies",
      "$15M+ in potential loss prevention"
    ],
    frameworks: ["NIST CSF", "Risk Management Framework", "Vulnerability Management"],
    technologies: ["Vulnerability Scanners", "SIEM", "Threat Intelligence", "Risk Analytics"],
    impact: "$25M revenue protection"
  },
  {
    id: 8,
    title: "Internal Audit Program Development",
    category: "Audit & Assurance",
    company: "Libra Software Group & MasterCard",
    duration: "2020-2025",
    description: "Developed and institutionalized internal audit programs, delivered auditor training on ITGCs, and introduced automated compliance tools.",
    businessProblem: "Lack of standardized audit processes resulted in inconsistent findings, extended audit cycles, and compliance gaps.",
    outcomes: [
      "70% improvement in evaluation efficiency",
      "$5M annual operational savings",
      "40% reduction in non-conformities",
      "25% faster audit processes with improved accuracy"
    ],
    frameworks: ["ITGC", "ISO 27001", "Audit Standards", "Risk-Based Auditing"],
    technologies: ["Audit Automation Tools", "GRC Platforms", "Analytics"],
    impact: "$8M cumulative savings"
  },
  {
    id: 9,
    title: "Cybersecurity Awareness & Incident Response",
    category: "Security Operations",
    company: "Multiple Organizations",
    duration: "2014-2025",
    description: "Championed organization-wide cybersecurity awareness programs, tabletop exercises, and incident response operations achieving 95% SLA adherence.",
    businessProblem: "Low security awareness and inconsistent incident response capabilities increased breach risk and response times.",
    outcomes: [
      "40% reduction in incident response time",
      "30% reduction in security incidents",
      "95% SLA adherence in incident management",
      "25% reduction in security breaches through awareness training"
    ],
    frameworks: ["NIST Incident Response", "ISO 27035", "Security Awareness Standards"],
    technologies: ["SIEM", "Incident Response Tools", "Training Platforms"],
    impact: "Minimized potential revenue loss from downtime"
  }
];

export const experience = [
  {
    id: 1,
    company: "Libra Software Group",
    role: "GRC Architect",
    duration: "April 2025 - Present",
    location: "Global",
    highlights: [
      "Led AI governance framework implementation (NIST AI RMF)",
      "Automated AWS audit processes reducing manual effort by 70%",
      "Achieved 90% compliance maturity in multi-cloud security",
      "Protected $100M+ in annual revenue through control uplift programs"
    ]
  },
  {
    id: 2,
    company: "Deutsche Bank",
    role: "Information Security Consultant",
    duration: "July 2021 - April 2024",
    location: "Global",
    highlights: [
      "Reduced security incidents by 30% protecting $15M+ operations",
      "Cut critical risks by 40% safeguarding $25M in revenue",
      "Achieved 90% control adherence improving audit ratings",
      "Engineered AI audit frameworks for model governance"
    ]
  },
  {
    id: 3,
    company: "MasterCard Technologies",
    role: "Senior Technical Consultant",
    duration: "Jan 2020 - July 2021",
    location: "APAC, EMEA, USA",
    highlights: [
      "Program-managed $60-70M data center transformation",
      "Achieved 70% operational efficiency and $50M+ revenue enablement",
      "Streamlined audit processes by 25% saving $5M",
      "Delivered 20% cost reduction with $50M net profit"
    ]
  },
  {
    id: 4,
    company: "Infosys Ltd",
    role: "Technology Information Consultant",
    duration: "July 2018 - Jan 2020",
    location: "Global",
    highlights: [
      "Achieved zero non-conformities in PCI DSS and SOC audits",
      "Protected $25M+ in enterprise client contracts",
      "Led $60M data center transformation with 20% cost reduction",
      "Reduced access-related risks by 30% ensuring ISO/NIST alignment"
    ]
  },
  {
    id: 5,
    company: "Wipro Technologies",
    role: "Senior Consultant - Technology Management",
    duration: "July 2014 - Jan 2017",
    location: "Global",
    highlights: [
      "Reduced security incidents by 30% enhancing operational resilience",
      "Improved regulatory readiness with 20% reduction in audit discrepancies",
      "Boosted workforce vigilance reducing breaches by 25%"
    ]
  }
];

export const research = [
  {
    id: 1,
    type: "Speaking Engagement",
    title: "Quantum Security and Medical Privacy Risks",
    venue: "IEEE Iowa Conference",
    description: "Led technical session on post-quantum threats and healthcare data protection strategies.",
    topics: ["Quantum Security", "Medical Privacy", "Post-Quantum Cryptography", "Healthcare Security"]
  },
  {
    id: 2,
    type: "Research Publication",
    title: "AI in Network Security: DDoS Detection",
    venue: "Scopus Peer-Reviewed Journal",
    description: "Authored research on machine learning applications for distributed denial-of-service attack detection and mitigation.",
    topics: ["AI/ML Security", "DDoS Detection", "Network Security", "Threat Detection"]
  }
];

export const certifications = [
  {
    id: 1,
    name: "CRISC",
    fullName: "Certified in Risk and Information Systems Control",
    issuer: "ISACA",
    status: "Active"
  },
  {
    id: 2,
    name: "CISA",
    fullName: "Certified Information Systems Auditor",
    issuer: "ISACA",
    status: "Previously Certified"
  },
  {
    id: 3,
    name: "CISM",
    fullName: "Certified Information Security Manager",
    issuer: "ISACA",
    status: "Previously Certified"
  },
  {
    id: 4,
    name: "PMP",
    fullName: "Project Management Professional",
    issuer: "PMI",
    status: "Previously Certified"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in IT Management",
    major: "Cybersecurity & Analytics",
    school: "Oakland University, Michigan",
    gpa: "3.90/4.00",
    year: "Expected Nov 2025"
  },
  {
    id: 2,
    degree: "Master of Business Administration",
    school: "Mumbai University",
    year: "2016"
  },
  {
    id: 3,
    degree: "Bachelor of Engineering",
    major: "Electronics & Telecommunications",
    school: "Pune University",
    gpa: "3.10/4.00",
    year: "2006"
  }
];

export const techStack = {
  cloudSecurity: ["AWS Security Hub", "Azure Security Center", "GCP Security Command Center", "Multi-Cloud Governance"],
  governance: ["NIST AI RMF", "ISO 27001/27005/42001", "NIST CSF", "CIS v8.1", "PCI DSS", "SOC 1/2"],
  automation: ["Python", "AWS Lambda", "Automation Scripts", "GRC Platforms", "Audit Tools"],
  iam: ["Active Directory", "RBAC", "PAM Solutions", "IAM Frameworks", "Least Privilege"],
  security: ["SIEM", "Vulnerability Management", "Threat Intelligence", "Encryption", "Network Security"],
  aiGovernance: ["Model Risk Management", "Responsible AI", "OWASP Top 10 LLM", "ML Audit Frameworks"]
};

export const hiringManagerSummary = [
  {
    role: "CISO / VP Security",
    value: "Proven track record building enterprise security programs that reduced incidents by 30% and protected $100M+ in revenue. Ready to lead organization-wide security transformation from day one.",
    first90Days: [
      "Assess current security posture and identify critical gaps",
      "Establish executive-level security metrics and dashboards",
      "Build stakeholder relationships with C-suite and board",
      "Prioritize quick wins in compliance and risk reduction"
    ]
  },
  {
    role: "GRC Architect / Director of Risk",
    value: "18+ years designing and implementing GRC frameworks achieving 95% compliance improvement and $50M+ in cost avoidance. Expert in multi-cloud security and audit automation.",
    first90Days: [
      "Review and enhance enterprise risk management framework",
      "Implement automated compliance monitoring",
      "Align security controls with business objectives",
      "Establish risk reporting for executive leadership"
    ]
  },
  {
    role: "Internal Audit Manager / CAE",
    value: "Built internal audit programs from ground up, improving efficiency by 70% and reducing non-conformities by 40%. Deep expertise in ITGC and compliance audits.",
    first90Days: [
      "Evaluate current audit program maturity",
      "Implement risk-based audit methodology",
      "Introduce audit automation and efficiency tools",
      "Strengthen relationships with audit committee"
    ]
  },
  {
    role: "AI Governance Lead / Chief AI Risk Officer",
    value: "Pioneer in AI governance implementing NIST AI RMF frameworks that reduced model-related findings by 40%. Expert in Responsible AI and model risk management.",
    first90Days: [
      "Establish AI governance framework and policies",
      "Implement model risk management program",
      "Create AI ethics and responsible use guidelines",
      "Build AI audit and monitoring capabilities"
    ]
  }
];