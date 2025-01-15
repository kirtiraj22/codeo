# Codeo

Codeo is an advanced online code editor that allows users to write, run, and share code snippets in various programming languages. Users can save their code, share it with others, and engage in discussions through comments. This project leverages Next.js, Convex, and other modern technologies to provide a seamless coding experience.

## Features

- **Multi-Language Support**: Write and execute code in multiple programming languages.
- **Code Sharing**: Share your code snippets with others and allow them to view, save, and comment on them.
- **Customizable Editor**: Personalize your coding environment with themes, font sizes, and more.
- **Persistent State**: Automatically save your preferences and code to local storage.
- **Real-Time Collaboration**: Collaborate with others in real-time (upcoming feature).

## Technologies Used

- **Next.js**: A React framework for building fast and user-friendly web applications.
- **Convex**: A powerful backend as a service (BaaS) that simplifies data storage and real-time communication.
- **Monaco Editor**: The code editor that powers Visual Studio Code, integrated into the browser.
- **Zustand**: A small, fast, and scalable state management solution for React.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (>=14.x.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kirtiraj22/codeo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd codeo
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

To start the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Usage

1. **Select a Language**: Choose your preferred programming language from the dropdown.
2. **Write Code**: Use the editor to write your code. The editor supports syntax highlighting and autocompletion.
3. **Run Code**: Execute your code directly within the browser and view the output.
4. **Save and Share**: Save your code snippets and share them with others using a unique link.
5. **Comment and Collaborate**: Engage with other users by commenting on shared snippets.

## Configuration

### Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret_here
```

### Customization

You can customize the editor's theme, font size, and language through the settings menu. Your preferences will be saved and applied on your next visit.

## Contributing

We welcome contributions! Follow these steps to contribute to Codeo:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## Contact

For any questions or feedback, please reach out to [kirtirajthakor064@gmail.com](mailto:kirtirajthakor064@gmail.com).

