import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: "React" },
  { id: 2, name: "Node" },
  { id: 3, name: "JAVA" },
  { id: 4, name: "Redux" },
  { id: 5, name: "JavaScript" },
  { id: 6, name: "Tailwind-CSS" },
];

const Dropdown = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [data, setData] = useState<string[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedCourse) {
      console.log(selectedCourse);
      const payload = {
        role: selectedCourse,
      };
      try {
        const response = await fetch(
          "https://hacksquad-api.onrender.com/question/query",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (response.ok) {
          const data = await response.json();
          //   console.log('Response:', data.data);
          setData(data.data);
          localStorage.setItem("questions",JSON.stringify(data.data))
          navigate("/dashboard");
        } else {
          console.error("Request failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("No course selected");
    }
  };
  console.log("data", data);
  localStorage.setItem("questions", JSON.stringify(data));
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-64">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="course"
              className="block text-gray-600 font-bold mb-2 ml-16"
            >
              Select Stream:
            </label>
            <select
              id="course"
              name="course"
              className="w-full p-2 border rounded-md"
              onChange={handleSelectChange}
            >
              <option value="" disabled selected>
                Select a course
              </option>
              {people.map((person) => (
                <option key={person.id} value={person.name}>
                  {person.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-20"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dropdown;
