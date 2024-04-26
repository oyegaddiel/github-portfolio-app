
import React, { useState, useEffect } from 'react';
import { fetchRepositories } from './githubAPI';
import { ChakraProvider, Container, Stack, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { Pagination, Search, Filter } from './components/RepositoriesList';

const App = () => {
    const [repositories, setRepositories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCriteria, setFilterCriteria] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRepositories(currentPage, 4, searchQuery, filterCriteria);
                setRepositories(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentPage, searchQuery, filterCriteria]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1); // Reset to first page when searching
    };

    const handleFilterChange = (criteria) => {
        setFilterCriteria(criteria);
        setCurrentPage(1); // Reset to first page when changing filter
    };

    const handleSubmitSearch = () => {
  };

  const handleSubmitFilter = () => {
  };

    return (
        <ChakraProvider>
            <Container maxW="container.md">
                <Heading as="h1" mb={4}>GitHub Repositories</Heading>
                <Stack direction="row" mb={4} spacing={4}>
                    <Search onSearch={handleSearch} onSubmit={handleSubmitSearch} />
                    <Filter onFilterChange={handleFilterChange} onSubmit={handleSubmitFilter} />
                </Stack>
                <UnorderedList>
                    {repositories.map(repo => (
                        <ListItem key={repo.id}>{repo.name}</ListItem>
                    ))}
                </UnorderedList>
                <Pagination onNextPage={handleNextPage} onPrevPage={handlePrevPage} />
            </Container>
        </ChakraProvider>
    );
};

export default App;


