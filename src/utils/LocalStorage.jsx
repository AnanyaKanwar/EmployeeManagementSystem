
      {/* data set-get and set 
      1-getting data prompt-create a json data of 5 employees each employee contains id and email and password make sure to give them password 123,do one more thing create another json data of 1 admin with same properties
      */}

      
      const employees = [
        {
          "id": 1,
          "email": "employee1@example.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "Task 1",
              "taskDescription": "Complete project report",
              "taskDate": "2024-10-10",
              "category": "Report",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Task 2",
              "taskDescription": "Attend team meeting",
              "taskDate": "2024-10-15",
              "category": "Meeting",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Task 3",
              "taskDescription": "Submit timesheet",
              "taskDate": "2024-10-18",
              "category": "Administrative",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
            }
          ]
        },
        {
          "id": 2,
          "email": "employee2@example.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "Task 1",
              "taskDescription": "Fix bugs in project",
              "taskDate": "2024-10-08",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Task 2",
              "taskDescription": "Write unit tests",
              "taskDate": "2024-10-09",
              "category": "Development",
              "active": false,
              "newTask": true,
              "completed": true,
              "failed": false
            }
          ]
        },
        {
          "id": 3,
          "email": "employee3@example.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "Task 1",
              "taskDescription": "Update client data",
              "taskDate": "2024-10-11",
              "category": "Data Management",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Task 2",
              "taskDescription": "Create marketing plan",
              "taskDate": "2024-10-20",
              "category": "Marketing",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Task 3",
              "taskDescription": "Review budget proposal",
              "taskDate": "2024-10-22",
              "category": "Finance",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
            }
          ]
        },
        {
          "id": 4,
          "email": "employee4@example.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "Task 1",
              "taskDescription": "Design new logo",
              "taskDate": "2024-10-05",
              "category": "Design",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Task 2",
              "taskDescription": "Review client feedback",
              "taskDate": "2024-10-07",
              "category": "Client Relations",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
            },
            {
              "taskTitle": "Task 3",
              "taskDescription": "Plan product launch",
              "taskDate": "2024-10-25",
              "category": "Marketing",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 5,
          "email": "employee5@example.com",
          "password": "123",
          "tasks": [
            {
              "taskTitle": "Task 1",
              "taskDescription": "Optimize website performance",
              "taskDate": "2024-10-12",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Task 2",
              "taskDescription": "Deploy new features",
              "taskDate": "2024-10-14",
              "category": "Deployment",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "taskTitle": "Task 3",
              "taskDescription": "Conduct code review",
              "taskDate": "2024-10-18",
              "category": "Development",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
            }
          ]
        }
      ];
      
      const admin = [
        {
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
      ];



      export const setLocalStorage=()=>{
        
        localStorage.setItem('employees',JSON.stringify(employees)),

        localStorage.setItem('admin',JSON.stringify(admin))
        // go to app.jsx and use useeffect
      }

      setLocalStorage();
      
      export const getLocalStorage=()=>{
        // const data = localStorage.getItem('employees')
        // console.log(JSON.parse(data));
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))
        // console.log(employees,admin)

        return{employees,admin}

        

      }
      