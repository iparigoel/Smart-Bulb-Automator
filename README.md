# 💡 Smart Bulb Automator

An AI-powered smart bulb automation system that allows users to control a UDP-based smart bulb using natural language commands through an intelligent agent.

---

## 🚀 Features

* 🤖 AI agent-based control via chat
* 💡 Turn bulb ON/OFF using simple commands
* 🎨 Change bulb color using RGB values
* 🔅 Control brightness using dimming parameter
* 🌐 UDP-based communication with smart bulb server
* ⚡ Real-time device control

---

## 🛠️ Tech Stack

* TypeScript
* Node.js
* UDP Networking
* Cursor MCP Server (Agent framework)

---

## 📂 Project Structure

```bash id="k2m9pz"
Smart-Bulb-Automator/
│
├── src/
│   ├── service.ts
│   └── index.ts         # Entry point
│
├──.gitignore
├── pnpm-lock.yaml
├── package.json
├──README.md
└── tsconfig.json

```

---

## ⚙️ How It Works

* The smart bulb is connected to a server using the **UDP protocol**
* Each bulb is identified via its **IP address**
* A custom **MCP server** acts as an intelligent agent
* The agent interprets user commands and triggers appropriate actions:

  * Turn bulb ON
  * Turn bulb OFF
  * Change bulb color (RGB + dimming)

---

## 🔧 Available Functionalities

### 1. Turn Bulb ON

```bash id="7z8m1x"
Command: "Turn on the light"
```

### 2. Turn Bulb OFF

```bash id="0r5k2v"
Command: "Turn off the light"
```

### 3. Change Bulb Color

```bash id="l8n3q1"
Command: "Set color to red=255, green=100, blue=50 with dimming=70"
```

**Parameters:**

* `red` (0–255)
* `green` (0–255)
* `blue` (0–255)
* `dimming` (0–100)

---

## ▶️ Running the Project

```bash id="a6d2fp"
npm install
npm run start
```

---

## 💡 Example Usage

```bash id="m9v3qt"
>> Turn on the bulb
>> Set color to blue with low brightness
>> Turn off the light
```

---

## 📌 Future Improvements

* Voice-based control
* Mobile app integration
* Multiple device support
* Scene presets (reading, night mode, etc.)
* Home automation system integration

---

## 🤝 Contributing

Contributions are welcome!

---

## 📄 License

MIT License
