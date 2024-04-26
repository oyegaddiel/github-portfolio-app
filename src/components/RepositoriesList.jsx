import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Select, Stack } from '@chakra-ui/react';

const Pagination = ({ onNextPage, onPrevPage }) => {
    return (
        <Stack direction="row" mt={4} spacing={4}>
            <Button onClick={onPrevPage}>Previous</Button>
            <Button onClick={onNextPage}>Next</Button>
        </Stack>
    );
};

// Prop types validation for Pagination component
Pagination.propTypes = {
    onNextPage: PropTypes.func.isRequired, 
    onPrevPage: PropTypes.func.isRequired, 
};

const Search = ({ onSearch }) => {
    const handleSearch = (e) => {
        const query = e.target.value;
        onSearch(query);
    };

    return (
        <Input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
        />
    );
};

// Prop types validation for Search component
Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

const Filter = ({ onFilterChange }) => {
    const handleFilterChange = (e) => {
        const filterValue = e.target.value;
        onFilterChange(filterValue);
    };

    return (
        <Select placeholder="Filter by language" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            {/*More options*/}
        </Select>
    );
};

// Prop types validation for Filter component
Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired, 
};

export { Pagination, Search, Filter };
