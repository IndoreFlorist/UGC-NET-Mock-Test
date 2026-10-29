var rawQuestions = [
    {
        q: "Which of the following testing processes is used to test the functionally of a software?",
        opts: ["a) Black box testing", "b) White box testing", "c) Unit testing", "d) None of the above"],
        ans: 0,
        exp: "<b>a) Black box testing</b><br>• Black-box testing is a method of software testing that examines the functionality of an application without peering into its internal structures or workings.<br>• This method of test can be applied virtually to every level of software testing: unit, integration, system and acceptance.<br>• White-box testing (also known as clear box testing, glass box testing, transparent box testing, and structural testing) is a method of testing software that tests internal structures or workings of an application, as opposed to its functionality.<br>• Unit Testing is a level of software testing where individual units/components of software are tested."
    },
    {
        q: "Given the two statements S1 and S2 for software engineering :<br>S1 : Statement coverage cannot guarantee execution of loops in program under test.<br>S2 : Use of independent path testing criterion guarantees execution of each loop in a program under test more than once.<br>Then which among the following is true ?",
        opts: ["a) S1 is True, S2 is True", "b) S1 is True, S2 is False", "c) S1 is False, S2 is True", "d) S1 is False, S2 is False"],
        ans: 0,
        exp: "<b>a) S1 is True, S2 is True</b><br>S1: Statement coverage cannot guarantee execution of loops in program under test. Statement coverage ensures that each statement in the code is executed at least once. However, it does not ensure that all possible paths through a loop are executed, especially if the loop can execute multiple times.<br>S2: Use of independent path testing criterion guarantees execution of each loop in a program under test more than once. Independent path testing involves testing all possible paths through the code, which includes ensuring that loops are executed enough times to cover all independent paths. This means that each loop will be executed more than once, if necessary, to cover those paths."
    },
    {
        q: "Match List - I with List - II.<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List - I (Testing Type)</b></td><td><b>List - II (Description)</b></td></tr><tr><td>A. Unit testing</td><td>I. Testing individual components of the software.</td></tr><tr><td>B. Integrating testing</td><td>II. Testing the interaction between integrated components.</td></tr><tr><td>C. System testing</td><td>III. Testing to verify the system meets business needs.</td></tr><tr><td>D. Acceptance testing</td><td>IV. Testing the complete system to ensure it meets requirements.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["a) (A) - (I), (B) - (II), (C) - (III), (D) - (IV)", "b) (A) - (I), (B) - (II), (C) - (IV), (D) - (III)", "c) (A) - (I), (B) - (III), (C) - (II), (D) - (IV)", "d) (A) - (I), (B) - (IV), (C) - (II), (D) - (III)"],
        ans: 1,
        exp: "<b>b) (A) - (I), (B) - (II), (C) - (IV), (D) - (III)</b><br>• Unit Testing (A)-(I): Focuses on testing individual components or units of the software in isolation.<br>• Integration Testing (B)-(II): Tests the interaction between integrated components to ensure they work together correctly.<br>• System Testing (C)-(IV): Validates the complete system to ensure it meets the specified requirements.<br>• Acceptance Testing (D)-(III): Ensures that the system meets business needs and is acceptable to stakeholders."
    },
    {
        q: "Which method is used to formally verify program correctness?",
        opts: ["a) Black Box Testing", "b) White Box Testing", "c) Formal Program Verification", "d) Usability Testing"],
        ans: 2,
        exp: "<b>c) Formal Program Verification</b><br>• Formal Program Verification is a technique used to prove the correctness of a program with respect to a certain formal specification or property.<br>• This method involves mathematical proofs and logical reasoning to ensure that the program adheres to its specifications.<br>• Unlike other testing methods, formal verification can provide guarantees about the absence of certain types of errors."
    },
    {
        q: "Alpha and Beta testing are forms of",
        opts: ["a) White-Box Testing", "b) Black-Box Testing", "c) Acceptance Testing", "d) System Testing"],
        ans: 2,
        exp: "<b>c) Acceptance Testing</b><br>• Alpha Testing is usually done by internal staff before the product is released to external testers. It is a type of acceptance testing that's done in a lab environment and not by the end users. It helps identify all possible issues and problems in the system before it goes for Beta testing.<br>• Beta Testing is performed by actual users or potential customers in their own environment. It is the second phase of testing in which a sampling of the intended audience tries the product out before it is officially released to the general public. This is the final test before shipping the product. Problems that were not discovered during Alpha testing may be identified here."
    },
    {
        q: "In unit testing of a module, it is found that for a set of test data, at the maximum 90% of the code alone were tested with the probability of success 0.9. What is the reliability of the module ?",
        opts: ["a) greater than 0.9", "b) Equal to 0.9", "c) At most 0.81", "d) At least 0.81"],
        ans: 2,
        exp: "<b>c) At most 0.81</b><br>Code tested in unit testing = t = 90% = 0.9<br>Probability of success = p = 0.9<br>Reliability ≤ t × p = 0.9 × 0.9 = 0.81<br>Therefore, the reliability of the module is at most 0.81."
    },
    {
        q: "What is the normal order of activities in which traditional software testing is organized?<br>(a) Integration Testing<br>(b) System Testing<br>(c) Unit Testing<br>(d) Validation Testing<br><br>Code:",
        opts: ["a) (c), (a), (b), (d)", "b) (c), (a), (d), (b)", "c) (d), (c), (b), (a)", "d) (b), (d), (a), (c)"],
        ans: 1,
        exp: "<b>b) (c), (a), (d), (b)</b><br>Traditional software testing is organized in the following sequence:<br>Unit Testing -> Integration Testing -> Validation Testing -> System Testing"
    },
    {
        q: "Fault base testing technique is",
        opts: ["a) Unit testing", "b) Beta testing", "c) Stress testing", "d) Mutation testing"],
        ans: 3,
        exp: "<b>d) Mutation testing</b><br>• Fault-based testing aims to detect certain classes of known faults.<br>• Example: security testing for buffer overflows.<br>• Mutation Testing is a fault-based testing strategy.<br>• It is used to evaluate test suite adequacy.<br>• Measures the effectiveness of test cases and leads to creation of more effective tests.<br>• In mutation testing, faults are introduced into the program by creating versions of the program called mutants."
    },
    {
        q: "Which testing focuses on heavily testing of one particular module?",
        opts: ["a) Fuzz testing", "b) Inter system testing", "c) Breadth testing", "d) Gorilla testing"],
        ans: 3,
        exp: "<b>d) Gorilla testing</b><br>• Gorilla testing is a method of software testing in which a program module is routinely examined to ensure that it is working correctly and is free of flaws. A module can be assessed in exactly the same manner 100 times. Gorilla testing is so frequently referred to as \"Frustrating Testing.\"<br>• Fuzz testing: An automated software testing technique called fuzzing introduces erroneous, abnormal, or unexpected inputs into a system in order to detect flaws and vulnerabilities in the software.<br>• Breadth Testing: It is a test suite that confirms a product's complete functionality but does not thoroughly evaluate all of the features.<br>• Inter-system testing: Inter-system testing is the process of evaluating the integration points and functionality between various systems that share a common data source."
    },
    {
        q: "Which of the following testing techniques ensures that the software product runs correctly after the changes during maintenance?",
        opts: ["a) Path Testing", "b) Integration Testing", "c) Unit Testing", "d) Regression Testing"],
        ans: 3,
        exp: "<b>d) Regression Testing</b><br>• Option 1: Path testing is used to design the test cases.<br>• Option 2: Integration testing includes the testing of two or more combined modules of the software.<br>• Option 3: Unit testing includes the testing of every single module or component of the software.<br>• Option 4: Regression testing is used to test modified parts of code and parts affected by the code to ensure that software doesn't have any defect after modifications."
    },
    {
        q: "Consider a software program that is artificially seeded with 100 faults. While testing this program, 159 faults are detected, out of which 75 faults are from those artificially seeded faults. Assuming that both real and seeded faults are of same nature and have same distribution, the estimated number of undetected real faults is ______.",
        opts: ["a) 28", "b) 175", "c) 56", "d) 84"],
        ans: 0,
        exp: "<b>a) 28</b><br>Total number of faults found = 159<br>Real faults detected among all detected faults = 159 - 75 = 84<br>Since probability distribution is the same, the total number of real faults is (100/75) × 84 = 112<br>Undetected real faults = 112 - 84 = 28"
    },
    {
        q: "What does the term \"Test Case\" refer to in software testing?",
        opts: ["a) A defect in the code", "b) A tool used for testing", "c) A set of conditions, inputs, and expected results", "d) A type of testing technique"],
        ans: 2,
        exp: "<b>c) A set of conditions, inputs, and expected results</b><br>"
    },
    {
        q: "What does the term \"Test Scenario\" refer to in software testing?",
        opts: ["a) A set of test cases", "b) A high-level description of a test condition", "c) A tool used for automated testing", "d) A defect in the code"],
        ans: 1,
        exp: "<b>b) A high-level description of a test condition</b><br>A test scenario provides a high-level description of a test condition or a specific functionality to be tested."
    },
    {
        q: "Consider the following method :<br>int f(int m, int n, boolean x, boolean y)<br>{<br>&nbsp;&nbsp;int res=0;<br>&nbsp;&nbsp;if(m&lt;0) {res=n-m;}<br>&nbsp;&nbsp;else if(x || y) { res= -1; if(n==m) {res =1;} }<br>&nbsp;&nbsp;else {res=n;}<br>&nbsp;&nbsp;return res;<br>}<br>If P is the minimum number of tests to achieve full statement coverage for f() and Q is the minimum number of tests to achieve full branch coverage for f(), then (P, Q) =",
        opts: ["a) (3, 4)", "b) (3, 2)", "c) (2, 3)", "d) (4, 3)"],
        ans: 0,
        exp: "<b>a) (3, 4)</b><br>Statement coverage = (number of statements executed) / total number of statements.<br>In the above code, there are three test cases required to achieve full statement coverage.<br>Case 1: when the first if condition becomes true, the statements int res=0; res=n-m; return res; are executed.<br>Case 2: when the other two cases (else-if branch and else branch) execute, then all remaining statements will also execute. By three tests, full statement coverage is achieved.<br><br>Branch coverage: It is decision coverage and covers both true and false conditions. Decision coverage = (number of decisions exercised) / total number of decision outcomes. It checks for true and false cases. In the above given code, there will be 4 tests required to achieve full branch coverage.<br>So, value of (P, Q) = (3, 4)"
    },
    {
        q: "The cyclomatic complexity of each of the modules X and Y shown below is 10. What is the cyclomatic complexity of the sequential integration shown on the right hand side?<br>[Figure: module X and module Y shown separately, and then X followed by Y in sequence]",
        opts: ["a) 21", "b) 19", "c) 20", "d) 10"],
        ans: 1,
        exp: "<b>b) 19</b><br>Cyclomatic complexity of X = Y = 10<br>Number of decision points in X = 10 - 1 = 9<br>Number of decision points in Y = 10 - 1 = 9<br>Cyclomatic Complexity of the integration = Number of decision points + 1 = (9 + 9) + 1 = 19"
    },
    {
        q: "Consider the following C program segment.<br>while (first &lt;= last)<br>{<br>&nbsp;&nbsp;if (array [middle] &lt; search)<br>&nbsp;&nbsp;&nbsp;&nbsp;first = middle +1;<br>&nbsp;&nbsp;else if (array [middle] == search)<br>&nbsp;&nbsp;&nbsp;&nbsp;found = True;<br>&nbsp;&nbsp;else last = middle – 1;<br>&nbsp;&nbsp;middle = (first + last)/2;<br>}<br>if (first &lt; last) not Present = True;<br>The cyclomatic complexity of the program segment is __________.",
        opts: ["a) 3", "b) 4", "c) 5", "d) 6"],
        ans: 2,
        exp: "<b>c) 5</b><br>From the control flow graph of the segment: E = 13, N = 10.<br>Therefore, Cyclomatic Complexity = E - N + 2 = 5."
    },
    {
        q: "The cyclomatic complexity of the flow graph of a program provides",
        opts: ["a) an upper bound for the number of tests that must be conducted to ensure that all statements have been executed at most once", "b) a lower bound for the number of tests that must be conducted to ensure that all statements have been executed at most once", "c) an upper bound for the number of tests that must be conducted to ensure that all statements have been executed at least once", "d) a lower bound for the number of tests that must be conducted to ensure that all statements have been executed at least once"],
        ans: 2,
        exp: "<b>c) an upper bound for the number of tests that must be conducted to ensure that all statements have been executed at least once</b><br>"
    },
    {
        q: "The ratio of error found before s/w delivery and to the total errors (before and after) is called :",
        opts: ["(1) Accuracy", "(2) Specificity", "(3) Defect Removal efficiency", "(4) Through put"],
        ans: 2,
        exp: "<b>(3) Defect Removal efficiency</b><br>Defect Removal Efficiency (DRE) is the ratio of errors found before software delivery to the total number of errors (both before and after delivery). It measures the effectiveness of the defect detection and removal process during the development phase."
    },
    {
        q: "Find if the following statements in the context of software testing are TRUE or FALSE.<br>(S1) Statement coverage cannot guarantee execution of loops in a program under test.<br>(S2) Use of independent path testing criterion guarantees execution of each loop in a program under test more than once.",
        opts: ["a) True, True", "b) True, False", "c) False, True", "d) False, False"],
        ans: 0,
        exp: "<b>a) True, True</b><br>S1: Statement coverage ensures that each statement in the code is executed at least once, but it does not ensure that all possible paths through a loop are executed.<br>S2: Independent path testing ensures that loops are executed enough times to cover all independent paths, so each loop is executed more than once, if necessary, to cover those paths."
    },
    {
        q: "Software products need perfective maintenance for which of the following reasons?",
        opts: ["a) To rectify bugs observed while the system is in use.", "b) When the customers need the product to run on new platforms", "c) To support the new features that users want it to support", "d) To overcome wear and tear caused by the repeated use of the software."],
        ans: 2,
        exp: "<b>c) To support the new features that users want it to support</b><br>Types of software maintenance are:<br>• Perfective maintenance: when there are new requirements from user side, then at that time changes made in the software is known as perfective maintenance. It makes the software more enhanced, clean structured, better than previous.<br>• Adaptive maintenance: Changes done in the software environment that includes any work initiated as consequence of moving the software to different hardware or software is known as adaptive maintenance.<br>• Preventive maintenance: It prevents software from future problems.<br>• Corrective maintenance: It is related with fixing the errors. Changes done when there is defect or error in the software is known as corrective maintenance."
    },
    {
        q: "Size and complexity are a part of",
        opts: ["a) People Metrics", "b) Project Metrics", "c) Process Metrics", "d) Product Metrics"],
        ans: 3,
        exp: "<b>d) Product Metrics</b><br>Software metrics can be classified into three categories:<br>• Product metrics − Describes the characteristics of the product such as size, complexity, design features, performance, and quality level.<br>• Process metrics − These characteristics can be used to improve the development and maintenance activities of the software.<br>• Project metrics − This metrics describe the project characteristics and execution."
    },
    {
        q: "Modifying the software to match changes in the ever changing environment is called as",
        opts: ["a) Adaptive maintenance", "b) Corrective maintenance", "c) Perfective maintenance", "d) Preventive maintenance"],
        ans: 0,
        exp: "<b>a) Adaptive maintenance</b><br>• Adaptive maintenance involves making changes to the software in response to changes in the environment. This could be alterations in the operating system, the hardware, or any other external factors that the software interacts with.<br>• For instance, if a new version of a web browser is released and the software is a web application, adaptive maintenance could encompass making the necessary changes to ensure the application still works properly on the new browser version."
    },
    {
        q: "Which of the following statements is/are FALSE with respect to software testing ?<br>S1 : White-box tests are based on specifications; better at telling whether program meets specification, better at finding errors of omission.<br>S2 : Black-box tests are based on code; better for finding crashes, out of bounds errors, file not closed errors.<br>S3 : Alpha testing is conducted at the developer's site by a team of highly skilled testers for software that is developed as a product to be used by many customers.",
        opts: ["a) Only S1 and S2 are FALSE.", "b) Only S1 and S3 are FALSE.", "c) Only S2 and S3 are FALSE.", "d) All of S1, S2, and S3 are FALSE."],
        ans: 0,
        exp: "<b>a) Only S1 and S2 are FALSE.</b><br>White box testing techniques analyze the internal structures, the used data structures, internal design, code structure and the working of the software.<br>Black box testing is a technique of software testing which examines the functionality of software without peering into its internal structure or coding. The primary source of black box testing is a specification of requirements that is stated by the customer.<br>Alpha testing is conducted at the developer's site by a team of highly skilled testers for software that is developed as a product to be used by many customers."
    },
    {
        q: "Complete each of the following sentences in List – I on the left hand side by filling in the word or phrase from the List – II on the right hand side that best completes the sentence :<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List – I</b></td><td><b>List – II</b></td></tr><tr><td>I. Determining whether you have built the right system is called ________</td><td>A. Software testing</td></tr><tr><td>II. Determining whether you have built the system right is called ________</td><td>B. Software verification</td></tr><tr><td>III. ________ is the process of demonstrating the existence of defects or providing confidence that they do not appear to be present.</td><td>C. Software debugging</td></tr><tr><td>IV. ________ is the process of discovering the cause of a defect and fixing it.</td><td>D. Software validation</td></tr></table><br>Codes (I, II, III, IV):",
        opts: ["(1) B, D, A, C", "(2) B, D, C, A", "(3) D, B, C, A", "(4) D, B, A, C"],
        ans: 3,
        exp: "<b>(4) D, B, A, C</b><br>I. Determining whether you have built the right system is called Software validation<br>II. Determining whether you have built the system right is called Software verification<br>III. Software testing is the process of demonstrating the existence of defects or providing confidence that they do not appear to be present.<br>IV. Software debugging is the process of discovering the cause of a defect and fixing it."
    },
    {
        q: "For the software quality assurance, which of the followings are correct?<br>A. Execution of code<br>B. No execution of code<br>C. Preventive technique<br>D. A corrective technique<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) A, B Only", "(2) B, C Only", "(3) C, D Only", "(4) D, A Only"],
        ans: 1,
        exp: "<b>(2) B, C Only</b><br>B. No execution of code: Some aspects of software quality assurance, like reviews, inspections, and static analysis, do not require code execution. These activities focus on detecting issues without running the software.<br>C. Preventive technique: Quality assurance primarily focuses on preventing defects and improving processes, making it a preventive technique aimed at avoiding issues during development.<br><br><b>Excluded Options:</b><br>A. Execution of code: While some quality assurance activities (like testing) involve executing code, this isn't the focus of all quality assurance activities.<br>D. A corrective technique: Corrective actions are typically associated with software testing or debugging, not the broad scope of quality assurance, which focuses more on prevention."
    },
    {
        q: "Which of the following is not the goal of reverse Engineering?",
        opts: ["(1) Cope with complexity", "(2) Recover lost information", "(3) Detect side effect", "(4) Data flow"],
        ans: 3,
        exp: "<b>(4) Data flow</b><br><b>Reverse Engineering Goals:</b><br>• Cope with Complexity: Helps in analyzing and controlling system complexity. Reveals details about system architecture, relationships, and design patterns.<br>• Recover Lost Information: Retrieves lost or unavailable information, such as source code and documentation. Rebuilds source code, analyzes data structures, and recovers design details.<br>• Detect Side Effects: Identifies unintended implications, dependencies, and interactions not obvious from documentation or original code.<br>• Synthesize Higher Abstraction: Abstracts low-level features to create higher-level representations. Facilitates easier communication and analysis by improving understanding of system functionality.<br>• Facilitate Reuse: Identifies reusable components or modules in existing systems. Enhances efficiency and reduces development time by repurposing parts for other projects."
    },
    {
        q: "The cyclomatic complexity of the following flow graph is:<br>[Figure: flow graph with nodes 1, 2, 3, 4, 5, 6, 7, 9, 10]",
        opts: ["(1) 3", "(2) 4", "(3) 10", "(4) 2"],
        ans: 1,
        exp: "<b>(2) 4</b><br>There are 3 commonly used methods for calculating the cyclomatic complexity:<br>▪ Cyclomatic Complexity = Total number of closed regions in the control flow graph + 1<br>▪ Cyclomatic Complexity = E – N + 2, where E = Total number of edges in the control flow graph, N = Total number of nodes in the control flow graph<br>▪ Cyclomatic Complexity = P + 1, where P = Total number of predicate nodes contained in the control flow graph"
    },
    {
        q: "Which of the followings are White box Testing?<br>A. Path Testing<br>B. Loop Testing<br>C. Regression Testing<br>D. Non functional Testing<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) A and B Only", "(2) B and C Only", "(3) C and D Only", "(4) A and D Only"],
        ans: 0,
        exp: "<b>(1) A and B Only</b><br>A. Path Testing: White-box testing technique that focuses on testing the different paths of the code, ensuring all possible execution paths are covered.<br>B. Loop Testing: A white-box testing method that specifically focuses on testing loops within the code to ensure they function as expected under various conditions.<br><br><b>Types of Testing</b><br>• Black Box Testing / Functional / Behavioral / I/O driven Testing: Equivalence class Testing, Boundary Value Testing, Acceptance Testing (Alpha Testing, Beta Testing), State based Testing, Cause Effect Testing, Pair Wise Testing<br>• White Box Testing / Implementation / Structural / Logic-driven / Glass box Testing: Control Flow Testing, Data Flow Testing, Basic Path Testing, Statement Coverage, Branch Coverage, Path Coverage"
    },
    {
        q: "Match List-I with List-II:<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List – I</b></td><td><b>List - II</b></td></tr><tr><td>A. Verification</td><td>I. White box Testing</td></tr><tr><td>B. Validation</td><td>II. Black box Testing</td></tr><tr><td>C. Internal logic exercise</td><td>III. Quality Control</td></tr><tr><td>D. Software requirement exercise</td><td>IV. Quality Assurance</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(1) A-IV, B-III, C-I, D-II", "(2) A-I, B-II, C-III, D-IV", "(3) A-IV, B-III, C-II, D-I", "(4) A-III, B-IV, C-I, D-II"],
        ans: 0,
        exp: "<b>(1) A-IV, B-III, C-I, D-II</b><br>• A. Verification - IV (Quality Assurance): Verification ensures that the product is being built correctly by checking processes, documentation, and standards. It focuses on prevention and is part of quality assurance.<br>• B. Validation - III (Quality Control): Validation ensures that the product meets user requirements and functions as expected. It focuses on detecting defects and is part of quality control.<br>• C. Internal logic exercise - I (White Box Testing): This involves testing the internal logic and structure of the code, which is the primary focus of white-box testing.<br>• D. Software requirement exercise - II (Black Box Testing): This involves testing the software based on requirements and specifications without considering the internal logic, which aligns with black-box testing."
    },
    {
        q: "In the context of software testing, which of the following statements is/are NOT correct?<br>P : A minimal test set that achieves 100% path coverage will also achieve 100% statement coverage.<br>Q: A minimal test set that achieves 100% path coverage will generally detect more faults than one that achieves 100% statement coverage.<br>R: A minimal test set that achieves 100% statement coverage will generally detect more faults than one that achieves 100 % branch coverage.",
        opts: ["(a) R only", "(b) Q only", "(c) P and Q only", "(d) Q and R only"],
        ans: 0,
        exp: "<b>(a) R only</b><br>True: A minimal test set that achieves 100% path coverage will also achieve 100% statement coverage.<br>True: A minimal test set that achieves 100% path coverage will generally detect more faults than one that achieves 100% statement coverage.<br>False: A minimal test set that achieves 100% statement coverage will generally detect more faults than one that achieves 100% branch coverage."
    }
];