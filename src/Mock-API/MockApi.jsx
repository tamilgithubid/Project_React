import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const MockApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const mock = new MockAdapter(MockApi, { delayResponse: 500 });


const hardcodedEmployees = [
    {
        id: 1,
        name: "Tamilarasan",
        position: "Developer",
        department: "Frontend",
        country: "USA",
        progress: 80
    },
    {
        id: 2,
        name: "Kiran",
        position: "Developer",
        department: "Frontend",
        country: "USA",
        progress: 80
    },
    {
        id: 3,
        name: " Sabari",
        position: "BackEnd",
        department: "HR",
        country: "USA",
        progress: 80
    },
    {
        id: 4,
        name: "Geroge",
        position: "Developer",
        department: "Frontend",
        country: "USA",
        progress: 80
    },
    {
        id: 5,
        name: "Rubesh",
        position: "Developer",
        department: "BackEnd",
        country: "USA",
        progress: 80
    },
    {
        id: 6,
        name: "Muthu",
        position: "Developer",
        department: "BackEnd",
        country: "USA",
        progress: 80
    },
    {
        id: 7,
        name: "Prasanth",
        position: "Testing",
        department: "Tester",
        country: "USA",
        progress: 80
    },

];

// Mock GET request to /employees
mock.onGet('/employees').reply(200, hardcodedEmployees);

// Mock POST request to /employees
mock.onPost('/employees').reply(config => {
    const newEmployee = JSON.parse(config.data);
    newEmployee.id = hardcodedEmployees.length + 1;
    hardcodedEmployees.push(newEmployee);
    return [201, newEmployee];
});

// Mock PUT request to /employees/:id
mock.onPut(/\/employees\/\d+/).reply(config => {
    const updatedEmployee = JSON.parse(config.data);
    const index = hardcodedEmployees.findIndex(emp => emp.id === updatedEmployee.id);
    hardcodedEmployees[index] = updatedEmployee;
    return [200, updatedEmployee];
});

// Mock DELETE request to /employees/:id
mock.onDelete(/\/employees\/\d+/).reply(config => {
    const id = parseInt(config.url.split('/').pop());
    const index = hardcodedEmployees.findIndex(emp => emp.id === id);
    hardcodedEmployees.splice(index, 1);
    return [204];
});

export default MockApi;


