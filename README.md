<div align="center">
  <img src="https://github.com/user-attachments/assets/6b2b9019-105c-428e-8894-14e4fd6852e3" alt="" height="200">
</div>
<p align="center">
  <a href="https://discord.gg/tloxp">
    <img src="https://ptb.discord.com/api/guilds/1258060134060654632/widget.png?style=shield" alt="Discord Server">
  </a>
  <a href="https://www.python.org/downloads/">
    <img alt="PyPI - Python Version" src="https://img.shields.io/pypi/pyversions/Red-Discordbot">
  </a>
  <a href="https://github.com/BarcodeBimbo/Sanction-PDF">
    <img src="https://img.shields.io/badge/html-python-red.svg" alt="">
  </a>
  <a href="https://github.com/BarcodeBimbo/Sanction-PDF">
    <img src="https://img.shields.io/badge/ejs-html-red?logo=javascript&logoColor=f5f5f5" alt="">
  </a>
</p>

# PDF Creator POC

This repository contains the source code for a **Credit Header Report** application. The project utilizes a combination of **Node.js**, **EJS templates**, and **custom styles** to generate a dynamic and visually appealing report interface.

---

## Features

- **Responsive UI:** Adaptive grid layout and modern styling for a seamless user experience.
- **Dynamic Content Rendering:** Data-driven rendering using EJS templates.
- **Real-time Updates:** Displays the current date dynamically with JavaScript.
- **Organized Components:**
  - Email display with clickable links.
  - Detailed sections for comprehensive reports, social security, addresses, relatives, and more.

---

## File Structure

- **`index.js`:** Main server-side script to manage data and rendering logic.
- **`index.ejs`:** Template file with embedded EJS for dynamic content rendering.
- **Styles:** Inline CSS within `index.ejs` for easy customization.

---

## Technologies Used

- **Node.js**: Backend framework for server-side operations.
- **EJS**: Templating engine for rendering dynamic HTML.
- **HTML5/CSS3**: Markup and styles for user interface.
- **JavaScript**: Client-side scripts for real-time updates.

---

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/BarcodeBimbo/Sanction-PDF.git
   cd credit-header-report
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## How It Works

- **Dynamic Rendering:** Data variables (e.g., `data.socialSecurity`, `data.addresses`) populate various sections of the report dynamically.
- **Real-Time Clock:** JavaScript updates the date in the header every second.

---

## Customization

### Updating Styles
Edit the inline `<style>` section in `index.ejs` to modify the styles.

### Adding Features
Extend the EJS template with additional sections or modify existing ones by referencing `data` variables.

---

## Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/c42e30a8-deae-4503-8522-d619a5c8eec9" alt="" height="200">
</div>


## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/BarcodeBimbo/Sanction-PDF/blob/main/LICENSE) file for details.
