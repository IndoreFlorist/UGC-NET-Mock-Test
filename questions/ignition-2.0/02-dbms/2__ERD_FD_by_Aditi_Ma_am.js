var rawQuestions = [
    {
        q: "Given the basic ER and relational models, which of the following is INCORRECT?",
        opts: ["(A) An attribute of an entity can have more than one value", "(B) An attribute of an entity can be composite", "(C) In a row of a relational table, an attribute can have more than one value", "(D) In a row of a relational table, an attribute can have exactly one value or a NULL value"],
        ans: 2,
        exp: "<b>(C) In a row of a relational table, an attribute can have more than one value</b><br>In the relational model, each attribute in a row (tuple) must hold a single atomic value, as required by First Normal Form (1NF).<br>Multivalued attributes are not allowed in the relational model - they must be broken into separate rows or tables."
    },
    {
        q: "Consider the following ER diagram. The minimum number of tables needed to represent M, N, P, R1, R2 is<br><br><i>[ER diagram: Entity M (attributes M1 [key], M2, M3) is connected by total participation to relationship R1, which points to entity P (attributes P1 [key], P2). Weak entity N (attributes N1 [partial key], N2) is connected by total participation to the identifying relationship R2, which points to P.]</i>",
        opts: ["(A) 2", "(B) 3", "(C) 4", "(D) 5"],
        ans: 1,
        exp: "<b>(B) 3</b><br>M, P are strong entities hence they must be represented by separate tables.<br>Many-to-one and one-to-many relationship sets that are total on the many-side can be represented by adding an extra attribute to the \"many\" side, containing the primary key of the \"one\" side. (This way no extra table will be needed for Relationship sets.) M table is modified to include primary key of P side (i.e. P1).<br>N is weak entity, and is modified to include primary key of P (i.e. P1).<br>Therefore there would be minimum of 3 tables with schema given below:<br>M (M1, M2, M3, P1)<br>P (P1, P2)<br>N (P1, N1, N2)"
    },
    {
        q: "Let E1 and E2 be two entities in an E/R diagram with simple single-valued attributes. R1 and R2 are two relationships between E1 and E2, where R1 is one-to-many and R2 is many-to-many. R1 and R2 do not have any attributes of their own. What is the minimum number of tables required to represent this situation in the relational model?",
        opts: ["(A) 2", "(B) 3", "(C) 4", "(D) 5"],
        ans: 1,
        exp: "<b>(B) 3</b><br>Strong entities E1 and E2 are represented as separate tables. In addition to that many-to-many relationships (R2) must be converted as separate table by having primary keys of E1 and E2 as foreign keys. One-to-many relationship (R1) must be transferred to 'many' side table (i.e. E2) by having primary key of one side (E1) as foreign key (this way we need not make a separate table for R1).<br>Let relation schema be E1(a1, a2) and E2(b1, b2).<br><br>Relation E1 (a1 is the key):<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>a1</b></td><td><b>a2</b></td></tr><tr><td>1</td><td>3</td></tr><tr><td>2</td><td>4</td></tr><tr><td>3</td><td>4</td></tr></table><br>Relation E2 (b1 is the key, a1 is the foreign key, hence R1 (one-many) relationship set satisfy here):<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>b1</b></td><td><b>b2</b></td><td><b>a1</b></td></tr><tr><td>7</td><td>4</td><td>2</td></tr><tr><td>8</td><td>7</td><td>2</td></tr><tr><td>9</td><td>7</td><td>3</td></tr></table><br>Relation R2 ({a1, b1} combined is the key here, representing many-many relationship R2):<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>a1</b></td><td><b>b1</b></td></tr><tr><td>1</td><td>7</td></tr><tr><td>1</td><td>8</td></tr><tr><td>2</td><td>9</td></tr><tr><td>3</td><td>9</td></tr></table><br>Hence we will have minimum of 3 tables."
    },
    {
        q: "In an Entity-Relationship (ER) model, suppose R is a many-to-one relationship from entity set E1 to entity set E2. Assume that E1 and E2 participate totally in R and that the cardinality of E1 is greater that the cardinality of E2. Which one of the following is true about R?",
        opts: ["(A) Every entity in E1 is associated with exactly one entity in E2.", "(B) Some entity in E1 is associated with more than one entity in E2.", "(C) Every entity in E2 is associated with exactly one entity in E1.", "(D) Every entity in E2 is associated with at most one entity in E1."],
        ans: 0,
        exp: "<b>(A) Every entity in E1 is associated with exactly one entity in E2.</b><br>Since given relation is many to one, no entity in E1 can be related to more than one entity in E2 and an entity in E2 can be related to more than one entity in E1."
    },
    {
        q: "Consider the following statements:<br><br>Statement I: Composite attributes cannot be divided into smaller subparts.<br>Statement II: Complex attribute is formed by nesting composite attributes and multi-valued attributes in an arbitrary way.<br>Statement III: A derived attribute is an attribute whose values are computed from other attribute.<br><br>Which of the following is correct?",
        opts: ["(A) Statement I, Statement II and Statement III are true", "(B) Statement I true and Statement II, Statement III false", "(C) Statement I, Statement II true and Statement III false", "(D) Statement I false and Statement II, Statement III true"],
        ans: 3,
        exp: "<b>(D) Statement I false and Statement II, Statement III true</b><br>Statement I: Composite attributes cannot be divided into smaller subparts. False. Composite attributes can be divided into smaller subparts which represent more basic attributes and have independent meaning.<br>Statement II: Complex attribute is formed by nesting composite attributes and multi-valued attributes in an arbitrary way. True. The multi-valued and composite attributes are called 'Components' of complex attributes.<br>Statement III: A derived attribute is an attribute whose values are computed from other attribute. True. Derived attributes comprises of basic attributes."
    },
    {
        q: "The primary key is chosen from ________.",
        opts: ["(A) The most complex candidate key available.", "(B) All available candidate keys for a table.", "(C) The simplest candidate key available.", "(D) Any attribute within the table."],
        ans: 0,
        exp: "<b>(A) The most complex candidate key available.</b><br>The primary key in a database is a unique identifier for a record within a table.<br>It is chosen from the candidate keys available for the table.<br>The primary key ensures that each record can be uniquely identified, preventing duplicate entries.<br>It is crucial for maintaining the integrity and reliability of the database.<br>The most complex candidate key is often chosen to ensure that the primary key is unique and less likely to have duplicates."
    },
    {
        q: "Consider the following statements regarding key -<br><br>(I) A super key is an attribute or combination of attributes that uniquely identify records in an RDBMS table.<br>(II) A candidate key is a subset of a super key.<br>(III) All super keys are candidate keys but vice versa is not true.",
        opts: ["(A) Only (I) is true", "(B) (I) and (III) are true", "(C) Only (II) is true", "(D) (I) and (II) are true"],
        ans: 3,
        exp: "<b>(D) (I) and (II) are true</b><br>Statement 1: A super key is an attribute or combination of attributes that uniquely identify records in an RDBMS table. True. A super key, or just key, is a combination of every attribute that may be used to specifically identify rows (or tuples) in a database. This indicates that a superkey may contain additional information that isn't required for uniquely identifying table rows.<br><br>Statement 2: A candidate key is a subset of a super key. True. A Candidate key is a subset of Super keys and is clear of any unnecessary attributes that are not essential for tuple identification. For all tuples, the Candidate key value is distinct and non-null. Additionally, each table must include at least one Candidate key.<br><br>Statement 3: All super keys are candidate keys but vice versa is not true. False. Candidate keys are a subset of Super keys. They contain only those attributes which are required to uniquely identify tuples. All Candidate keys are Super keys. But the vice-versa is not true."
    },
    {
        q: "All candidate keys other than the primary key are named ________.",
        opts: ["(A) Secondary key", "(B) Foreign key", "(C) Remaining key", "(D) Alternate key"],
        ans: 3,
        exp: "<b>(D) Alternate key</b><br>In a relational database, an alternate key is any candidate key that is not chosen as the primary key. It uniquely identifies a record in a table, just like a primary key, but the difference is that there can be multiple alternate keys for a table while there is only one primary key."
    },
    {
        q: "The attributes of the relationship set of ER model is called as:",
        opts: ["(A) Derived attributes", "(B) Descriptive attributes", "(C) Multi-valued attributes", "(D) Single-valued attributes"],
        ans: 1,
        exp: "<b>(B) Descriptive attributes</b><br>A relationship may also have attributes called descriptive attributes. Relationship instance in a given relationship set must be uniquely identifiable from its participating entities, without using the descriptive attributes."
    },
    {
        q: "A functional dependency is a relationship between:",
        opts: ["(A) Tables", "(B) Attributes", "(C) Rows", "(D) Relations"],
        ans: 1,
        exp: "<b>(B) Attributes</b><br>"
    },
    {
        q: "Consider the following statements S1 and S2 about the relational data model:<br><br>S1: A relation scheme can have at most one foreign key.<br>S2: A foreign key in a relation scheme R cannot be used to refer to tuples of R.<br><br>Which one of the following choices is correct?",
        opts: ["(A) S1 is true and S2 is false.", "(B) Both S1 and S2 are true.", "(C) Both S1 and S2 are false.", "(D) S1 is false and S2 is true."],
        ans: 2,
        exp: "<b>(C) Both S1 and S2 are false.</b><br>Statement 1: A relation scheme can have at most one foreign key. There is no such restriction on how many number of Foreign keys a particular relation can have. A relation can have as many number of Foreign keys as required. So this statement is false.<br>Statement 2: A foreign key in a relation scheme R cannot be used to refer to tuples of R. There is no such constraint. Foreign key can be used to refer to primary key of the same relation. Self-referencing relations are examples of such foreign key. So this statement is also false."
    },
    {
        q: "In E-R model, Y is the dominant entity and X is subordinate entity",
        opts: ["(A) If X is deleted, then Y is also deleted", "(B) If Y is deleted, then X is also deleted", "(C) If Y is deleted, then X is not deleted", "(D) None of the above"],
        ans: 1,
        exp: "<b>(B) If Y is deleted, then X is also deleted</b><br>Y is dominant entity: Strong entity.<br>X is Subordinate entity: Weak entity.<br>Strong entity connects weak entity by using identifying relationship so we generally prefer cascading effect. If anything happens in dominant entity that is also reflected in Subordinate entity but vice versa is not true.<br>Employee &lt;===&gt; Dependent (Relationship &lt;&lt;is dependent&gt;&gt;)<br>If employee deleted its dependent tuple must be deleted."
    },
    {
        q: "A primary key, if combined with a foreign key creates",
        opts: ["(A) Parent child relationship between the tables that connect them", "(B) Many-to-many relationship between the tables that connect them", "(C) Network model between the tables connect them", "(D) None of these"],
        ans: 0,
        exp: "<b>(A) Parent child relationship between the tables that connect them</b><br>When a primary key from one table is combined with a foreign key in another table, it establishes a relationship between the two tables. Specifically, it creates a parent-child relationship.<br><br>In a relational database, a parent-child relationship is formed when one table (the parent) has a primary key that is referenced by a foreign key in another table (the child).<br><br>This relationship is established to maintain referential integrity, ensuring that data in the child table corresponds to existing data in the parent table. For example, consider two tables: ParentTable with a primary key column ParentID, and ChildTable with a foreign key column ParentID that references the primary key in ParentTable. In this scenario, each record in ChildTable is associated with a specific record in ParentTable, creating a parent-child relationship."
    },
    {
        q: "A prime attribute of a relation schema R is an attribute that appears",
        opts: ["(A) in all candidate keys of R", "(B) in some candidate key of R", "(C) in a foreign key of R only", "(D) in the primary key of R"],
        ans: 1,
        exp: "<b>(B) in some candidate key of R</b><br>Attributes of the relation which exist in at least one of the possible candidate keys, are called prime or key attributes. Candidate key is a minimal super key and a Super key is a set of attributes that uniquely identify a tuple in a relation. Therefore, a prime attribute of a relation scheme R is an attribute that appears in some candidate key of R."
    },
    {
        q: "An aggregation association is drawn using which symbol?",
        opts: ["(A) A line which loops back on to the same table", "(B) A small open diamond at the end of a line connecting two tables", "(C) A small closed diamond at the end of a line connecting two tables", "(D) A small closed triangle at the end of a line connecting two tables"],
        ans: 1,
        exp: "<b>(B) A small open diamond at the end of a line connecting two tables</b><br>Aggregation is a special case of association. A directional association between objects. When an object 'has-a' another object, then you have got an aggregation between them. Direction between them specified which object contains the other object. Aggregation is also called a \"Has-a\" relationship.<br>Composition: every car has an engine (closed diamond).<br>Aggregation: cars may have passengers, they come and go (open diamond)."
    },
    {
        q: "Mathematically, an Attribute A for entity E whose value set is V can be defined as a function from E to the power set P(V) of V: A: E->P(V)<br><br>Attribute A is",
        opts: ["(A) Single valued", "(B) Composite valued", "(C) Both A and B", "(D) none of the above"],
        ans: 2,
        exp: "<b>(C) Both A and B</b><br>Attribute values will map to either singleton set or composite."
    },
    {
        q: "Consider a relation R(A, B, C), which of the following statements is not true according to inference rules for functional dependencies?",
        opts: ["(A) If A → B and B → C, then A → C", "(B) If AB → C, then A → B and B → C", "(C) If A → B and A → C, then A → BC", "(D) If A → B, then AC → BC"],
        ans: 1,
        exp: "<b>(B) If AB → C, then A → B and B → C</b><br>Option 1: True: Transitive Rule. In the transitive rule, if A determines B and B determines C, then A must also determine C. If A → B and B → C then A → C.<br><br>Option 3: True: Union Rule. Union rule says, if A determines B and A determines C, then A must also determine B and C. If A → B and A → C then A → BC.<br><br>Option 4: True: Augmentation Rule. The augmentation is also called a partial dependency. In augmentation, if A determines C, then AC determines BC for any C. If A → B then AC → BC."
    },
    {
        q: "Consider the entities 'hotel room', and 'person' with a many to many relationship 'lodging' as shown below:<br><br><i>[ER diagram: Hotel Room — Lodging — Person]</i><br><br>If we wish to store information about the rent payment to be made by person (s) occupying different hotel rooms, then this information should appear as an attribute of",
        opts: ["(A) Person", "(B) Hotel Room", "(C) Lodging", "(D) None of these"],
        ans: 2,
        exp: "<b>(C) Lodging</b><br>Since it is many to many, rent cannot be an attribute of room or person entities alone. If depending on number of persons sharing a room the rent for each person for the room will be different. Otherwise rent can be attribute of room. Hence go for attribute of Lodging."
    },
    {
        q: "When the referential integrity rule is enforced, which one is usually not a valid action in response to the deletion of a row that contains a primary key value referenced elsewhere?",
        opts: ["(A) Do not allow the deletion", "(B) Accept the deletion without any other action", "(C) Delete the related rows", "(D) Set the foreign keys of related rows to null"],
        ans: 1,
        exp: "<b>(B) Accept the deletion without any other action</b><br>Do not allow the deletion: This is a valid and common action. It prevents the deletion of the row to ensure that no orphaned records (rows in other tables that reference the primary key of the row that is attempted to be deleted) are created.<br><br>Accept the deletion without any other action: This is usually not a valid action when referential integrity is enforced because it would lead to orphaned records, which violates the principle of referential integrity.<br><br>Delete the related rows: This is known as cascade delete. It is a valid action where deleting a row causes the deletion of all rows in other tables that reference its primary key. This maintains referential integrity by ensuring there are no orphaned records.<br><br>Set the foreign keys of related rows to null: This is another valid action, assuming the foreign key constraints are set up to allow nulls. It's known as setting to NULL on delete. When the row with the primary key is deleted, the foreign keys in the related rows that reference it are set to null, avoiding the creation of orphaned records."
    },
    {
        q: "Consider the relation X(P, Q, R, S, T, U) with the following set of functional dependencies F = { {P, R} → {S, T}; {P, S, U} → {Q, R} }. Which of the following is the trivial functional dependency in F+, where F+ is closure of F?",
        opts: ["(A) {P, R} → {S, T}", "(B) {P, R} → {R, T}", "(C) {P, S} → {S}", "(D) {P, S, U} → {Q}"],
        ans: 2,
        exp: "<b>(C) {P, S} → {S}</b><br>1. Option 1: {P, R} → {S, T}<br>RHS = {S, T}, LHS = {P, R}. Since {S, T} is not a subset of {P, R}, this is not trivial.<br><br>2. Option 2: {P, R} → {R, T}<br>RHS = {R, T}, LHS = {P, R}. Here, R ⊆ {P, R} but T is not in {P, R}, so the entire RHS {R, T} is not a subset of {P, R}. This is not trivial.<br><br>3. Option 3: {P, S} → {S}<br>RHS = {S}, LHS = {P, S}. Since S ⊆ {P, S}, this is a trivial functional dependency.<br><br>4. Option 4: {P, S, U} → {Q}<br>RHS = {Q}, LHS = {P, S, U}. Since Q is not in {P, S, U}, this is not trivial."
    },
    {
        q: "Given an instance of the relation R(ABCD).<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>A</b></td><td><b>B</b></td><td><b>C</b></td><td><b>D</b></td></tr><tr><td>a1</td><td>b1</td><td>c1</td><td>d1</td></tr><tr><td>a1</td><td>b2</td><td>c2</td><td>d2</td></tr><tr><td>a2</td><td>b2</td><td>c2</td><td>d3</td></tr><tr><td>a3</td><td>b3</td><td>c4</td><td>d3</td></tr></table><br>Which of the following functional dependencies hold?",
        opts: ["(A) {AB} → D and D → A", "(B) {AB} → C and B → D", "(C) {AB} → C and B → C", "(D) {AB} → D and A → D {AB} → C and A → D"],
        ans: 2,
        exp: "<b>(C) {AB} → C and B → C</b><br>"
    },
    {
        q: "A many-to-one relationship exists between entity sets r1 and r2. How will it be represented using functional dependencies if Pk(r) denotes the primary key attribute of relation r?",
        opts: ["(A) Pk(r1) → Pk(r2)", "(B) Pk(r2) → Pk(r1)", "(C) Pk(r2) → Pk(r1) and Pk(r1) → Pk(r2)", "(D) Pk(r2) → Pk(r1) or Pk(r1) → Pk(r2)"],
        ans: 0,
        exp: "<b>(A) Pk(r1) → Pk(r2)</b><br>There exists many to one relationship between two entities r1 and r2. PK(r1) - primary key of relation r1, PK(r2) - primary key of relation r2. Consider attributes of relation r1 are (employee id, employee name). Consider attributes of relation r2 are (address, department). From here, employee id can clearly tell us about the employee, it can uniquely identify a person. But the department cannot uniquely identify the employee.<br>So, option 1: Pk(r1) → Pk(r2) i.e. primary key of r1 can identify each attribute of r2 because it is given that one element of r2 is referring to more than one element of r1."
    },
    {
        q: "We have a database table with relational schema R(XYZPQ):<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>X</b></td><td><b>Y</b></td><td><b>Z</b></td><td><b>P</b></td><td><b>Q</b></td></tr><tr><td>A1</td><td>B1</td><td>C1</td><td>D1</td><td>E1</td></tr><tr><td>A2</td><td>B2</td><td>C1</td><td>D2</td><td>E1</td></tr><tr><td>A3</td><td>B2</td><td>C2</td><td>D1</td><td>E2</td></tr><tr><td>A4</td><td>B3</td><td>C1</td><td>D3</td><td>E3</td></tr><tr><td>A5</td><td>B2</td><td>C2</td><td>D4</td><td>E2</td></tr></table><br>Which of the following statements is true?",
        opts: ["(A) ZP → Q is a functional dependency.", "(B) YZ → P is a functional dependency.", "(C) None of the above", "(D) Y → X is a functional dependency"],
        ans: 0,
        exp: "<b>(A) ZP → Q is a functional dependency.</b><br>"
    },
    {
        q: "Let relation R2 has a Foreign Key that refers to Primary Key of relation R1. Which of the following operations may cause violation of referential integrity constraints?<br><br>I: insert into R1<br>II: insert into R2<br>III: delete from R1<br>IV: delete from R2",
        opts: ["(A) II and III", "(B) I and IV", "(C) I, II and III", "(D) III and IV"],
        ans: 0,
        exp: "<b>(A) II and III</b><br>Insert into R1 cannot cause any violation. Insert into R2 can cause violation if any value is inserted into D of R2 which value is not in A in R1. Delete from R1 can cause violation if any tuple is deleted which is referenced to by D in R2. Delete from R2 cannot cause any violation."
    },
    {
        q: "Consider the database table \"Persons\" having person_ID as the primary key.<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Person_ID</b></td><td><b>Name</b></td><td><b>Age</b></td></tr><tr><td>1000</td><td>Rajan</td><td>40</td></tr><tr><td>-</td><td>Jatin</td><td>-45</td></tr><tr><td>1001</td><td>Rajesh</td><td>35</td></tr></table><br>What are the constraints violated by the above table?",
        opts: ["(A) Referential integrity only", "(B) Referential and domain integrity", "(C) Entity and domain integrities", "(D) Relationship integrity"],
        ans: 2,
        exp: "<b>(C) Entity and domain integrities</b><br>There are some rules applied to the database to keep data stable, accurate, and consistent. These are known as integrity rules.<br>Entity integrity rule: The primary key or part of it in any relation can not be NULL.<br>Referential integrity rule: A foreign key can be either null or it can have only those values which are present in the primary key with which it is related.<br>Domain constraints: It means all data items in a column must follow within a defined set of valid values."
    }
];