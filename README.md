# SyntaxN Platform

SyntaxN Platform is a modern **software training website** designed to provide structured learning programs in various technologies such as **React, Angular, Python, Artificial Intelligence, Data Science, Cloud, and more**.

The platform focuses on a **scalable, reusable component-based UI architecture** built with modern frontend technologies. It is designed to deliver a clean and intuitive learning experience similar to leading EdTech platforms.

---

## 🚀 Project Overview

SyntaxN Platform aims to:

* Provide structured software training programs
* Offer a modern and intuitive user interface
* Support scalable architecture using reusable components
* Integrate with APIs and backend services for dynamic course data
* Be easily deployable to cloud hosting platforms

The current version focuses primarily on **frontend UI architecture and reusable components**.

---

## 🧱 Technology Stack

The project uses the following technologies:

**Frontend**

* React (Latest version)
* TypeScript
* SCSS (Sass)

**Build Tool**

* Vite

**API Integration**

* Hasura GraphQL API

**Hosting / Deployment**

* Firebase Hosting

**Version Control**

* Git
* GitHub

---

## 📂 Project Architecture

The project follows a **component-driven architecture** to ensure scalability and maintainability.

```
src
│
├── assets            # Images, icons and static resources
│
├── components        # Reusable UI components
│   ├── common        # Shared components (Button, Card, Container)
│   ├── layout        # Layout components (Header, Footer, Navbar)
│   ├── course        # Course related UI components
│   └── sections      # Page sections (Hero, Courses, etc.)
│
├── pages             # Application pages
│
├── services          # API integration layer
│
├── hooks             # Custom React hooks
│
├── styles            # Global styles, variables and mixins
│
├── types             # TypeScript type definitions
│
├── utils             # Utility functions
│
├── routes            # Application routing
│
└── main.tsx          # Application entry point
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/syntaxn-venkat/syntaxn-platform.git
```

Navigate into the project directory:

```
cd syntaxn-platform
```

Install dependencies:

```
npm install
```

---

## ▶️ Running the Project

Start the development server:

```
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---

## 🏗️ Building the Project

To create a production build:

```
npm run build
```

This will generate optimized build files inside the:

```
dist/
```

folder.

---

## 🌐 Preview Production Build

You can preview the production build locally:

```
npm run preview
```

---

## 🚀 Deployment

The platform is designed to be deployed using **Firebase Hosting**.

Build the project first:

```
npm run build
```

Deploy using Firebase:

```
firebase deploy
```

---

## 🔐 Security Best Practices

To maintain security and prevent vulnerabilities:

* Do not commit `.env` files to the repository
* Store API keys and secrets in environment variables
* Restrict API access using proper authentication
* Avoid exposing backend service credentials in frontend code
* Regularly update dependencies
* Use HTTPS for all API communication

---

## ⚠️ Files That Should Never Be Committed

The following files are ignored via `.gitignore`:

```
node_modules/
dist/
.env
.vscode/
.firebase/
logs/
```

These may contain:

* dependencies
* environment variables
* local configuration
* build artifacts

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Submit a pull request

---

## 📄 License

This project is maintained by **Syntax N**.

© Syntax N. All rights reserved.

---

## 🌍 About Syntax N

Syntax N is a collaborative team of experienced professionals working across multiple technologies including:

* Web Development
* Mobile App Development
* Cloud Technologies
* Artificial Intelligence
* Data Science
* Software Testing

The platform aims to provide **real-time industry-oriented training programs** for students and professionals.
