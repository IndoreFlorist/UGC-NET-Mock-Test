import os
import re

# Complete Catalog extracted from your Tracker (Ignition 1.0, Ignition 2.0, and Paper 1)
CATALOG = {
    "ignition-2.0": {
        "01-dm": [
            "DM by Aditi Ma'am",
            "Graph & Group Theory by Aditi Ma'am",
            "Set, Relation & Lattice by Aditi Ma'am",
            "Propositional & Predicate Logic by Aditi Ma'am"
        ],
        "02-dbms": [
            "Functional Dependency by Aditi Ma'am",
            "File System & DBMS Architecture by Aditi Ma'am",
            "SQL by Aditi Ma'am",
            "Indexing & Transaction by Aditi Ma'am",
            "Normalization by Aditi Ma'am",
            "ERD & FD by Aditi Ma'am",
            "DBMS Basics by Aditi Ma'am"
        ],
        "03-se": [
            "SDLC Models & Designing by Aditi Ma'am",
            "SE Numericals by Aditi Ma'am",
            "Testing & Project Management by Aditi Ma'am",
            "Software Models & Designing by Aditi Ma'am"
        ],
        "04-pcg": [
            "CG & Prog by Aditi Ma'am",
            "Programming by Aditi Ma'am",
            "CG by Aditi Ma'am"
        ],
        "05-toc": [
            "TOC & Compiler by Aditi Ma'am",
            "Semantic Analysis & ICG by Aditi Ma'am",
            "Compiler Phases & Parsers by Aditi Ma'am",
            "CFG & TM by Aditi Ma'am",
            "FA & PDA by Aditi Ma'am",
            "Chomsky Hierarchy & RE by Aditi Ma'am"
        ],
        "06-coa": [
            "Addressing, I/O Interfacing & Pipelining by Aditi Ma'am",
            "Pipelining & M/C Instruction by Aditi Ma'am",
            "Memory Interfacing & Control Unit by Aditi Ma'am",
            "Instruction Formats & Addressing Modes by Aditi Ma'am",
            "Basics & Cache Mapping by Aditi Ma'am"
        ],
        "07-cn": [
            "OSI Models by Aditi Ma'am",
            "Network Security by Aditi Ma'am",
            "Transport & Other Layers by Aditi Ma'am",
            "Network Layer by Aditi Ma'am",
            "Data Link Layer by Aditi Ma'am",
            "CN Basics by Aditi Ma'am"
        ],
        "08-daa": [
            "Data Structure & Algorithm by Aditi Ma'am",
            "Sorting & Searching by Aditi Ma'am",
            "Trees by Aditi Ma'am",
            "DS by Aditi Ma'am"
        ],
        "09-os": [
            "Memory Management, Disk Scheduling by Aditi Ma'am",
            "Process Management by Aditi Ma'am",
            "Disk Scheduling & Misc. by Aditi Ma'am",
            "Memory Management by Aditi Ma'am",
            "Process Syn. & Deadlock by Aditi Ma'am",
            "Process Management (2) by Aditi Ma'am",
            "OS Basics by Aditi Ma'am"
        ],
        "10-ai": [
            "AI by Aditi Ma'am",
            "Miscellaneous Topics by Aditi Ma'am",
            "Fuzzy Logic by Aditi Ma'am",
            "Searching & Game Theory by Aditi Ma'am"
        ],
        "11-dl": [
            "Combinational & Sequential Circuits by Aditi Ma'am",
            "Digital Logics by Aditi Ma'am"
        ]
    },
    "ignition-1.0": {
        "01-dm": [
            "01 DM by Aditi Ma'am",
            "02 Miscellaneous Topics | DM | By Aditi Ma'am",
            "03 Graph & Group Theory | DM | By Aditi Ma'am",
            "04 Set & Relation | DM | By Aditi Ma'am",
            "05 Propositional Logic | DM | By Aditi Ma'am"
        ],
        "02-dbms": [
            "01 Functional Dependency by Aditi Ma'am",
            "02 File System & DBMS Architecture by Aditi Ma'am",
            "03 SQL Part 2 | DBMS | By Aditi Ma'am",
            "04 SQL Part 1 | DBMS | By Aditi Ma'am",
            "05 Miscellaneous Topics | DBMS | By Aditi Ma'am",
            "06 Transaction | DBMS | By Aditi Ma'am",
            "07 Normalization | DBMS | By Aditi Ma'am",
            "08 Functional Dependency | DBMS | By Aditi Ma'am",
            "09 Basics of DBMS | By Aditi Ma'am"
        ],
        "03-se": [
            "01 SDLC Models & Designing by Aditi Ma'am",
            "02 SE Numericals | SE | By Aditi Ma'am",
            "03 Software Testing | SE | By Aditi Ma'am",
            "04 Miscellaneous Terms | SE | By Aditi Ma'am",
            "05 Software Designing | SE | By Aditi Ma'am",
            "06 SDLC Models | SE | By Aditi Ma'am"
        ],
        "04-pcg": [
            "01 CG & Prog by Aditi Ma'am",
            "02 Programming PYQs Part 3 | By Aditi Ma'am",
            "03 Programming PYQs Part 2 | By Aditi Ma'am",
            "04 Programming PYQs Part 1 | By Aditi Ma'am",
            "05 CG Numericals | CG | By Aditi Ma'am",
            "06 Theory based PYQ on CG | CG | By Aditi Ma'am"
        ],
        "05-toc": [
            "01 TOC & Compiler by Aditi Ma'am",
            "02 Compiler | By Aditi Ma'am",
            "03 Turing Machine | TOC | By Aditi Ma'am",
            "04 REC & RE Language | TOC | By Aditi Ma'am",
            "05 Ambiguity in CFG | TOC | By Aditi Ma'am",
            "06 Context Free Grammar Part 2 | TOC | By Aditi Ma'am",
            "07 Context Free Grammar Part 1 | TOC | By Aditi Ma'am",
            "08 Regular Expression | TOC | By Aditi Ma'am",
            "09 Regular Language | TOC | By Aditi Ma'am",
            "10 Chomsky Hierarchy | TOC | By Aditi Ma'am"
        ],
        "06-coa": [
            "01 Addressing, I/O Interfacing & Pipelining by Aditi Ma'am",
            "02 Machine Instructions | COA | By Aditi Ma'am",
            "03 Memory Interfacing & Control Units | COA | By Aditi Ma'am",
            "04 Cache Memory & Addressing Modes Part 1 | COA | By Aditi Ma'am",
            "05 Cache Memory & Addressing Modes Part 2 | COA | By Aditi Ma'am"
        ],
        "07-cn": [
            "01 OSI models by Aditi Ma'am",
            "02 Miscellaneous Topics | CN | By Aditi Ma'am",
            "03 Transport Layer | CN | By Aditi Ma'am",
            "04 Network Layer Part 2 | CN | By Aditi Ma'am",
            "05 Network Layer | CN | By Aditi Ma'am",
            "06 Data Link Layer | CN | By Aditi Ma'am",
            "07 Physical Layer Part 2 | CN | By Aditi Ma'am",
            "08 Physical Layer | CN | By Aditi Ma'am",
            "09 OSI Layers | CN | By Aditi Ma'am"
        ],
        "08-daa": [
            "01 Data Structure & Algorithm by Aditi Ma'am",
            "02 Time Complexities Part 2 | DAA | By Aditi Ma'am",
            "03 Time Complexities | DAA | By Aditi Ma'am",
            "04 Greedy & Dynamic Algorithm | DAA | By Aditi Ma'am",
            "05 Trees Part 2 | DAA | By Aditi Ma'am",
            "06 Trees | DAA | By Aditi Ma'am",
            "07 Basics of DAA | DAA | By Aditi Ma'am"
        ],
        "09-os": [
            "01 Memory Management, Disk Scheduling by Aditi Ma'am",
            "02 Process Management by Aditi Ma'am",
            "03 Disc Scheduling | OS | By Aditi Ma'am",
            "04 Memory Management | OS | By Aditi Ma'am",
            "05 Deadlock & Miscellaneous Topics | OS | By Aditi Ma'am",
            "06 OS Basics & Process Management | OS | By Aditi Ma'am"
        ],
        "10-ai": [
            "01 AI by Aditi Ma'am",
            "02 Fuzzy Logic Part 2 | AI | By Aditi Ma'am",
            "03 Fuzzy Logic | AI | By Aditi Ma'am",
            "04 Agents & Searching Algorithms | AI | By Aditi Ma'am"
        ],
        "11-dl": [
            "01 Combinational & Sequential Circuits by Aditi Ma'am",
            "02 Sequential Circuits & Number System | By Aditi Ma'am",
            "03 Boolean Algebra & Combinational Circuit | By Aditi Ma'am"
        ],
        "12-cs": [
            "01 Counselling Session By Aditi Ma'am"
        ]
    },
    "paper-1": {
        "01-teaching-aptitude": [
            "10 What is Teaching Aptitude | Levels of Teaching",
            "09 Bloom's Taxonomy by Aditi Mam",
            "08 Learner's Characteristics by Aditi Mam",
            "07 Swayam and SwayamPrabha by Aditi Mam",
            "06 Swayam Plus and MOOC by Aditi Mam",
            "05 LMS AND TOOLS by Aditi Mam",
            "04 DCS + PRACTICE SESSION by Aditi Mam",
            "03 Cooperative Learning and Strategies",
            "02 Teacher and Learner Centered Methods | Learning Disabilities",
            "01 Transfer of Learning by Aditi Mam"
        ],
        "02-research-aptitude": [
            "12 Research Intro by Aditi Ma'am",
            "11 Research Process by Aditi Ma'am",
            "10 Research Types by Aditi Ma'am Coming Soon",
            "09 Research Types Part 2 by Aditi Ma'am",
            "08 Research Types Part 3 by Aditi Ma'am",
            "07 Research Types Part 4 by Aditi Ma'am",
            "06 Variables by Aditi Ma'am",
            "05 Sampling by Aditi Ma'am",
            "04 Hypothesis by Aditi Ma'am",
            "03 Hypothesis Testing by Aditi Ma'am",
            "02 Hypothesis Testing Part 2 by Aditi Ma'am",
            "01 Hypothesis Testing Part 3 by Aditi Ma'am Live Soon"
        ],
        "03-comprehension": ["01 Reading Comprehension Set 1"],
        "04-communication": ["01 Communication PYQs Set 1"],
        "05-maths-reasoning": [
            "20 Average Part 1 by Vishwas Sir",
            "19 Average Part 2 by Vishwas Sir",
            "18 Average Part 3 by Vishwas Sir",
            "17 Age by Vishwas Sir",
            "16 Age Part 2 by Vishwas Sir",
            "15 Doubt clearing session + Percentage Introduction by Vishwas Sir",
            "14 Percentage by Vishwas Sir",
            "13 Percentage Part 2 by Vishwas Sir",
            "12 Percentage Part 3 by Vishwas Sir",
            "11 Percentage - 4 by Vishwas Sir",
            "10 Percentage - 5 by Vishwas Sir",
            "09 Profit Loss - 1 by Vishwas Sir",
            "08 Profit Loss - 2 by Vishwas Sir",
            "07 Profit Loss - 3 & Doubt Session by Vishwas Sir",
            "06 Discount by Vishwas Sir",
            "05 Discount -2 + Doubt Clearing Session",
            "04 Simple Interest by Vishwas Sir",
            "03 Simple Interest Part 2",
            "02 Simple Interest Part 3",
            "01 Compound Interest 1 by Vishwas Sir Live Now"
        ],
        "06-logical-reasoning": ["01 Logical Reasoning & Indian Logic Set 1"],
        "07-data-interpretation": ["01 Data Interpretation Set 1"],
        "08-ict": [
            "15 Generation of Computer by Aditi Ma'am",
            "14 Generation of Language by Aditi Ma'am",
            "13 Softwares & its Types by Aditi Ma'am",
            "12 Printers & VDU by Aditi Ma'am",
            "11 Memory System by Aditi Ma'am",
            "10 Memory Numerical by Aditi Ma'am",
            "09 OSI & Network Devices by Aditi Ma'am",
            "08 Internet by Aditi Ma'am",
            "07 Misc Terms of Internet by Aditi Ma'am",
            "06 Malwares by Aditi Ma'am",
            "05 Types of Virsus & Hackers by Aditi Ma'am",
            "04 MS Office by Aditi Ma'am",
            "03 Number System by Aditi Ma'am",
            "02 Web Gen & Advanced Technology by Aditi Ma'am",
            "01 Full Forms & Inventors by Aditi Ma'am"
        ],
        "09-pde": [
            "13 Demo Session of Paper 1 by Priyanshi Ma'am",
            "12 smog, pollutants and its types (part 1)",
            "11 pollutants and its types (part 2) by Priyanshi Mam",
            "10 types of lakes and toxicity",
            "09 water pollution by Priyanshi Mam",
            "08 Energy and its type by Priyanshi Mam",
            "07 Energy and its type",
            "06 Noise Pollution by Priyanshi Mam",
            "05 Toxicity and solid waste management",
            "04 Natural Disaster (part 1) by Priyanshi Mam",
            "03 Protocols and conferences (part 1) by Priyanshi Ma'am",
            "02 Protocols and conferences (part 2) by Priyanshi Ma'am",
            "01 MCQs Practice Session (2020-2026)by Priyanshi Mam"
        ],
        "10-higher-education": ["01 Higher Education System Set 1"]
    }
}

def sanitize_filename(index, title):
    clean = re.sub(r'[^a-zA-Z0-9]+', '_', title).strip('_')
    return f"{index}___{clean}.js"

TEMPLATE_JS = """// Topic: {title}
// Replace this sample question with your actual questions array
var rawQuestions = [
    {{
        q: "Sample Question for <b>{title}</b>: Replace this file content with your actual PYQ questions.",
        opts: [
            "a) Option A",
            "b) Option B",
            "c) Option C",
            "d) Option D"
        ],
        ans: 0,
        exp: "<b>a) Option A</b><br>Paste your question array into <code>{path}</code> to overwrite this placeholder."
    }}
];
"""

def create_structure():
    base_dir = "questions"
    total_files = 0
    for batch, subjects in CATALOG.items():
        for subj, topics in subjects.items():
            folder_path = os.path.join(base_dir, batch, subj)
            os.makedirs(folder_path, exist_ok=True)
            
            # Keep git tracking empty directories if needed
            gitkeep = os.path.join(folder_path, ".gitkeep")
            if not os.path.exists(gitkeep):
                open(gitkeep, 'w').close()

            for idx, title in enumerate(topics, start=1):
                fname = sanitize_filename(idx, title)
                fpath = os.path.join(folder_path, fname)
                rel_path = f"questions/{batch}/{subj}/{fname}"
                if not os.path.exists(fpath):
                    with open(fpath, "w", encoding="utf-8") as f:
                        f.write(TEMPLATE_JS.format(title=title, path=rel_path))
                    total_files += 1

    print(f"✅ Successfully created directory structure under './{base_dir}/' with {total_files} template .js files!")

if __name__ == "__main__":
    create_structure()
