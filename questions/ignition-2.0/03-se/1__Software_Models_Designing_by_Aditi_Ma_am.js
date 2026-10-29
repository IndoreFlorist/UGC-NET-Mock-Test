var rawQuestions = [
    {
        q: "Which of the following represents the life-cycle of software development ?",
        opts: ["a) Analysis -> Design -> Coding -> testing -> operation and maintenance", "b) Analysis -> Design -> Coding -> operation and maintenance -> testing", "c) Design -> Analysis -> Coding -> testing -> operation and maintenance", "d) Design -> Analysis -> Coding -> operation and maintenance -> testing"],
        ans: 0,
        exp: "<b>a) Analysis -> Design -> Coding -> testing -> operation and maintenance</b><br>Various phases of the software development life cycle are:<br>1) Analysis: First thing is to gather and analyze the requirements of the system. The information domain, function, behavioral requirements of the system are understood. These requirements are then well documented.<br>2) Design: After collecting and analyzing all necessary requirements, design architecture is prepared.<br>3) Coding: After the design, one can develop the code for the system using some programming language. During this, design is translated into a machine-readable form.<br>4) Testing: It is done to uncover the errors and fix the bugs.<br>5) Maintenance: Sometimes errors may get produced after system installation and sometimes the requirements get changed. At that time, the maintenance of the system is needed."
    },
    {
        q: "Match the following:<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Set – I</b></td><td><b>Set – II</b></td></tr><tr><td>(1) Waterfall model</td><td>(a) Specifications can be developed incrementally</td></tr><tr><td>(2) Evolutionary model</td><td>(b) Re-usability in development</td></tr><tr><td>(3) Component-based software engineering</td><td>(c) Explicit recognition of risk</td></tr><tr><td>(4) Spiral development</td><td>(d) Inflexible partitioning of the project into stages</td></tr></table>",
        opts: ["a) (1) - (a), (2) - (b), (3) - (c), (4) - (d)", "b) (1) - (d), (2) - (a), (3) - (b), (4) - (c)", "c) (1) - (d), (2) - (b), (3) - (a), (4) - (c)", "d) (1) - (c), (2) - (a), (3) - (b), (4) - (d)"],
        ans: 1,
        exp: "<b>b) (1) - (d), (2) - (a), (3) - (b), (4) - (c)</b><br>Waterfall model - inflexible partitioning of the project into stages; Evolutionary model - specifications can be developed incrementally; Component-based software engineering - re-usability in development; Spiral development - explicit recognition of risk."
    },
    {
        q: "Which of the following CANNOT be called a software life cycle model?",
        opts: ["a) Capability Maturity Model", "b) Waterfall Model", "c) Prototyping Model", "d) Rapid Application Development"],
        ans: 0,
        exp: "<b>a) Capability Maturity Model</b><br>• The Capability Maturity Model (CMM) is a methodology used to develop and refine an organization's software development process. The model describes a five-level evolutionary path of increasingly organized and systematically more mature processes.<br>• The Waterfall model is a breakdown of project activities into linear sequential phases, where each phase depends on the deliverables of the previous one and corresponds to a specialization of tasks.<br>• The Prototyping model is a systems development method in which a prototype is built, tested, and then reworked as necessary until an acceptable outcome is achieved from which the complete system or product can be developed.<br>• Rapid Application Development (RAD) is a form of agile software development methodology that prioritizes rapid prototype releases and iterations. Unlike the Waterfall method, RAD emphasizes the use of software and user feedback over strict planning and requirements recording."
    },
    {
        q: "In the V-Model, what is the relationship between testing and development phases?",
        opts: ["a) They are performed simultaneously", "b) Testing follows development", "c) Development follows testing", "d) They are independent of each other"],
        ans: 1,
        exp: "<b>b) Testing follows development</b><br>"
    },
    {
        q: "Which of the following software process model gives explicit recognition of risk ?",
        opts: ["a) Waterfall Model", "b) Incremental Development Model", "c) Spiral Model", "d) None of the above"],
        ans: 2,
        exp: "<b>c) Spiral Model</b><br>"
    },
    {
        q: "Requirements prioritization and negotiation belongs to:",
        opts: ["(A) Requirements validation", "(B) Requirements elicitation", "(C) Feasibility Study", "(D) Requirement reviews"],
        ans: 1,
        exp: "<b>(B) Requirements elicitation</b><br>Requirements elicitation practices include interviews, questionnaires, user observation, workshops, brainstorming, use cases, role playing and prototyping. Before requirements can be analyzed, modeled, or specified they must be gathered through an elicitation process."
    },
    {
        q: "A software requirements specification (SRS) document should avoid discussing which one of the following?",
        opts: ["a) User interface issues", "b) Non-functional requirements", "c) Design specification", "d) None of the above"],
        ans: 2,
        exp: "<b>c) Design specification</b><br>• Software requirement specification (SRS) is a description of a software system to be developed.<br>• Specification types that are included are functional, non-functional, interfaces, performance, maintainability etc.<br>• But design specification is not included in software requirement specification. Design is something related to implementation."
    },
    {
        q: "What is another name for Level 0-DFD?",
        opts: ["a) Flow diagram", "b) E-R diagram", "c) Context diagram", "d) None of the above"],
        ans: 2,
        exp: "<b>c) Context diagram</b><br><b>0-Level DFD (Context Diagram)</b><br>• Represents the entire system as a single process.<br>• Shows interaction with external entities (e.g., users, other systems).<br>• Illustrates data inflows and outflows only.<br>• No internal process details are shown.<br>• Also called the Context Diagram.<br><br><b>1-Level DFD</b><br>• Breaks the main process from Level 0 into sub-processes.<br>• Shows data stores and data flows between sub-processes.<br>• Provides a functional overview of the system.<br>• Expands the Context Diagram into multiple bubbles/processes.<br><br><b>2-Level DFD</b><br>• Further decomposes the Level 1 sub-processes into smaller components.<br>• Provides greater detail for each sub-process.<br>• Useful for understanding specific parts of the system in depth.<br><br><b>3-Level DFD</b><br>• Most detailed level of DFD.<br>• Breaks down Level 2 processes into even smaller processes.<br>• Includes detailed data flows, stores, and process logic.<br>• Used for complex systems requiring a deep understanding."
    },
    {
        q: "The selection of Spiral Model based on characteristics of requirements:<br><br>(A) Are requirements easily understandable and defined?<br>(B) Do we change requirements quite often?<br>(C) Can we define requirements early in the cycle?<br>(D) Requirements are indicating a complex to be built<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) (C) Only", "(2) (B) Only", "(3) (B) and (D) Only", "(4) (A) and (C) Only"],
        ans: 2,
        exp: "<b>(3) (B) and (D) Only</b><br>The Spiral Model in software development is a risk-driven model which involves four phases: planning, risk analysis, engineering and evaluation. This model is ideal for large, complex and innovative projects where the requirements might not be clearly defined upfront or are highly likely to evolve during the course of the project.<br><br>(B) Do we change requirements quite often? - This indeed aligns with the Spiral Model as changes can be introduced in the system in the subsequent phases, making it highly flexible.<br>(D) Requirements are indicating a complex to be built - Spiral model is suitable for complex projects as the risk analysis phase allows for thorough identification and mitigation of any potential issues, especially important in a complex project."
    },
    {
        q: "Which of the following UML diagrams has a static view ?",
        opts: ["a) Collaboration diagram", "b) Use-Case diagram", "c) State chart diagram", "d) Activity diagram"],
        ans: 1,
        exp: "<b>b) Use-Case diagram</b><br>UML (Unified Modeling Language) diagrams can be categorized into two main types: structural diagrams (which present a static view of the system) and behavioral diagrams (which represent the dynamic aspects).<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Diagram</b></td><td><b>Static or Behavioral</b></td><td><b>Description</b></td></tr><tr><td>Class diagram</td><td>Static</td><td>Shows the classes, attributes, and methods in a system</td></tr><tr><td>Component diagram</td><td>Static</td><td>Shows the components in a system and their relationships</td></tr><tr><td>Deployment diagram</td><td>Static</td><td>Shows how the components in a system are deployed</td></tr><tr><td>Use-case diagram</td><td>Static</td><td>Shows the actors, use cases, and relationships between them in a system</td></tr><tr><td>Sequence diagram</td><td>Behavioral</td><td>Shows the interactions between objects in a system over time</td></tr><tr><td>Activity diagram</td><td>Static or Behavioral</td><td>Can be used to show the static structure of a system's workflow or the dynamic behavior of the workflow</td></tr><tr><td>State chart diagram</td><td>Behavioral</td><td>Shows the states that an object can be in and the transitions between those states</td></tr></table>"
    },
    {
        q: "In context of requirement analysis in software engineering, which of the following is not a type of 'non functional requirements'?",
        opts: ["a) Product Requirements", "b) Organizational Requirements", "c) External Requirements", "d) Umbrella Requirements"],
        ans: 3,
        exp: "<b>d) Umbrella Requirements</b><br>Non-functional requirements are classified into three types:<br>• Product requirements - portability, reliability, usability, efficiency (space and performance requirements)<br>• Organisational requirements - delivery, implementation and standards requirements<br>• External requirements - ethical, interoperability and legislative requirements (safety and privacy requirements)<br>'Umbrella Requirements' is not a type of non-functional requirement."
    },
    {
        q: "Which one of the following is TRUE?",
        opts: ["a) The requirements document also describes how the requirements that are listed in the document are implemented efficiently.", "b) Consistency and completeness of functional requirements are always achieved in practice.", "c) Prototyping is a method of requirements validation", "d) Requirements review is carried out to find the errors in system design"],
        ans: 2,
        exp: "<b>c) Prototyping is a method of requirements validation</b><br>"
    },
    {
        q: "The lower degree of cohesion is kind of:",
        opts: ["a) Logical Cohesion", "b) Coincidental Cohesion", "c) Procedural Cohesion", "d) Communicational Cohesion"],
        ans: 1,
        exp: "<b>b) Coincidental Cohesion</b><br>Types of cohesion, from high to low: Function, Sequence, Communicational, Procedural, Temporal, Logical, Coincidental. Coincidental cohesion is the lowest."
    },
    {
        q: "The following figure represents access graphs of two modules M1 and M2. The filled circles represent methods and the unfilled circles represent attributes. If method m is moved to module M2 keeping the attributes where they are, what can we say about the average cohesion and coupling between modules in the system of two modules?<br>[Figure: access graphs of Module M1 and Module M2]",
        opts: ["a) There is no change", "b) Average cohesion goes up but coupling is reduced.", "c) Average cohesion goes down and coupling also reduces", "d) Average cohesion and coupling increase."],
        ans: 0,
        exp: "<b>a) There is no change</b><br>Coupling = number of external links / number of modules = 2/2<br>Cohesion of a module = number of internal links / number of methods<br>Before moving m: Cohesion of M1 = 8/4; Cohesion of M2 = 6/3; Average cohesion = 2<br>After moving method m to M2: Coupling = 2/2; Cohesion of M1 = 6/3; Cohesion of M2 = 8/4; Average cohesion = 2<br>Therefore, there is no change."
    },
    {
        q: "How do you create agile processes to manage unpredictability?<br><br>A. Requirements gathering must be conducted very carefully.<br>B. Risk analysis must be conducted before planning takes place.<br>C. Software increments must be delivered in short time periods.<br>D. Software processes must not adapt to changes incrementally.<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A only", "2. B only", "3. C only", "4. D only"],
        ans: 2,
        exp: "<b>3. C only</b><br>▪ In the Agile model, the requirements are decomposed into many small parts that can be incrementally developed.<br>▪ The Agile model adopts Iterative development. Each incremental part is developed over an iteration.<br>▪ Each iteration is intended to be small and easily manageable and can be completed within a couple of weeks only.<br>▪ At a time one iteration is planned, developed, and deployed to the customers.<br>▪ Long-term plans are not made."
    },
    {
        q: "What is the appropriate pairing of items in the two columns listing various activities encountered in a software life cycle?<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td>P. Requirements Capture</td><td>1. Module Development and Integration</td></tr><tr><td>Q. Design</td><td>2. Domain Analysis</td></tr><tr><td>R. Implementation</td><td>3. Structural and Behavioral Modeling</td></tr><tr><td>S. Maintenance</td><td>4. Performance Tuning</td></tr></table>",
        opts: ["a) P-3, Q-2, R-4, S-1", "b) P-2, Q-3, R-1, S-4", "c) P-3, Q-2, R-1, S-4", "d) P-2, Q-3, R-4, S-1"],
        ans: 1,
        exp: "<b>b) P-2, Q-3, R-1, S-4</b><br>"
    },
    {
        q: "The coupling between different modules of a software is categorized as follows:<br>I. Content coupling<br>II. Common coupling<br>III. Control coupling<br>IV. Stamp coupling<br>V. Data coupling<br><br>Coupling between modules can be ranked in the order of strongest (least desirable) to weakest (most desirable) as follows:",
        opts: ["a) I-II-III-IV-V", "b) V-IV-III-II-I", "c) I-III-V-II-IV", "d) IV-II-V-III-I"],
        ans: 0,
        exp: "<b>a) I-II-III-IV-V</b><br>Types of coupling, from worst to best: Content coupling, Common coupling, External coupling, Control coupling, Stamp coupling, Data coupling."
    },
    {
        q: "Activities which ensure that the software that has been built, is traceable to customer requirement is covered as part of",
        opts: ["a) Verification", "b) Validation", "c) Maintenance", "d) Modeling"],
        ans: 1,
        exp: "<b>b) Validation</b><br>• The process of evaluating software during the development process or at the end of the development process to determine whether it satisfies specified business requirements.<br>• Validation Testing ensures that the product actually meets the client's needs. It can also be defined as to demonstrate that the product fulfills its intended use when deployed on appropriate environment.<br>• It answers to the question, Are we building the right product?<br><br><b>Verification Testing</b><br>• Verification is the process of evaluating work-products of a development phase to determine whether they meet the specified requirements.<br>• Verification ensures that the product is built according to the requirements and design specifications. It also answers to the question, Are we building the product right?"
    },
    {
        q: "Which of the following statements are TRUE?<br>I. The context diagram should depict the system as a single bubble.<br>II. External entities should be identified clearly at all levels of DFDs.<br>III. Control information should not be represented in a DFD.<br>IV. A data store can be connected either to another data store or to an external entity.",
        opts: ["a) II and III", "b) II and III", "c) I and III", "d) I, II and III"],
        ans: 2,
        exp: "<b>c) I and III</b><br>"
    },
    {
        q: "Given below are two statements: one is labeled as Assertion A and the other is labelled as Reason R.<br><br>Assertion A: Cohesion is a qualitative indication of the degree to which a module can be written more compactly and is able to complete its function in a timely manner.<br>Reason R: Cohesion is a qualitative indication of the degree to which a module is connected to other modules and the outside world.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below.",
        opts: ["1. Both A and R are correct and R is the correct explanation of A.", "2. Both A and R are correct but R is NOT the correct explanation of A.", "3. A is correct but R is not correct.", "4. A is not correct but R is correct."],
        ans: 2,
        exp: "<b>3. A is correct but R is not correct.</b><br>Coupling refers to the degree of interdependence between software modules. High coupling means that modules are closely connected and changes in one module may affect other modules. Low coupling means that modules are independent and changes in one module have little impact on other modules.<br><br>Cohesion refers to the degree to which elements within a module work together to fulfill a single, well-defined purpose. High cohesion means that elements are closely related and focused on a single purpose, while low cohesion means that elements are loosely related and serve multiple purposes."
    },
    {
        q: "To create an object-behavioral model, the analyst performs the following steps:<br><br>(A) Evaluates all use-cases<br>(B) Builds state transition diagram for the system.<br>(C) Reviews the object behaviour model to verify accuracy and consistency<br>(D) Identifies events that do not derive the interaction sequence.<br><br>Choose the correct answer from the options given below:",
        opts: ["a) (A), (B) and (C) only", "b) (A), (B) and (D) only", "c) (B), (C) and (D) only", "d) (A), (C) and (D) only"],
        ans: 0,
        exp: "<b>a) (A), (B) and (C) only</b><br>The behavioral model indicates how the software will respond to external events. To create the model, the analyst must perform the following steps:<br>▪ Evaluate all use-cases to fully understand the sequence of interaction within the system.<br>▪ Identify events that drive the interaction sequence and understand how these events relate to specific objects.<br>▪ Create a sequence for each use-case. Build a state diagram for the system.<br>▪ Review the behavioral model to verify accuracy and consistency."
    },
    {
        q: "Which of the following statement(s) is/are true with respect to software architecture ?<br><br>S1 : Coupling is a measure of how well the things grouped together in a module belong together logically.<br>S2 : Cohesion is a measure of the degree of interaction between software modules.<br>S3 : If coupling is low and cohesion is high then it is easier to change one module without affecting others.",
        opts: ["a) Only S1 and S2", "b) Only S3", "c) All of S1, S2 and S3", "d) Only S1"],
        ans: 1,
        exp: "<b>b) Only S3</b><br>Coupling: Coupling is the measure of the degree of interdependence between the modules. A good software will have low coupling.<br><br>Cohesion: Cohesion is a measure of the degree to which the elements of the module are functionally related. It is the degree to which all elements directed towards performing a single task are contained in the component. Basically, cohesion is the internal glue that keeps the module together. A good software design will have high cohesion."
    },
    {
        q: "The extent to which the s/w can continue to operate correctly despite the introduction of invalid inputs is called as",
        opts: ["a) Reliability", "b) Robustness", "c) Fault tolerance", "d) Portability"],
        ans: 1,
        exp: "<b>b) Robustness</b><br>Robustness is the ability of a computer system to cope with errors during execution and cope with erroneous input.<br><br>Reliability is the probability of failure-free operation of a computer program for a specified period in a specified environment.<br><br>Fault tolerance is a process that enables an operating system to respond to a failure in hardware or software. This fault-tolerance definition refers to the system's ability to continue operating despite failures or malfunctions.<br><br>Portability is the possibility to use the same software in different environments."
    },
    {
        q: "Arrange the following so that they can be placed in perfect/appropriate order.<br><br>A. Planning<br>B. Construction<br>C. Modeling<br>D. Communication<br>E. Deployment<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) A, B, C, D, E", "(2) D, A, C, B, E", "(3) A, D, B, C, E", "(4) B, C, D, A, E"],
        ans: 1,
        exp: "<b>(2) D, A, C, B, E</b><br>▪ Communication: Effective communication often precedes planning.<br>▪ Planning: After understanding the context, planning comes next.<br>▪ Modeling: Once the plan is in place, modeling helps visualize the process.<br>▪ Construction: With a model, construction can begin.<br>▪ Deployment: Finally, deployment follows construction."
    },
    {
        q: "Which of the following are Agile Process Models?<br><br>(A) Extreme Programming (XP)<br>(B) Waterfall<br>(C) Scrum<br>(D) Spiral<br>(E) Incremental<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) (A) and (C) Only", "(2) (B) and (C) Only", "(3) (A) and (D) Only", "(4) (B) and (E) Only"],
        ans: 0,
        exp: "<b>(1) (A) and (C) Only</b><br>(A) Extreme Programming (XP): An Agile methodology focusing on frequent releases, customer feedback, and high adaptability.<br>(C) Scrum: A popular Agile framework that uses sprints to deliver small, incremental releases of software.<br><br><b>Excluded Options:</b><br>(B) Waterfall: A traditional, linear software development model, not part of Agile.<br>(D) Spiral: A risk-driven process model combining iterative and waterfall elements, but not classified as Agile.<br>(E) Incremental: While it emphasizes staged delivery, it is not inherently Agile unless paired with Agile practices like Scrum or XP."
    },
    {
        q: "Match List I with List – II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List - I (software design principles)</b></td><td><b>List - II (Definition)</b></td></tr><tr><td>(A) Cohesion</td><td>(I) Degree to which one module relies on another module.</td></tr><tr><td>(B) Coupling</td><td>(II) Dividing a software system into distinct modules.</td></tr><tr><td>(C) Abstration</td><td>(III) Degree to which elements of a module belong together.</td></tr><tr><td>(D) Modularity</td><td>(IV) Simplifying complex reality by modeling classes appropriate to the problem.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A)-(1), (B)-(II), (C)-(III), (D)-(IV)", "(2) (A)-(II), (B)-(III), (C)-(IV), (D)-(1)", "(3) (A)-(III), (B)-(1), (C)-(IV), (D)-(II)", "(4) (A)-(III), (B)-(IV), (C)-(II), (D)-(1)"],
        ans: 2,
        exp: "<b>(3) (A)-(III), (B)-(1), (C)-(IV), (D)-(II)</b><br>• (A) Cohesion - (III): Cohesion refers to the degree to which the elements of a module belong together, emphasizing how focused and related the tasks of a single module are.<br>• (B) Coupling - (I): Coupling is the degree to which one module relies on or is dependent on another module, with lower coupling being preferred for better modularity.<br>• (C) Abstraction - (IV): Abstraction simplifies complex reality by modeling classes or components appropriate to the problem while hiding unnecessary details.<br>• (D) Modularity - (II): Modularity involves dividing a software system into distinct modules or components to achieve separation of concerns and easier maintainability."
    },
    {
        q: "Arrange the following phases of the Agile process in the correct sequence:<br><br>(A) Design<br>(B) Release<br>(C) Testing<br>(D) Development<br>(E) Planning<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A), (B), (D), (E), (C)", "(2) (A), (D), (E), (B), (C)", "(3) (E), (A), (D), (C), (B)", "(4) (E), (D), (A), (C), (B)"],
        ans: 2,
        exp: "<b>(3) (E), (A), (D), (C), (B)</b><br>Agile methodologies are iterative and incremental, which means it's known for breaking a project into smaller parts and adjusting to changing requirements.<br>1. They prioritize flexibility, collaboration, and customer satisfaction.<br>2. Major companies like Facebook, Google, and Amazon use Agile because of its adaptability and customer-focused approach."
    },
    {
        q: "Arrange the following steps of Feature Drive Development (FDD) process in the correct sequence:<br>(A) Develop an overall model<br>(B) Build by feature<br>(C) Plan by feature<br>(D) Design by feature<br>(E) Build a feature list<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A), (C), (B), (E), (D)", "(2) (A), (E), (C), (D), (B)", "(3) (B), (A), (D), (E), (C)", "(4) (A), (B), (C), (E), (D)"],
        ans: 1,
        exp: "<b>(2) (A), (E), (C), (D), (B)</b><br>• (A) Develop an overall model: Start by understanding the domain and building an overall model of the system.<br>• (E) Build a feature list: Identify and list all the features required in the system.<br>• (C) Plan by feature: Create a plan for developing the features, including resource allocation and scheduling.<br>• (D) Design by feature: Design each feature before starting the implementation.<br>• (B) Build by feature: Finally, implement and build the features incrementally.<br><br><b>Feature-Driven Development (FDD):</b><br>• Agile Methodology: Designed to deliver tangible results in a structured manner.<br>• Focus on Features: Breaks down development into small, client-valued functions.<br>• Short Timeframe: Features are designed, developed, and tested iteratively and rapidly.<br>• Project Manager's Role: Oversees collaborative design processes; helps with feature prioritization and assigning class owners; ensures effective workflow and task assignments.<br>• Suited for Large Systems: Provides a reliable, predictable method for delivering high-quality software, especially in complex projects.<br>• Industry Applications: E-commerce websites, Banking applications, Customer relationship management (CRM) systems, Healthcare management platforms, Travel booking systems.<br>• Outcome: Ensures incremental and adaptive development with high-quality results."
    }
];