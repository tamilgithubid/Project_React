import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';
import MockApi from '@/Mock-API/MockApi';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from 'react-router-dom'
import {
    Table as ShadcnTable,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


const Table = () => {
    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [department, setDepartment] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await MockApi.get('/employees');
        setEmployees(response.data);
        setPageCount(Math.ceil(response.data.length / 10));
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    }

    const addEmployee = async () => {
        const newEmployee = { name, position, department };
        const response = await MockApi.post('/employees', newEmployee);
        setEmployees([...employees, response.data]);
        setName('');
        setPosition('');
        setDepartment('');
        setIsOpen(false);
        setPageCount(Math.ceil((employees.length + 1) / 10));
    };

    const updateEmployee = async () => {
        const updatedEmployee = { ...editingEmployee, name, position, department };
        const response = await MockApi.put(`/employees/${editingEmployee.id}`, updatedEmployee);
        setEmployees(employees.map(emp => (emp.id === editingEmployee.id ? response.data : emp)));
        setName('');
        setPosition('');
        setDepartment('');
        setEditingEmployee(null);
        setIsOpen(false);
    };

    const deleteEmployee = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        });

        if (result.isConfirmed) {
            await MockApi.delete(`/employees/${id}`);
            setEmployees(employees.filter(emp => emp.id !== id));
            setPageCount(Math.ceil((employees.length - 1) / 10));
            Swal.fire('Deleted!', 'Your employee has been deleted.', 'success');
        }
    };

    const openDialog = (employee = null) => {
        setEditingEmployee(employee);
        setName(employee ? employee.name : '');
        setPosition(employee ? employee.position : '');
        setDepartment(employee ? employee.department : '');
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
        setEditingEmployee(null);
    };


    const handleRefresh = async () => {
        setIsRefreshing(true);
        await fetchEmployees();
        setIsRefreshing(false);
        setSearchTerm('')
    };

    const filteredEmployees = employees
        .filter(emp => emp.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(currentPage * 10, (currentPage + 1) * 10);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 flex justify-between text-black items-center">
                Employee List
            </h1>
            <div className="mb-4 flex justify-between">
                <Input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border text-black rounded p-2 w-1/2"
                />
                <RefreshCw className={`cursor-pointer text-blue-500   hover:text-blue-700 ${isRefreshing && 'spin'}  me-8 mt-2 ms-auto  items-end`} onClick={handleRefresh} color='black' />

                <Button className="bg-blue-500  hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={() => openDialog()}>
                    Add Employee
                </Button>
            </div>
            <ShadcnTable className="w-full  bg-white border rounded-lg">
                <TableHeader>
                    <TableRow>
                        <TableHead className="py-2 px-4 text-center border">
                            <Checkbox />
                        </TableHead>
                        <TableHead className="py-2 px-4 text-center text-black border">ID</TableHead>
                        <TableHead className="py-2  px-4 text-center text-black border">Name</TableHead>
                        <TableHead className="py-2 px-4 text-center text-black border">Position</TableHead>
                        <TableHead className="py-2 px-4 text-center text-black border">Department</TableHead>
                        <TableHead className="py-2 px-4  text-center  text-black border">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredEmployees.map((employee) => (
                        <TableRow key={employee.id} className="hover:bg-gray-100">
                            <TableCell className="py-2 px-4 border">
                                <Checkbox />
                            </TableCell>
                            <TableCell className="py-2 text-black px-4 border">{employee.id}</TableCell>
                            <TableCell onClick={handleClick} className="py-2  text-black px-4 border">{employee.name}</TableCell>
                            <TableCell className="py-2 text-black px-4 border">{employee.position}</TableCell>
                            <TableCell className="py-2 text-black px-4 border">{employee.department}</TableCell>
                            <TableCell className="    border justify-center flex">
                                <Button className="bg-yellow-500 hover:bg-yellow-700 text-white px-2 py-1 rounded mr-2" onClick={() => openDialog(employee)}>
                                    Edit
                                </Button>
                                <Button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded" onClick={() => deleteEmployee(employee.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </ShadcnTable>

            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination flex justify-center mt-4'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link rounded-full px-3 py-1 mx-1 border bg-white hover:bg-gray-200'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link rounded-full px-3 py-1 mx-1 border bg-white hover:bg-gray-200'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link rounded-full px-3 py-1 mx-1 border bg-white hover:bg-gray-200'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link rounded-full px-3 py-1 mx-1 border bg-white hover:bg-gray-200'}
                activeClassName={'active   text-white'}
            />
            {isOpen && (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{editingEmployee ? 'Edit Employee' : 'Add Employee'}</DialogTitle>
                            <DialogDescription>
                                {editingEmployee ? 'Update employee details' : 'Enter employee details'}
                            </DialogDescription>
                        </DialogHeader>
                        <Input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded p-2 w-full mb-4"
                        />
                        <Input
                            type="text"
                            placeholder="Position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className="border rounded p-2 w-full mb-4"
                        />
                        <Input
                            type="text"
                            placeholder="Department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="border rounded p-2 w-full mb-4"
                        />
                        <DialogFooter>
                            <Button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded mr-2" onClick={closeDialog}>
                                Cancel
                            </Button>
                            <Button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={editingEmployee ? updateEmployee : addEmployee}>
                                {editingEmployee ? 'Update' : 'Add'}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default Table