var rawQuestions = [
    {
        q: "Which of the followings is NOT a software characteristic?",
        opts: ["(1) Software does not wear out", "(2) Software is flexible", "(3) Software is not manufactured", "(4) Software is always correct"],
        ans: 3,
        exp: "<b>(4) Software is always correct</b>"
    },
    {
        q: "Which of the following are Agile Process Models?<br><br>(A) Extreme Programming (XP)<br>(B) Waterfall<br>(C) Scrum<br>(D) Spiral<br>(E) Incremental<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) (A) and (C) Only", "(2) (B) and (C) Only", "(3) (A) and (D) Only", "(4) (B) and (E) Only"],
        ans: 0,
        exp: "<b>(1) (A) and (C) Only</b><br>(A) Extreme Programming (XP): An Agile methodology focusing on frequent releases, customer feedback, and high adaptability.<br>(C) Scrum: A popular Agile framework that uses sprints to deliver small, incremental releases of software.<br><br>Excluded Options:<br>(B) Waterfall: A traditional, linear software development model, not part of Agile.<br>(D) Spiral: A risk-driven process model combining iterative and waterfall elements, but not classified as Agile.<br>(E) Incremental: While it emphasizes staged delivery, it is not inherently Agile unless paired with Agile practices like Scrum or XP."
    },
    {
        q: "The ratio of error found before s/w delivery and to the total errors (before and after) is called :",
        opts: ["(1) Accuracy", "(2) Specificity", "(3) Defect Removal efficiency", "(4) Through put"],
        ans: 2,
        exp: "<b>(3) Defect Removal efficiency</b><br>Defect Removal Efficiency (DRE) is the ratio of errors found before software delivery to the total number of errors (both before and after delivery). It measures the effectiveness of the defect detection and removal process during the development phase."
    },
    {
        q: "Arrange the steps of Mathematical Modeling:<br>A. Solution fitting with data<br>B. Formulation Mathematically<br>C. Solve Mathematically<br>D. Repeat formulation if it fit worst with data<br>E. Interpretation results<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) B, C, A, D, E", "(2) B, A, D, C, E", "(3) D, A, B, C, E", "(4) E, D, C, A, B"],
        ans: 0,
        exp: "<b>(1) B, C, A, D, E</b><br>B. Formulation Mathematically: Start by formulating the problem mathematically, establishing the model.<br>C. Solve Mathematically: Solve the mathematical model using appropriate methods.<br>A. Solution fitting with data: Fit the solution obtained to the actual data to check for consistency.<br>D. Repeat formulation if it fits worst with data: If the model doesn't fit the data well, refine or repeat the formulation step.<br>E. Interpretation of results: Finally, interpret the results of the model to understand its implications and make conclusions."
    },
    {
        q: "For the software quality assurance, which of the followings are correct?<br>A. Execution of code<br>B. No execution of code<br>C. Preventive technique<br>D. A corrective technique<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) A, B Only", "(2) B, C Only", "(3) C, D Only", "(4) D, A Only"],
        ans: 1,
        exp: "<b>(2) B, C Only</b><br>B. No execution of code: Some aspects of software quality assurance, like reviews, inspections, and static analysis, do not require code execution. These activities focus on detecting issues without running the software.<br>C. Preventive technique: Quality assurance primarily focuses on preventing defects and improving processes, making it a preventive technique aimed at avoiding issues during development.<br><br>Excluded Options:<br>A. Execution of code: While some quality assurance activities (like testing) involve executing code, this isn't the focus of all quality assurance activities.<br>D. A corrective technique: Corrective actions are typically associated with software testing or debugging, not the broad scope of quality assurance, which focuses more on prevention."
    },
    {
        q: "Which of the following is not the goal of reverse Engineering?",
        opts: ["(1) Cope with complexity", "(2) Recover lost information", "(3) Detect side effect", "(4) Data flow"],
        ans: 3,
        exp: "<b>(4) Data flow</b><br>Reverse Engineering Goals:<br>• Cope with Complexity: Helps in analyzing and controlling system complexity. Reveals details about system architecture, relationships, and design patterns.<br>• Recover Lost Information: Retrieves lost or unavailable information, such as source code and documentation. Rebuilds source code, analyzes data structures, and recovers design details.<br>• Detect Side Effects: Identifies unintended implications, dependencies, and interactions not obvious from documentation or original code.<br>• Synthesize Higher Abstraction: Abstracts low-level features to create higher-level representations. Facilitates easier communication and analysis by improving understanding of system functionality.<br>• Facilitate Reuse: Identifies reusable components or modules in existing systems. Enhances efficiency and reduces development time by repurposing parts for other projects."
    },
    {
        q: "Arrange the following so that they can be placed in perfect/appropriate order.<br>A. Planning<br>B. Construction<br>C. Modeling<br>D. Communication<br>E. Deployment<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) A, B, C, D, E", "(2) D, A, C, B, E", "(3) A, D, B, C, E", "(4) B, C, D, A, E"],
        ans: 1,
        exp: "<b>(2) D, A, C, B, E</b><br>• D. Communication: Start with communication to understand the requirements and establish the foundation for the project.<br>• A. Planning: Once the communication is clear, the next step is planning how the project will be executed.<br>• C. Modeling: After planning, modeling the system helps to visualize and refine the solution.<br>• B. Construction: This phase involves actual coding and development of the system based on the models.<br>• E. Deployment: Finally, once the system is developed, it is deployed for use."
    },
    {
        q: "The cyclomatic complexity of the following flow graph is:<br><br>(Flow graph with nodes 1, 2, 3, 4, 5, 6, 7, 9, 10 and directed edges: 1→2, 1→10, 2→3, 2→4, 4→5, 4→6, 5→7, 6→7, 7→9, 3→9, 9→1)",
        opts: ["(1) 3", "(2) 4", "(3) 10", "(4) 2"],
        ans: 1,
        exp: "<b>(2) 4</b><br>There are 3 commonly used methods for calculating the cyclomatic complexity:<br>▪ Cyclomatic Complexity = Total number of closed regions in the control flow graph + 1<br>▪ Cyclomatic Complexity = E – N + 2<br>Here, E = Total number of edges in the control flow graph, N = Total number of nodes in the control flow graph<br>▪ Cyclomatic Complexity = P + 1<br>Here, P = Total number of predicate nodes contained in the control flow graph<br><br>Here E = 11, N = 9, so 11 – 9 + 2 = 4 (also P = 3 predicate nodes (1, 2, 4), so P + 1 = 4)."
    },
    {
        q: "Which of the followings are White box Testing?<br>A. Path Testing<br>B. Loop Testing<br>C. Regression Testing<br>D. Non functional Testing<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) A and B Only", "(2) Band C Only", "(3) C and D Only", "(4) A and D Only"],
        ans: 0,
        exp: "<b>(1) A and B Only</b><br>A. Path Testing: White-box testing technique that focuses on testing the different paths of the code, ensuring all possible execution paths are covered.<br><br>B. Loop Testing: A white-box testing method that specifically focuses on testing loops within the code to ensure they function as expected under various conditions.<br><br>Types of Testing:<br>Black Box / Functional / Behavioral / I/O driven Testing: Equivalence class Testing, Boundary Value Testing, Acceptance Testing (Alpha Testing, Beta Testing), State based Testing, Cause Effect Testing, Pair Wise Testing.<br>White Box / Implementation / Structural / Logic-driven / Glass box Testing: Control Flow Testing, Data Flow Testing, Basic Path Testing, Statement Coverage, Branch Coverage, Path Coverage."
    },
    {
        q: "Match List-I with List-II:<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List – I</b></td><td><b>List - II</b></td></tr><tr><td>A. Verification</td><td>I. White box Testing</td></tr><tr><td>B. Validation</td><td>II. Black box Testing</td></tr><tr><td>C. Internal logic exercise</td><td>III. Quality Control</td></tr><tr><td>D. Software requirement exercise</td><td>IV. Quality Assurance</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(1) A-IV, B-III, C-I, D-II", "(2) A-I, B-II, C-III, D-IV", "(3) A-IV, B-III, C-II, D-I", "(4) A-III, B-IV, C-I, D-II"],
        ans: 0,
        exp: "<b>(1) A-IV, B-III, C-I, D-II</b><br>• A. Verification - IV (Quality Assurance): Verification ensures that the product is being built correctly by checking processes, documentation, and standards. It focuses on prevention and is part of quality assurance.<br>• B. Validation - III (Quality Control): Validation ensures that the product meets user requirements and functions as expected. It focuses on detecting defects and is part of quality control.<br>• C. Internal logic exercise - I (White Box Testing): This involves testing the internal logic and structure of the code, which is the primary focus of white-box testing.<br>• D. Software requirement exercise - II (Black Box Testing): This involves testing the software based on requirements and specifications without considering the internal logic, which aligns with black-box testing.<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b></b></td><td><b>Verification</b></td><td><b>Validation</b></td></tr><tr><td>Definition</td><td>Set of activities that ensure software correctly implements the specific function</td><td>Set of activities that ensure that the software that has been built is traceable to customer requirements</td></tr><tr><td>Focus</td><td>Checking documents, designs, codes, and programs</td><td>Testing and validating the actual product</td></tr><tr><td>Type of Testing</td><td>Static testing</td><td>Dynamic testing</td></tr><tr><td>Execution</td><td>Does not include the execution of the code</td><td>Includes the execution of the code</td></tr><tr><td>Methods Used</td><td>Reviews, walkthroughs, inspections and desk-checking</td><td>Black Box Testing, White Box Testing and non-functional testing</td></tr><tr><td>Purpose</td><td>Checks whether the software conforms to specifications or not</td><td>Checks whether the software meets the requirements and expectations of a customer or not</td></tr><tr><td>Bug</td><td>Can find the bugs in the early stage of the development</td><td>Can only find the bugs that could not be found by the verification process</td></tr><tr><td>Goal</td><td>Application and software architecture and specification</td><td>An actual product</td></tr><tr><td>Responsibility</td><td>Quality assurance team</td><td>Testing team</td></tr><tr><td>Timing</td><td>Comes before validation</td><td>Comes after verification</td></tr><tr><td>Human or Computer</td><td>Performed by human</td><td>Performed by computer</td></tr></table><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Parameters</b></td><td><b>Black Box Testing</b></td><td><b>White Box Testing</b></td></tr><tr><td>Definition</td><td>Internal structure or the code of the program is hidden and nothing is known about it</td><td>Tester has knowledge about the internal structure or the code of the program</td></tr><tr><td>Testing objectives</td><td>Testing the functionality of the software, ensuring it meets requirements and specifications</td><td>Ensuring that the internal code of the software is correct and efficient</td></tr><tr><td>Testing methods</td><td>Equivalence partitioning, boundary value analysis, error guessing</td><td>Control flow testing, data flow testing, statement coverage testing</td></tr><tr><td>Knowledge level</td><td>No knowledge of internal workings required</td><td>Requires knowledge of programming languages, software architecture and design patterns</td></tr><tr><td>Scope</td><td>Functional level</td><td>Unit level, integration level and system level</td></tr><tr><td>Implementation</td><td>Implementation of code is not needed</td><td>Code implementation is necessary</td></tr><tr><td>Done By</td><td>Mostly software testers</td><td>Mostly software developers</td></tr></table>"
    },
    {
        q: "Given a project that uses the COCOMO model with an estimated effort of 2000 person-months and a productivity rate of 5 person-month per KLOC, what is the estimated size of the project in KLOC?",
        opts: ["(1) 200", "(2) 400", "(3) 100", "(4) 50"],
        ans: 1,
        exp: "<b>(2) 400</b><br>Estimated Size (KLOC) = Estimated Effort (Person-Months) / Productivity Rate (Person-Months per KLOC) = 2000 / 5 = 400 KLOC"
    },
    {
        q: "Match List I with List – II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List - I (software design principles)</b></td><td><b>List - II (Definition)</b></td></tr><tr><td>(A) Cohesion</td><td>(I) Degree to which one module relies on another module.</td></tr><tr><td>(B) Coupling</td><td>(II) Dividing a software system into distinct modules.</td></tr><tr><td>(C) Abstration</td><td>(III) Degree to which elements of a module belong together.</td></tr><tr><td>(D) Modularity</td><td>(IV) Simplifying complex reality by modeling classes appropriate to the problem.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A)-(I), (B)-(II), (C)-(III), (D)-(IV)", "(2) (A)-(II), (B)-(III), (C)-(IV), (D)-(I)", "(3) (A)-(III), (B)-(I), (C)-(IV), (D)-(II)", "(4) (A)-(III), (B)-(IV), (C)-(II), (D)-(I)"],
        ans: 2,
        exp: "<b>(3) (A)-(III), (B)-(I), (C)-(IV), (D)-(II)</b><br>• (A) Cohesion - (III): Cohesion refers to the degree to which the elements of a module belong together, emphasizing how focused and related the tasks of a single module are.<br>• (B) Coupling - (I): Coupling is the degree to which one module relies on or is dependent on another module, with lower coupling being preferred for better modularity.<br>• (C) Abstraction - (IV): Abstraction simplifies complex reality by modeling classes or components appropriate to the problem while hiding unnecessary details.<br>• (D) Modularity - (II): Modularity involves dividing a software system into distinct modules or components to achieve separation of concerns and easier maintainability.<br><br>Types of Coupling (best to worst): Data, Stamp, Control, External, Common, Content.<br>Types of Cohesion (high to low): Functional, Sequential, Communicational, Procedural, Temporal, Logical, Coincidental."
    },
    {
        q: "Arrange the following phases of the Agile process in the correct sequence:<br><br>(A) Design<br>(B) Release<br>(C) Testing<br>(D) Development<br>(E) Planning<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A), (B), (D), (E), (C)", "(2) (A), (D), (E), (B), (C)", "(3) (E), (A), (D), (C), (B)", "(4) (E), (D), (A), (C), (B)"],
        ans: 2,
        exp: "<b>(3) (E), (A), (D), (C), (B)</b><br>Agile methodologies are iterative and incremental, which means it's known for breaking a project into smaller parts and adjusting to changing requirements.<br>1. They prioritize flexibility, collaboration, and customer satisfaction.<br>2. Major companies like Facebook, Google, and Amazon use Agile because of its adaptability and customer-focused approach."
    },
    {
        q: "Which of the following are typical activities in the software process lifecycle?<br><br>(A) Requirement Analysis<br>(B) System Design<br>(C) Code Refactoring<br>(D) Deployment<br>(E) Substructure<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) (A), (B), (C) Only", "(2) (B), (C), (D) Only", "(3) (A), (B), (D) Only", "(4) (A), (D), (E) Only"],
        ans: 2,
        exp: "<b>(3) (A), (B), (D) Only</b><br>The typical activities in the software process lifecycle are:<br>1. (A) Requirement Analysis: Understanding and documenting what the software must do.<br>2. (B) System Design: Creating an architectural plan and designing the system to meet the requirements.<br>3. (D) Deployment: Releasing the software into the production environment and making it available to users.<br><br>Excluded Options:<br>(C) Code Refactoring: While important in maintaining code quality, it is not a core activity of the software lifecycle but rather a part of the development or maintenance phase.<br>(E) Substructure: This term is not relevant to the software lifecycle process."
    },
    {
        q: "If a software project has 2000 lines of code (LOC) and the average productivity rate is 10 LOC per person-hour, how many person-hours are required to complete the project?",
        opts: ["(1) 100", "(2) 150", "(3) 200", "(4) 250"],
        ans: 2,
        exp: "<b>(3) 200</b><br>Person-hours required = Total Lines of Code (LOC) / Productivity rate (LOC per person-hour) = 2000 / 10 = 200 person-hours"
    },
    {
        q: "In Software configuration management, what is the primary purpose of version control?",
        opts: ["(1) To control the changes made to software", "(2) To document user requirements", "(3) To estimate project cost", "(4) To design the software architecture"],
        ans: 0,
        exp: "<b>(1) To control the changes made to software</b><br>Version Control System (VCS):<br>• Definition: A software tool that tracks changes made to files, particularly source code, by recording modifications.<br>• Importance:<br>&nbsp;&nbsp;- Collaboration: Facilitates teamwork among developers, even across different locations.<br>&nbsp;&nbsp;- Change Tracking: Keeps a record of all changes, including details of who made them and what was changed.<br>&nbsp;&nbsp;- Branching: Allows contributors to work on separate branches without affecting the main code.<br>&nbsp;&nbsp;- Merge Control: Changes are merged into the main code only after review and approval.<br>• Advantages:<br>&nbsp;&nbsp;- Organization: Maintains an organized and up-to-date source code repository.<br>&nbsp;&nbsp;- Error Recovery: Enables reverting to a previous version if updates cause issues.<br>&nbsp;&nbsp;- Productivity: Simplifies the development process and boosts efficiency.<br>• Snapshot Feature: Captures the state of the software at every modification, making rollback to earlier versions easy if needed.<br>• Use Case: Useful for adding functionalities or fixing bugs while retaining the ability to revert changes seamlessly."
    },
    {
        q: "Arrange the following steps of Feature Drive Development (FDD) process in the correct sequence:<br>(A) Develop an overall model<br>(B) Build by feature<br>(C) Plan by feature<br>(D) Design by feature<br>(E) Build a feature list<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A), (C), (B), (E), (D)", "(2) (A), (E), (C), (D), (B)", "(3) (B), (A), (D), (E), (C)", "(4) (A), (B), (C), (E), (D)"],
        ans: 1,
        exp: "<b>(2) (A), (E), (C), (D), (B)</b><br>• (A) Develop an overall model: Start by understanding the domain and building an overall model of the system.<br>• (E) Build a feature list: Identify and list all the features required in the system.<br>• (C) Plan by feature: Create a plan for developing the features, including resource allocation and scheduling.<br>• (D) Design by feature: Design each feature before starting the implementation.<br>• (B) Build by feature: Finally, implement and build the features incrementally.<br><br>Feature-Driven Development (FDD):<br>• Agile Methodology: Designed to deliver tangible results in a structured manner.<br>• Focus on Features: Breaks down development into small, client-valued functions.<br>• Short Timeframe: Features are designed, developed, and tested iteratively and rapidly.<br>• Project Manager's Role: Oversees collaborative design processes, helps with feature prioritization and assigning class owners, ensures effective workflow and task assignments.<br>• Suited for Large Systems: Provides a reliable, predictable method for delivering high-quality software, especially in complex projects.<br>• Industry Applications: E-commerce websites, Banking applications, CRM systems, Healthcare management platforms, Travel booking systems.<br>• Outcome: Ensures incremental and adaptive development with high-quality results."
    },
    {
        q: "Given a project with an estimated effort of 1500 person-hours and a team of 5 people, how many days will it take to complete the project, if each person works 8 hours a day?",
        opts: ["(1) 30", "(2) 37.5", "(3) 40", "(4) 45.5"],
        ans: 1,
        exp: "<b>(2) 37.5</b><br>Number of days = Total Effort (person-hours) / (Team Size × Hours per Person per Day)<br>= 1500 / (5 × 8) = 1500 / 40 = 37.5"
    },
    {
        q: "Match List - I with List - II.<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List – I (Testing Type)</b></td><td><b>List - II (Description)</b></td></tr><tr><td>(A) Unit testing</td><td>(I) Testing individual components of the software.</td></tr><tr><td>(B) Integrating testing</td><td>(II) Testing the interaction between integrated components.</td></tr><tr><td>(C) System testing</td><td>(III) Testing to verify the system meets business needs.</td></tr><tr><td>(D) Acceptance testing</td><td>(IV) Testing the complete system to ensure it meets requirements.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A)-(I), (B)-(II), (C)-(III), (D)-(IV)", "(2) (A)-(I), (B)-(II), (C)-(IV), (D)-(III)", "(3) (A)-(I), (B)-(III), (C)-(II), (D)-(IV)", "(4) (A)-(I), (B)-(IV), (C)-(II), (D)-(III)"],
        ans: 1,
        exp: "<b>(2) (A)-(I), (B)-(II), (C)-(IV), (D)-(III)</b><br>• Unit Testing (A)-(I): Focuses on testing individual components or units of the software in isolation.<br>• Integration Testing (B)-(II): Tests the interaction between integrated components to ensure they work together correctly.<br>• System Testing (C)-(IV): Validates the complete system to ensure it meets the specified requirements.<br>• Acceptance Testing (D)-(III): Ensures that the system meets business needs and is acceptable to stakeholders."
    },
    {
        q: "Which one of the following is the correct estimation model based on software equation?",
        opts: ["1. E = [LOC × B<sup>0.333</sup> / P]<sup>2</sup> × (1/t<sup>4</sup>) — with exponent set as: E = [LOC × B<sup>0.222</sup> / P]<sup>2</sup> × (1/t<sup>4</sup>)", "2. E = [LOC × B<sup>0.333</sup> / P]<sup>3</sup> × (1/t<sup>4</sup>)", "3. E = [LOC × B<sup>0.444</sup> / P]<sup>4</sup> × (1/t<sup>3</sup>)", "4. E = [LOC × B<sup>0.111</sup> / P]<sup>6</sup> × (1/t<sup>3</sup>)"],
        ans: 1,
        exp: ""
    },
    {
        q: "Collaborative document inspection technique used for?",
        opts: ["1. Requirement Validation Process", "2. Requirement Verification Process", "3. Integration Testing", "4. Blackbox Testing"],
        ans: 0,
        exp: "<b>1. Requirement Validation Process</b><br>Collaborative Document Inspection (CDI) is a technique used during Requirements Validation, where customers, users, analysts, and developers review the Software Requirements Specification (SRS) together to ensure that the documented requirements truly reflect user needs.<br>Quick Memory Trick:<br>• Verification → \"Are we building the product right?\"<br>• Validation → \"Are we building the right product?\"<br>• CDI checks whether the requirements are the right requirements, so it belongs to Requirement Validation."
    },
    {
        q: "In Software Engineering Jackson's Principle based on<br><br>A. Designation<br>B. Definitions<br>C. Refutable Assertions<br>D. Formal Review<br>E. Requirement Elicitation<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B & C Only", "2. B, C & D Only", "3. C, D & E Only", "4. B, D & C Only"],
        ans: 0,
        exp: "<b>1. A, B & C Only</b><br>Michael Jackson's approach to Software Engineering emphasizes three key principles:<br>1. Designation – identifying and referring to real-world entities correctly.<br>2. Definitions – providing precise definitions of terms and concepts.<br>3. Refutable Assertions – expressing requirements in a way that can be tested and potentially disproved.<br>These principles help in writing clear and verifiable software requirements.<br><br>D. Formal Review – not one of Jackson's principles.<br>E. Requirement Elicitation – a requirements engineering activity, not a Jackson principle."
    },
    {
        q: "Match the LIST-I with LIST-II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>LIST-I (Software Risk)</b></td><td><b>LIST-II (Uses)</b></td></tr><tr><td>A. Predictable Risk</td><td>I. Strategic Risk</td></tr><tr><td>B. Business Risk</td><td>II. Staffing and Organization</td></tr><tr><td>C. Project Risk</td><td>III. Implementation</td></tr><tr><td>D. Past Project</td><td>IV. Past Project Experience</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-IV, B-III, C-I, D-II", "2. A-III, B-II, C-I, D-IV", "3. A-I, B-IV, C-III, D-II", "4. A-IV, B-I, C-II, D-III"],
        ans: 3,
        exp: "<b>4. A-IV, B-I, C-II, D-III</b><br>• A. Predictable Risk → IV. Past Project Experience (Predictable risks are estimated using past project data.)<br>• B. Business Risk → I. Strategic Risk (Business risks include strategic risks affecting business goals.)<br>• C. Project Risk → II. Staffing and Organization (Project risks are related to resources, staffing, schedule, etc.)<br>• D. Past Project → III. Implementation"
    },
    {
        q: "Find the correct sequence of prototype software development model.<br><br>A. Start<br>B. Develop Prototype<br>C. Deliver to customer<br>D. Quick Design<br>E. Quick Play<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B, C, D, E", "2. A, E, D, B, C", "3. A, B, D, E, C", "4. A, B, E, D, C"],
        ans: 1,
        exp: "<b>2. A, E, D, B, C</b><br>The Prototype Model generally follows this sequence:<br>1. Start<br>2. Quick Plan (written as \"Quick Play\" in the question)<br>3. Quick Design<br>4. Develop Prototype<br>5. Deliver to Customer / Get Feedback<br>So the correct order is: A→E→D→B→C"
    },
    {
        q: "As per the Software Engineering Institute (SEI), the correct sequence is<br><br>A. Initial<br>B. Repeatable<br>C. Managed<br>D. Optimizing<br>E. Defined<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B, C, D, E", "2. A, B, E, C, D", "3. A, E, C, D, B", "4. A, E, B, C, D"],
        ans: 1,
        exp: "<b>2. A, B, E, C, D</b><br>The five maturity levels in the correct order are:<br>1. Initial<br>2. Repeatable<br>3. Defined<br>4. Managed<br>5. Optimizing<br>So the sequence is: A→B→E→C→D"
    },
    {
        q: "Software Testability is simply how easily a software program can be tested. Which one characteristics does not lead to testable software?",
        opts: ["1. Observability", "2. Controllability", "3. Repairability", "4. Understandability"],
        ans: 2,
        exp: "<b>3. Repairability</b><br>According to software testing principles (Pressman), characteristics that lead to high software testability include:<br>• Observability (outputs can be easily observed)<br>• Controllability (inputs and states can be controlled)<br>• Understandability (system behavior is easy to understand)<br>• Simplicity<br>• Stability<br>• Decomposability<br>Repairability is related to maintenance and fixing defects, not to making software easier to test."
    },
    {
        q: "Which one of the following is not the part of requirement management?",
        opts: ["1. Features Traceability Table", "2. Dependency Traceability Table", "3. Interface Traceability Table", "4. Page Traceability Table"],
        ans: 3,
        exp: "<b>4. Page Traceability Table</b><br>Requirements Management uses various traceability tables/matrices to track requirements and their relationships. Common traceability tables include:<br>• Features Traceability Table<br>• Dependency Traceability Table<br>• Interface Traceability Table<br>These help in impact analysis, change management, and requirement tracking. Page Traceability Table is not a standard requirements management artifact."
    },
    {
        q: "Identify the correct statements from the following regarding spiral model.<br><br>A. Spiral model is an incremental process model.<br>B. Spiral model is a risk - driven process mode.<br>C. Spiral model is an acyclic balancing approach.<br>D. Spiral model involves a set of anchor point milestone.<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A & B Only", "2. B & C Only", "3. A & D Only", "4. B & D Only"],
        ans: 3,
        exp: "<b>4. B & D Only</b><br>A. Spiral model is an incremental process model. – Spiral model is primarily known as a risk-driven evolutionary model. Although it can produce incremental releases, its defining characteristic is risk analysis, not incrementality.<br>B. Spiral model is a risk-driven process model. – This is the key feature of the Spiral Model proposed by Barry Boehm.<br>C. Spiral model is an acyclic balancing approach. – The spiral model is cyclic (iterative), not acyclic.<br>D. Spiral model involves a set of anchor point milestones. – The model uses anchor point milestones such as: Life Cycle Objectives (LCO), Life Cycle Architecture (LCA), Initial Operational Capability (IOC)."
    },
    {
        q: "Which of the following cohesions are better than the Procedural Cohesion<br>A. Functional Cohesion<br>B. Sequential Cohesion<br>C. Temporal Cohesion<br>D. Communicational Cohesion<br>E. Logical Cohesion<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A and D Only", "2. A, B and D Only", "3. C, D and E Only", "4. A, D and E Only"],
        ans: 1,
        exp: "<b>2. A, B and D Only</b><br>For cohesion, the order from worst to best is:<br>Coincidental &lt; Logical &lt; Temporal &lt; Procedural &lt; Communicational &lt; Sequential &lt; Functional<br>We need cohesions that are better than Procedural Cohesion:<br>• A. Functional Cohesion<br>• B. Sequential Cohesion<br>• C. Temporal Cohesion (worse than procedural)<br>• D. Communicational Cohesion<br>• E. Logical Cohesion (worse than procedural)"
    },
    {
        q: "The process followed in order to find difficult, unknown and hidden information about a software system is called",
        opts: ["(1) Software Engineering", "(2) Software Re-Engineering", "(3) Reverse Engineering", "(4) Inverse Engineering"],
        ans: 2,
        exp: "<b>(3) Reverse Engineering</b><br>Reverse Engineering is the process of analyzing an existing software system to discover its components, design, architecture, and functionality when such information is difficult, unknown, or poorly documented.<br>It is commonly used for:<br>• Understanding legacy systems<br>• Recovering design documents<br>• Program comprehension<br>• Maintenance and enhancement<br><br>Why not the others?<br>• Software Engineering → General process of developing software.<br>• Software Re-Engineering → Modifying and improving existing software; often includes reverse engineering as one step.<br>• Inverse Engineering → Not a standard software engineering term."
    },
    {
        q: "Estimation of software development effort for organic software in basic COCOMO is",
        opts: ["(1) E = 2.4 (KLOC)<sup>1.05</sup> PM", "(2) E = 3.4 (KLOC)<sup>1.06</sup> PM", "(3) E = 2.0 (KLOC)<sup>1.05</sup> PM", "(4) E = 2.4 (KLOC)<sup>1.07</sup> PM"],
        ans: 0,
        exp: "<b>(1) E = 2.4 (KLOC)<sup>1.05</sup> PM</b><br>In the Basic COCOMO Model, effort estimation formulas are:<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Project Type</b></td><td><b>Effort (PM)</b></td></tr><tr><td>Organic</td><td>E = 2.4 (KLOC)<sup>1.05</sup></td></tr><tr><td>Semi-detached</td><td>E = 3.0 (KLOC)<sup>1.12</sup></td></tr><tr><td>Embedded</td><td>E = 3.6 (KLOC)<sup>1.20</sup></td></tr></table>So for Organic Software: E = 2.4 (KLOC)<sup>1.05</sup>"
    },
    {
        q: "Which of the following is not a requirement elicitation Technique",
        opts: ["(1) Interviews", "(2) The use case approach", "(3) Facilitated Application Specification Technique (FAST)", "(4) Data Flow diagram"],
        ans: 3,
        exp: "<b>(4) Data Flow diagram</b><br>Requirement Elicitation Techniques are used to gather requirements from stakeholders. Common elicitation techniques include:<br>• Interviews<br>• Use Case Approach<br>• FAST (Facilitated Application Specification Technique)<br>• Questionnaires<br>• Brainstorming<br>• JAD Sessions<br>• Observation<br>Data Flow Diagram (DFD) is not an elicitation technique. It is a modeling/analysis tool used to represent how data moves through a system after requirements have been gathered."
    },
    {
        q: "Arrange the following in the increasing order of coupling from lowest coupling to highest coupling.<br>A. Common Coupling<br>B. Stamp Coupling<br>C. Control Coupling<br>D. External Coupling<br>E. Content Coupling<br><br>Choose the correct answer from the options given below:",
        opts: ["1. E, A, C, B, D", "2. D, B, A, E, C", "3. B, C, D, A, E", "4. C, A, B, D, E"],
        ans: 2,
        exp: "<b>3. B, C, D, A, E</b><br>For coupling, the increasing order (lowest coupling → highest coupling) is commonly:<br>Data &lt; Stamp &lt; Control &lt; External &lt; Common &lt; Content<br>From the given options, the relevant factors are:<br>• B. Stamp Coupling<br>• C. Control Coupling<br>• D. External Coupling<br>• A. Common Coupling<br>• E. Content Coupling<br>Therefore: B→C→D→A→E"
    },
    {
        q: "Arrange the following types of testing in the order they are usually performed in the software Development life cycle.<br>A. Integration testing<br>B. Unit testing<br>C. System Testing<br>D. Acceptance Testing<br><br>Choose the correct answer from the options given below:",
        opts: ["1. B, C, A, D", "2. B, A, C, D", "3. C, B, A, D", "4. C, B, D, A"],
        ans: 1,
        exp: "<b>2. B, A, C, D</b><br>The usual testing sequence in the Software Development Life Cycle (SDLC) is:<br>1. Unit Testing (B) – Test individual modules/components.<br>2. Integration Testing (A) – Test interactions between modules.<br>3. System Testing (C) – Test the complete integrated system.<br>4. Acceptance Testing (D) – Customer/user validates the system.<br>Therefore, the correct order is: B→A→C→D"
    },
    {
        q: "Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I (Software Quality Characteristic)</b></td><td><b>List II (Description)</b></td></tr><tr><td>A. Reliability</td><td>I. Ability to transfer the software from one organization or hardware/software environment to another.</td></tr><tr><td>B. Efficiency</td><td>II. Capability of software to maintain its level of performance under stated conditions for a stated period of time.</td></tr><tr><td>C. Maintainability</td><td>III. Relationship between the level of performance of the software and the amount of resources used, under stated conditions.</td></tr><tr><td>D. Portability</td><td>IV. Effort needed to make modifications, including corrections, improvements or adaptation of software to changes in environment, requirements and functional specifications.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-II, B-III, C-I, D-IV", "2. A-II, B-III, C-IV, D-I", "3. A-III, B-II, C-I, D-IV", "4. A-IV, B-II, C-I, D-III"],
        ans: 1,
        exp: "<b>2. A-II, B-III, C-IV, D-I</b>"
    },
    {
        q: "Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I</b></td><td><b>List II</b></td></tr><tr><td>A. Equivalence Partitioning</td><td>I. Measures independent paths in code</td></tr><tr><td>B. Boundary Value Analysis</td><td>II. Divides input into valid/invalid sets</td></tr><tr><td>C. Cyclomatic Complexity</td><td>III. Focuses on limits of input ranges</td></tr><tr><td>D. Decision Table Testing</td><td>IV. In which a number of combinations of actions are tested under varying sets of conditions.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-II, B-III, C-I, D-IV", "2. A-II, B-III, C-IV, D-I", "3. A-III, B-II, C-I, D-IV", "4. A-IV, B-II, C-I, D-III"],
        ans: 0,
        exp: "<b>1. A-II, B-III, C-I, D-IV</b>"
    },
    {
        q: "Which of the followings belongs to MaCall's quality factors?<br>A. Maintainability<br>B. Usability<br>C. Integrity<br>D. Functionality<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A and D Only", "2. A, B and D Only", "3. C and D Only", "4. A, B and C Only"],
        ans: 3,
        exp: "<b>4. A, B and C Only</b><br>McCall's Software Quality Factors are:<br>• Correctness<br>• Reliability<br>• Efficiency<br>• Integrity<br>• Usability<br>• Maintainability<br>• Testability<br>• Flexibility<br>• Portability<br>• Reusability<br>• Interoperability"
    }
];