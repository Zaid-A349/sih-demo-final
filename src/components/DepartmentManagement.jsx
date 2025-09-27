import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Building, 
  Plus, 
  Edit, 
  Trash2, 
  Users,
  GraduationCap,
  TrendingUp,
  BarChart3,
  Award,
  MapPin
} from "lucide-react";
import { toast } from "sonner";

// Form validation schema
const departmentSchema = z.object({
  name: z.string().min(2, "Department name must be at least 2 characters"),
  code: z.string().min(2, "Department code must be at least 2 characters"),
  head: z.string().min(2, "Department head name must be at least 2 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  budget: z.string().min(1, "Budget is required"),
  description: z.string().min(10, "Description must be at least 10 characters")
});

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: "Computer Science",
      code: "CSE",
      head: "Dr. Johnson",
      students: 486,
      faculty: 42,
      location: "Block A, 3rd Floor",
      budget: "2,500,000",
      established: "1995",
      description: "Leading department in computer science education and research",
      programs: ["B.Tech CSE", "M.Tech CSE", "PhD CSE"],
      achievements: ["NAAC A+ Grade", "Industry Partnerships", "Research Publications"],
      facilities: ["Computer Labs", "AI Lab", "Software Development Lab"],
      performance: 92
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      code: "MECH",
      head: "Prof. Smith",
      students: 398,
      faculty: 38,
      location: "Block B, 2nd Floor",
      budget: "2,200,000",
      established: "1990",
      description: "Excellence in mechanical engineering education and innovation",
      programs: ["B.Tech MECH", "M.Tech MECH", "PhD MECH"],
      achievements: ["Industry Collaborations", "Patent Filings", "Research Grants"],
      facilities: ["Mechanical Workshop", "CAD Lab", "Thermal Lab"],
      performance: 88
    },
    {
      id: 3,
      name: "Electronics & Communication",
      code: "ECE",
      head: "Dr. Brown",
      students: 364,
      faculty: 35,
      location: "Block C, 1st Floor",
      budget: "2,100,000",
      established: "1992",
      description: "Advanced electronics and communication systems education",
      programs: ["B.Tech ECE", "M.Tech ECE", "PhD ECE"],
      achievements: ["IEEE Partnerships", "Innovation Awards", "Student Projects"],
      facilities: ["Electronics Lab", "Communication Lab", "VLSI Lab"],
      performance: 90
    },
    {
      id: 4,
      name: "Civil Engineering",
      code: "CIVIL",
      head: "Prof. Wilson",
      students: 341,
      faculty: 31,
      location: "Block D, Ground Floor",
      budget: "1,900,000",
      established: "1988",
      description: "Infrastructure development and sustainable construction focus",
      programs: ["B.Tech CIVIL", "M.Tech CIVIL", "PhD CIVIL"],
      achievements: ["Green Building Certification", "Infrastructure Projects", "Community Service"],
      facilities: ["Concrete Lab", "Surveying Lab", "Environmental Lab"],
      performance: 85
    },
    {
      id: 5,
      name: "Information Technology",
      code: "IT",
      head: "Dr. Davis",
      students: 287,
      faculty: 28,
      location: "Block A, 2nd Floor",
      budget: "1,800,000",
      established: "2000",
      description: "Modern IT solutions and software development expertise",
      programs: ["B.Tech IT", "M.Tech IT", "PhD IT"],
      achievements: ["Tech Industry Partnerships", "Startup Incubation", "Innovation Hub"],
      facilities: ["IT Lab", "Network Lab", "Cloud Computing Lab"],
      performance: 89
    }
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const form = useForm({
    resolver: zodResolver(departmentSchema),
    defaultValues: {
      name: "",
      code: "",
      head: "",
      location: "",
      budget: "",
      description: ""
    }
  });

  const handleAddDepartment = (data) => {
    const newDepartment = {
      id: Math.max(...departments.map(d => d.id)) + 1,
      ...data,
      students: 0,
      faculty: 0,
      established: new Date().getFullYear().toString(),
      programs: [],
      achievements: [],
      facilities: [],
      performance: 0
    };
    setDepartments([...departments, newDepartment]);
    setIsAddDialogOpen(false);
    form.reset();
    toast.success("Department added successfully!");
  };

  const handleEditDepartment = (data) => {
    setDepartments(departments.map(dept => 
      dept.id === editingDepartment.id 
        ? { ...dept, ...data }
        : dept
    ));
    setIsEditDialogOpen(false);
    setEditingDepartment(null);
    form.reset();
    toast.success("Department updated successfully!");
  };

  const handleDeleteDepartment = (deptId) => {
    setDepartments(departments.filter(dept => dept.id !== deptId));
    toast.success("Department deleted successfully!");
  };

  const openEditDialog = (department) => {
    setEditingDepartment(department);
    form.reset({
      name: department.name,
      code: department.code,
      head: department.head,
      location: department.location,
      budget: department.budget,
      description: department.description
    });
    setIsEditDialogOpen(true);
  };

  const DepartmentForm = ({ onSubmit }) => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter department name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter department code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="head"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department Head</FormLabel>
                <FormControl>
                  <Input placeholder="Enter department head name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Budget</FormLabel>
              <FormControl>
                <Input placeholder="Enter annual budget" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter department description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={() => {
            setIsAddDialogOpen(false);
            setIsEditDialogOpen(false);
            form.reset();
          }}>
            Cancel
          </Button>
          <Button type="submit">
            {editingDepartment ? "Update Department" : "Add Department"}
          </Button>
        </div>
      </form>
    </Form>
  );

  const totalStudents = departments.reduce((sum, dept) => sum + dept.students, 0);
  const totalFaculty = departments.reduce((sum, dept) => sum + dept.faculty, 0);
  const avgPerformance = departments.reduce((sum, dept) => sum + dept.performance, 0) / departments.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground flex items-center">
            <Building className="w-6 h-6 mr-2 text-primary" />
            Department Management
          </h2>
          <p className="text-muted-foreground">Manage academic departments and their information</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Department
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Department</DialogTitle>
              <DialogDescription>
                Enter the details for the new department. All fields are required.
              </DialogDescription>
            </DialogHeader>
            <DepartmentForm onSubmit={handleAddDepartment} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Departments</CardTitle>
            <Building className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{departments.length}</div>
            <p className="text-xs text-muted-foreground">Active departments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <GraduationCap className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all departments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Faculty</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalFaculty}</div>
            <p className="text-xs text-muted-foreground">Teaching staff</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Performance</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgPerformance.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Department average</p>
          </CardContent>
        </Card>
      </div>

      {/* Departments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Departments Overview</CardTitle>
          <CardDescription>
            Comprehensive view of all academic departments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Head</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Faculty</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departments.map((dept) => (
                <TableRow key={dept.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{dept.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Code: {dept.code} | Est. {dept.established}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {dept.location}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{dept.head}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-1 text-muted-foreground" />
                      {dept.students}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                      {dept.faculty}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{dept.performance}%</span>
                      </div>
                      <Progress value={dept.performance} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>₹{dept.budget}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedDepartment(dept)}
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditDialog(dept)}
                      >
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteDepartment(dept.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Department Details Modal */}
      {selectedDepartment && (
        <Dialog open={!!selectedDepartment} onOpenChange={() => setSelectedDepartment(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedDepartment.name} - Detailed View</DialogTitle>
              <DialogDescription>
                Complete information about the department
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div><strong>Code:</strong> {selectedDepartment.code}</div>
                    <div><strong>Head:</strong> {selectedDepartment.head}</div>
                    <div><strong>Location:</strong> {selectedDepartment.location}</div>
                    <div><strong>Established:</strong> {selectedDepartment.established}</div>
                    <div><strong>Budget:</strong> ₹{selectedDepartment.budget}</div>
                    <div><strong>Description:</strong> {selectedDepartment.description}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div><strong>Students:</strong> {selectedDepartment.students}</div>
                    <div><strong>Faculty:</strong> {selectedDepartment.faculty}</div>
                    <div><strong>Student-Faculty Ratio:</strong> {Math.round(selectedDepartment.students / selectedDepartment.faculty)}:1</div>
                    <div><strong>Performance Score:</strong> {selectedDepartment.performance}%</div>
                  </CardContent>
                </Card>
              </div>

              {/* Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Programs Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {selectedDepartment.programs.map((program, index) => (
                      <Badge key={index} variant="secondary">{program}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {selectedDepartment.achievements.map((achievement, index) => (
                      <Badge key={index} variant="default">{achievement}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Facilities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {selectedDepartment.facilities.map((facility, index) => (
                      <Badge key={index} variant="outline">{facility}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Department</DialogTitle>
            <DialogDescription>
              Update the department information. All fields are required.
            </DialogDescription>
          </DialogHeader>
          <DepartmentForm onSubmit={handleEditDepartment} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DepartmentManagement;