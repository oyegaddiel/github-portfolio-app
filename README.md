
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# github-portfolio-app

This project is a web application built using React, Vite, and Chakra UI to showcase user's GitHub repositories portfolio. It uses the GitHub API to fetch repository data, provides pagination, search, and filter functionalities, allows users to view detailed information about each repository, create new repositories, update existing ones, and delete repositories.

## Technologies Used

- **VS Code**: Integrated Development Environment (IDE) used for development.
- **Vite**: Build tool used for fast development and server-side rendering.
- **Chakra UI**: Component library used for layout, design, and styling.
- **React**: JavaScript library for building user interfaces.
- **GitHub API**: Used to fetch data about GitHub repositories.

## Project Structure

[Screenshot] https://github.com/oyegaddiel/image-hosting/blob/main/github-portfolio-app-structure.png

## Features

1. **List Repositories**: Display a paginated list of GitHub repositories with search and filter functionality.
2. **View Repository Details**: Clicking on a repository in the list displays detailed information about that repository.
3. **Error Boundary**: An error boundary is implemented to catch and gracefully handle errors that occur within the application.
4. **404 Page**: A custom 404 page is displayed when a route is not found.
5. **Create Repository**: Users can create new repositories using a modal dialog.
6. **Update Repository**: Users can update details of existing repositories.
7. **Delete Repository**: Users can delete repositories.

## Getting Started

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/github-portfolio-app.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd github-portfolio-app
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm run dev
    ```

5. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application**.

## Usage

1. **List Repositories**: Browse through the list of repositories displayed on the homepage. Use the search bar and filters to refine the results.
2. **View Repository Details**: Click on a repository to view detailed information about it.
3. **Create Repository**: Click on the "Create New Repo" button to open a modal dialog. Fill in the required details and submit to create a new repository.
4. **Update Repository**: Click on the "Edit" button on a repository card to update its details.
5. **Delete Repository**: Click on the "Delete" button on a repository card to delete it.

## Contributing

While, this project is currently in progress, contributions are welcome! 
Please, feel free to open issues or pull requests to suggest improvements, report bugs, or add new features.
Thank you.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


