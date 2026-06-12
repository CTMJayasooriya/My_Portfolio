# I. Cover Page
**Name:** Chathu [Your Last Name]  
**Index Number:** [Your Index Number]  
**Module:** Human-Computer Interaction (2304)  
**Date:** 12th June 2026  

---

# II. Title
**React Portfolio Development with HCI Techniques**

---

# III. Table of Contents
1. Introduction
2. Technologies Used
3. HCI Techniques and Rules Applied
4. Project Descriptions
5. Evaluation & Reflection
6. Conclusion

---

## 1. Introduction
### Objective of the Portfolio
The primary objective of this portfolio is to showcase my skills, projects, and readiness for internship opportunities in the field of frontend development and UX/UI design. It serves as a digital resume that demonstrates my practical understanding of modern web development and user-centered design.

### Introduction to HCI and Its Importance in Web Design
Human-Computer Interaction (HCI) focuses on the interfaces between people and computers. In web design, HCI is paramount because a website's success relies heavily on how easily and intuitively users can navigate it. Applying HCI principles ensures that interfaces are accessible, reduce cognitive load, and provide a seamless, enjoyable user experience, which ultimately leads to higher engagement and satisfaction.

---

## 2. Technologies Used
To build a responsive, high-performance, and modern portfolio, the following technologies were utilized:
- **React.js & Vite**: For building a fast, component-based user interface.
- **Vanilla CSS**: Used to implement a custom design system featuring glassmorphism, smooth gradients, and CSS variables for a premium dark theme.
- **React Router (react-router-dom)**: For smooth, client-side navigation without page reloads.
- **Lucide-React**: For consistent and modern iconography.
- **Deployment Platform**: [Vercel / Netlify / GitHub Pages] (Used to host the live application).

---

## 3. HCI Techniques and Rules Applied
### User-Centered Design Process
The target users for this portfolio are recruiters, technical leads, and potential internship employers. The design prioritizes their needs by:
- Providing immediate access to my resume and contact information.
- Using a clean, clutter-free layout that focuses attention on the projects.
- Implementing an intuitive navigation structure so users can find information quickly.

### HCI Rules and Heuristics Applied
1. **Visibility of System Status**
   - *Example:* The navigation bar highlights the currently active page using an animated underline (via React Router's `NavLink` active state). 
   - *Example:* The contact form provides immediate visual feedback (disabling the button and showing "Sending...") when a submission is in progress, followed by a success message.
2. **Aesthetic and Minimalist Design**
   - *Example:* The UI employs ample whitespace, a cohesive dark theme, and high-quality typography (Inter and Outfit fonts) to avoid overwhelming the user and guide their focus to essential content.
3. **Error Prevention and User Control**
   - *Example:* The contact form uses real-time, client-side validation to ensure all fields are correctly filled before submission, preventing the frustration of server-side errors. Appropriate ARIA attributes dynamically link error messages to the inputs.

### Accessibility and Responsiveness
- **Semantic HTML:** The application uses structural tags like `<nav>`, `<main>`, and `<section>` for screen readers.
- **ARIA Attributes:** Interactive elements like the mobile menu button and form inputs include `aria-label` and `aria-expanded` attributes.
- **Color Contrast:** The dark theme carefully balances background colors (`#050505`) with text colors (`#f8fafc`) to ensure high readability.
- **Responsiveness:** CSS Grid and Flexbox, along with media queries, ensure the application scales perfectly from desktop monitors down to mobile devices.

---

## 4. Project Descriptions
*Note: Insert screenshots of the portfolio here before submission.*

1. **Election Project**
   - *Description:* A web-based application developed to manage election-related activities such as voter registration, candidate management, and result handling. Developed using PHP, MySQL, HTML, and CSS.
   - *HCI Focus:* Built with a focus on a user-friendly interface design and clear system functionality to reduce cognitive load during complex election processes.
2. **ERP Project Management Module**
   - *Description:* A module within an Enterprise Resource Planning system to support project planning, monitor progress, and manage tasks efficiently. Built using JavaScript, Node.js, HTML, and CSS.
   - *HCI Focus:* Designed for team collaboration with a clean layout that groups related data visually, minimizing cognitive friction.
3. **Event Management Platform**
   - *Description:* A web application designed to help users discover and manage events in an organized manner through a simple and easy-to-use interface. Built with React, CSS, and JavaScript.
   - *HCI Focus:* Emphasizes immediate visual feedback for user actions and features a responsive design that works seamlessly across all devices.

---

## 5. Evaluation & Reflection
### Ensuring a Good User Experience
A good UX was ensured by iterative testing. By maintaining a consistent design language (standardized button styles, hover animations, and iconography), cognitive friction is minimized. The glassmorphism effects provide depth without compromising readability.

### Challenges Faced and Overcome
One major challenge was ensuring that the custom CSS animations and glassmorphism effects performed smoothly across all devices, including mobile. This was overcome by utilizing hardware-accelerated CSS properties (`transform` and `opacity`) and optimizing media queries to simplify the layout on smaller screens.

### Future Improvements
In the future, I plan to integrate a backend service (like Firebase or EmailJS) for the contact form, add a light/dark mode toggle, and implement internationalization (i18n) for broader accessibility.

---

## 6. Conclusion
Developing this React portfolio successfully synthesized technical web development skills with fundamental HCI principles. The resulting application is not only a functional display of my projects but also a living demonstration of my commitment to user-centered design, accessibility, and high-quality user interfaces.
