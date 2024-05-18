# ResumeArchive

**ResumeArchive** is a web-based application designed to scan, store, and publicly share resumes (CVs). Users can upload their resumes, which are then parsed and stored in a centralized, searchable database. Employers and recruiters can access this repository to find potential candidates efficiently. The application leverages an API for resume parsing, ensuring that all relevant information is accurately extracted and organized. With a focus on user security and ease of access, ResumeArchive aims to streamline the job application process for both job seekers and employers.

## Features

- **Resume Upload**: Users can upload their resumes in various formats.
- **Resume Parsing**: Automatically extracts and organizes resume information.
- **Centralized Database**: Stores resumes in a searchable repository.
- **Public Access**: Employers and recruiters can search and access resumes.
- **Secure Storage**: Ensures that all user data is securely stored and managed.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- An API key for the resume parsing service from [API Layer](https://apilayer.com/).

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/ResumeArchive.git
    cd ResumeArchive
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add your API key:
    ```sh
    API_KEY=your_api_key_here
    ```

### Usage

1. Run the application:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to access ResumeArchive.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [API Layer](https://apilayer.com/) for providing the resume parsing API.
- [Node.js](https://nodejs.org/) for the server environment.
- [Axios](https://axios-http.com/) for making HTTP requests easy.

---

*Happy job hunting and recruiting with ResumeArchive!*
