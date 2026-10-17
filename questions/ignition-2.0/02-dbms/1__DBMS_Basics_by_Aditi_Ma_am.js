var rawQuestions = [
    {
        q: "What is a database?",
        opts: ["(a) Organized collection of information that cannot be accessed, updated, and managed", "(b) Collection of data or information without organizing", "(c) Organized collection of data or information that can be accessed, updated, and managed", "(d) Organized collection of data that cannot be updated"],
        ans: 2,
        exp: "<b>(c) Organized collection of data or information that can be accessed, updated, and managed</b><br>It is defined as an organized collection of data or information for easy access, updating, and management in a computer."
    },
    {
        q: "Who created the first DBMS?",
        opts: ["(a) Edgar Frank Codd", "(b) Charles Bachman", "(c) Charles Babbage", "(d) Sharon B. Codd"],
        ans: 1,
        exp: "<b>(b) Charles Bachman</b><br>Charles Bachman along with his team invented the first DBMS known as Integrated Data Store (IDS)."
    },
    {
        q: "Which of the following is not a feature of DBMS?",
        opts: ["(a) Minimum Duplication and Redundancy of Data", "(b) High Level of Security", "(c) Single-user Access only", "(d) Support ACID Property"],
        ans: 2,
        exp: "<b>(c) Single-user Access only</b><br>Single-user Access only\u201D is not a feature of DBMS. DBMS allows multiple users to access and manipulate the database concurrently. It provides mechanisms to handle concurrent access and ensure data consistency and integrity among multiple users."
    },
    {
        q: "Which of the following is known as a set of entities of the same type that share same properties, or attributes?",
        opts: ["(a) Relation set", "(b) Tuples", "(c) Entity set", "(d) Entity Relation model"],
        ans: 2,
        exp: "<b>(c) Entity set</b><br>In the actual world, an entity is a distinct \u201Cthing\u201D or \u201Cobject\u201D from all other objects. For example: Each employee of an organization is an entity."
    },
    {
        q: "The DBMS acts as an interface between ________________ and ________________ of an enterprise-class system.",
        opts: ["(a) Data and the DBMS", "(b) Application and SQL", "(c) Database application and the database", "(d) The user and the software"],
        ans: 2,
        exp: "<b>(c) Database application and the database</b><br>A database management system is an application that acts as an interface between the user and the database. The user interacts with the application to access data."
    },
    {
        q: "Which of the following is/are true with reference to \u2018view\u2019 in DBMS?<br><br>(a) A \u2018view\u2019 is a special stored procedure executed when certain event occurs.<br>(b) A \u2018view\u2019 is a virtual table, which occurs after executing a pre-compiled query.",
        opts: ["a) Only (a) is true", "b) Only (b) is true", "c) Both (a) and (b) are true", "d) Neither (a) nor (b) are true"],
        ans: 1,
        exp: "<b>b) Only (b) is true</b><br>\u2022 A view is a virtual table that is used to view or manipulate parts of the table.<br>\u2022 A view can select rows on the basis of certain conditions & fields from one or more tables present in the database is used to create a view.<br>\u2022 View is not a special stored procedure but is a virtual table that occurs after executing a pre-compiled query.<br>\u2022 Hence, View in DBMS is a virtual table."
    },
    {
        q: "The top level of the hierarchy consists of ______ each of which can contain _____.",
        opts: ["a) Schemas, Catalogs", "b) Schemas, Environment", "c) Environment, Schemas", "d) Catalogs, Schemas"],
        ans: 3,
        exp: "<b>d) Catalogs, Schemas</b><br>Schemas represent the logical configuration of the DBMS. Catalogs consist of metadata of the objects and system settings used."
    },
    {
        q: "Match the following<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Term</b></td><td><b>Description</b></td></tr><tr><td>Physical Level Abstraction</td><td>p) what data are stored in the database</td></tr><tr><td>Instance</td><td>q) design of the database.</td></tr><tr><td>Logical Level Abstraction</td><td>r) information stored in database at a particular moment</td></tr><tr><td>Schema</td><td>s) how data are stored in the database.</td></tr></table>",
        opts: ["a) p, q, r, s", "b) s, q, p, r", "c) s, r, p, q", "d) s, p, q, r"],
        ans: 2,
        exp: "<b>c) s, r, p, q</b><br>Physical Level Abstraction - s) how data are stored in the database; Instance - r) information stored in database at a particular moment; Logical Level Abstraction - p) what data are stored in the database; Schema - q) design of the database."
    },
    {
        q: "A view of database that appears to an application program is known as",
        opts: ["a) Schema", "b) Subschema", "c) Virtual table", "d) Index Table"],
        ans: 1,
        exp: "<b>b) Subschema</b><br>\u2022 A subschema is a subset of the schema and inherits the same property that a schema has.<br>\u2022 The plan for a view is often called subschema.<br>\u2022 Subschema refers to an application programmer's view of the data item types and record types, which he or she uses."
    },
    {
        q: "The traditional storage of data organized by the customer, stored in separate folders in filing cabinets is an example of ______________ type of \u2018database\u2019 management system.",
        opts: ["a) Object-oriented database management system", "b) Relational database management system", "c) Network database management system", "d) Hierarchical database management system"],
        ans: 3,
        exp: "<b>d) Hierarchical database management system</b><br>In an object-oriented database management system, the data is stored in the form of objects. In a relational DBMS, the data is stored in the form of tables. Hierarchy is obtained by Parent-Child Relationship. Parent-Child Relationship Type is basically a 1:N relationship."
    },
    {
        q: "Which of the following schema concept provides different view of relational table to different user?",
        opts: ["a) Physical schema", "b) External schema", "c) Logical schema", "d) Data model"],
        ans: 1,
        exp: "<b>b) External schema</b><br>External schema provides facility of view. VIEW is logical representation of table but data are not actually stored in such format."
    },
    {
        q: "The logical data structure with a one-to-many relationship is a:",
        opts: ["a) Network", "b) Tree", "c) Chain", "d) Relationship"],
        ans: 1,
        exp: "<b>b) Tree</b><br>\u2022 A network data structure has many-to-many relationships.<br>\u2022 A chain data structure has one-to-one relationships.<br>\u2022 A tree data structure has one-to-many relationships.<br>\u2022 There is no data structure called relationship."
    },
    {
        q: "Data model mapping is mapping of",
        opts: ["a) Conceptual Schema to Logical Schema", "b) Logical Schema to conceptual Schema", "c) Logical Schema to internal Schema", "d) Internal Schema to logical Schema"],
        ans: 0,
        exp: "<b>a) Conceptual Schema to Logical Schema</b><br>Data model: a collection of conceptual tools for describing data, and data relationships. A data model provides a way to describe the design of a database at the physical, logical, and view levels. We have to convert the conceptual database design into the logical database schema (that is the reason we say the data model is mapping between conceptual schema to Logical schema).<br><br>Conceptual Schema: It describes what data is present in the database. This schema hides the information regarding physical storage.<br><br>Logical schema: It is nothing but the design of the database at its logical level. This logical level contains table names, attributes, and key constraints."
    },
    {
        q: "Which of the following statements is/are TRUE regarding three tier DBMS architecture?<br><br>(i) Logical Data Independence require structural and constraint changes without affecting application programs<br>(ii) Physical data independence is required in most databases to hide compression, splitting and merging of records.",
        opts: ["a) Only (i)", "b) Only (ii)", "c) Both", "d) None"],
        ans: 2,
        exp: "<b>c) Both</b><br>Statement (i) is correct: In logical data independence conceptual schema is changed without affecting the application program.<br>Statement (ii) is correct: In physical data independence these details are hidden or they are low level details."
    },
    {
        q: "Which one of the options given below refers to the degree (or arity) of a relation in relational database systems?",
        opts: ["a) Number of attributes of its relation schema.", "b) Number of tuples stored in the relation.", "c) Number of entries in the relation.", "d) Number of distinct domains of its relation schema."],
        ans: 0,
        exp: "<b>a) Number of attributes of its relation schema.</b><br>Relational Model Definitions:<br>\u2022 A relation is a table with columns and rows.<br>\u2022 An attribute is a named column of a relation.<br>\u2022 A tuple is a row of a relation.<br>\u2022 A domain is a set of allowable values for one or more attributes.<br>\u2022 The degree of a relation is the number of attributes it contains.<br>\u2022 The cardinality of a relation is the number of tuples it contains.<br>\u2022 A relational database is a collection of normalized relations with distinct relation names.<br>\u2022 The intension of a relation is the structure of the relation including its domains.<br>\u2022 The extension of a relation is the set of tuples currently in the relation."
    },
    {
        q: "In an ER Diagram, a double ellipse is used to represent :",
        opts: ["a) Simple Attribute", "b) Composite Attribute", "c) Descriptive Attribute", "d) Multi-valued Attribute"],
        ans: 3,
        exp: "<b>d) Multi-valued Attribute</b><br>\u2022 In an ER diagram, a multi-valued attribute is represented by a double ellipse.<br>\u2022 For example, a person entity might have a multi-valued attribute \"Phone Numbers\" because a person can have more than one phone number.<br>\u2022 Multi-valued attributes are used to represent situations where an entity can have multiple instances of the same attribute.<br>\u2022 These attributes are essential for accurately modeling real-world scenarios where entities can possess multiple values for a particular attribute.<br>\u2022 Proper representation of multi-valued attributes helps in designing a normalized database schema."
    },
    {
        q: "If you were collecting and storing information about your music collection, an album would be considered a(n) _____",
        opts: ["a) Relation", "b) Entity", "c) Instance", "d) Attribute"],
        ans: 1,
        exp: "<b>b) Entity</b><br>An entity set is a logical container for instances of an entity type and instances of any type derived from that entity type."
    },
    {
        q: "Match the building blocks in Entity relationship diagram<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Symbol</b></td><td><b>Building block</b></td></tr><tr><td>i. Oval (ellipse)</td><td>a. Relationship</td></tr><tr><td>ii. Line with a vertical line and an oval at one end</td><td>b. Attributes</td></tr><tr><td>iii. Line intersected by two small vertical lines at one end</td><td>c. Optional one</td></tr><tr><td>iv. Diamond</td><td>d. Mandatory one</td></tr></table>",
        opts: ["a) i - b, ii - c, iii - d, iv - a", "b) i - b, ii - c, iii - a, iv \u2013 d", "c) i - b, ii - a, iii - d, iv - c", "d) i - c, ii - b, iii - d, iv - a"],
        ans: 0,
        exp: "<b>a) i - b, ii - c, iii - d, iv - a</b><br>Entity Relationship Diagram - It is a diagram that displays the relationship of entity sets stored in a database. In other words, ER diagrams help to explain the logical structure of databases. ER diagrams are created based on three basic concepts: entities, attributes and relationships.<br>\u2022 Relationship - It is nothing but an association among two or more entities. Entities take part in relationships. We can often identify relationships with verbs or verb phrases. It is represented by a Diamond. Attributes - It is a single-valued property of either an entity-type or a relationship-type. It is represented by an Oval.<br>\u2022 Optional One - It represents a relationship between two entities that is NOT mandatory to exist. It is represented by a line intersected with a vertical line and an oval at one end.<br>\u2022 Mandatory One - It represents a relationship between two entities that is mandatory to exist. It is represented by a line intersected by two small vertical lines at one end."
    },
    {
        q: "Consider the \"Supply\" relationship relating the entities \"Supplier\" and \"Product\". Under default assumption, what will be the cardinality of the \"Supply\" relationship?",
        opts: ["a) 1 : N", "b) 1 : 1", "c) M : N", "d) N : 1"],
        ans: 2,
        exp: "<b>c) M : N</b><br>A many-to-Many relationship in DBMS is a relationship between more than one instance of an entity with more than one instance of another entity i.e. both the entities can have many relationships between each other. Example: Customer (M) \u2014 has \u2014 (N) Account.<br>A supplier has zero or more products and each product is supplied by zero or more number of suppliers. Hence there would be many to many relations."
    },
    {
        q: "Consider a directed line(->) from the relationship set advisor to both entity sets instructor and student. This indicates _________ cardinality",
        opts: ["a) One to many", "b) One to one", "c) Many to many", "d) Many to one"],
        ans: 1,
        exp: "<b>b) One to one</b><br>This indicates that an instructor may advise at most one student, and a student may have at most one advisor."
    },
    {
        q: "In RDBMS, domain constraint is also called:",
        opts: ["a) Table constraint", "b) Database constraint", "c) Tuple constraint", "d) Attribute constraint"],
        ans: 3,
        exp: "<b>d) Attribute constraint</b><br>Domain Constraints: Domain Constraints are user-defined columns that help the user to enter the value according to the data type. Columns are called attributes of a relation. It is also called an attribute constraint."
    },
    {
        q: "The degree of a database relation is also called as:",
        opts: ["a) Extension", "b) Size", "c) Arity", "d) Cardinality"],
        ans: 2,
        exp: "<b>c) Arity</b><br>\u2022 The degree of a relation (table) is the number of attributes (columns) in the given table.<br>\u2022 It is also called Arity. An attribute is a property or feature of an entity. An entity can have an unlimited number of attributes.<br>\u2022 One of the attributes is considered to be the primary key. Attributes in an Entity-Relationship model are represented by an ellipse shape."
    },
    {
        q: "For a weak entity set to be meaningful, it must be associated with another entity set, called the",
        opts: ["a) Identifying set", "b) Owner set", "c) Neighbour set", "d) Strong entity set"],
        ans: 0,
        exp: "<b>a) Identifying set</b><br>Every weak entity must be associated with an identifying entity; that is, the weak entity set is said to be existence dependent on the identifying entity set. The identifying entity set is said to own the weak entity set that it identifies. It is also called as owner entity set."
    },
    {
        q: "In an ER model, suppose relation R is a 1: M relationship from entity set Y to entity set X. Assume that X has participated totally and Y has participated partially in R and that the cardinality of X is greater than the cardinality of Y. Which of the following is true?<br><br>S1. Every entity in Y is associated with at least one entity in X<br>S2. The maximum participation of Y in the relationship is M.<br>S3. Every entity in X is associated with exactly one entity in Y<br>S4. The minimum participation of X in the relationship is 0.",
        opts: ["a) Only S1 and S2", "b) Only S2 and S3", "c) Only S3 and S4", "d) S1, S2, S3 and S4"],
        ans: 1,
        exp: "<b>b) Only S2 and S3</b><br>Diagram: Y \u2014 1 \u2014 R \u2550\u2550 M \u2014 X<br>For X, Minimum participation = 1, Maximum participation = 1. Hence, every entity in X is associated with exactly one entity in Y.<br>For Y, Minimum participation = 0, Maximum participation = M. Hence, the maximum participation of Y in the relationship is M.<br><br>In question X and Y are sets, the cardinality of a set is instances of an entity. Instances of X > Instances of Y."
    },
    {
        q: "An ER model of a database consists of entity types A and B. These are connected by a relationship R which does not have its own attribute. Under which one of the following conditions can the relational table for R be merged with that of A?",
        opts: ["a) Relationship R is one-to-many and the participation of A in R is total", "b) Relationship R is one-to-many and the participation of A in R is partial", "c) Relationship R is many-to-one and the participation of A in R is total", "d) Relationship R is many-to-one and the participation of A in R is partial"],
        ans: 2,
        exp: "<b>c) Relationship R is many-to-one and the participation of A in R is total</b><br>\u2022 Total participation: It specifies that each entity in the entity set must compulsorily participate in at least one relationship instance in that relationship set.<br>\u2022 Partial participation: It specifies that each entity in the entity set may or may not participate in the relationship instance in that relationship set.<br>Diagram: A \u2550\u2550 M \u2014 R \u2014 1 \u2014 B<br>In one to many or many to one relation, the relation between two entities is merged on the many side with total participation. As, it is given that relationship R doesn\u2019t have its own attributes. So, it must be combined with entity A. So, the relation must be many to one and there should be total participation of A in R."
    }
];