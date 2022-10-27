

-- Adding our Department titles
INSERT INTO DEPARTMENT (name)
VALUES
("Research Department"),
("Customer Service"),
("Information Technology"),
("Human Resources"),
("Sales"),
("Marketing"),
("Legal");

-- Addimg title salary department id values into role section
INSERT INTO ROLES (title, salary, department_id)
VALUES
("Staff Research Engineer", 117000, 1),
("Call Center Representative", 52000, 2 ),
("Software Engineer", 92310, 3 ),
("Enrollment Specialist", 45000, 4),
("Account Manager", 61000, 5),
("Social Media Specialist", 50000, 6),
("Attorney", 100000, 7);

-- Adding first_name, last_name, roles_id, and manager_id into employee section
INSERT INTO Employee (first_name, last_name, roles_id, manager_id )
VALUES
("Bob", "Burger", 1, 404),
("Linda", "Burger", 2, 470) ,
("Teddie", "Guy", 3, 678),
("Jiraya", "Sage", 4, 770),
("Yusuke", "Spirit", 5, 619),
("Nick", "Fury", 6, 213),
("Virgil", "Shock", 7, 917);

SELECT * FROM department;

SELECT * FROM roles;

SELECT * FROM employee;
