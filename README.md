
# Conscious Foodie 🍽️📱

**Conscious Foodie** is a cross-platform mobile application developed using the [Ionic Framework](https://ionicframework.com/). It is designed to help users become more mindful of their grocery shopping and food consumption habits. By incorporating principles of Human-Computer Interaction and Personal Informatics, the app encourages users to reflect on their consumption patterns and promote balanced, sustainable behavior.

> **Core Idea:** Allow users to log groceries, reflect on consumption data, and gradually build healthier and more sustainable habits.

## ✨ Features

- 🛒 **Basket & Grocery Bank**: Add, manage, and cross off grocery items
- 📊 **Reflections**: View monthly, seasonal, and yearly statistics on buying habits
- 🔄 **Personal Informatics Model**:
  - Preparation: Add groceries
  - Collection: Track purchases
  - Integration: Organize and store data
  - Reflection: Visualize insights
  - Action: Adjust behavior based on stats
- 📱 **Cross-platform**: Runs on Android, iOS, and Web
- 📐 **User-Centered Design**: Built and tested through surveys, experiments, and usability studies

## 🧱 Folder Structure

```
├── android/                 # Android platform-specific files
├── ios/                    # iOS platform-specific files
├── src/                    # Source code (pages, components, services, etc.)
├── e2e/                    # End-to-end tests
├── www/                    # Compiled app output
├── node_modules/           # Project dependencies
├── typings/                # TypeScript type declarations
├── capacitor.config.json   # Capacitor configuration
├── angular.json            # Angular CLI config
├── ionic.config.json       # Ionic CLI config
├── karma.conf.js           # Unit test config
├── tsconfig*.json          # TypeScript compiler configs
├── package*.json           # Project metadata and dependencies
├── Research_Paper.pdf      # Research documentation
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 14.x
- [Ionic CLI](https://ionicframework.com/docs/cli) >= 6.x
- [Capacitor](https://capacitorjs.com/) >= 3.x
- Android Studio / Xcode for native deployment

### Installation

```bash
git clone https://github.com/your-username/conscious-foodie.git
cd conscious-foodie
npm install
```

### Run on Web

```bash
ionic serve
```

### Run on Device

```bash
ionic build
npx cap copy
npx cap open android    # or ios
```

## 🧪 Testing

Run unit tests:

```bash
ng test
```

Run end-to-end tests:

```bash
ng e2e
```

## 📄 Research & Design

Refer to [`Research_Paper.pdf`](./Research_Paper.pdf) for the full methodology, literature references, and design rationale behind the app. Includes:

- HCI foundation and personal informatics theory
- Stage-based model for behavior change
- UI/UX experimentation and evaluation
- Survey results and data analysis

## 📈 Future Work

- Add nutritional and environmental metrics
- Implement expense tracking and bill scanning
- Smarter inventory tracking and suggestion system
- Advanced reflection visualizations
- UI refinement based on A/B testing

## 👥 Authors

- Asterios Nastas
- Efstathios Alex Voinas
- Pranjal Garg

## 📜 License

This project is for academic and research purposes. Contact the authors for further collaboration or licensing discussions.
