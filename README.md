# Countdown Timer

A lightweight, privacy-minded countdown app made for clarity and speed. Enter a target date and get a clear countdown in days, hours, minutes, and seconds. The interface is intentionally minimal: no ads, no analytics, and no unnecessary features — just the information you need. Ideal for event timers, personal goals, deadlines, and quick embeds on static pages.

## Static PNG view

Add `png=1` to a URL that includes a `date` parameter to display the countdown as a PNG image. This view is static, omits seconds, and is generated when the page loads.

```text
/?date=2030-12-31T23%3A59%3A59.000Z&png=1
```

## 🔧 Development Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/thiagofeijodev/countdown.git
   cd countdown
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## 🧪 Running Tests

To execute the test suite:

```bash
npm test
```

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized assets will be available in the `dist/` directory.

## 🌐 Deployment

This portfolio is deployed using GitHub Pages. After pushing changes to the `main` branch, GitHub Pages will automatically update the live site.

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

## 📬 Contact

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/thiagofeijodev).

---
