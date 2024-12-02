import React, { useCallback, useEffect, useState } from "react";
import "./styles.css";
import {
  getPaginatedData,
} from "../../utilities/pagination/utils";
import Table from "../../utilities/table/Table";
import { TABLE_DETAILS, TABLE_HEADS, formatApiResponse } from "./config";
import Pagination from "../../utilities/pagination/Pagination";

const TableWithPagination = (props) => {
  const INIT_PAGE_NO = 1;
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(INIT_PAGE_NO);
  const [isloading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await await fetch(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      ).then((res) => res.json());
      setData(formatApiResponse(response));
      setLoading(false);
    } catch {
      setLoading(false);
      console.log("error");
    }
  }, []);
  
  
  const handlePageChange = (page) => {
    setPageNo(page);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isloading) {
    return <h1>...loading</h1>;
  }
  return (
    <div className="container">
      <Table
        data={getPaginatedData(data, pageNo)}
        heads={TABLE_HEADS}
        details={TABLE_DETAILS}
      />
      <Pagination
       data={data} 
       pageNo={pageNo} 
       totalPages={5} 
       handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default TableWithPagination;
