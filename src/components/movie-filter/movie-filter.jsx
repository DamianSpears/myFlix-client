import React from "react";
import "./movie-filter.scss"

export const MovieFilter = (props) => {
   return (
      <div>
         <input
            className="rounded filter"
            type="text"
            placeholder="Search Genre, Director, Title..."
            value={props.searchTerm}
            onChange={(e) => props.setSearchTerm(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
         />
      </div>
   )
}