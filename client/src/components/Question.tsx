import axios from "axios";
import React, { useEffect, useState } from "react";

const Question = () => {
  const [option, setOption] = useState<{
    Number: number;
    Catelory: number;
    Difficulty: number;
  } | null>(JSON.parse(localStorage.getItem("infor") as any));
  const [listQuestion, setListQuestion] = useState<string[]>([]);

  const limit = Number(option?.Number);
  const categoryId = Number(option?.Catelory);
  const level = Number(option?.Difficulty);
  const loadQuest = () => {
    axios
      .get(
        `http://localhost:8080/api/v1/question?category_id=${categoryId}&level=${level}&limit=${limit}`
      )
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadQuest();
  }, []);

  return (
    <div>
      <div className="container w-50 mt-5">
        <form>
          <h4 className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio
            repellendus, suscipit ea ab laudantium tempora repellat officia
            dolorum numquam vel a minus repudiandae maiores aperiam natus?
            Voluptate, molestias ut.
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>

          <button type="submit" className="btn btn-primary mt-5 w-100">
            Tiếp tục
          </button>
        </form>
      </div>
    </div>
  );
};

export default Question;
