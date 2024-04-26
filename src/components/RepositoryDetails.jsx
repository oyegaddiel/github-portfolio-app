
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchRepository } from './githubAPI';
// import { Box, Heading, Text } from '@chakra-ui/react';

// const RepositoryDetails = () => {
//     const { id } = useParams(); // Get repository ID from URL params
//     const [repository, setRepository] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await fetchRepository(id);
//                 setRepository(data);
//             } catch (error) {
//                 console.error('Error fetching repository details:', error);
//             }
//         };

//         fetchData();
//     }, [id]);

//     return (
//         <Box>
//             {repository ? (
//                 <>
//                     <Heading as="h2" size="lg" mb={2}>{repository.name}</Heading>
//                     <Text>{repository.description}</Text>
//                     {/* Display other repository details */}
//                 </>
//             ) : (
//                 <Text>Loading...</Text>
//             )}
//         </Box>
//     );
// };

// export default RepositoryDetails;
