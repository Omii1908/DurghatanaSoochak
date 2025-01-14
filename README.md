# Atindriyajñānam

**Atindriyajñānam** ("Knowledge Beyond the Senses") is an advanced accident detection system designed to enhance road safety by utilizing smartphone sensors. The system gathers real-time data such as location, speed, and other critical parameters from the device, processes it with a Long Short-Term Memory (LSTM) model, and determines whether an accident has occurred. Additionally, it identifies if the area is accident-prone based on historical data and patterns.

## Features

- **Accident Detection**: Leverages LSTM deep learning models to analyze sensor data for detecting accidents with high accuracy.
- **Accident-Prone Area Detection**: Evaluates location data to determine whether the area is identified as high-risk based on historical data.
- **Real-Time Data Collection**: Captures essential data such as GPS location, speed, and accelerometer readings from smartphone sensors.
- **User-Friendly Interface**: A React Native-based interface for seamless interaction and real-time updates.
- **Cross-Platform Compatibility**: Designed to work on both Android and iOS devices.

## Technology Stack

### Backend
- **Python**: Core language for building the LSTM model.
- **TensorFlow/Keras**: Framework for developing and training the LSTM model.
- **Flask** or **FastAPI**: To serve the model as an API (optional).

### Frontend
- **React Native**: For the user interface, including data collection from device sensors.

### Data Sources
- Smartphone sensors: GPS, accelerometer, gyroscope, etc.

## Architecture
1. **Data Collection**:
   - The React Native app collects data from smartphone sensors in real time.
2. **Data Transmission**:
   - Sensor data is sent to the backend for processing.
3. **Processing and Detection**:
   - The Python-based LSTM model analyzes the data to detect potential accidents and identifies accident-prone zones.
4. **Notifications**:
   - Alerts are sent to the user and emergency contacts when an accident is detected.

## Setup Instructions

### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/Omii1908/Atindriyajnanam.git
   cd Atindriyajnanam/backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Train the LSTM model (if required) or use the pre-trained model provided in the repository.
5. Run the backend server:
   ```bash
   python app.py
   ```

### Frontend
1. Navigate to the React Native project directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React Native app:
   ```bash
   npm start
   ```
4. Test the app on an emulator or a physical device.

## Folder Structure
```
Atindriyajnanam/
├── backend/
│   ├── models/               # LSTM model and training scripts
│   ├── data/                 # Sample datasets
│   ├── app.py                # Backend server script
│   └── requirements.txt      # Python dependencies
├── frontend/
│   ├── src/                  # React Native source files
│   ├── App.js                # Entry point of the app
│   ├── package.json          # Node.js dependencies
│   └── assets/               # Static assets
└── README.md                 # Project documentation
```

## How It Works
1. **Data Input**:
   - The app continuously gathers location and sensor data in the background.
2. **Model Analysis**:
   - The backend LSTM model processes the data to detect anomalies indicating potential accidents.
3. **Output**:
   - Accident alerts and location risk assessments are displayed on the app interface.

## Contributions
Contributions are welcome! Please submit a pull request or raise an issue to report bugs or suggest features.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Inspired by advancements in AI and sensor technology for road safety.
- Built with the support of open-source tools and libraries.

## Contact
For any inquiries, reach out to **Om Prakash Kumar** at [Omil844198@gmail.com](mailto:Omil844198@gmail.com).
