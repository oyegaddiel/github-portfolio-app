
export const fetchRepositories = async (page = 1, perPage = 4, searchQuery = '', filter = '') => {
    let apiUrl = `https://api.github.com/users/oyegaddiel/repos?page=${page}&per_page=${perPage}`;

    if (searchQuery) {
        apiUrl += `&q=${searchQuery}`;
    }

    // Add logic to handle filter criteria
    if (filter) {
        apiUrl += `&${filter}`;
    }

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
    }
};


export const fetchRepository = async (id) => {
    const apiUrl = `https://api.github.com/repositories/${id}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch repository');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching repository:', error);
      return null;
    }
  };

export const nextPage = async (currentPage, perPage, searchQuery, filter) => {
    const nextPage = currentPage + 1;
    return await fetchRepositories(nextPage, perPage, searchQuery, filter);
};

export const prevPage = async (currentPage, perPage, searchQuery, filter) => {
    const prevPage = currentPage - 1;
    if (prevPage < 1) return [];
    return await fetchRepositories(prevPage, perPage, searchQuery, filter);
};

