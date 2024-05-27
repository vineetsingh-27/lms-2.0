import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCourses();
  }, []);
  
  //Fetch Course List
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      console.log(resp);
      setCourseList(resp?.courseLists);
    });
  };

  return (
    <div className="p-5 bg-white rounded-lg mt-3">
      {/* Title and Filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Paid</SelectItem>
            <SelectItem value="system">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Display Course List */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
      {courseList?.length>0 ? courseList.map((item) => (
          <div key={item.id}>
            <CourseItem course={item} />
          </div>
        ))
        :
        [1,2,3,4,5,6,7].map((item,index)=>(
          <div key={index} className="w-full h-[240px]
          rounded-xl m-2 bg-slate-200 animate-pulse">

          </div>
        ))
      }
      </div>
    </div>
  );
}

export default CourseList;
