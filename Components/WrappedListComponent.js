import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import SingleListItem from "./WrappedSingleListItem"

const WrappedListComponent = ({ items }) => {
  const [selectedIndex , setSelectedIndex ] = useState();

  useEffect(() => {
    setSelectedIndex(null); 
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items.map((item, index) => (
        <SingleListItem
          key={ index }     // Added
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex===index}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: [],
};

const List = memo(WrappedListComponent);

export default List;