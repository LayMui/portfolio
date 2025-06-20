# 🚀 Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## 📄 Project Overview

This is a **single-page portfolio website** that includes the following sections:

- **Header**  
  Contains external links to social media accounts and internal links for page navigation.

- **Landing Section**  
  Displays an avatar and a short bio.

- **Featured Projects**  
  Projects are showcased as **cards arranged in a grid layout**.

- **Contact Me**  
  Includes a form that allows visitors to send you a message.

---

## 🛠️ Technologies & Libraries Used

To help you create a polished and professional portfolio, this project includes some pre-configured open-source libraries.

### 💅 Chakra UI

> Chakra UI is a modern component library for building accessible and responsive interfaces.

- Chakra UI is **pre-installed and fully configured** in this project.
- Common components are already imported from the `@chakra-ui/react` package at the top of each relevant file.
- If a component isn’t imported, it’s likely not needed for that section — but feel free to explore more components in [Chakra’s official documentation](https://chakra-ui.com).

---

### 📝 Formik & Yup

> Formik simplifies form state management, while Yup provides schema-based form validation.

Contact.js: 
```
Uses Formik to handle form state, submission, and validation state.

Uses Yup to define the validation schema.

Shows validation errors with Chakra UI's FormErrorMessage.

On submit, shows a success toast and resets the form.

Submit button is disabled & shows loading state while submitting.
```
- No extra setup is required — both libraries are already
